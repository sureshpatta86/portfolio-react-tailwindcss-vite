import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      linkname: "home",
    },
    {
      id: 1,
      linkname: "about",
    },
    {
      id: 1,
      linkname: "portfolio",
    },
    {
      id: 1,
      linkname: "experience",
    },
    {
      id: 1,
      linkname: "contact",
    },
  ];
  return (
    <div
      className="flex bg-black p-4 text-white item-center justify-between
    w-full h-20 px-4 fixed"
    >
      <h1 className="text-5xl italic font-signature capitalize ml-2">suresh</h1>
      <ul className="md:flex hidden">
        {links.map(({ id, linkname }) => (
          <li
            className="px-4 cursor-pointer text-gray-400 text-2xl font-normal capitalize
          hover:scale-110 duration-200 p-2"
            key={id}
          >
            {linkname}
          </li>
        ))}
      </ul>
      <div
        className="p-2 text-gray-400 cursor-pointer md:hidden"
        onClick={() => {
          setNav(!nav);
        }}
      >
        {nav ? <FaBars size={30} /> : <FaBars size={30} />}
        {nav && (
          <ul
            className="flex flex-col justify-center items-center absolute top-0 left-0
             w-full p-2 h-screen bg-gradient-to-b from-gray-600 to-black
             text-gray-300"
          >
            {links.map(({ id, linkname }) => (
              <li
                className="px-4 m-2 cursor-pointer text-gray-300 text-3xl font-normal capitalize
                hover:scale-105 duration-200"
                key={id}
              >
                {linkname}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
