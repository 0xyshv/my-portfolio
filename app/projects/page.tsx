import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { allProjects } from "@/constants/projects";

export const revalidate = 60;
export default async function ProjectsPage() {
  const views: Record<string, number> = {};
  const top1 = allProjects.find((project) => project.slug === "01");
  const top2 = allProjects.find((project) => project.slug === "02")!;
  const top3 = allProjects.find((project) => project.slug === "03")!;
  const top4 = allProjects.find((project) => project.slug === "04")!;
  const top5 = allProjects.find((project) => project.slug === "05")!;
  const top6 = allProjects.find((project) => project.slug === "06")!;
  const top7 = allProjects.find((project) => project.slug === "07")!;
  const top8 = allProjects.find((project) => project.slug === "08")!;

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            You can view some of my projects below.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 lg:grid-cols-1 w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
          {[top1, top2, top3, top4, top5, top6, top7].map((project) => (
            <Card key={project.slug}>
              <Article project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
        </div>
        {/* </div> */}
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}
