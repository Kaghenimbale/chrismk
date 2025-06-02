import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [choice, setChoice] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (!newLocale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.replace(newPath);
  };
  console.log(choice);
  console.log(pathname);
  console.log(router);
  return (
    <div className="relative top-20 right-8">
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
