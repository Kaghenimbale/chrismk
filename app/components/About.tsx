import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center about">
      <div className=" w-[70vw] h-[93vh] mx-auto flex flex-col items-start justify-center gap-5 text-white">
        <p className="text-3xl font-bold">
          Welcome to <br />{" "}
          <span className="text-slate-900">CHRISMK Electrical services,</span>
        </p>
        <h1 className="text-6xl font-extrabold w-[50rem]">
          Get and Build Quality Services in Electricity and Networking.
        </h1>
        <button
          type="button"
          className="bg-white text-slate-900 p-3 rounded-md transition-all delay-100 hover:bg-slate-900 hover:text-white"
        >
          CONTACT US NOW
        </button>
      </div>
    </div>
  );
};

export default About;
