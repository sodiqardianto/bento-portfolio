"use client";
import React from "react";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { limit45Alfhabet } from "@/app/utils/limit45Alfhabet";

type BlogType = {
  title: string;
  description: string;
  image: string;
};

export default function Blog() {
  const blogs: BlogType[] = [
    // {
    //   title: "Lana Del Rey",
    //   description: "Lorem ipsum dolor sit amet consectetur elit.",
    //   image: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    // },
    // {
    //   title: "Lana Del Rey",
    //   description: "Lorem ipsum dolor sit amet adipisicing elit.",
    //   image: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    // },
    // {
    //   title: "Billie Eilish",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, vitae explicabo magnam cumque sequi voluptatem facilis suscipit tempore optio dolores distinctio doloribus quia odit amet nobis asperiores totam, laborum exercitationem.",
    //   image: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    // },
    // {
    //   title: "Taylor Swift",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et urna at nunc consequat interdum.",
    //   image: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    // },
  ];

  return (
    <>
      <div className="md:col-span-2 md:row-span-4 bg-white dark:bg-zinc-900 p-6 text-white border border-zinc-400 hover:border-blue-500 rounded-lg">
        <div className="flex justify-between">
          <h6 className="text-lg font-light text-black mb-4 dark:text-white">
            Blog
          </h6>
          <h6 className="text-lg font-bold">
            <Link href="/blogs">
              <IconExternalLink className="h-5 w-5 inline text-black dark:text-white" />
            </Link>
          </h6>
        </div>
        <div className="flex flex-col justify-between h-full">
          {blogs.length === 0 ? (
            <p className="text-center text-neutral-600 dark:text-neutral-400">
              No blog posts available.
            </p>
          ) : (
            <ul className="max-w-2xl mx-auto w-full gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent max-h-52">
              {blogs.map((card, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                >
                  <div className="flex gap-4 flex-col md:flex-row ">
                    <div>
                      <Image
                        width={100}
                        height={100}
                        src={card.image}
                        alt={`card.title`}
                        className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                      />
                    </div>
                    <div className="">
                      <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                        {card.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                        {limit45Alfhabet(card.description)}
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:text-blue-500 hover:bg-gray-200 text-black mt-4 md:mt-0 dark:bg-neutral-800 dark:text-white">
                    Read more
                  </button>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
