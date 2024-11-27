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

export default function Skills() {
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
    <div className="md:col-span-1 md:row-span-2 bg-white dark:bg-zinc-900 p-6 border border-zinc-400 hover:border-blue-500 rounded-lg">
      <h6 className="text-lg font-light text-black mb-4 dark:text-white">
        Skills
      </h6>
      <div className="space-y-4">
        <ul className="list-inside">
          <div className="flex justify-around">
            <div>
              {techStack.slice(0, 4).map((tech, index) => (
                <li key={index} className="py-1">
                  {tech.url ? (
                    <>
                      <LinkPreview
                        url={tech.url}
                        className="font-bold hover:text-blue-500"
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
                <li key={index + 4} className="py-1">
                  {tech.url ? (
                    <LinkPreview
                      url={tech.url}
                      className="font-bold hover:text-blue-500"
                    >
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
      </div>
    </div>
  );
}
