
const Card1 =  ({valuesH, titleH}) => {

  return (
    <main className='p-4 flex rounded-xl bg-blue-main'>
        <section>
            <img src="" alt="" />
        </section>
        <section className='flex flex-col'>
            <p>{titleH}</p>
            <p>{valuesH}</p>
            <div className='flex gap-x-2'>
                <p className=' text-green-600'>12% </p>
                <p>sectionghd</p>
            </div>
        </section>
    </main>
  )
}

export default Card1