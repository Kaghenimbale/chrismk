"use client";

import React, { useState } from "react";
import { MdEngineering } from "react-icons/md";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import Form from "./Form";

const Contact = () => {
  const [isOpen, setOpen] = useState<Number[]>([]);
  const capabilities = [
    {
      id: 1,
      title: "Comprehensive Electrical Services",
      description:
        "Covering everything from power distribution to lighting and safety systems, designed for efficiency and longevity.",
    },

    {
      id: 2,
      title: "Scalable Network Infrastructure",
      description:
        "Building robust and adaptable networks to support your current and future data and communication demands.",
    },

    {
      id: 3,
      title: "Tailored Computer science",
      description:
        "Offering sotware development, system integration, and IT support customized to your specific business requirements.",
    },
  ];

  const handleCollapse = (id: number) => {
    if (isOpen.includes(id)) {
      const openCopy = isOpen.filter((element) => element !== id);
      setOpen(openCopy);
    } else {
      const openCopy = [...isOpen];
      openCopy.push(id);
      setOpen(openCopy);
    }
  };
  return (
    <div className="bg-gray-200">
      <div className="w-full lg:w-[70vw] mx-auto p-4 lg:p-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 ">
          <Form />
          <div className="flex flex-col gap-4">
            <h2 className="text-red-700 text-2xl flex gap-1 items-center">
              <MdEngineering />
              CAPABILITIES
            </h2>
            <p className="text-4xl font-bold lg:w-[40rem]">
              Services that help our customers meet
            </p>
            <span>
              With over four decades of experience providing solutions to large
              scale enterprises throughout the country, we offer end to end.
            </span>
            <div>
              <div className="w-full lg:w-[35rem] flex flex-col gap-3 h-[22rem]">
                {capabilities.map((capabilitie) => {
                  return (
                    <div key={capabilitie.id} className="">
                      <button
                        onClick={() => handleCollapse(capabilitie.id)}
                        className="flex w-[100%] gap-4 items-center justify-between font-semibold bg-black text-white p-3"
                      >
                        {capabilitie.title}
                        {isOpen.includes(capabilitie.id) ? (
                          <FaArrowDown />
                        ) : (
                          <FaArrowRight />
                        )}
                      </button>
                      <div
                        className={`${
                          isOpen.includes(capabilitie.id)
                            ? "block"
                            : "bg-white hidden"
                        }`}
                      >
                        <p className="p-3 text-gray-600 bg-white shadow-inner shadow-slate-300">
                          {capabilitie.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
