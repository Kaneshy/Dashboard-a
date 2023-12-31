import Navbar from "../ui/dashboard/navbar/Navbar"
import Sidebar from "../ui/dashboard/sidebar/Sidebar"


export const metadata = {
    title: 'Dashboard',
    description: 'information Admin',
}

export default function DashboardLayout({ children }) {
    return (
        <main className="flex flex-row">
            <Sidebar />
            <div className="w-full p-4">
                <Navbar />
                {children}
            </div>

        </main>

    )
}
