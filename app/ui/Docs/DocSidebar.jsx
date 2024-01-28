import { pagesDocs } from '@/constants/docs'
import Link from 'next/link'
import React from 'react'

const DocSidebar = ({ params }) => {
    return (
        <main className='select-none overflow-y-scroll flex flex-col gap-6 custom-scrollbar min-w-fit px-10  min-h-screen p-4  border-r border-neutral-700'>
            {pagesDocs.map((x, index) => {
                return (
                    <section key={index} className='flex flex-col gap-4'>
                        <p className='t text-body-bold'>{x.title}</p>

                        <div className='text-small-semibold text-neutral-400  flex flex-col gap-4'>
                            {x.categories.map((y, index) => {
                                return (
                                    <Link key={index + 'y'} className='hover:text-white' href={y.route} >{y.label}</Link>
                                )
                            })}
                        </div>
                    </section>
                )
            })}

        </main>
    )
}

export default DocSidebar