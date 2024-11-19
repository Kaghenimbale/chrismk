import Image from "next/image";
import React from "react";
import { GrUserWorker } from "react-icons/gr";
import { MdEngineering } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import industry from "../../public/industry-with-electrical-engineer-working-heights-generative-ai_220873-23877.png";
import { FaCheckCircle } from "react-icons/fa";

const Objectives = () => {
  return (
    <div className="w-[70vw] mx-auto p-10 grid grid-cols-2">
      <div className="flex flex-col gap-8">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          WHY CHOOSE US
        </h2>
        <p className="text-4xl font-bold w-[40rem]">
          Providing quality Your electric services to all.
        </p>
        <div className="flex gap-10">
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <GrUserWorker className="text-red-600 text-5xl" />
              <div className="flex flex-col gap-3">
                <p className="font-bold">Trained Workers</p>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
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
            <button
              type="button"
              className="bg-red-700 text-white p-2 w-[10rem]"
            >
              About Us
            </button>
            <button type="button" className="bg-white p-2 w-[10rem]">
              Our Mission
            </button>
            <button type="button" className="bg-white p-2 w-[10rem]">
              Our Vision
            </button>
          </div>
        </div>
        <p>
          With over four decades of experience providing solutions to large
          scale enterprises thourought the country, we offer end-to-end
          logistics tailored for specifics markets enterprises throughout
        </p>

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
