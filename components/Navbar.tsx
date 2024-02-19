"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { BugIcon } from "lucide-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 hover:text-neutral-500 dark:hover:bg-slate-900 hover:rounded-full rounded-full " />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 hover:text-neutral-500 dark:hover:bg-slate-900 hover:rounded-full rounded-full " />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <BugIcon className="h-4 w-4 hover:text-neutral-500 dark:hover:bg-slate-900 hover:rounded-full rounded-full" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 hover:text-neutral-500 dark:hover:bg-slate-900 hover:rounded-full rounded-full" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

