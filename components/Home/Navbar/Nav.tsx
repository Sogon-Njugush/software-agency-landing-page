"use client";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { HiBars4 } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`transition-all duration-200  h-[12vh] z-[100] fixed w-full ${
        navBg ? "bg-blue-900 shadow-md" : "fixed"
      }`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-col">
            <GrTechnology className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl font-bold text-white">
            Sogon Dev
          </h1>
        </div>
        {/* Navlink */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-white text-lg font-semibold hover:text-pink-300 transition-all duration-200">
              <p>{link.label}</p>
            </Link>
          ))}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="px-5 py-2.5 relative rounded-md group font-medium text-white inline-block overflow-hidden">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:blur-sm group-hover:opacity-80 rounded-md"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90 rounded-md group-hover:opacity-0 transition duration-300 ease-in-out"></span>
            <span className="relative z-10">Create Account</span>
          </a>
          {/* Theme toggler */}
          {/* Burger menu */}
          <HiBars4
            onClick={openNav}
            className="w-8 h-8 text-white cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
