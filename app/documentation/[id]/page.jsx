'use client'
import CodeJ from '@/app/ui/Docs/CodeJ';
import { codeLinks } from '@/constants/docs';
import { useRef, useState } from 'react'


const DocsPage = () => {
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
        <main className='p-6 flex flex-col gap-y-4'>
            <h1 className='text-heading1-bold'>Inventory</h1>

            {codeLinks.map((x, index) => {
                return (
                   <CodeJ value={x} indexh={index} key={index}/>
                )
            })}

        </main>
    )
}

export default DocsPage