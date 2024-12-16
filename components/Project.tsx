"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";
import { limit45Alfhabet } from "@/app/utils/limit45Alfhabet";
import { ProjectInterface } from "@/interfaces/projects.interface";

export default function Project() {
  const projects: ProjectInterface[] = [];

  return (
    <>
      <div className="md:col-span-1 md:row-span-4 bg-white dark:bg-zinc-900 p-6 dark:text-white border border-zinc-400 hover:border-blue-500 rounded-lg">
        <div className="flex justify-between">
          <h6 className="text-lg font-light text-black mb-4 dark:text-white">
            Project
          </h6>
          <h6 className="text-lg font-bold">
            <Link href="/projects">
              <IconExternalLink className="h-5 w-5 inline dark:text-white" />
            </Link>
          </h6>
        </div>
        <div className="flex flex-col h-full space-y-2">
          {projects.length === 0 ? (
            <p className="text-center text-neutral-600 dark:text-neutral-400">
              No project available
            </p>
          ) : (
            <ul className="max-w-2xl mx-auto w-full gap-2 max-h-[400px] overflow-y-scroll scrollbar-thumb-transparent scrollbar-thin scrollbar-track-transparent">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="p-2 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                >
                  <div className="flex gap-2 flex-col md:flex-row ">
                    <div>
                      <Image
                        width={100}
                        height={100}
                        src={project.image}
                        alt={project.title}
                        className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top min-w-14 min-h-14"
                      />
                    </div>
                    <div className="">
                      <h3 className="font-medium text-black dark:text-neutral-200 text-center md:text-left">
                        {limit45Alfhabet(project.title)}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
