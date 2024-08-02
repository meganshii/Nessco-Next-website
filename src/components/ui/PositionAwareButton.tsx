import React, { useRef } from "react";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";
import styles from "./PositionAwareButton.module.css";

interface PositionAwareButtonProps {
  text: string;
  icon?: boolean; // Optional prop to show/hide icon
  textColor?: string; // Optional prop for text color
  iconColor?: string; // Optional prop for icon color
  bgColor?:string;
}

const PositionAwareButton: React.FC<PositionAwareButtonProps> = ({ text, icon = false, textColor = "#000", iconColor = "#000",bgColor="transparrent" }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (buttonRef.current) {
      const span = buttonRef.current.querySelector("span");
      if (span) {
        const { left, top } = buttonRef.current.getBoundingClientRect();
        const relX = e.clientX - left;
        const relY = e.clientY - top;
        requestAnimationFrame(() => {
          span.style.setProperty("--x", `${relX}px`);
          span.style.setProperty("--y", `${relY}px`);
        });
      }
    }
  };

  return (
    <Link
      ref={buttonRef}
      className={styles.btnPosnawr}
      href="/"
      onMouseMove={handleMouseMove}
      style={{ color: textColor,backgroundColor:bgColor }} // Set text color dynamically
    >
      {text}
      {icon && < IoIosArrowDropright className={styles.icon} style={{ color: iconColor }} />} {/* Set icon color dynamically */}
      <span></span>
    </Link>
  );
};

export default PositionAwareButton;
