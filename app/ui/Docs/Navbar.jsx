import Link from "next/link"

const Navbar = () => {
  return (
    <section className="w-full p-6 flex justify-between">
        <h1>Documentation</h1>
        <Link className="text-neutral-400 hover:text-white" href={'/dashboard'}>back to Dashboard</Link>
    </section>
  )
}

export default Navbar