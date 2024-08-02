"use client";

import React, { useState } from "react";
import Stepper from "../ui/Stepper";
import Card from "../OurMachine/Card";
import {
  paperBagMachineImage,
  paperBowlMachineImage,
  paperCupMachineImage,
  papercup,
  paperbag1,
  paperbowl,
} from "../../../public/assets";
import { FaCircleNotch } from "react-icons/fa";

const HomeMachine: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cards = [
    {
      firstname: "Servo Driven",
      secondname: "Paper Cup Machine",
      description:
        "Experience unparalleled efficiency with our Servo Driven Paper Cup Machine, a marvel of engineering that integrates advanced mechanical, electronic, pneumatic, and electrical technologies. This high-precision machine is equipped with 13 servos that work in perfect sync via PLC, enabling the production of up to 180 high-quality paper cups per minute, equivalent to 3 cups per second. The machine features a two-step curling process, which ensures the rim of each cup is curled twice to provide extra rigidity and durability & High-quality sealing is guaranteed through the use of ultrasonic and hot air mechanisms, minimizing the risk of leakage, making it ideal for both hot and cold beverages.",
      image: paperBowlMachineImage,
      title: "Servo Driven Paper Cup Machine",
      speed: 123,
      unit: "PCS/MIN",
      icon: papercup,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "High-Speed Synchronized Servos",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "Advanced Sealing Technology",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    {
      firstname: "Paper Bag",
      secondname: "Making Machine",
      description:
        "Fully automatic Paper Bag Making Machine is able to perform a series of functions including printing tracking, cutting, bottom indentation, bottom folding, bottom gluing. One can use both plain and printed paper as raw material for bag formation. This bag making machine is equipped with German photoelectric sensors which enables precise tracking of paper movement throughout the machine whether it is alignment of paper, unwinding or rewinding of paper.",
      image: paperBagMachineImage,
      title: "Paper Bag Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbowl,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "High-Speed Synchronized Servos",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "Advanced Sealing Technology",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    {
      firstname: "Disposable Cup",
      secondname: "Making Machine",
      description:
        "NS-200 Disposable Cup making Machine is manufactured using latest technology and high tech equipment which are reliable as well as durable. This is the best Disposable cup making machine which has two-layer system for movement of Paper fans which is formed by a kind of arm arrangement for cup cone tracker. Robotic Arm plays a vital role in transferring cup cone to Moulds for further process of Bottom heating, knurling and Top curling. Moreover, this machine has certain additional features like photoelectric sensors for paper feeding and cup counting.",
      image: paperCupMachineImage,
      title: "Disposable Cup Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "High-Speed Synchronized Servos",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "Advanced Sealing Technology",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "designed using advanced technologies",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "This machine performs embossing, pasting and drying ",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "designed using advanced technologies",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "This machine performs embossing, pasting and drying ",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "designed using advanced technologies",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "This machine performs embossing, pasting and drying ",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "designed using advanced technologies",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "This machine performs embossing, pasting and drying ",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "designed using advanced technologies",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "This machine performs embossing, pasting and drying ",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "designed using advanced technologies",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "This machine performs embossing, pasting and drying ",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "designed using advanced technologies",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "This machine performs embossing, pasting and drying ",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    {
      firstname: "Paper Bowl ",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Bowl Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "designed using advanced technologies",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "This machine performs embossing, pasting and drying ",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "designed using advanced technologies",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "This machine performs embossing, pasting and drying ",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      items: [
        {
          icon: <FaCircleNotch className="text-blue-500 text-3xl" />,
          text: "designed using advanced technologies",
        },
        {
          icon: <FaCircleNotch className="text-green-500 text-3xl" />,
          text: "This machine performs embossing, pasting and drying ",
        },
        {
          icon: <FaCircleNotch className="text-yellow-500 text-3xl" />,
          text: "Two-Step Curling Process",
        },
        {
          icon: <FaCircleNotch className="text-red-500 text-3xl" />,
          text: "Comprehensive Control System with PLC + HMI",
        },
      ],
    },
    
  ];

  const filteredCards =
    activeStep === 0
      ? cards
      : cards.filter((card) => {
          if (activeStep === 1) return card.title.includes("Cup");
          if (activeStep === 2) return card.title.includes("Bowl");
          if (activeStep === 3) return card.title.includes("Bag");
          if (activeStep === 4) return card.title.includes("Plate");
          if (activeStep === 5) return card.title.includes("Straw");
        });

  return (
    <div className="container h-full mt-14 mx-2 px-4">
      <Stepper onStepChange={setActiveStep} />
      <div className="grid h-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-4">
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            firstname={card.firstname}
            secondname={card.secondname}
            image={card.image}
            title={card.title}
            description={card.description}
            speed={card.speed}
            unit={card.unit}
            icon={card.icon}
            items={card.items}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeMachine;
