import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-slate-900 text-white py-4 px-8 top-0 left-0 right-0 fixed">
      <div className="flex justify-between w-[80vw] items-center">
        <h1 className="flex font-extrabold text-4xl">
          <a href="/" className="flex hover:no-underline">
            Electrica
          </a>
        </h1>
        <ul className="flex gap-4">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/services">SERVICES</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
        <button className="bg-white text-slate-900 p-3 rounded-md transition-all delay-100 hover:bg-red-700 hover:text-white">
          BOOKING NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
