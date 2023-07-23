"use client";

import { useState } from "react";
import Link from "next/link";
import { H1 } from ".";
import { BsList } from "react-icons/bs";

import { navLinks } from "@/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-0 left-0 z-30 flex flex-col justify-between w-full">
      <div className="flex flex-row items-center justify-between px-8 lg:px-14 py-2 bg-semiblack lg:bg-transparent">
        <H1
          text="ACRIG"
          color="text-whiteprimary hover:text-redprimary duration-150"
        />
        <BsList
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex lg:hidden text-4xl duration-150 cursor-pointer text-whiteprimary hover:text-redprimary"
        />
        <div className="hidden lg:flex flex-row space-x-5">
          {navLinks.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              className="text-xl font-medium font-jakarta text-whiteprimary hover:text-redprimary duration-150"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col w-full h-screen">
          <div className="flex flex-col w-full space-y-2 px-5 pb-2 bg-semiblack">
            <div className="border-[1px] border-whiteprimary w-full" />
            {navLinks.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                className="text-lg font-medium font-jakarta text-whiteprimary hover:text-redprimary duration-150"
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
