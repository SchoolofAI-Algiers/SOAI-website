import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";
import { useState } from "react";

const navlinks = ["Home", "Talks", "Goals", "Partners", "Events"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // TO DO: change bg in md to transparent at first then blue maybe
    <nav className="top-0 shadow-sm fixed w-full z-10 md:bg-[#6a6491] bg-white">
      <div className="w-full">
        <div className="flex items-center h-20 w-full">
          <div className="flex items-center mx-20 justify-between w-full">
            <div className="flex justify-center items-center flex-shrink-0">
              <Image src="/soai_logo_blue.svg" width="180" height="180" />
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navlinks.map((section) => (
                  <Link
                    key={section}
                    activeClass={section}
                    spy={true}
                    to={section}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-white font-semibold px-3 py-2 text-md hover:text-[#43D9DE]"
                  >
                    {section}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mr-10 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-[#180d5b]-600 inline-flex items-center justify-center p-2 rounded-md text-NBlue"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navlinks.map((section) => (
              <Link
                key={section}
                activeClass={section}
                to={section}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:bg-NBlue text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {section}
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
}
