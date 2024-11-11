"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { IconMail } from "@tabler/icons-react";

export default function GetInTouch() {
  const handleClick = () => {
    window.location.href = "mailto:sodiqardianto@gmail.com";
  };
  return (
    <>
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 md:row-span-1"
        )}
      >
        <div className="flex flex-col justify-between h-full">
          <button
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
            onClick={handleClick}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl overflow-hidden relative">
              {/* Text Border Magic */}
              <span className="absolute left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:translate-x-[200%]">
                Get in touch
              </span>

              {/* Icon Mail */}
              <span className="absolute left-[-50px] opacity-0 transform -translate-x-full transition-all duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:opacity-100">
                <IconMail className="h-5 w-5 flex justify-center items-center" />
              </span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
