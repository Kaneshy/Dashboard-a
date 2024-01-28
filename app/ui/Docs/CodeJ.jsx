'use client'
import { useRef, useState } from 'react'
import { IoCopyOutline } from "react-icons/io5";




const CodeJ = ({ value, indexh }) => {

    const [copyButton, setcopyButton] = useState(false)
    const textRef = useRef(null);

    const handleCopy = async (e) => {
        const test = document.getElementById(e).textContent
        console.log('df', test)
        // Seleccionar el texto del elemento <p>
        const text = textRef.current.textContent;
        // Copiar el texto al portapapeles
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Texto copiado al portapapeles')
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles:', err)
            })

        // Deseleccionar el texto después de copiar
        window.getSelection().removeAllRanges();
    };

    return (
        <section className='flex flex-col gap-y-4'>
            <h1>{value.title}</h1>
            <div onMouseEnter={() => setcopyButton(true)} onMouseLeave={() => setcopyButton(false)}
                className='bg-black p-4 rounded-lg flex gap-x-8 justify-between'>
                <pre>
                    <code className='flex gap-x-4 '>
                        GET: <p id={indexh} ref={textRef}>{value.link}</p>
                    </code>
                </pre>
                <button className='flex gap-1  text-neutral-500 hover:text-white items-center' 
                onClick={() => handleCopy(indexh)}>
                    <IoCopyOutline  size={15} />
                </button>
            </div>
        </section>
    )
}

export default CodeJ