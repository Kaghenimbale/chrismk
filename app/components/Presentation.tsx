import Image from "next/image";
import React from "react";
import chris from "../../public/Christiant Kagheni.png";

const Presentation = () => {
  return (
    <div className="w-[70vw] mx-auto grid grid-cols-2 py-32">
      <div className="w-72 h-72 bg-red-700 my-auto"></div>
      <div className="flex flex-col gap-6">
        <h2 className="text-red-700 text-2xl">WHO WE ARE</h2>
        <p className="text-5xl font-bold">
          Providing High Quality Electrical Solution
        </p>
        <p className="text-red-700 text-2xl">
          Our Operations Around the Country and Accross Various Electrical
          Sectors
        </p>

        <span className="text-slate-700">
          With over 2 years of experience providing solution to large scale
          enterprises thourought the country, we offers end-to-end logistics
          tailored for specific market.
        </span>

        <div className="flex gap-4">
          <div className="flex gap-4 items-center">
            <Image
              className="rounded-full w-[60px] h-[70px]"
              src={chris}
              alt="CEO PHOTO"
            />
            <div>
              <p className="font-bold">KAGHENI Chris</p>
              <span className="text-slate-700">CEO, Electrica</span>
            </div>
          </div>
          <div>
            <ul>
              <li className="text-slate-700">Our solution are tested</li>
              <li className="text-slate-700">
                Leverage Experience in shipping
              </li>
              <li className="text-slate-700">Proven, and best-in class</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
