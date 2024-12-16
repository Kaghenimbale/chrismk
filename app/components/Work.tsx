import React from "react";
import { MdElectricMeter, MdEngineering } from "react-icons/md";
import { IoHammerOutline } from "react-icons/io5";
import { GiScrewdriver } from "react-icons/gi";

const Work = () => {
  return (
    <div className="bg-slate-950 w-full">
      <div className="w-[70vw] mx-auto flex items-center flex-col gap-4 py-10">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          HOW WE WORK
        </h2>
        <p className="text-5xl font-bold w-[50rem] text-center text-white">
          3 Steps Process to Deliver your Services
        </p>

        <div className="w-[50vw] text-white flex justify-between">
          <div className="bg-slate-900 w-[200px] flex flex-col text-center p-4 items-center gap-10 rounded-full">
            <GiScrewdriver className="text-6xl" />
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">Request Quote</h2>
              <p>
                We strongly Support Best practice sharing accross our operations
                arround.
              </p>
            </div>
            <div className="text-3xl font-extrabold bg-gray-700 w-[70px] h-[70px] flex items-center justify-center rounded-full">
              01
            </div>
          </div>

          <div className="bg-slate-900 w-[200px] flex flex-col text-center p-4 items-center gap-10 rounded-full">
            <IoHammerOutline className="text-6xl" />
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">Request Quote</h2>
              <p>
                We strongly Support Best practice sharing accross our operations
                arround.
              </p>
            </div>
            <div className="text-3xl font-extrabold bg-gray-700 w-[70px] h-[70px] flex items-center justify-center rounded-full">
              02
            </div>
          </div>

          <div className="bg-slate-900 w-[200px] flex flex-col text-center p-4 items-center gap-10 rounded-full">
            <MdElectricMeter className="text-6xl" />
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">Request Quote</h2>
              <p>
                We strongly Support Best practice sharing accross our operations
                arround.
              </p>
            </div>
            <div className="text-3xl font-extrabold bg-gray-700 w-[70px] h-[70px] flex items-center justify-center rounded-full">
              03
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
