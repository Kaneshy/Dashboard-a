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

const UploadPage = () => {
    const [img, setImg] = useState(undefined);
    const [video, setVideo] = useState(undefined);
    const [imgPerc, setImgPerc] = useState(0);
    const [videoPerc, setVideoPerc] = useState(0);
    const [inputs, setInputs] = useState({});
    const [tags, setTags] = useState([]);
    const router = useRouter()
    const [chooseValue, setChooseValue] = useState('passive')
    const [adminValue, setAdminValue] = useState(false)
    
    const handleChange = (e) => {
        setInputs((prev) => {
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
                    setInputs((prev) => {
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
            action: chooseValue,
        }
        const data = {...adminB, ...inputs}
        console.log(data)

        try {
            const res = await axios.post("/api/providers", { ...data})
            console.log('upload status', res.data)

            if (res.status === 200) {
                router.push(`/dashboard/providers`);
            }

        } catch (error) {
            console.log('ddd', error.message)
        }
    }



    return (
        <main>
            <div className="max-w-xl mx-auto mt-4 p-4 bg-neutral-900 rounded-lg">
                <h1 className='text-center  font-bold text-2xl text-white border-a1 pb-2 mb-6 '>Upload </h1>


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
                    <label htmlFor="marca" className="text-small-semibold block text-gray-400 font-bold mb-2 ">brand (required): </label>
                    <input type="text" id="brand" name='brand' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="email" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Email (required): </label>
                    <input type="email" id="email" name='email' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="phone" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Phone (required): </label>
                    <input type="text" id="phone" name='phone' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="address" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Address (required): </label>
                    <input type="text" id="address" name='address' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="manager" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Manager (required): </label>
                    <input type="text" id="manager" name='manager' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="website" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Website: </label>
                    <input type="text" id="website" name='website' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>

                <div className="mb-4 items-center border-gray-500 border p-2 w-full">
                    <label htmlFor="choose" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Action (required): </label>
                    <select name='choose' className="border w-full border-gray-300 bg-neutral-900 text-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        value={chooseValue} onChange={(e)=>setChooseValue(e.target.value)}  
                    >
                        <option value="passive" >passive</option>
                        <option value="active" >active</option>
                    </select>
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="description" className="text-small-semibold block text-gray-400 font-bold mb-2">Description:</label>
                    <textarea id="description" name='desc' onChange={handleChange} className="border-gray-500 border rounded bg-neutral-900 p-2 w-full h-24 text-white"></textarea>
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

export default UploadPage