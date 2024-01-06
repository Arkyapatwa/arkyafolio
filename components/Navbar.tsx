"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="h-16 w-full flex items-center justify-between shadow-md fixed top-0 overflow-visible">
        <span className="text-7xl mx-7 mt-10 font-serif">
          <b>A</b>
        </span>
        <div className="hidden md:flex gap-6 flex-row mx-20">
          <a href="#Home" className="flex items-center px-5">
            Home
          </a>
          <a href="#About" className="flex items-center px-5">
            About
          </a>
          <a href="#Project" className="flex items-center px-5">
            Projects
          </a>
          <a href="#Contact" className="flex items-center px-5">
            Contact
          </a>
          {/* <div>
            <Button
              variant={"secondary"}
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </div> */}
        </div>

      

        {/* shadcn drawer */}
        <Drawer>
          <DrawerTrigger className="text-3xl md:hidden flex items-center cursor-pointer mx-5">&#9776;</DrawerTrigger>
          <DrawerContent>
              <DrawerDescription className="flex flex-col gap-2 mx-4 my-8">
                {/* <div className="flex flex-col gap-2 mx-4 my-8"> */}
                  <a href="#Home" className="text-black hover:bg-slate-400 p-3 rounded-xl transition-all duration-500 ease-out">
                    Home
                  </a>
                  <a href="#About" className="text-black  hover:bg-slate-400 p-3 rounded-xl transition-all duration-500 ease-out">
                    About
                  </a>
                  <a href="#Project" className="text-black  hover:bg-slate-400 p-3 rounded-xl transition-all duration-500 ease-out">
                    Projects
                  </a>
                  <a href="#Contact" className="text-black  hover:bg-slate-400 p-3 rounded-xl transition-all duration-500 ease-out">
                    Contact
                  </a>
                {/* </div> */}
              </DrawerDescription>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
