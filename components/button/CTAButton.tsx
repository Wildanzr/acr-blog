'use client';

import Link from "next/link";
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
    });
  };
  return (
    <Link
      href={href}
      onClick={handleScroll}
      className="flex items-center justify-center px-[10px] py-[5px] bg-redprimary"
    >
      <Body {...textProp} />
    </Link>
  );
};

export default CTAButton;
