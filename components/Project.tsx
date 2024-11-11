"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IconWindowMaximize } from "@tabler/icons-react";
import Link from "next/link";
export default function Project() {
  const projects = [
    {
      img: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
      title: "Starter Template Laravel 11",
    },
    {
      img: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
      title: "Modern Portfolio with Next.js 13",
    },
  ];

  return (
    <>
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 md:row-span-6"
        )}
      >
        <div className="flex justify-between">
          <h6 className="text-lg font-bold dark:text-white">Project</h6>
          <h6 className="text-lg font-bold">
            <Link href="/projects">
              <IconWindowMaximize className="h-5 w-5 inline dark:text-white" />
            </Link>
          </h6>
        </div>
        <div className="flex flex-col h-full space-y-2">
          {projects.map((project, index) => (
            <ul className="max-w-2xl mx-auto w-full gap-2" key={index}>
              <div className="p-2 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
                <div className="flex gap-2 flex-col md:flex-row ">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src={project.img}
                      alt={project.title}
                      className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                    />
                  </div>
                  <div className="">
                    <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
