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
  const [menuState, setMenuState] = useState({
    open: false,
    hoveredItem: null as string | null,
    heading: "",
  });

  const [visibilityState, setVisibilityState] = useState({
    isFlagOpen: false,
    profileOpen: false,
    openSearch: false,
    accountOpen: false,
    isContactFormVisible: false,
  });

  const [isVisible, setIsVisible] = useState(true);
  const accountRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = useCallback(() => {
    setMenuState((prev) => ({ ...prev, open: !prev.open }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMenuState({ ...menuState, hoveredItem: null, heading: "" });
    setIsVisible(true);
  }, [menuState]);

  const handleAccount = useCallback(() => {
    setVisibilityState((prev) => ({
      ...prev,
      isFlagOpen: false,
      profileOpen: false,
      openSearch: false,
      accountOpen: !prev.accountOpen,
    }));
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
      setVisibilityState((prev) => ({ ...prev, accountOpen: false }));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    const { isFlagOpen, openSearch, profileOpen, accountOpen } = visibilityState;
    setIsVisible(!(isFlagOpen || openSearch || profileOpen || accountOpen));
  }, [visibilityState]);

  return (
    <div className={`w-full max-w-screen-2xl justify-center relative top-0 ${menuState.hoveredItem ? "rounded-t-lg" : "rounded-lg"}`}>
      <div className="flex items-center gap-2 justify-center h-14">
        <span onMouseEnter={handleMouseLeave} className="w-full h-10 z-30 hidden lg:flex items-center gap-3 text-black">
          <CountryLayout />
          <SearchBarLayout
            setIsFlagOpen={(value) => setVisibilityState((prev) => ({ ...prev, isFlagOpen: value }))}
            openSearch={visibilityState.openSearch}
            setOpenSearch={(value) => setVisibilityState((prev) => ({ ...prev, openSearch: value }))}
            setProfileOpen={(value) => setVisibilityState((prev) => ({ ...prev, profileOpen: value }))}
            setAccountOpen={(value) => setVisibilityState((prev) => ({ ...prev, accountOpen: value }))}
          />
          <ProfileLayout
            profileOpen={visibilityState.profileOpen}
            setIsFlagOpen={(value) => setVisibilityState((prev) => ({ ...prev, isFlagOpen: value }))}
            setOpenSearch={(value) => setVisibilityState((prev) => ({ ...prev, openSearch: value }))}
            setProfileOpen={(value) => setVisibilityState((prev) => ({ ...prev, profileOpen: value }))}
            setAccountOpen={(value) => setVisibilityState((prev) => ({ ...prev, accountOpen: value }))}
          />
          <div className="relative">
            <VscAccount onClick={handleAccount} className="text-18 cursor-pointer" />
            {visibilityState.accountOpen && (
              <div ref={accountRef}>
                <AccountLayout />
              </div>
            )}
          </div>
          <ContactForm
            isContactFormVisible={visibilityState.isContactFormVisible}
            setContactFormVisible={(value) => setVisibilityState((prev) => ({ ...prev, isContactFormVisible: value }))}
            isVisible={isVisible}
            setIsFlagOpen={(value) => setVisibilityState((prev) => ({ ...prev, isFlagOpen: value }))}
            setOpenSearch={(value) => setVisibilityState((prev) => ({ ...prev, openSearch: value }))}
            setProfileOpen={(value) => setVisibilityState((prev) => ({ ...prev, profileOpen: value }))}
            setAccountOpen={(value) => setVisibilityState((prev) => ({ ...prev, accountOpen: value }))}
          />
        </span>
        <div className="flex lg:hidden rounded-3xl justify-between items-center w-full">
          <Link href="/" onMouseEnter={handleMouseLeave} className="z-30 h-10 rounded-2xl flex items-center">
            <Image className="z-30 h-6 w-auto" src={Logo} alt="Logo" width={100} height={100} />
          </Link>
          <div className="flex items-center">
            <ProfileLayout
              profileOpen={visibilityState.profileOpen}
              setIsFlagOpen={(value) => setVisibilityState((prev) => ({ ...prev, isFlagOpen: value }))}
              setOpenSearch={(value) => setVisibilityState((prev) => ({ ...prev, openSearch: value }))}
              setProfileOpen={(value) => setVisibilityState((prev) => ({ ...prev, profileOpen: value }))}
              setAccountOpen={(value) => setVisibilityState((prev) => ({ ...prev, accountOpen: value }))}
            />
            <span className="text-2xl cursor-pointer" onClick={toggleMenu}>
              {menuState.open ? <FiX /> : <FiMenu />}
            </span>
          </div>
        </div>
      </div>
      {menuState.open && (
        <div className="fixed bg-white w-full top-20 overflow-y-auto bottom-0 py-20 transition-transform duration-300 transform translate-x-0">
          {/* Additional content can go here */}
        </div>
      )}
    </div>
  );
});

RightNavbar.displayName = "RightNavbar";

export default RightNavbar;
