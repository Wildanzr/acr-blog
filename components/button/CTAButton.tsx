"use client";

import { motion } from "framer-motion";
import { Body } from "@/components";

const CTAButton = ({ href, textProp }: CTAButtonProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Prevent the default behavior of jumping to the anchor
    e.preventDefault();

    // Get the href attribute
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    // Get the element id ans use scrollIntoView
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    })
  }
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      onClick={handleScroll}
      className="flex items-center justify-center px-[10px] py-[5px] bg-redprimary"
    >
      <Body {...textProp} />
    </motion.a>
  );
};

export default CTAButton;
