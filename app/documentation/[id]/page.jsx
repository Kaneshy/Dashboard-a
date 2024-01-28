'use client'
import { useRef, useState } from 'react'

const page = () => {
    const [copyButton, setcopyButton] = useState(false)
    const textRef = useRef(null);

    const handleCopy = async () => {
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
        <main className='p-6 flex flex-col gap-y-4'>
            <h1 className='text-heading1-bold'>Inventory</h1>
            <section className='flex flex-col gap-y-4'>
                <p >Total inventory value: </p>

                <div onMouseEnter={() => setcopyButton(true)} onMouseLeave={() => setcopyButton(false)}
                    className='bg-black p-4 rounded-lg flex gap-x-8'>
                    <pre>
                        <code className='flex gap-x-4'>
                            GET: <p ref={textRef}>http://localhost3000/api/product/[id]</p>
                        </code>
                    </pre>
                    <button className={`${copyButton ? ' block' : 'hidden'}`} onClick={handleCopy}>copy icon</button>
                </div>
            </section>
        </main>
    )
}

export default page