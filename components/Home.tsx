"use client";

import React from "react";
import { FloatingNavDemo } from "./Navbar";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "./ui/button";
import { GitHubLogoIcon, ResumeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Home = () => {
  const words = [
    {
      text: "A",
      className: "text-3xl lg:5xl",
    },
    {
      text: "Software",
      className: "text-3xl lg:5xl",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500 text-3xl lg:5xl",
    },
  ];

  return (
    <>
      <div
        id="home"
        className="w-full h-screen flex items-center justify-center flex-col "
      >
        <FloatingNavDemo />
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
          <h2 className="text-neutral-600 dark:text-neutral-200 text-4xl sm:text-base lg:text-5xl font-bold">
            <span className="text-blue-500 dark:text-blue-500">Hey,</span> I'm
            Arkya Patwa
          </h2>
          <TypewriterEffectSmooth words={words} />
          <div className="flex gap-6">
            <Button>Download Cv</Button>
            <Link href={"https://www.github.com/Arkyapatwa"} target="_blank">
              <Button variant={"secondary"} className="flex gap-2">
                <GitHubLogoIcon />
                Github
              </Button>
            </Link>
          </div>
        </div>
        {/* <BackgroundBeams /> */}
      </div>
    </>
  );
};

export default Home;
