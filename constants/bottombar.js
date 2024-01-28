import { MdDashboardCustomize } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { AiFillAmazonCircle } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { FaNodeJs } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";

export const bottonbarPages = [
    {
        route: "/dashboard",
        label: "Dashboard",
        iconReact: <MdDashboardCustomize size={24} />
    },
    {
        route: "/dashboard/users",
        label: "Users",
        iconReact: <AiFillAmazonCircle size={24} />

    },
    {
        route: "/dashboard/products",
        label: "Products",
        iconReact: <LuShoppingBag   size={24} />

    },
    {
        route: "/dashboard/providers",
        label: "Suppliers",
        iconReact: <FaUserFriends  size={24} />

    }
]

export const bottonbarSettings = [
    {
        route: "/settings",
        label: "API",
        iconReact: <FaNodeJs  size={24} />

    },
    {
        route: "/Help",
        label: "Help",
        iconReact: <IoMdHelpCircleOutline  size={24} />

    }
]