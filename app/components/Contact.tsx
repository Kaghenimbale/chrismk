import React from "react";

const Contact = () => {
  return (
    <div className="w-[70vw] mx-auto p-10">
      <div className="grid grid-cols-2">
        <div className="w-[25rem] bg-red-700 flex justify-center py-10">
          <form
            className="flex flex-col items-end gap-4"
            action=""
            method="post"
          >
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="First Name"
                placeholder="First Name"
                id=""
                className="w-[20rem] h-[40px] border-2 border-slate-500 p-2"
              />
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                id=""
                className="w-[20rem] h-[40px] border-2 border-slate-500 p-2"
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                id=""
                className="w-[20rem] h-[40px] border-2 border-slate-500 p-2"
              />
              <input
                type="tel"
                name="Phone"
                placeholder="Phone"
                id=""
                className="w-[20rem] h-[40px] border-2 border-slate-500 p-2"
              />
              <input
                type="text"
                name="Company"
                placeholder="Company"
                id=""
                className="w-[20rem] h-[40px] border-2 border-slate-500 p-2"
              />
              <input
                type="text"
                name="Address"
                placeholder="Address"
                id=""
                className="w-[20rem] h-[40px] border-2 border-slate-500 p-2"
              />
            </div>

            <input
              type="range"
              name="Range"
              id=""
              className="w-[20rem] h-[40px] border-2 border-slate-500 p-2"
            />

            <textarea
              name="Message"
              placeholder="Message"
              className="w-[20rem] h-[80px] p-2 border-2 border-slate-500"
              id=""
            ></textarea>

            <button
              className="w-[10rem] h-[40px] bg-black text-white"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
