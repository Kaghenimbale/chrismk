import Image from "next/image";
import React from "react";
import { MdEngineering, MdStarRate } from "react-icons/md";
import image1 from "../../public/360_F_782265344_F5Xl72Q4g09e97Zl2q9iTa0CfHdCIAli.jpg";
import image2 from "../../public/a-man-with-a-white-helmet-and-glasses-is-smiling-he-is-wearing-an-orange-shirt-with-a-pattern-photo.jpg";

const Testimonial = () => {
  return (
    <div className="py-10">
      <div className="w-[70vw] mx-auto flex flex-col items-center gap-4">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          TESTIMONIALS
        </h2>
        <p className="text-5xl font-bold w-[30rem] text-center">
          What Our Client Say about us
        </p>

        <div className="flex gap-6">
          <div className="flex gap-4">
            <Image
              src={image1}
              className="w-[160px] h-[200px] object-cover"
              alt="image1"
            />
            <div>
              <p className="font-bold">Great Service</p>
              <div className="flex gap-1">
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-white" />
              </div>
              <p className="text-gray-400">
                Build and implement innovative, profitable and sustainable
                products and services that help.
              </p>
              <h3 className="font-bold">Mark Wooden</h3>
              <span className="text-red-600">Admin</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Image
              src={image2}
              className="w-[160px] h-[200px] object-cover"
              alt="image1"
            />
            <div>
              <p className="font-bold">Great Service</p>
              <div className="flex gap-1">
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-white" />
                <MdStarRate className="text-white" />
              </div>
              <p className="text-gray-400">
                Build and implement innovative, profitable and sustainable
                products and services that help.
              </p>
              <h3 className="font-bold">Mark Wooden</h3>
              <span className="text-red-600">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
