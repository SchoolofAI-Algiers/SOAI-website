import React, { useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <BsArrowUpShort
      onClick={scrollToTop}
      size="50px"
      className={`z-50 cursor-pointer rounded-full bg-blue p-1 text-white shadow-md transition duration-200 ease-in-out hover:scale-110 hover:bg-primary-500 hover:shadow-xl ${visible} 'mt-8 mb-4 inline' : ""`}
    />
  );
}
