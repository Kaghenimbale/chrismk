"use client";

import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaRegLightbulb } from "react-icons/fa";
import coffret from "../../public/coffret.jpg";
import imageLight from "../../public/Gen-AI-Enterprise-Futurist-Speaker.jpg";
import { FaComputer } from "react-icons/fa6";
import { TbNetwork, TbShoppingCartBolt } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import { title } from "process";

const page = () => {
  const datas = [
    [
      {
        id: 1,
        Icon: FaComputer,
        title: "COMPUTER MAINTENANCE",
        description:
          "Keep your devices running smoothly with our expert computer maintenance services. From virus removal to system optimization, we ensure your machines are secure, fast, and reliable",
      },
      {
        id: 2,
        Icon: TbNetwork,
        title: "NETWORK INSTALLATION",
        description:
          "We design and install efficient and secure network systems for homes and businesses. Wether wired or wireless, our networks are built for speed, stability and future growth.",
      },
    ],
    [
      {
        id: 3,
        Icon: FaRegLightbulb,
        title: "ELECTRICAL INSTALLATION",
        description:
          "Our certified electricians handle all types of electrical installations--from lighting and sockets to full wiring systems. We ensure safe, code-compliant work for new builds or renovations.",
      },
      {
        id: 4,
        Icon: TbShoppingCartBolt,
        title: "ELECTRICAL MATERIALS",
        description:
          "We supply high-quality electrical component and accessories. Wether you're a contractor or a DIY enthusiast, you'll find everything you need--from cables to circuit breakers--at competitive prices",
      },
    ],
  ];

  const handleDisplayMore = (id: number) => {
    console.log("clicked id", id);
  };
  return (
    <div className="mt-[5rem] px-10 lg:w-[70vw] mx-auto flex flex-col gap-10 pb-10">
      <div className="bg-gray-200 py-8 flex flex-col items-center gap-10">
        <h2 className="text-4xl font-bold text-center">About Us</h2>
        <p className="text-center text-gray-500 w-[60%]">
          We are dedicated professionals offering reliable electrical and home
          maintenance services tailored to your needs. Whether it's a quick fix
          or a complete system check, our expert team ensures your safety and
          satisfaction. With years of experience and a passion for quality work,
          we take pride in delivering solutions that last.
        </p>
      </div>

      <div className="py-10 grid grid-cols-1 lg:grid-cols-2">
        <Image className="w-[25rem]" src={coffret} alt="coffret" />
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-bold flex">
            <p className="underline">Fast</p>, Friendly Services
          </h2>

          <p className="text-gray-500">
            Need a job done right--and fast? Our skilled technicians are ready
            to help with dependable, same-day services. We bring a friendly
            attitude, deep, expertise, and commitment to exceeding your
            expectations.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 items-center">
              <FaCheckCircle className="text-red-700" />
              <p>Verified and background-checked professionals</p>
            </li>
            <li className="flex gap-4 items-center">
              <FaCheckCircle className="text-red-700" />
              <p>Satisfaction backed by our Handy Happiness Guarantee</p>
            </li>
            <li className="flex gap-4 items-center">
              <FaCheckCircle className="text-red-700" />
              <p>24/7 support from a real human (no bots!)</p>
            </li>
            <li className="flex gap-4 items-center">
              <FaCheckCircle className="text-red-700" />
              <p>Honest pricing with no hidden fees</p>
            </li>
          </ul>

          <button className="bg-red-700 text-white p-3 w-fit rounded-md transition-all delay-100 hover:bg-white hover:text-red-700 hover:border hover:border-red-700">
            Make an Inquiry
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:h-[30rem] justify-center">
        <h2 className="text-4xl font-bold flex gap-2 justify-center">
          OUR SERVICES
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div className="flex flex-col justify-between gap-4">
            {datas[0].map((data) => {
              return (
                <div key={data.id} className="flex gap-4">
                  <div>
                    <data.Icon className="text-white text-7xl p-4 font-thin bg-red-700" />
                  </div>
                  <div className="flex flex-col w-[14rem]">
                    <h2 className="font-bold">{data.title}</h2>
                    <p className="text-gray-500 lg:w-[15rem]">
                      {data.description}
                      <button
                        onClick={() => handleDisplayMore(data.id)}
                        className="text-blue-500"
                      >
                        ...more
                      </button>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <Image src={imageLight} alt="image Light" className="w-[25rem]" />
          </div>

          <div className="flex flex-col justify-between gap-4">
            {datas[1].map((data) => {
              return (
                <div key={data.id} className="flex gap-4">
                  <div>
                    <data.Icon className="text-white text-7xl p-4 font-thin bg-red-700" />
                  </div>
                  <div className="flex flex-col w-[14rem]">
                    <h2 className="font-bold">{data.title}</h2>
                    <p className="text-gray-500 lg:w-[15rem]">
                      {data.description}
                      <button
                        onClick={() => handleDisplayMore(data.id)}
                        className="text-blue-500"
                      >
                        ...more
                      </button>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
