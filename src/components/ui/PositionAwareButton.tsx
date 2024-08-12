import React, { useRef, useState } from "react";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";
import styles from "./PositionAwareButton.module.css";

interface PositionAwareButtonProps {
  text: string;
  icon?: boolean; // Optional prop to show/hide icon
  textColor?: string; // Optional prop for text color
  iconColor?: string; // Optional prop for icon color
  bgColor?: string; // Optional prop for background color
  hoveredTextColor?: string; // Optional prop for hovered text color
  width?: string;
}

const PositionAwareButton: React.FC<PositionAwareButtonProps> = ({
  text,
  icon = false,
  textColor = "#000",
  iconColor = "#000", // Keep the icon color black
  bgColor = "transparent",
  hoveredTextColor = "#fff",
  width = "150px",
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Link
      ref={buttonRef}
      className={styles.btnPosnawr}
      href="/"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        color: isHovered ? hoveredTextColor : textColor,
        backgroundColor: isHovered ? "white" : bgColor,
        width: width,
      }}
    >
      {text}
      {icon && (
        <IoIosArrowDropright
          className={styles.icon}
          style={{
            color: iconColor,
            backgroundColor: isHovered ? "white" : "transparent",
            borderRadius: "100%", 
          }}
        />
      )}
      <span></span>
    </Link>
  );
};

export default PositionAwareButton;
