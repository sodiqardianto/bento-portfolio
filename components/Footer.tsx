"use client";
import React from "react";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <>
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 md:row-span-1 justify-center items-center"
        )}
      >
        <h6 className="text-sm font-light">
          &copy; {new Date().getFullYear()} | Crafted with ❤️ by Sodiq A.
        </h6>
      </div>
    </>
  );
}
