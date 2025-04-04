"use client";

import React, { useState } from "react";
import { MdEngineering } from "react-icons/md";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  const [isOpen, setOpen] = useState<Number[]>([]);
  const [id, setId] = useState(Number);
  const capabilities = [
    {
      id: 1,
      title: "Our missions is to design, innovative",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi harum ad recusandae. Hic, voluptates animi.",
    },

    {
      id: 2,
      title: "Our missions is to design, innovative",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi harum ad recusandae. Hic, voluptates animi.",
    },

    {
      id: 3,
      title: "Our missions is to design, innovative",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi harum ad recusandae. Hic, voluptates animi.",
    },
  ];

  const handleDisplay = (id: number) => {
    // setOpen((prev) => !prev);
    // setId(id);
    // const exist = capabilities.filter((capabilitie) => capabilitie.id === id);
    // console.log("id:", exist);

    if (isOpen.includes(id)) {
      const openCopy = isOpen.filter((element) => element !== id);
      setOpen(openCopy);
    } else {
      const openCopy = [...isOpen];
      openCopy.push(id);
      setOpen(openCopy);
    }
    console.log(isOpen);
  };
  return (
    <div className="bg-gray-200">
      <div className="w-full lg:w-[70vw] mx-auto p-4 lg:p-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 ">
          <div className="w-full h-fit lg:w-[25rem] bg-red-700 flex justify-center py-10">
            <form
              className="flex flex-col items-end gap-4"
              action=""
              method="post"
            >
              <h2 className="flex justify-center w-full font-bold text-2xl text-white">
                Contact Us
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="First Name"
                  placeholder="First Name"
                  id=""
                  className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
                />
                <input
                  type="text"
                  name="Last Name"
                  placeholder="Last Name"
                  id=""
                  className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  id=""
                  className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
                />
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone"
                  id=""
                  className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
                />
                <input
                  type="text"
                  name="Company"
                  placeholder="Company"
                  id=""
                  className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
                />
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  id=""
                  className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
                />
              </div>

              <input
                type="range"
                name="Range"
                id=""
                className="w-[20rem] lg:w-[20rem] h-[40px] p-2"
              />

              <textarea
                name="Message"
                placeholder="Message"
                className="w-[20rem] lg:w-[21rem] h-[150px] lg:h-[80px] p-2 border-2"
                id=""
              ></textarea>

              <button
                className="w-full h-[40px] bg-black text-white"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </div>
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
              <div className="w-full lg:w-[35rem] flex flex-col gap-3">
                {capabilities.map((capabilitie) => {
                  return (
                    <div key={capabilitie.id} className="">
                      <button
                        onClick={() => handleDisplay(capabilitie.id)}
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
                        <p className="p-3 text-gray-600">
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
