import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BlogInterface } from "@/interfaces/blogs.interface";
import { IconArrowLeft, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs: BlogInterface[] = [];

  return (
    <React.Fragment>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-12 bg-white dark:bg-zinc-900 p-6 border border-zinc-400 hover:border-blue-500 rounded-2xl">
          <div className="flex gap-5">
            <Button className="relative inline-flex overflow-hidden p-[3px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group w-20">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <Link
                href="/"
                className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl overflow-hidden relative rounded-2xl"
              >
                {/* Icon Back */}
                <span className="absolute left-[-50px] opacity-0 transform -translate-x-full transition-all duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:opacity-100">
                  <IconArrowLeft className="h-5 w-5 flex justify-center items-center" />
                </span>

                {/* Text Back */}
                <span className="absolute left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:translate-x-[200%]">
                  Back
                </span>
              </Link>
            </Button>
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Blogs
            </h1>
          </div>
          <div className="relative w-full max-w-sm">
            <IconSearch className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
        </div>

        {blogs?.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full w-full bg-white dark:bg-zinc-900 py-20 border border-zinc-400 hover:border-blue-500 rounded-2xl ">
            <h1 className="text-2xl font-bold text-black dark:text-white">
              No blog posts available
            </h1>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg border border-zinc-400 hover:border-blue-500"
              >
                <CardHeader className="p-0">
                  <div className="aspect-[16/9] relative">
                    <Image
                      width={400}
                      height={200}
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-muted text-muted-foreground"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
