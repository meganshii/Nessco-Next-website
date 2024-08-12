// src/components/Constants/Navbar/navbarData.ts
import AboutLayout from "../../Layout/AboutLayout";
import SupportLayout from "../../Layout/SupportLayout";
import ProductLayout from "../../Layout/ProductLayout";
import ApplicationPage from "../../Layout/ApplicationLayout";
import SolutionLayout from "../../Layout/Solution";
import { supporItem } from "./support-data";
import { DataBankItem } from "./resources-data";

export interface NavbarItem {
  name: string;
  component: React.ReactNode;
  type?: string;
  supporItem?: any;
}

export const navbarItems: NavbarItem[] = [
  {
    name: "About Us",
    component: <AboutLayout />,
  },
  {
    name: "Products",
    component: (
      <ProductLayout
        setHoveredItem={() => {}}
        setHeading={() => {}}
        setIsVisible={() => {}}
      />
    ),
  },
  {
    name: "Application",
    component: <ApplicationPage />,
  },
  {
    name: "Solution",
    component: <SolutionLayout />,
  },
  {
    name: "Support",
    component: (
      <SupportLayout
        setHoveredItem={() => {}}
        supporItem={supporItem}
        type={""}
      />
    ),
  },
  {
    name: "Resources",
    component: (
      <SupportLayout
        setHoveredItem={() => {}}
        supporItem={DataBankItem}
        type="Resources"
      />
    ),
  },
  
];
