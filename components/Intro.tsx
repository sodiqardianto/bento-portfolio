"use client";
import React, { createElement } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Intro() {
  const socials = [
    {
      name: "Github",
      url: "https://github.com/sodiqardianto",
      icon: IconBrandGithub,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/sodiqardianto/",
      icon: IconBrandLinkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sodiqardianto/",
      icon: IconBrandInstagram,
    },
    {
      name: "Tiktok",
      url: "https://www.tiktok.com/@sodiqardianto",
      icon: IconBrandTiktok,
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@sodiqardianto",
      icon: IconBrandYoutube,
    },
  ];

  return (
    <>
      <div className="md:col-span-3 md:row-span-2 bg-white dark:bg-zinc-900 p-6 text-white border border-zinc-400 hover:border-blue-500 rounded-lg min-h-56">
        <h6 className="text-sm font-light text-gray-500 dark:text-gray-400">
          welcome
        </h6>
        <div className="flex flex-col justify-between h-full pb-4">
          <div className="flex-row text-xl font-light m-0 text-black dark:text-white">
            Hi, I&apos;m <span className="font-bold">Sodiq Ardianto</span>, a
            passionate{" "}
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
            specializing in web development. I enjoy creating responsive and
            functional websites that deliver seamless user experiences. Beyond
            coding, I love exploring new technologies and tackling challenges
            with creative solutions.
          </div>
          <div className="flex gap-2">
            {socials.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  key={index}
                  className="p-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-500 rounded-lg"
                >
                  {createElement(item.icon, { className: "h-5 w-5" })}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
