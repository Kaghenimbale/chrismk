import About from "./components/About";
import Presentation from "./components/Presentation";
import Offer from "./components/Offer";
import Objectives from "./components/Objectives";
import Befenit from "./components/Befenit";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col mt-[4.5rem] w-fit lg:w-[100%]">
      <About />
      <Presentation />
      <Offer />
      <Objectives />
      <Befenit />
      <Work />
      <Portfolio />
      <Contact />
      <Testimonial />
    </div>
  );
}
