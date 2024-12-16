import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdMail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="pt-10 bg-slate-950 text-white">
      <div className="w-[70vw] mx-auto flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">About Us</h3>
            <p className="text-gray-400">
              Desires to obtain pain of itself, because it is pain, but
              occasionally circumstances.
            </p>
            <div className="flex gap-4">
              <FaInstagram className="text-white" />
              <FaTwitter className="text-white" />
              <FaFacebook className="text-white" />
              <FaLinkedin className="text-white" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Explore</h3>
            <div className="w-[200px] h-[1px] bg-gray-300">
              <div className="w-[70px] h-[2px] bg-red-600"></div>
            </div>
            <p className="text-gray-400">About the Company</p>
            <p className="text-gray-400">Meet the Team</p>
            <p className="text-gray-400">News & Media</p>
            <p className="text-gray-400">Our Projects</p>
            <p className="text-gray-400">Contact</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Contact</h3>
            <div className="w-[200px] h-[1px] bg-gray-300">
              <div className="w-[70px] h-[2px] bg-red-600"></div>
            </div>
            <p className="text-gray-400">
              Goma, Himbi, Av du Lac N°59 <br /> Congo DRC
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <MdMail className="text-red-600" />
                <span className="text-gray-400">kaghenimbale@gmail.com</span>
              </div>
              <div className="flex gap-4 items-center">
                <MdPhone className="text-red-600" />
                <span className="text-gray-400">+243977813248</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Gallery</h3>
            <div className="w-[200px] h-[1px] bg-gray-300">
              <div className="w-[70px] h-[2px] bg-red-600"></div>
            </div>
          </div>
        </div>
        <footer className="bg-slate-900 flex gap-2 justify-center p-4">
          &copy; 2024
          <span className="text-red-600">Electrica</span>
          <div className="w-[1px] h-8px bg-slate-400"></div>
          <p>All Rights Reserved</p>
          <div className="w-[1px] h-8px bg-slate-400"></div>
          <span className="text-red-600">CHRIMK34</span>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
