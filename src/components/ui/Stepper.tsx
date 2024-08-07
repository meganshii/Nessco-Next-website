import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRegPaperPlane,
  FaCoffee,
  FaUtensils,
  FaShoppingBag,
  FaConciergeBell,
  FaStarHalf,
} from "react-icons/fa";

const Stepper: React.FC<{ onStepChange: (index: number) => void }> = ({ onStepChange }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: "All paper Products", icon: <FaRegPaperPlane /> },
    { name: "Paper cup machines", icon: <FaCoffee /> },
    { name: "Paper bowl machines", icon: <FaUtensils /> },
    { name: "Paper bag machines", icon: <FaShoppingBag /> },
    { name: "Paper plate machines", icon: <FaConciergeBell /> },
    { name: "Paper straw machines", icon: <FaStarHalf /> },
  ];

  const handleClick = (index: number) => {
    setActiveStep(index);
    onStepChange(index);
  };

  return (
    <div className="sticky bg-[#f2f2f2] top-14 left-0 w-full z-30">
      <div className="flex items-center justify-center w-full py-2 relative mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center relative cursor-pointer ${
                index === activeStep ? "text-gray-500" : "text-gray-500"
              }`}
              onClick={() => handleClick(index)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: index === activeStep ? 1.2 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative h-8 w-8 flex items-center justify-center text-2xl ${
                  index === activeStep
                    ? "bg-blue-100 rounded-full p-2 shadow-lg"
                    : "p-2"
                }`}
              >
                {step.icon}
              </motion.div>
              <span className="text-xs mt-2 font-montserrat text-center w-24">
                {step.name}
              </span>
            </motion.div>
            {index < steps.length - 1 && (
              <div className="flex items-center">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: activeStep > index ? "2rem" : "1rem" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-1 border-t-2"
                ></motion.div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
