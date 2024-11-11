"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { IconWindowMaximize } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <>
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 md:col-span-2 md:row-span-4"
        )}
      >
        <div className="flex justify-between">
          <h6 className="text-lg font-bold">Blog</h6>
          <h6 className="text-lg font-bold">
            <Link href="/blogs">
              <IconWindowMaximize className="h-5 w-5 inline" />
            </Link>
          </h6>
        </div>
        <div className="flex flex-col justify-between h-full">
          <ul className="max-w-2xl mx-auto w-full gap-4">
            <div className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
              <div className="flex gap-4 flex-col md:flex-row ">
                <div>
                  <Image
                    width={100}
                    height={100}
                    src={`https://assets.aceternity.com/demos/lana-del-rey.jpeg`}
                    alt={`card.title`}
                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                  />
                </div>
                <div className="">
                  <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                    {`card.title`}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                    {`card.description`}
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-500 hover:text-white text-black mt-4 md:mt-0">
                Read more
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
