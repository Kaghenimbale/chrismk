import React from "react";
import { SiThunderstore } from "react-icons/si";

const Navbar = () => {
  const navbars = ["Home", "About", "Services", "Contact"];
  return (
    <nav className="flex justify-center bg-slate-900 text-white py-4 px-8 top-0 left-0 right-0 fixed z-10">
      <div className="flex justify-between w-[80vw] items-center">
        <h1 className="flex font-extrabold text-4xl">
          <a href="/" className="flex hover:no-underline gap-2 items-center">
            <SiThunderstore className="text-red-600" />
            Electrica
          </a>
        </h1>
        <ul className="flex gap-4">
          {navbars.map((navbar) => {
            return (
              <a
                href={`/${
                  navbar.toLocaleLowerCase() === "home"
                    ? ""
                    : navbar.toLocaleLowerCase()
                }`}
              >
                {navbar.toLocaleUpperCase()}
              </a>
            );
          })}
        </ul>
        <button className="bg-white text-slate-900 p-3 rounded-md transition-all delay-100 hover:bg-red-700 hover:text-white">
          BOOKING NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
