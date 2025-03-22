import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";

const page = () => {
  return (
    <div className="mt-[5rem] w-[70vw] mx-auto py-10 ">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl font-bold flex">Contact Us</h2>
          <div className="flex flex-col gap-8 w-[30rem]">
            <p className="text-gray-500">
              Satisfying you is all that we long for, that is why we put you
              first in all that we do. Our contact details are always ready to
              have your request.
            </p>

            <p className="text-gray-500">
              You matter to us. Here at Electrica, there is always something for
              everyone! Contact me now to book a service or buy a product.
            </p>
          </div>

          <div className="flex justify-between w-[40rem]">
            <div className="flex flex-col gap-2">
              <FaLocationDot className="text-4xl border border-gray-500 w-[60px] h-[60px] p-2 rounded-lg text-gray-500" />
              <div>
                <p className="font-bold">Address:</p>
                <p className="text-gray-500">
                  Goma, Quartier Himbi <br /> Av du Lac N°59
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <MdEmail className="text-4xl border border-gray-500 w-[60px] h-[60px] p-2 rounded-lg text-gray-500" />
              <div>
                <p className="font-bold">Email:</p>
                <p className="text-gray-500">kaghenimbale@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <IoIosCall className="text-4xl border border-gray-500 w-[60px] h-[60px] p-2 rounded-lg text-gray-500" />
              <div>
                <p className="font-bold">Phone:</p>
                <p className="text-gray-500">+243977813248</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="bg-red-700 text-white p-3 w-fit rounded-md transition-all delay-100 hover:bg-white hover:text-red-700 hover:border hover:border-red-700 flex gap-2 items-center">
            Book A Service <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
