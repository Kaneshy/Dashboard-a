import { MdDashboardCustomize } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { AiFillAmazonCircle } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { FaNodeJs } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";





export const leftsidebarPages = [
    {
        route: "/dashboard",
        label: "Dashboard",
        iconReact: <MdDashboardCustomize size={30} />
    },
    {
        route: "/dashboard/Analytics",
        label: "Analytics",
        iconReact: <IoAnalyticsSharp size={30} />
    }
]

export const leftsidebarAnalytics = [
    {
        route: "/dashboard/users",
        label: "Users",
        iconReact: <AiFillAmazonCircle size={30} />

    },
    {
        route: "/dashboard/products",
        label: "Products",
        iconReact: <LuShoppingBag   size={30} />

    },
    {
        route: "/dashboard/providers",
        label: "Suppliers",
        iconReact: <FaUserFriends  size={30} />

    }
]

export const leftsidebarUser = [
    {
        route: "/settings",
        label: "API",
        iconReact: <FaNodeJs  size={30} />

    },
    {
        route: "/Help",
        label: "Help",
        iconReact: <IoMdHelpCircleOutline  size={30} />

    }
]