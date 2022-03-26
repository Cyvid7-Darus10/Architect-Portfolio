import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { SliderData } from "../data/SliderData";
import Dropdown from "./Dropdown";
import InfoSection from "./InfoSection";
import { infoDataOne, infoDataTwo, infoDataThree, infoDataFour } from "../data/InfoData";


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...infoDataTwo} />
      <InfoSection {...infoDataOne} />
      <InfoSection {...infoDataThree} />
      <InfoSection {...infoDataFour} />
    </>
  );
}

export default Home;
