import Image from "next/image";
import About from "./components/About";
import Presentation from "./components/Presentation";
import Offer from "./components/Offer";
import Objectives from "./components/Objectives";
import Befenit from "./components/Befenit";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="flex flex-col mt-[4.5rem]">
      <About />
      <Presentation />
      <Offer />
      <Objectives />
      <Befenit />
      <Work />
    </div>
  );
}
