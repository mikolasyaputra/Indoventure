// src/components/Navbar.jsx
import React from 'react';
import { SiIndoventure } from 'react-icons/si';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="bg-white shadow fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <SiIndoventure className="text-4xl text-blue-600" />
          <h1 className="text-2xl font-bold text-blue-600 ml-2">Indoventure</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="Beranda" spy={true} smooth={true} duration={500} className="cursor-pointer text-gray-700 font-semibold">Beranda</Link>
            </li>
            <li>
              <Link to="Tentang" spy={true} smooth={true} duration={500} className="cursor-pointer text-gray-700 font-semibold">Tentang</Link>
            </li>
            <li>
              <Link to="Hubungi" spy={true} smooth={true} duration={500} className="cursor-pointer text-gray-700 font-semibold">Hubungi Kami</Link>
            </li>
          </ul>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
