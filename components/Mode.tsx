"use client";
import React from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useThemeContext } from "@/context/themeContext";

export default function Mode() {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="md:col-span-1 md:row-span-1 bg-white dark:bg-zinc-900 p-6 text-white border border-zinc-400 rounded-lg flex items-center">
        <div className="flex justify-center gap-2 w-full">
          <button
            className="p-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-500 rounded-lg"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <IconSun className="h-5 w-5" />
            ) : (
              <IconMoon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
