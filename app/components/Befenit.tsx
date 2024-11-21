import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { MdEngineering } from "react-icons/md";

const Befenit = () => {
  return (
    <div className="w-[70vw] mx-auto p-10 grid grid-cols-2">
      <div className="flex flex-col gap-8">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          OUR BENEFITIES
        </h2>

        <h2 className="text-4xl font-bold w-[25rem]">
          Why You should Choose us
        </h2>

        <p className="w-[25rem]">
          with over four decades of experience providing solutions to
          large-scale enterprises throughout the globe, we offer end-to-end.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <BsArrowRightCircleFill className="text-red-600" />
            <p>Our main goal is simply works for the customers.</p>
          </div>

          <div className="flex gap-4 items-center">
            <BsArrowRightCircleFill className="text-red-600" />
            <p>Strategies to ensure proactive services.</p>
          </div>

          <div className="flex gap-4 items-center">
            <BsArrowRightCircleFill className="text-red-600" />
            <p>Professional worldwide methodologies.</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Befenit;
