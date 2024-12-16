import React from "react";
import { MdEngineering } from "react-icons/md";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-gray-200">
      <div className="w-[70vw] mx-auto p-10">
        <div className="grid grid-cols-2">
          <div className="w-[25rem] bg-red-700 flex justify-center py-10">
            <form
              className="flex flex-col items-end gap-4"
              action=""
              method="post"
            >
              <h2 className="flex justify-center w-full font-bold text-2xl text-white">
                Contact Us
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="First Name"
                  placeholder="First Name"
                  id=""
                  className="w-[10rem] h-[50px] p-2"
                />
                <input
                  type="text"
                  name="Last Name"
                  placeholder="Last Name"
                  id=""
                  className="w-[10rem] h-[50px] p-2"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  id=""
                  className="w-[10rem] h-[50px] p-2"
                />
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone"
                  id=""
                  className="w-[10rem] h-[50px] p-2"
                />
                <input
                  type="text"
                  name="Company"
                  placeholder="Company"
                  id=""
                  className="w-[10rem] h-[50px] p-2"
                />
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  id=""
                  className="w-[10rem] h-[50px] p-2"
                />
              </div>

              <input
                type="range"
                name="Range"
                id=""
                className="w-[20rem] h-[40px] p-2"
              />

              <textarea
                name="Message"
                placeholder="Message"
                className="w-full h-[80px] p-2 border-2"
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
            <p className="text-4xl font-bold w-[40rem]">
              Services that help our customers meet
            </p>
            <span>
              With over four decades of experience providing solutions to large
              scale enterprises throughout the country, we offer end to end.
            </span>
            <div>
              <div className="w-[35rem] flex flex-col gap-3">
                <div className="">
                  <h3 className="flex gap-4 items-center justify-between font-semibold bg-black text-white p-3">
                    Our missions is to design, innovative
                    <FaArrowDown />
                  </h3>
                  <div className="bg-white">
                    <p className="p-3 text-gray-600">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi harum ad recusandae. Hic, voluptates animi.
                    </p>
                  </div>
                </div>

                <div className="">
                  <h3 className="flex gap-4 items-center justify-between bg-white font-semibold p-3">
                    Our missions is to design, innovative
                    <FaArrowRight />
                  </h3>
                  {/* <div className="bg-white">
                    <p className="p-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi harum ad recusandae. Hic, voluptates animi.
                    </p>
                  </div> */}
                </div>

                <div className="">
                  <h3 className="flex gap-4 items-center justify-between bg-white font-semibold p-3">
                    Our missions is to design, innovative
                    <FaArrowRight />
                  </h3>
                  {/* <div className="bg-white">
                    <p className="p-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi harum ad recusandae. Hic, voluptates animi.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
