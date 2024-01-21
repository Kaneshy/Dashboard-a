import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex select-none items-center justify-center h-screen flex-col align-middle">
      <Link href='/dashboard' className='p-4 rounded btn-green text-black'>Get Started</Link>
    </main>
  )
}
