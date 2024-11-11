"use client";
import React, { createElement } from "react";
import { cn } from "@/lib/utils";
import { IconUserStar } from "@tabler/icons-react";
export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      institution: "Paramadina University, Jakarta",
      period: "Auguts 2022 - Present",
      icon: IconUserStar,
    },
    {
      title: "Web Developer",
      institution: "PT. Petra Sejahtera Abadi, Tangerang",
      period: "September 2021 - June 2023",
      icon: IconUserStar,
    },
  ];

  return (
    <>
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 md:row-span-5"
        )}
      >
        <h6 className="text-lg font-bold dark:text-white">Experience</h6>
        <div className="flex flex-col h-full space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-300 dark:bg-gray-700 -translate-x-1/2" />
              )}

              {/* Timeline dot and icon */}
              <div className="absolute left-0 top-1 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-2 border-blue-400 dark:border-blue-600 flex items-center justify-center">
                {createElement(exp.icon, {
                  size: 16,
                  className: "text-blue-500 dark:text-blue-400",
                })}
              </div>

              {/* Content */}
              <div className="dark:bg-neutral-800 rounded-lg p-4 ml-1 border-2 border-black dark:border-white bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]">
                <h3 className="font-semibold text-base text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {exp.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  {exp.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
