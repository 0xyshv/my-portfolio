import React from "react";
import { Navigation } from "../components/nav";
import { Link } from "lucide-react";
import { Download } from "./download";
import { Card } from "../components/card";

export default function Resume() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Download Resume
          </h2>
          <p className="mt-4 text-zinc-400">You can download my resume.</p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Add download button here */}
        <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
          <Card>
            <Download
              project={{
                slug: "abc",
                date: "14-08-2023",
                title: "def",
                description: "hi",
              }}
              views={0}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
