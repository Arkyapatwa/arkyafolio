import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="h-16 w-full flex items-center justify-between">
        <h3 className="text-black text-4xl mx-7">A</h3>
        <div className="flex gap-12 flex-row mx-20">
          <div className="text-black flex items-center">Home</div>
          <div className="text-black flex items-center">About</div>
          <div className="text-black flex items-center">Projects</div>
          <div className="text-black flex items-center">Contact</div>
          <div>
            {theme === "light" ? (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme("dark")}
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme("light")}
                >
                  <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
