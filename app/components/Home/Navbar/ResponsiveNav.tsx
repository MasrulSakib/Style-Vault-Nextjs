'use client';
import React, { useState } from 'react'
import Navbar from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

    const [openNav, setOpenNav] = useState(false)

    const openNavHandlar = () => setOpenNav(true);
    const closeNavHandlar = () => setOpenNav(false);

    return (
        <div>
            <Navbar openNav={openNavHandlar} ></Navbar>
            <MobileNav showNav={openNav} closeNav={closeNavHandlar}></MobileNav>
        </div>
    )
}

export default ResponsiveNav