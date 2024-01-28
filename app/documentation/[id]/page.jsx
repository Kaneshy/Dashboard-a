'use client'
import CodeJ from '@/app/ui/Docs/CodeJ';
import { products, analytics } from '@/constants/docs';
import { useEffect, useState } from 'react';


const DocsPage = ({params}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        // Convertir params.id a número

        // Seleccionar el array correcto según el rango de años
        let selectedArray = [];

        switch (params.id) {
            case 'products':
                selectedArray = products;
                break;
            case 'analytics':
                selectedArray = analytics;
                break;
            default:
                // Manejar el caso en el que el año no está en el rango esperado
                break;
        }

        // Hacer algo con el array seleccionado (por ejemplo, establecerlo en el estado)
        setData(selectedArray);
    }, [params.id]);

    return (
        <main className='p-6 flex flex-col gap-y-4'>
            <h1 className='text-heading1-bold'>Inventory</h1>

            {data.map((x, index) => {
                return (
                   <CodeJ value={x} indexh={index} key={index}/>
                )
            })}

        </main>
    )
}

export default DocsPage