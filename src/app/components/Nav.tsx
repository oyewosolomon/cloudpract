"use client"

import React, { useEffect } from 'react';

import { gsap } from 'gsap';
import Link from 'next/link';

const Nav = () => {


  useEffect(() => {
    const header = document.querySelector('header');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(header, {
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth:'50rem',
          top: '0px', // Move header to top when scrolling down
          duration: 0.3,
        });
      } else {
        gsap.to(header, {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          maxWidth:'72rem',
          top: '20px', // Move header back to 10px when at the top
          duration: 0.3,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <header className="fixed top-10 left-1/2 bg-white transform -translate-x-1/2 w-full max-w-6xl z-50 flex justify-between border mx-auto items-center py-2 px-5 rounded-3xl">
      <div className="flex items-center">
        <Link href="/" className="text-red-700 text-2xl font-bold">
          <img src="../assets/logo.svg" width={50} height={50} alt="Logo" />
        </Link>
      </div>

      <nav className="hidden md:block">
        <ul className="flex space-x-10">
          <li><Link href="/" className="text-red-600 font-semibold">Home</Link></li>
          <li><Link href="/#aboutus" className="text-gray-600 hover:text-red-600">About us</Link></li>
          <li><Link href="/cloud" className="text-gray-600 hover:text-red-600">Courses</Link></li>
          <li>
            <Link
              href="/#contactus"
              className="bg-red-500 hover:bg-red-600 text-sm font-semibold rounded-2xl py-2 px-5 text-white hover:text-gray-300"
            >
              Enroll Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
