'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menu from '../../../public/assets/menu.png';
import close from '../../../public/assets/close.png';

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="border-white border-b w-full fixed top-0 left-0 px-6 py-2 lg:px-16 lg:py-2 z-50">
      <div className="flex items-center justify-between space-x-2 md:space-x-10">
        <div>
          <Link href="/">
            <h2 className="logo font-bold text-white text-xl md:text-4xl cursor-pointer">
              Kilele
            </h2>
          </Link>
        </div>

        <ul className="ml-auto hidden md:flex">
          <li className="space-x-11">
            <Link href="/about" aria-label="About" className="navLink">
              About
            </Link>
            <Link href="/gallery" aria-label="Gallery" className="navLink">
              Gallery
            </Link>
            <Link href="/rooms" aria-label="Rooms" className="navLink">
              Rooms
            </Link>
            <Link href="/contact" aria-label="Contact" className="navLink">
              Contact
            </Link>
          </li>
        </ul>
        <div className="border-white border-l">
          <button
            className="btn text-white hover:bg-[#81642d] "
            aria-label="Book Now">
            Book Now
          </button>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } min-w-[140px] absolute top-20 mx-4 p-6 rounded sidebar bg-black flex-col `}>
            <ul >
              <li className=" flex flex-col justify-center items-center gap-8 text-[16px] text-white mb-10 cursor-pointer letterSpacing-wide ">
                <Link href="/about" aria-label="About" >
                  About
                </Link>
                <Link href="/gallery" aria-label="Gallery" >
                  Gallery
                </Link>
                <Link href="/rooms" aria-label="Rooms" >
                  Rooms
                </Link>
                <Link href="/contact" aria-label="Contact" >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
