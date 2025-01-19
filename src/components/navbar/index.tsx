'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

import casteliniLogo from '../../../public/images/logos/castelini-logo.png';
import { INavLink, NavLink } from './internal-components/navbar-link';

export const navLinks: INavLink[] = [
    { href: "/home", label: "Início" },
    { href: "/about", label: "Sobre" },
    { href: "/contact", label: "Contato" },
    { href: "/our-stores", label: "Nossas Lojas" },
    { href: "/work-with-us", label: "Trabalhe Conosco" },
];

export const Navbar = () => {
    const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false)

    return (
        <>
            <header className='bg-white sticky top-0 z-40 shadow-lg mx-auto flex w-full items-center justify-between p-2'>
                <section className='w-[95%] md:w-[80%] mx-auto flex items-center justify-between'>
                    <Link href="/home" className='cursor-pointer'>
                        <Image src={casteliniLogo} alt='logo castelini' className='w-28 md:w-40' />
                    </Link>

                    <nav className='hidden lg:flex'>
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href} label={link.label} />
                        ))}
                    </nav>

                    <button
                        onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}
                        className="text-primary-red text-2xl focus:outline-none lg:hidden"
                    >
                        {mobileNavIsOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </section>
            </header>

            {/* Overlay */}
            {mobileNavIsOpen && (
                <div
                    onClick={() => setMobileNavIsOpen(false)} // Fecha o menu ao clicar no overlay
                    className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
                />
            )}

            {/* Aside (Menu lateral fixo) */}
            <aside
                className={`bg-white z-30 h-full w-[280px] fixed top-0 left-0 transition-transform lg:hidden ${mobileNavIsOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <nav className='mt-20'>
                    {navLinks.map((link) => (
                        <div key={link.href} onClick={() => setMobileNavIsOpen(false)}>
                            <NavLink href={link.href} label={link.label} />
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
}



