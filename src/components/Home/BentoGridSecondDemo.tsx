import { cn } from "@/lib/utils";
import React from "react";
import iotImage from "../../../public/assets/iotImage.png"
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <>
      <BentoGrid className="w-full mt-6 mx-auto md:auto-rows-[10rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            type={item.type}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
      <BentoGrid className="w-full mt-4 mx-auto md:auto-rows-[23rem]">
        {items1.map((item, i) => (
          <BentoGridItem
            key={i}
            type={item.type}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            image={item.image}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <>
    <Image src={"https://i.pinimg.com/236x/50/fe/0e/50fe0e9bbb197e039a807785529f598f.jpg"} height={400} width={400} className="object-fill h-32 w-96 rounded-xl" alt={""} />
  </>
);

const items = [
  {
    type: "one",
    title: "Nessco Remote Control",
    description: "Maintenance System",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    type: "two",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
];
const items1 = [
  {
    type: "three",
    title: "In our Control Maintenance System, we can customize the IOT reports/data according to customer requirement. We can also do integration with customer ERP i.e. SAP, ORACLE, TCS ion and any other ERP.",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-2",
    image:iotImage,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    type: "four",
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header:<Skeleton />,
    className: "md:col-span-1",
    image:iotImage,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];
