"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useThemeContext } from "@/context/themeContext";

export default function Mode() {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 md:row-span-1"
        )}
      >
        <div className="flex gap-2 justify-center items-center">
          <button className="px-1 py-1 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500 flex justify-center items-center">
            <IconSun className="h-5 w-5 flex justify-center items-center" />
          </button>
          <button className="px-1 py-1 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
            <IconSun className="h-5 w-5 flex justify-center items-center" />
          </button>
          <button className="px-1 py-1 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
            <IconSun className="h-5 w-5 flex justify-center items-center" />
          </button>{" "}
          <span className="text-gray-500 dark:text-gray-400">|</span>
          <button
            className="px-1 py-1 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <IconSun className="h-5 w-5 flex justify-center items-center" />
            ) : (
              <IconMoon className="h-5 w-5 flex justify-center items-center" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
