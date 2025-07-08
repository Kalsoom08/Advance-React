import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { IoPersonAddOutline } from 'react-icons/io5';
import Logo from '../assets/Hero/logo2.png';

const NavBar = () => {
  const navItems = [
    { path: '/', title: 'Home' },
    { path: '/products', title: 'Products' },
    { path: '/categories', title: 'Categories' },
    { path: '/about', title: 'About' },
  ];

  return (
    <nav className="bg-[cadetblue] p-1 px-10 shadow-md flex justify-between items-center">
      <div >
        <img src={Logo} alt="Logo" className="w-[6rem] " />
      </div>

      <ul className="flex justify-center space-x-6 text-white font-semibold">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'underline text-yellow-200' : 'hover:underline'
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex gap-x-5 text-white text-xl">
        <FaRegHeart className="cursor-pointer hover:scale-110 transition-transform duration-200" />
        <MdShoppingCartCheckout className="cursor-pointer hover:scale-110 transition-transform duration-200" />
        <IoPersonAddOutline className="cursor-pointer hover:scale-110 transition-transform duration-200" />
      </div>
    </nav>
  );
};

export default NavBar;
