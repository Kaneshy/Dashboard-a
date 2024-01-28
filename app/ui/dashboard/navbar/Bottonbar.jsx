"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { bottonbarPages, bottonbarSettings } from "@/constants/bottombar";
import { useState } from "react";

function Bottombar() {
    const pathname = usePathname();
    const [isActive, setisActive] = useState(false)

    return (
        <section className='bottombar select-none'>
            <div className='bottombar_container'>
                {bottonbarPages.map((link) => {
                    const isActive =
                        (pathname.includes(link.route) && link.route.length > 1) ||
                        pathname === link.route;

                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`bottombar_link ${isActive && 'bg-green-900 border-l-2 border-green-400 '}`}
                        >
                            {link.iconReact}

                            <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                                {link.label.split(/\s+/)[0]}
                            </p>
                        </Link>
                    );
                })}


                <div className="relative px-4 ">
                    <div className={`max-lg:flex bottombar_link hidden  ${isActive && 'bg-neutral-900 rounded'}`} onClick={() => setisActive(!isActive)}>
                        {isActive ? (
                            <>
                                <RiMenu3Fill size={25} className="text-neutral-400 hover:text-neutral-200" />
                                <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                                    Settings
                                </p>
                            </>

                        ) : (
                            <>
                                <FiMenu size={25} className="text-neutral-400 hover:text-neutral-200" />
                                <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                                    Settings
                                </p>
                            </>
                        )}
                    </div>
                    {isActive && (
                        <div className=" absolute w-60  bottom-16 right-10  bg-neutral-900 p-4 rounded flex-col gap-y-2">
                            {bottonbarSettings.map((link) => {
                                const isActive = (pathname.includes(link.label) && link.route.length > 1)// || pathname === link.route
                                return (
                                    <Link
                                        href={`${link.route}/${link.label}`}
                                        key={link.label}
                                        className={`leftsidebar_link  ${isActive && 'bg-primary-500'}`}
                                    >
                                        {link.iconReact}

                                        <p className={`text-light-1  px-4 `}>{link.label}</p>
                                    </Link>
                                )
                            })}
                        </div>
                    )}

                </div>


            </div>
        </section>
    );
}

export default Bottombar;