import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaRegLightbulb } from "react-icons/fa";
import coffret from "../../public/coffret.jpg";
import imageLight from "../../public/Gen-AI-Enterprise-Futurist-Speaker.jpg";
import { FaComputer } from "react-icons/fa6";
import { TbNetwork, TbShoppingCartBolt } from "react-icons/tb";

const page = () => {
  return (
    <div className="mt-[5rem] w-[70vw] mx-auto flex flex-col gap-10 pb-10">
      <div className="bg-gray-200 py-8 flex flex-col items-center gap-10">
        <h2 className="text-4xl font-bold text-center">About Us</h2>
        <p className="text-center text-gray-500 w-[60%]">
          That's what people say when they see your Home with our affordable,
          expert services. Available daily, weekly or monthly at competitive
          rates.
        </p>
      </div>

      <div className="py-10 grid grid-cols-2">
        <Image className="h-[30rem] w-[30rem]" src={coffret} alt="coffret" />
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-bold flex">
            <p className="underline">Fast</p>, Friendly Services
          </h2>

          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            consectetur illo ipsa rerum ducimus, tenetur commodi officiis, a
            expedita eos soluta quaerat. Facilis distinctio dolores, cupiditate
            eius hic rem ad.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 items-center">
              <FaCheckCircle className="text-red-700" />
              <p>Background checked professionals</p>
            </li>
            <li className="flex gap-4 items-center">
              <FaCheckCircle className="text-red-700" />
              <p>Backed by the handy Happiness Guarantee</p>
            </li>
            <li className="flex gap-4 items-center">
              <FaCheckCircle className="text-red-700" />
              <p>Friendly 24/7 customer services</p>
            </li>
            <li className="flex gap-4 items-center">
              <FaCheckCircle className="text-red-700" />
              <p>Affordable, upfront pricing</p>
            </li>
          </ul>

          <button className="bg-red-700 text-white p-3 w-fit rounded-md transition-all delay-100 hover:bg-white hover:text-red-700 hover:border hover:border-red-700">
            Make an Inquiry
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-10 h-[30rem] justify-center">
        <h2 className="text-4xl font-bold flex gap-2 justify-center">
          OUR SERVICES
        </h2>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col justify-between">
            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-[15rem]">
                <h2 className="font-bold">COMPUTER MAINTENANCE</h2>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <FaComputer className="text-white text-7xl p-4 font-thin bg-red-700" />
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-[15rem]">
                <h2 className="font-bold">NETWORK INSTALLATION</h2>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <TbNetwork className="text-white text-7xl p-4 font-thin bg-red-700" />
            </div>
          </div>

          <div>
            <Image src={imageLight} alt="image Light" className="w-[25rem]" />
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex gap-2">
              <FaRegLightbulb className="text-white text-7xl p-4 font-thin bg-red-700" />
              <div className="flex flex-col gap-2 w-[15rem]">
                <h2 className="font-bold">ELECTRICAL INSTALLATION</h2>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <TbShoppingCartBolt className="text-white text-7xl p-4 font-thin bg-red-700" />
              <div className="flex flex-col gap-2 w-[15rem]">
                <h2 className="font-bold">ELECTRICAL MATERIALS</h2>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
