import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import PlanBtn from "../nav-btn/PlanBtn";
import SavedBtn from "../nav-btn/SavedBtn";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="border-b border-[#1b1d21] bg-[#090a0d]">
      <div className="container mx-auto navbar h-14.5 min-h-14.5 bg-[#090a0d] px-4 shadow-none lg:px-8">

        {/* Navbar Start */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm px-2 text-[#aaff00] hover:bg-[#15180f] lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <NavLinks mobile />
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              width={22}
              height={22}
              alt="Fitlog logo"
              className="object-contain"
            />

            <span className="text-[18px] font-bold tracking-wide text-[#f2f3f5]">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex gap-1">
          <PlanBtn />
          <SavedBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;