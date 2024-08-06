"use client";
import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import CountryLayout from "../Layout/CountryLayout";
import SearchBarLayout from "../Layout/SearchBarLayout";
import AccountLayout from "../Layout/AccountLayout";
import ProfileLayout from "../Layout/ProfileLayout";
import ContactForm from "../Contact/Contact";
import Logo from "../../../public/assets/Logo.png";
import { VscAccount } from "react-icons/vsc";

const RightNavbar: React.FC = memo(() => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [heading, setHeading] = useState<string | null>("");
  const [open, setOpen] = useState(false);
  const [isFlagOpen, setIsFlagOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isContactFormVisible, setContactFormVisible] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const accountRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null);
    setHeading("");
    setIsVisible(true);
  }, []);

  const handleAccount = useCallback(() => {
    setIsFlagOpen(false);
    setProfileOpen(false);
    setOpenSearch(false);
    setAccountOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
      setAccountOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    console.log("Visibility updated:", { isFlagOpen, openSearch, profileOpen, accountOpen });
    setIsVisible(!(isFlagOpen || openSearch || profileOpen || accountOpen));
  }, [isFlagOpen, openSearch, profileOpen, accountOpen]);

  return (
    <div className={`w-full max-w-screen-2xl lg:w-1/5 justify-center relative  top-0 right-0 ${hoveredItem ? "rounded-t-lg" : "rounded-lg"}`}>
      <div className="flex items-center gap-4 justify-center h-14 px-4">
        <span onMouseEnter={handleMouseLeave} className={`w-full h-10 z-30 hidden lg:flex justify-end items-center gap-3 ${hoveredItem ? "text-black" : "text-black"}`}>
          <CountryLayout
          />
          <SearchBarLayout
            setIsFlagOpen={setIsFlagOpen}
            openSearch={openSearch}
            setOpenSearch={setOpenSearch}
            setProfileOpen={setProfileOpen}
            setAccountOpen={setAccountOpen}
          />
          <ProfileLayout
            profileOpen={profileOpen}
            setIsFlagOpen={setIsFlagOpen}
            setOpenSearch={setOpenSearch}
            setProfileOpen={setProfileOpen}
            setAccountOpen={setAccountOpen}
          />
          <div className="relative">
            <VscAccount onClick={handleAccount} className="text-18 cursor-pointer" />
            {accountOpen && <div ref={accountRef}><AccountLayout /></div>}
          </div>
          <ContactForm
            isContactFormVisible={isContactFormVisible}
            setContactFormVisible={setContactFormVisible}
            isVisible={isVisible}
            setIsFlagOpen={setIsFlagOpen}
            setOpenSearch={setOpenSearch}
            setProfileOpen={setProfileOpen}
            setAccountOpen={setAccountOpen}
          />
        </span>
        <div className="flex lg:hidden rounded-3xl px-4 mx-6 justify-between items-center w-full">
          <Link href="/" onMouseEnter={handleMouseLeave} className="z-30 h-10 rounded-2xl flex pr-2 items-center">
            <Image className="z-30 h-6 w-auto" src={Logo} alt="Logo" width={100} height={100} />
          </Link>
          <div className="flex items-center">
            <ProfileLayout
              profileOpen={profileOpen}
              setIsFlagOpen={setIsFlagOpen}
              setOpenSearch={setOpenSearch}
              setProfileOpen={setProfileOpen}
              setAccountOpen={setAccountOpen}
            />
            <span className="text-2xl pr-4 cursor-pointer" onClick={toggleMenu}>
              {open ? <FiX /> : <FiMenu />}
            </span>
          </div>
        </div>
      </div>
      {open && (
        <div className={`fixed bg-white w-full top-20 overflow-y-auto bottom-0 py-20 transition-transform duration-300 transform ${open ? "translate-x-0" : "translate-x-full"}`}>
          {/* Additional content can go here */}
        </div>
      )}
    </div>
  );
});

RightNavbar.displayName = "RightNavbar";

export default RightNavbar;
