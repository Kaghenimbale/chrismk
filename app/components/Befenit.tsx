import Image from "next/image";
import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { MdEngineering } from "react-icons/md";
import image2 from "../../public/worker-red-uniform-operating-control-panel-industrial-machine-night_753333-6558.jpg";

const Befenit = () => {
  return (
    <div className="w-full lg:w-[70vw] mx-auto p-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-8">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          OUR BENEFITS
        </h2>

        <h2 className="text-4xl font-bold lg:w-[25rem]">
          Why Choose ELectrica
        </h2>

        <p className="lg:w-[25rem]">
          with over two years of proven expertise, we are committed to
          delivering world-class electrical solutions tailored to your needs.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <BsArrowRightCircleFill className="text-red-600" />
            <p className="w-full lg:w-[20rem]">
              Our primry goal is customer satisfaction trough reliable services.
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <BsArrowRightCircleFill className="text-red-600" />
            <p className="w-full lg:w-[20rem]">
              We implement proactive strategies to ensure uninterrupted
              operations.
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <BsArrowRightCircleFill className="text-red-600" />
            <p className="w-full lg:w-[20rem]">
              We follow globally recognized standards and methodologies for
              consistent quality.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image src={image2} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Befenit;
