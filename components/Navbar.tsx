"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="h-16 w-full flex items-center justify-between">
        <h3 className="text-4xl mx-7">A</h3>
        <div className="flex gap-12 flex-row mx-20">
          <div className="flex items-center">Home</div>
          <div className="flex items-center">About</div>
          <div className="flex items-center">Projects</div>
          <div className="flex items-center">Contact</div>
          <div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
