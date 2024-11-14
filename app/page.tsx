import Image from "next/image";
import About from "./components/About";
import Presentation from "./components/Presentation";
import Offer from "./components/Offer";

export default function Home() {
  return (
    <div className="flex flex-col mt-[4.5rem]">
      <About />
      <Presentation />
      <Offer />
    </div>
  );
}
