"use client";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="md:col-span-2 md:row-span-2 bg-white dark:bg-zinc-900 p-6 text-white border border-zinc-400 hover:border-blue-500 rounded-lg flex items-center justify-center">
        <p className="text-center text-black dark:text-white text-sm">
          &copy; {new Date().getFullYear()} | Crafted with ❤️ by Sodiq Ardianto.
        </p>
      </div>
    </>
  );
}
