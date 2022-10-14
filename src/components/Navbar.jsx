import React from "react";
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";
import Image from "next/image";
import  { useState } from "react";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <nav className="shadow-sm fixed w-full z-10">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center  mx-20  justify-between w-full">
                        <div className="flex justify-center items-center flex-shrink-0 ">
                              <Image src="/soai_logo_blue.svg" width="180" height="180" />
							</div>
                          
                            <div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
                                
									<Link
										activeClass="Home"
										to="Home"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-white-600 font-semibold px-3 py-2 text-md hover:font-bold"
									>
										Home
									</Link>
									<Link
										activeClass="Talks"
										to="Talks"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-white-600 font-semibold px-3 py-2 text-md hover:font-bold"
									>
										Talks
									</Link>
									<Link
										activeClass="Goals"
										to="Goals"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-white-600 font-semibold px-3 py-2 text-md hover:font-bold"
									>
										Goals
									</Link>

									<Link
										activeClass="Partners"
										to="Partners"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-white-600 font-semibold px-3 py-2 text-md hover:font-bold"
									>
										Partners
									</Link>

									<Link
										activeClass="Events"
										to="Events"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-white-600 font-semibold px-3 py-2 text-md hover:font-bold"
									>
										Events
									</Link>
								</div>
							</div>
                        </div>
                        <div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-[#180d5b]-600 inline-flex items-center justify-center p-2 rounded-md text-white  "
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
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/home"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-NBlue text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/Talks"
									activeClass="Talks"
									to="Talks"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-NBlue text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Talks
								</Link>

								<Link
									href="/Goals"
									activeClass="Goals"
									to="Goals"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-NBlue text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Goals
								</Link>
								<Link
									href="/Partners"
									activeClass="Partners"
									to="Partners"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-NBlue text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Partners
								</Link>

								<Link
									href="/Events"
									activeClass="Events"
									to="Events"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-NBlue text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Events
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;