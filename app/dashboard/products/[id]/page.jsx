'use client'
import React, { useEffect, useState } from "react";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "@/firebase";
import axios from "axios";
import { useRouter } from "next/navigation";
import { prendas, sizes } from "@/constants/Prendas";

const UploadProductsPage = ({params}) => {
    const [img, setImg] = useState(undefined);
    const [video, setVideo] = useState(undefined);
    const [imgPerc, setImgPerc] = useState(0);
    const [videoPerc, setVideoPerc] = useState(0);
    const [inputs, setInputs] = useState({});
    const [tags, setTags] = useState([]);
    const router = useRouter()
    const [chooseValue, setChooseValue] = useState('passive')
    const [adminValue, setAdminValue] = useState(false)

    const [selectedClothing, setSelectedClothing] = useState([]);
    const [selectedSize, setselectedSize] = useState([]);

    const [preValue, setPreValue] = useState({})
    
    const handleChange = (e) => {
        setPreValue((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };


    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);

        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;

                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setPreValue((prev) => {
                        return { ...prev, [urlType]: downloadURL };
                    });
                });
            }
        );
    };

    useEffect(() => {
        video && uploadFile(video, "videoUrl");
    }, [video]);

    useEffect(() => {
        img && uploadFile(img, "imgUrl");
    }, [img]);

    const handleUpload = async (e) => {
        e.preventDefault();
        const adminB = {
            categorie: adminValue,
        }
        const data = {...adminB, ...preValue, selectedClothing, selectedSize}
        console.log(data)

        try {
            const res = await axios.put(`/api/product/${params.id}`, { ...data })
            console.log('upload status', res.data)

            if (res.status === 200) {
                console.log(res.status)
                router.push('/dashboard/products')
                // router.push(`/dashboard/products`);
            }

        } catch (error) {
            console.log('ddd', error.message)
        }
    }

    useEffect(() => {
        const updatedproduct = async () => {
            const resUp = await axios.get(`/api/product/${params.id}`)
            if(resUp.status === 200){
                setPreValue(resUp.data)
            }
            console.log('eagle', resUp.data)
            console.log('dd', resUp.data.address)
            setSelectedClothing(resUp.data.selectedClothing)
            setselectedSize(resUp.data.selectedSize)
            
            
        }
        updatedproduct()
    }, [])

    
    const handleClothingSelection = (clothing) => {
        if (selectedClothing.includes(clothing)) {
            // Si la prenda ya está seleccionada, la quitamos de la selección
            setSelectedClothing(selectedClothing.filter(item => item !== clothing));
        } else {
            // Si la prenda no está seleccionada, la añadimos a la selección
            setSelectedClothing([...selectedClothing, clothing]);
        }
    }

    const handleSizeSelection = (clothing) => {
        if (selectedSize.includes(clothing)) {
            // Si la prenda ya está seleccionada, la quitamos de la selección
            setselectedSize(selectedSize.filter(item => item !== clothing));
        } else {
            // Si la prenda no está seleccionada, la añadimos a la selección
            setselectedSize([...selectedSize, clothing]);
        }
    }



    return (
        <main>
            <div className="max-w-xl mx-auto mt-4 p-4 bg-neutral-900 rounded-lg">
                <h1 className='text-center  font-bold text-2xl text-white border-a1 pb-2 mb-6 '>Upload your video </h1>
                <section className="w-full bg-neutral-950 rounded-2xl items-center flex justify-center mb-4">
                    <div className="h-96 flex ">
                        <img className="object-contain flex" src={preValue.imgUrl} alt="" />
                    </div>
                </section>

                <div className="mb-4">
                    <label htmlFor="thumbnail" className=" text-gray-400 justify-around gap-x-2 font-bold mb-2 flex  ">
                        <p className="text-small-semibold"> Select thumbnail here</p>
                        <div className="bg-blue-2 text-small-semibold text-white p-2 rounded-xl hover:bg-blue-3  ">Select form computer</div>
                    </label>
                    {imgPerc > 0 ? ('Uploading ' + imgPerc + '%') : (
                        <input type="file" id="thumbnail" onChange={(e) => setImg(e.target.files[0])} className="border-gray-300 hidden" />
                    )}
                </div>
                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="title" className="text-small-semibold block text-gray-400 font-bold mb-2 ">title (required): </label>
                    <input type="text" id="title" name='title' value={preValue.title} onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>
                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="price" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Price (required): </label>
                    <input type="number" id="price" name='price' value={preValue.price}  onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="color" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Color (required): </label>
                    <input type="text" id="color" name='color'  value={preValue.color} onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="stock" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Stock (required): </label>
                    <input type="number" id="stock" name='stock'  value={preValue.stock} onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="brand" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Brand (Marca): </label>
                    <input type="text" id="brand" name='brand'  value={preValue.brand} onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>
                <div className="mb-4 items-center border-gray-500 border p-2 w-full">
                    <label htmlFor="categorie" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Sex: </label>
                    <select name='categorie' className="border w-full border-gray-300 bg-neutral-900 text-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                    value={preValue.sex} onChange={(e)=>setAdminValue(e.target.value)}
                    >
                        <option value="unisex" >unisex</option>
                        <option value="male" >male</option>
                        <option value="female" >female</option>
                        <option value="kids" >kids</option>
                        <option value="jewelry" >jewelry</option>
                        <option value="accessories" >accessories</option>
                    </select>
                </div>

                <section className="mb-4 border-gray-500 border p-2 w-full">
                    <div className="mb-4 border-gray-500 border p-2 w-full">
                        <h3>Categorie:</h3>
                    </div>
                    <div className="mb-4  border-gray-500 border  p-2 w-full">
                        <div className="gap-2 p-2">
                            {selectedClothing.map((item, index) => (
                                <button
                                    style={{ margin: '5px' }}
                                    onClick={() => handleClothingSelection(item)}
                                    className="p-2 rounded bg-slate-600" key={`${index * 5}`}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4 border-gray-500 border   p-2 w-full">
                        <div>
                            {prendas.map((clothing, index) => (
                                <button
                                    key={`${index * 8}`}
                                    style={{ margin: '5px' }}
                                    onClick={() => handleClothingSelection(clothing)}
                                    className={selectedClothing.includes(clothing) ? 'selected' : ''}
                                >
                                    <p className="p-2 rounded bg-slate-700">{clothing}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mb-4 border-gray-500 border p-2 w-full">
                    <div className="mb-4 border-gray-500 border p-2 w-full">
                        <h3>Size:</h3>
                    </div>
                    <div className="mb-4  border-gray-500 border  p-2 w-full">
                        <div className="gap-2 p-2">
                            {selectedSize.map((item, index) => (
                                <button
                                    style={{ margin: '5px' }}
                                    onClick={() => handleSizeSelection(item)}
                                    className="p-2 rounded bg-slate-600" key={`${index * 2}`}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4 border-gray-500 border   p-2 w-full">
                        <div>
                            {sizes.map((clothing, index) => (
                                <button
                                    key={`${index * 9}`}
                                    style={{ margin: '5px' }}
                                    onClick={() => handleSizeSelection(clothing)}
                                    className={selectedSize.includes(clothing) ? 'selected' : ''}
                                >
                                    <p className="p-2 rounded bg-slate-700">{clothing}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="description" className="text-small-semibold block text-gray-400 font-bold mb-2">Description:</label>
                    <textarea id="description" name='desc'  value={preValue.desc}  onChange={handleChange} className="border-gray-500 border rounded bg-neutral-900 p-2 w-full h-24 text-white"></textarea>
                </div>
                <button

                    className="bg-blue-1 w-full hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                    onClick={handleUpload}
                >
                    Submit
                </button>
            </div>
        </main>
    )
}

export default UploadProductsPage