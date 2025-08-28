"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface NavHeaderProps {
  activeSection?: string;
}

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 md:h-12"
    />
  );
};

const Tab = ({
  children,
  setPosition,
  onClick,
  isActive,
}: {
  children: React.ReactNode;
  setPosition: any;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={onClick}
      className={cn(
        "relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase mix-blend-difference md:px-5 md:py-3 md:text-base transition-colors",
        isActive ? "text-cyan-400" : "text-white"
      )}
    >
      {children}
    </li>
  );
};

function NavHeader({ activeSection }: NavHeaderProps) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <ul
        className="relative mx-auto flex w-fit rounded-full border-2 border-white/20 bg-black/80 backdrop-blur-md p-1"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        {navItems.map((item) => (
          <Tab 
            key={item.id}
            setPosition={setPosition}
            onClick={() => scrollToSection(item.id)}
            isActive={activeSection === item.id}
          >
            {item.label}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
}

export default NavHeader;