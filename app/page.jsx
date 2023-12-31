import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen flex-col align-middle">
      <Link href='/login' className='p-4 rounded-xl bg-blue-3'>Login</Link>
    </main>
  )
}
