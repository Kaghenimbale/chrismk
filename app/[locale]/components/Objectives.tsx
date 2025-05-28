"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GrUserWorker } from "react-icons/gr";
import { MdEngineering } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import industry from "../../../public/industry-with-electrical-engineer-working-heights-generative-ai_220873-23877.png";
import { FaCheckCircle } from "react-icons/fa";

const Objectives = () => {
  const [status, setStatus] = useState("about");
  const [description, setDescription] = useState(
    "With over four decades of experience,we deliver tailored logistics solutions to large-scale enterprises across the country. Our expertise ensure reliable, efficient service for specific market needs."
  );
  const datas = [
    {
      title: "about",
      description:
        "With over four decades of experience,we deliver tailored logistics solutions to large-scale enterprises across the country. Our expertise ensure reliable, efficient service for specific market needs.",
    },
    {
      title: "mission",
      description:
        "To provide  smart, efficeint, and reliable logistics solutions powered by technology--delivering value and excellence to every client.",
    },
    {
      title: "vision",
      description:
        "To lead the future of logistics through innovation, sustainability, and customer-fucosed service.",
    },
  ];
  const handleClick = (title: string, description: string) => {
    setStatus(title);
    setDescription(description);
  };
  return (
    <div className="w-full lg:w-[70vw] mx-auto p-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-8">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          WHY CHOOSE US
        </h2>
        <p className="text-3xl font-bold md:w-[25rem]">
          Delivering Reliable Electrical Services for Everyone
        </p>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="border-gray-300 border-2 w-fit p-4">
            <span className="text-8xl font-extrabold">20</span>
            <p className="text-wrap w-[4rem]">Years of experience</p>
          </div>
          <div className="w-[18rem] flex flex-col gap-4">
            <div className="flex gap-4">
              <RiSecurePaymentFill className="text-red-600 text-5xl" />
              <div className="flex flex-col gap-3">
                <p className="font-bold">Easy Payment</p>
                <span>
                  Flexible and secure payment options designed for your
                  convenience.
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <GrUserWorker className="text-red-600 text-5xl" />
              <div className="flex flex-col gap-3">
                <p className="font-bold">Skilled Workforce</p>
                <span>
                  Our certified technicians are highly trained to deliver safe
                  and efficient services.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <Image
            src={industry}
            className="h-[8rem] object-cover"
            alt="imageIndustry"
          />
          <div className="flex gap-4 relative -top-10">
            {datas.map((data) => {
              return (
                <button
                  type="button"
                  key={data.title}
                  className={`${
                    status === data.title
                      ? "bg-red-700 text-white p-2 w-[10rem]"
                      : "bg-white text-black p-2 w-[10rem]"
                  }`}
                  onClick={() => handleClick(data.title, data.description)}
                >
                  {data.title}
                </button>
              );
            })}
          </div>
        </div>
        <p className="lg:h-[5rem]">{description}</p>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <FaCheckCircle className="text-red-700" />
            <p>Our Solution are tested</p>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-red-700" />
            <p>Leverage our experience in service</p>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-red-700" />
            <p>Proven, and Best in class</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
