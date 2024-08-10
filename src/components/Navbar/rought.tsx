"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AboutLayout from "../Layout/AboutLayout";
import SupportLayout from "../Layout/SupportLayout";
import { supporItem } from "@/components/Constants/Navbar/support-data";
import { DataBankItem } from "../Constants/Navbar/resources-data";
import ProductLayout from "../Layout/ProductLayout";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/Logo.png";
import RightNavbar from "./RightNavbar";
import ApplicationPage from "../Layout/ApplicationLayout";
import SolutionLayout from "../Layout/Solution";
import { Menu, MenuItem } from "./nav-menue";

export default function NavbarDemo() {
  return (
    <div className="pt-[80px] max-w-screen-2xl mx-auto"> {/* Adjust top padding to offset the fixed navbar */}
      <Navbar />
    </div>
  );
}

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full transition-all duration-300 ease-in-out",
        scrolling
          ? "bg-[#f2f2f2]/70 backdrop-blur-xl"
          : "bg-[#f2f2f2]/70 backdrop-blur-xl"
      )}
    >
      <div className="w-1/5 ml-[1.4rem] flex justify-start items-center">
        <Link
          href="/"
          className="h-6 rounded-2xl lg:ml-4 flex justify-center items-center"
        >
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="h-[1.4rem] w-full"
          />
        </Link>
      </div>
      <div className="w-3/5 flex items-center justify-center">
        <Menu>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
            setPosition={() => {}}
          >
            <AboutLayout />
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Products"
            setPosition={() => {}}
          >
            <ProductLayout
              setHoveredItem={() => {}}
              setHeading={() => {}}
              setIsVisible={() => {}}
            />
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Application"
            setPosition={() => {}}
          >
            <ApplicationPage />
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Solution"
            setPosition={() => {}}
          >
            <SolutionLayout />
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Support"
            setPosition={() => {}}
          >
            <SupportLayout
              setHoveredItem={() => {}}
              supporItem={supporItem}
              type=""
            />
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Resources"
            setPosition={() => {}}
          >
            <SupportLayout
              setHoveredItem={() => {}}
              supporItem={DataBankItem}
              type="Resources"
            />
          </MenuItem>
        </Menu>
      </div>
      <div className="w-1/5 mr-12 flex items-center justify-end">
        <RightNavbar />
      </div>
    </div>
  );
}
