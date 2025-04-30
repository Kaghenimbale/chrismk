import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [choice, setChoice] = useState("");
  const handleSelection = (e: any) => {
    console.log(e.target);
  };
  return (
    <div>
      <select
        className="text-blue-950 w-[45px] h-[30px] rounded-md"
        name=""
        id=""
        onSelect={handleSelection}
      >
        <option value="">En</option>
        <option value="">Fr</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
