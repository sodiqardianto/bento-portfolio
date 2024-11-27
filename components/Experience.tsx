"use client";
import React, { createElement } from "react";
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
      <div className="md:col-span-1 md:row-span-2 bg-white dark:bg-zinc-900 p-6 text-white border border-zinc-400 hover:border-blue-500 rounded-lg">
        <h6 className="text-lg font-light text-black mb-4 dark:text-white">
          Experience
        </h6>
        <div className="flex flex-col h-full space-y-2">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-300 dark:bg-gray-700 -translate-x-1/2" />
              )}

              {/* Timeline dot and icon */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white dark:bg-zinc-800 border-2 border-blue-400 dark:border-blue-600 flex items-center justify-center">
                {createElement(exp.icon, {
                  size: 16,
                  className: "text-black dark:text-white",
                })}
              </div>

              {/* Content */}
              <div className="ml-5">
                <h3 className="font-bold text-black dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-zinc-800 dark:text-gray-100 font-light">
                  {exp.institution}
                </p>
                <p className="text-sm text-zinc-500 dark:text-gray-500">
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
