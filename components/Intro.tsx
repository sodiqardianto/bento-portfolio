"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Intro() {
  return (
    <>
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 md:col-span-3 md:row-span-4 "
        )}
      >
        <h6 className="text-sm font-light text-gray-500 dark:text-gray-400">
          welcome
        </h6>
        <div className="flex flex-col justify-between h-full">
          <div className="flex-row text-xl font-light m-0 dark:text-white">
            Hi, I&apos;m <span className="font-bold">Sodiq Ardianto</span>, a{" "}
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                1000,
                "Software Engineer",
                1000,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />{" "}
            <br />
            specialized in web development. I love creating beautiful and
            functional websites and applications.
          </div>
          <div className="flex gap-2">
            <button className="px-2 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
              <IconBrandGithub className="h-5 w-5 inline" />
            </button>
            <button className="px-2 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
              <IconBrandLinkedin className="h-5 w-5 inline" />
            </button>
            <button className="px-2 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
              <IconBrandInstagram className="h-5 w-5 inline" />
            </button>
            <button className="px-2 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
              <IconBrandTiktok className="h-5 w-5 inline" />
            </button>
            <button className="px-2 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
              <IconBrandYoutube className="h-5 w-5 inline" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
