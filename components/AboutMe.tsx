import React from "react";
// import { LinkPreview } from "./ui/link-preview";
// import {
//   IconBrandGit,
//   IconBrandLaravel,
//   IconBrandMongodb,
//   IconBrandMysql,
//   IconBrandNextjs,
//   IconBrandNodejs,
//   IconBrandReact,
//   IconBrandTypescript,
// } from "@tabler/icons-react";

export default function AboutMe() {
  // const techStack = [
  //   { name: "React", url: "https://react.dev/", icon: IconBrandReact },
  //   { name: "Next.js", url: "https://nextjs.org/", icon: IconBrandNextjs },
  //   {
  //     name: "TypeScript",
  //     url: "https://www.typescriptlang.org/",
  //     icon: IconBrandTypescript,
  //   },
  //   {
  //     name: "Express.js",
  //     url: "https://expressjs.com/",
  //     icon: IconBrandNodejs,
  //   },
  //   { name: "Laravel", url: "https://laravel.com/", icon: IconBrandLaravel },
  //   {
  //     name: "MongoDB",
  //     url: "https://www.mongodb.com/",
  //     icon: IconBrandMongodb,
  //   },
  //   { name: "MySQL", url: "https://www.mysql.com/", icon: IconBrandMysql },
  //   { name: "Git", url: "https://git-scm.com/", icon: IconBrandGit },
  // ];

  return (
    <>
      <div className="md:col-span-1 md:row-span-4 bg-white dark:bg-zinc-900 p-6 text-white border border-zinc-400 hover:border-blue-500 rounded-lg">
        <h6 className="text-lg font-light text-black mb-4 dark:text-white">
          About Me
        </h6>
        <div className="flex flex-col h-full">
          <div className="flex-row text-base font-light m-0 text-black dark:text-white text-justify">
            Hi, I&apos;m <span className="font-bold">Sodiq Ardianto</span>, a
            Software Engineer specialized in web development. I&apos;m
            passionate about creating innovative, user-friendly web applications
            that provide a seamless and enjoyable experience for users. I take
            pride in writing clean, maintainable code and constantly strive to
            improve my skills in this ever-evolving field. Feel free to reach
            out if you have any questions or collaboration opportunities!
            {/* <ul className="list-inside">
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
            </ul> */}
          </div>
        </div>
      </div>

      {/* <div className="md:col-span-1 md:row-span-4 bg-zinc-800/50 p-6 text-white border border-zinc-800 rounded-lg">
          <h2 className="text-lg mb-4">About Me</h2>
          <p className="text-sm text-zinc-400 mb-4">
            Hi, I&apos;m Sodiq Ardianto, a Software Engineer specialized in web
            development. I&apos;m passionate about creating innovative and
            user-friendly web applications that provide a seamless and enjoyable
            experience for users.
          </p>
          <h3 className="text-md font-semibold mb-2">
            My tech stack includes:
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              "React",
              "Laravel",
              "Next.js",
              "MongoDB",
              "TypeScript",
              "MySQL",
              "Express.js",
              "Git",
            ].map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                {tech}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-400">
            And I&apos;m always eager to learn and grow in this ever-evolving
            field. Feel free to reach out if you have any questions or
            collaboration opportunities!
          </p>
        </div> */}
    </>
  );
}
