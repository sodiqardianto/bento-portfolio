import { cn } from "@/lib/utils";
import React from "react";
import { LinkPreview } from "./ui/link-preview";
import {
  IconBrandGit,
  IconBrandLaravel,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react";

export default function AboutMe() {
  const techStack = [
    { name: "React", url: "https://react.dev/", icon: IconBrandReact },
    { name: "Next.js", url: "https://nextjs.org/", icon: IconBrandNextjs },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
      icon: IconBrandTypescript,
    },
    {
      name: "Express.js",
      url: "https://expressjs.com/",
      icon: IconBrandNodejs,
    },
    { name: "Laravel", url: "https://laravel.com/", icon: IconBrandLaravel },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
      icon: IconBrandMongodb,
    },
    { name: "MySQL", url: "https://www.mysql.com/", icon: IconBrandMysql },
    { name: "Git", url: "https://git-scm.com/", icon: IconBrandGit },
  ];

  return (
    <>
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 md:row-span-6"
        )}
      >
        <h6 className="text-lg font-bold dark:text-white">About Me</h6>
        <div className="flex flex-col justify-between h-full">
          <div className="flex-row text-base font-light m-0 dark:text-white">
            Hi, I&apos;m <span className="font-bold">Sodiq Ardianto</span>, a
            Software Engineer specialized in web development. I&apos;m
            passionate about creating innovative and user-friendly web
            applications that provide a seamless and enjoyable experience for
            users. My tech stack includes:
            <ul className="list-inside">
              <div className="flex justify-around">
                <div>
                  {techStack.slice(0, 4).map((tech, index) => (
                    <li key={index}>
                      {tech.url ? (
                        <>
                          <LinkPreview
                            url={tech.url}
                            className="font-bold justcefy-center"
                          >
                            {tech.icon && (
                              <tech.icon className="inline-block w-4 h-4" />
                            )}{" "}
                            {tech.name}
                          </LinkPreview>
                        </>
                      ) : (
                        tech.name
                      )}
                    </li>
                  ))}
                </div>
                <div>
                  {techStack.slice(4).map((tech, index) => (
                    <li key={index + 4}>
                      {tech.url ? (
                        <LinkPreview url={tech.url} className="font-bold">
                          {tech.icon && (
                            <tech.icon className="inline-block w-4 h-4" />
                          )}{" "}
                          {tech.name}
                        </LinkPreview>
                      ) : (
                        tech.name
                      )}
                    </li>
                  ))}
                </div>
              </div>
            </ul>
            And I&apos;m always eager to learn and grow in this ever-evolving
            field. Feel free to reach out if you have any questions or
            collaboration opportunities!
          </div>
        </div>
      </div>
    </>
  );
}
