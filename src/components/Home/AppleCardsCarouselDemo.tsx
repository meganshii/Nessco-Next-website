"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import image from "../../../public/assets/image.png";
import myimage from "../../../public/assets/BgForAbout.png";
import PositionAwareButton from "../ui/PositionAwareButton";
import Breadcrumb from "../ui/Breadcrumb";
import { FaCircleNotch } from "react-icons/fa";

// Define the type for card data
interface CardData {
  content: React.ReactNode;
  category: string;
  firstname: string;
  secondname: string;
  description: string;
  image: StaticImageData;
  title: string;
  speed: number;
  unit: string;
  icon: StaticImageData;
}

interface AppleCardsCarouselDemoProps {
  filteredCardsData: CardData[];
}

export function AppleCardsCarouselDemo({
  filteredCardsData,
}: AppleCardsCarouselDemoProps) {
  const cards = filteredCardsData.map((card: CardData, index: number) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full -mt-14">
      <Carousel items={cards} />
    </div>
  );
}

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface DummyContentProps {
  image: StaticImageData;
  title: string;
  description: string;
  breadcrumbItems: BreadcrumbItem[];
  buttons: { text: string; icon: boolean }[];
  items: { className: string; text: string }[];
  firstname: string;
  secondname: string;
}

const DummyContent: React.FC<DummyContentProps> = ({
  image,
  title,
  description,
  breadcrumbItems,
  buttons,
  items,
  firstname,
  secondname,
}) => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 h-80 rounded-3xl mb-4">
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
          <div className="relative w-full max-w-[78rem] h-[90vh] bg-white rounded-xl p-6 transform transition-transform overflow-y-auto z-10">
            <Breadcrumb items={breadcrumbItems} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col items-center">
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  className="rounded-2xl object-contain h-[400px]"
                />
                <div className="flex w-[60%] -ml-14 space-x-2 justify-center mt-0">
                  {buttons.map((button, index) => (
                    <PositionAwareButton
                      key={index}
                      text={button.text}
                      icon={button.icon}
                      width="170px"
                    />
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-4">
                  <span className="text-red-600">{firstname}</span>
                  <span className="text-[#483d78] ml-2">{secondname}</span>
                </h1>
                <p className="text-gray-700 mb-4">{description}</p>
                <ul className="list-none grid grid-cols-2 gap-4 text-gray-700">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FaCircleNotch className={item.className} />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DummyContent;

export const cardsData: CardData[] = [
  {
    content: (
      <DummyContent
        image={image}
        title="Paper Cup Machine"
        description="Experience unparalleled efficiency with our Paper Cup Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Cup Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Paper"
        secondname="Cup Machine"
      />
    ),
    category: "cup",
    firstname: "Paper",
    secondname: "Cup Machine",
    description:
      "Experience unparalleled efficiency with our Paper Cup Machine...",
    image: image,
    title: "Paper Cup Machine",
    speed: 100,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Paper Bowl Machine"
        description="Experience unparalleled efficiency with our Paper Bowl Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Bowl Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Paper"
        secondname="Bowl Machine"
      />
    ),
    category: "bowl",
    firstname: "Paper",
    secondname: "Bowl Machine",
    description:
      "Experience unparalleled efficiency with our Paper Bowl Machine...",
    image: image,
    title: "Paper Bowl Machine",
    speed: 120,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Die Cutting Machine"
        description="Experience unparalleled efficiency with our Die Cutting Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Die Cutting Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Die"
        secondname="Cutting Machine"
      />
    ),
    category: "cutting",
    firstname: "Die",
    secondname: "Cutting Machine",
    description:
      "Experience unparalleled efficiency with our Die Cutting Machine...",
    image: image,
    title: "Die Cutting Machine",
    speed: 150,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Flexo Printing Machine"
        description="Experience unparalleled efficiency with our Flexo Printing Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Flexo Printing Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Flexo"
        secondname="Printing Machine"
      />
    ),
    category: "printing",
    firstname: "Flexo",
    secondname: "Printing Machine",
    description:
      "Experience unparalleled efficiency with our Flexo Printing Machine...",
    image: image,
    title: "Flexo Printing Machine",
    speed: 160,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Slitting Machine"
        description="Experience unparalleled efficiency with our Slitting Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Slitting Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Slitting"
        secondname="Machine"
      />
    ),
    category: "slitting",
    firstname: "Slitting",
    secondname: "Machine",
    description:
      "Experience unparalleled efficiency with our Slitting Machine...",
    image: image,
    title: "Slitting Machine",
    speed: 140,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Coating Machine"
        description="Experience unparalleled efficiency with our Coating Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Coating Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Coating"
        secondname="Machine"
      />
    ),
    category: "coating",
    firstname: "Coating",
    secondname: "Machine",
    description:
      "Experience unparalleled efficiency with our Coating Machine...",
    image: image,
    title: "Coating Machine",
    speed: 180,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Paper Bucket Machine"
        description="Experience unparalleled efficiency with our Paper Bucket Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Bucket Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Paper"
        secondname="Bucket Machine"
      />
    ),
    category: "bucket",
    firstname: "Paper",
    secondname: "Bucket Machine",
    description:
      "Experience unparalleled efficiency with our Paper Bucket Machine...",
    image: image,
    title: "Paper Bucket Machine",
    speed: 190,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Paper Lid Machine"
        description="Experience unparalleled efficiency with our Paper Lid Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Lid Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Paper"
        secondname="Lid Machine"
      />
    ),
    category: "lid",
    firstname: "Paper",
    secondname: "Lid Machine",
    description:
      "Experience unparalleled efficiency with our Paper Lid Machine...",
    image: image,
    title: "Paper Lid Machine",
    speed: 110,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Insulated Cup Machine"
        description="Experience unparalleled efficiency with our Insulated Cup Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Insulated Cup Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Insulated"
        secondname="Cup Machine"
      />
    ),
    category: "cup",
    firstname: "Insulated",
    secondname: "Cup Machine",
    description:
      "Experience unparalleled efficiency with our Insulated Cup Machine...",
    image: image,
    title: "Insulated Cup Machine",
    speed: 130,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Sleeve Making Machine"
        description="Experience unparalleled efficiency with our Sleeve Making Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Sleeve Making Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Sleeve"
        secondname="Making Machine"
      />
    ),
    category: "sleeve",
    firstname: "Sleeve",
    secondname: "Making Machine",
    description:
      "Experience unparalleled efficiency with our Sleeve Making Machine...",
    image: image,
    title: "Sleeve Making Machine",
    speed: 125,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Corrugation Machine"
        description="Experience unparalleled efficiency with our Corrugation Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Corrugation Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Corrugation"
        secondname="Machine"
      />
    ),
    category: "corrugation",
    firstname: "Corrugation",
    secondname: "Machine",
    description:
      "Experience unparalleled efficiency with our Corrugation Machine...",
    image: image,
    title: "Corrugation Machine",
    speed: 135,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Paper Handle Cup Machine"
        description="Experience unparalleled efficiency with our Paper Handle Cup Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Handle Cup Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Paper Handle"
        secondname="Cup Machine"
      />
    ),
    category: "cup",
    firstname: "Paper Handle",
    secondname: "Cup Machine",
    description:
      "Experience unparalleled efficiency with our Paper Handle Cup Machine...",
    image: image,
    title: "Paper Handle Cup Machine",
    speed: 145,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Paper Bag Machine"
        description="Experience unparalleled efficiency with our Paper Bag Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Bag Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Paper"
        secondname="Bag Machine"
      />
    ),
    category: "bag",
    firstname: "Paper",
    secondname: "Bag Machine",
    description:
      "Experience unparalleled efficiency with our Paper Bag Machine...",
    image: image,
    title: "Paper Bag Machine",
    speed: 150,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Paper Straw Machine"
        description="Experience unparalleled efficiency with our Paper Straw Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Straw Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Paper"
        secondname="Straw Machine"
      />
    ),
    category: "straw",
    firstname: "Paper",
    secondname: "Straw Machine",
    description:
      "Experience unparalleled efficiency with our Paper Straw Machine...",
    image: image,
    title: "Paper Straw Machine",
    speed: 160,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Paper Cutlery Machine"
        description="Experience unparalleled efficiency with our Paper Cutlery Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Cutlery Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Paper"
        secondname="Cutlery Machine"
      />
    ),
    category: "cutlery",
    firstname: "Paper",
    secondname: "Cutlery Machine",
    description:
      "Experience unparalleled efficiency with our Paper Cutlery Machine...",
    image: image,
    title: "Paper Cutlery Machine",
    speed: 165,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Plastic Lid Machine"
        description="Experience unparalleled efficiency with our Plastic Lid Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Plastic Lid Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Plastic"
        secondname="Lid Machine"
      />
    ),
    category: "lid",
    firstname: "Plastic",
    secondname: "Lid Machine",
    description:
      "Experience unparalleled efficiency with our Plastic Lid Machine...",
    image: image,
    title: "Plastic Lid Machine",
    speed: 170,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Paper Forming Machine"
        description="Experience unparalleled efficiency with our Paper Forming Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Forming Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Paper"
        secondname="Forming Machine"
      />
    ),
    category: "forming",
    firstname: "Paper",
    secondname: "Forming Machine",
    description:
      "Experience unparalleled efficiency with our Paper Forming Machine...",
    image: image,
    title: "Paper Forming Machine",
    speed: 175,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Lunch Box Machine"
        description="Experience unparalleled efficiency with our Lunch Box Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Lunch Box Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Lunch"
        secondname="Box Machine"
      />
    ),
    category: "box",
    firstname: "Lunch",
    secondname: "Box Machine",
    description:
      "Experience unparalleled efficiency with our Lunch Box Machine...",
    image: image,
    title: "Lunch Box Machine",
    speed: 180,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Paper Plate Machine"
        description="Experience unparalleled efficiency with our Paper Plate Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Plate Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Paper"
        secondname="Plate Machine"
      />
    ),
    category: "plate",
    firstname: "Paper",
    secondname: "Plate Machine",
    description:
      "Experience unparalleled efficiency with our Paper Plate Machine...",
    image: image,
    title: "Paper Plate Machine",
    speed: 185,
    unit: "PCS/MIN",
    icon: image,
  },
  {
    content: (
      <DummyContent
        image={image}
        title="Carton Erecting Machine"
        description="Experience unparalleled efficiency with our Carton Erecting Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Carton Erecting Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-blue-500 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-green-500 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-yellow-500 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-red-500 text-3xl",
            text: "Comprehensive Control System with PLC + HMI",
          },
        ]}
        firstname="Carton"
        secondname="Erecting Machine"
      />
    ),
    category: "carton",
    firstname: "Carton",
    secondname: "Erecting Machine",
    description:
      "Experience unparalleled efficiency with our Carton Erecting Machine...",
    image: image,
    title: "Carton Erecting Machine",
    speed: 200,
    unit: "PCS/MIN",
    icon: image,
  },
];
