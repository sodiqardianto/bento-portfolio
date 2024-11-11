"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { IconSun } from "@tabler/icons-react";
// import { IconWindowMaximize } from "@tabler/icons-react";

export default function Mode() {
  return (
    <>
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-red-100 border border-transparent flex flex-col space-y-4 md:row-span-1"
        )}
      >
        <div className="flex gap-2 justify-center items-center">
          <button className="px-1 py-1 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500 flex justify-center items-center">
            <IconSun className="h-5 w-5 flex justify-center items-center" />
          </button>
          <button className="px-1 py-1 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
            <IconSun className="h-5 w-5 flex justify-center items-center" />
          </button>
          <button className="px-1 py-1 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
            <IconSun className="h-5 w-5 flex justify-center items-center" />
          </button>{" "}
          |
          <button className="px-1 py-1 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
            <IconSun className="h-5 w-5 flex justify-center items-center" />
          </button>
        </div>
      </div>
    </>
  );
}
