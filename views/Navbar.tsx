"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { H1 } from "@/components";
import { BsList } from "react-icons/bs";
import { useScrollDirection } from "@/hooks";

import { navLinks } from "@/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const scrollDirection = useScrollDirection();

  // Monitor scroll direction
  useEffect(() => {
    setIsMenuOpen(false);
  }, [scrollDirection]);

  return (
    <div
      className={`fixed ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } left-0 z-30 flex flex-col justify-between w-full transition-all duration-500 lg:backdrop-blur-md`}
    >
      <div className="flex flex-row items-center justify-between px-8 py-2 lg:px-14 bg-semiblack lg:bg-transparent">
        <H1
          text="ACRIG"
          color="text-whiteprimary hover:text-redprimary duration-150"
        />
        <BsList
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex text-4xl duration-150 cursor-pointer lg:hidden text-whiteprimary hover:text-redprimary"
        />
        <div className="flex-row hidden space-x-5 lg:flex">
          {navLinks.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              className="text-xl font-medium duration-150 font-jakarta text-whiteprimary hover:text-redprimary"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col w-full h-screen">
          <div className="flex flex-col w-full px-5 pb-2 space-y-2 bg-semiblack">
            <div className="border-[1px] border-whiteprimary w-full" />
            {navLinks.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                className="text-lg font-medium duration-150 font-jakarta text-whiteprimary hover:text-redprimary"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex w-full h-full bg-transparent"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
