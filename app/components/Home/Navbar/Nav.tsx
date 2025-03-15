'use client'

import { NavLinks } from '@/app/constant/Constant'
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { SiStylelint } from 'react-icons/si'
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'

type Props = {
    openNav: () => void;
}
const Navbar = ({ openNav }: Props) => {
    const [navbg, setNavbg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavbg(true);
            }
            if (window.scrollY < 90) {
                setNavbg(false);
            }
        };
        window.addEventListener('scroll', handler);

    }, [])


    return (
        <div className={`flex justify-between items-center ${navbg ? 'bg-white shadow-lg shadow-blue-200' : 'fixed]'}
         transition-all duration-200 h-[12vh] px-4 lg:px-10 fixed top-0 w-full z-[100]`}>
            {/* Logo */}
            <div className='flex items-center h-full space-x-3'>
                <div className='w-10 h-10 bg-blue-800 rounded-full flex justify-center items-center flex-col'>
                    <SiStylelint className='w-6 h-6 text-white'></SiStylelint>
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl text-blue-800 font-semibold'>StyleVault</h1>
            </div>
            {/* NavLinks */}
            <div className='hidden lg:flex justify-center items-center gap-4'>
                {
                    NavLinks.map(link => {
                        return (
                            <ScrollLink
                                to={link.target}
                                smooth
                                spy
                                activeClass='active'
                                key={link.id}
                                href={link.href}
                                className='hover:text-blue-800 font-bold cursor-pointer'
                            >
                                {link.labal}
                            </ScrollLink>
                        )
                    })
                }
            </div>
            {/* Button */}
            <div className='flex gap-5 justify-center items-center'>

                <SignedOut>
                    <SignInButton mode="modal">
                        <Link href="#_" className="group">
                            <button className="relative px-5 py-3 overflow-hidden font-medium text-black bg-blue-100 border border-blue-100 rounded-lg shadow-inner">
                                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-600 group-hover:w-full ease"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-600 group-hover:w-full ease"></span>
                                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"></span>
                                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-900 opacity-0 group-hover:opacity-100"></span>
                                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                                    Sign In
                                </span>
                            </button>
                        </Link>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <SignOutButton>
                        <Link href="#_" className="group">
                            <button className="relative px-5 py-3 overflow-hidden font-medium text-black bg-blue-100 border border-blue-100 rounded-lg shadow-inner">
                                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-600 group-hover:w-full ease"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-600 group-hover:w-full ease"></span>
                                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"></span>
                                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-900 opacity-0 group-hover:opacity-100"></span>
                                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                                    Sign Out
                                </span>
                            </button>
                        </Link>
                    </SignOutButton>
                </SignedIn>

                {/* Hamburger Menu */}
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden'></HiBars3BottomRight>
            </div>
        </div>
    )
}

export default Navbar