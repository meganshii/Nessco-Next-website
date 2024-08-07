"use client";

import React, { useState } from "react";
import Stepper from "../ui/Stepper";
import { AppleCardsCarouselDemo } from "./AppleCardsCarouselDemo";
import { cardsData } from "./AppleCardsCarouselDemo";

const HomeMachine: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const categories = [
    "all",
    "cup",
    "bowl",
    "bag",
    "plate",
    "straw",
  ];

  const filteredCardsData = categories[activeStep] === "all"
    ? cardsData
    : cardsData.filter(card => card.category === categories[activeStep]);

  return (
    <div className="h-full mt-14 ">
      <Stepper onStepChange={setActiveStep} />
      <div className="h-[90%] mx-2 px-4">
        <AppleCardsCarouselDemo filteredCardsData={filteredCardsData} />
      </div>
    </div>
  );
};

export default HomeMachine;
