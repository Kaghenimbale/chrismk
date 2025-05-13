import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [choice, setChoice] = useState("");
  const handleChange = (e: any) => {
    setChoice(e.target.value);
  };
  console.log(choice);
  return (
    <div className="relative top-2 left-10">
      <select
        className="text-blue-950 w-[45px] h-[30px] rounded-md absolute"
        name=""
        id=""
        value={choice}
        onChange={handleChange}
      >
        <option value="">🌐</option>
        <option value="fr">Fr</option>
        <option value="en">En</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
