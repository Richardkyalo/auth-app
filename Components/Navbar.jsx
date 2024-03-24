import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="px-4 mx-auto lg:max-w-7xl">
          <div className="flex justify-between items-center py-3">
            {/* LOGO */}
            <Link href="/">
              <h2 className="text-2xl text-green-600 font-bold cursor-pointer">SANDBOX</h2>
            </Link>
            {/* MENU ITEMS */}
            <div className={`hidden md:flex items-center space-x-4 ${navbar ? 'block' : 'hidden'}`}>
              <ul className="flex space-x-4">
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="services" smooth={true} duration={1000} onClick={toggleNavbar}>Services</ScrollLink>
                </li>
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="technology" smooth={true} duration={1000} onClick={toggleNavbar}>Technologies</ScrollLink>
                </li>
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="portfolio" smooth={true} duration={1000} onClick={toggleNavbar}>Portfolio</ScrollLink>
                </li>
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="testimonials" smooth={true} duration={1000} onClick={toggleNavbar}>Testimonials</ScrollLink>
                </li>
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="blog" smooth={true} duration={1000} onClick={toggleNavbar}>Blog</ScrollLink>
                </li>
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="about" smooth={true} duration={1000} onClick={toggleNavbar}>About</ScrollLink>
                </li>
                <li className='hover:text-green-500 cursor-pointer'>
                  <ScrollLink to="contact" smooth={true} duration={1000} onClick={toggleNavbar}>Contacts</ScrollLink>
                </li>
              </ul>
              <a href="/login" className="p-2 px-4 rounded-full bg-green-500 text-sm text-white hover:text-white hover:bg-green-600" onClick={toggleNavbar}>Sign in</a>
            </div>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button className="p-2 text-green-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={toggleNavbar}>
                {navbar ? (
                  <Image src="/images/close.png" width={30} height={30} alt="Close" />
                ) : (
                  <Image src="/images/hamburger-menu.png" width={30} height={30} alt="Menu" className="focus:border-none active:border-none" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* COLLAPSED NAVBAR FOR MOBILE */}
        <div className={`px-4 md:hidden ${navbar ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col text-center space-y-4">
            <li className='hover:text-green-500 cursor-pointer'>
              <ScrollLink to="services" smooth={true} duration={1000} onClick={toggleNavbar}>Services</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer'>
              <ScrollLink to="technology" smooth={true} duration={1000} onClick={toggleNavbar}>Technologies</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer'>
              <ScrollLink to="portfolio" smooth={true} duration={1000} onClick={toggleNavbar}>Portfolio</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer'>
              <ScrollLink to="testimonials" smooth={true} duration={1000} onClick={toggleNavbar}>Testimonials</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer'>
              <ScrollLink to="blog" smooth={true} duration={1000} onClick={toggleNavbar}>Blog</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer'>
              <ScrollLink to="about" smooth={true} duration={1000} onClick={toggleNavbar}>About</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer'>
              <ScrollLink to="contact" smooth={true} duration={1000} onClick={toggleNavbar}>Contacts</ScrollLink>
            </li>
            <li className='hover:text-green-500 cursor-pointer'>
              <a href="/login" className="p-2 px-4 rounded-full bg-green-500 text-sm text-white hover:text-white hover:bg-green-600" onClick={toggleNavbar}>Sign in</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
