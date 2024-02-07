"use client";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { carouselImages } from "@/constants/projects";

import { Trophy, Star } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

type Props = {
  project: {
    [x: string]: any;
    url?: string;
    title: string;
    description: string;
    post: string;
    winner: boolean;
    winnerTitle: string;
    repository?: string;
  };

  views: number;
};
export const Header: React.FC<Props> = ({ project, views }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const links: { key: number; label: JSX.Element; href: string }[] = [];
  if (project.repository) {
    links.push({
      key: 1,
      label: <Github />, //Insert Githubicon from lucide react instaed of the text in the label
      href: `https://github.com/${project.repository}`,
    });
  }
  if (project.url) {
    links.push({
      key: 2,
      label: <ExternalLink />,
      href: project.url,
    });
  }
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      className="h-screen relative isolate  bg-gradient-to-tl from-black via-zinc-900 to-black pb-4"
    >
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-white/10  border-zinc-200 lg:border-transparent"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <Link target="_blank" href="https://www.linkedin.com/in/0xyshv/">
              <Linkedin
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
            <Link target="_blank" href="https://twitter.com/0xyshv">
              <Twitter
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
            <Link target="_blank" href="https://github.com/0xyshv">
              <Github
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
          </div>

          <Link
            href="/projects"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } `}
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
      {/* align the content in center */}

      <div className="container mx-auto relative isolate overflow-hidden pt-24 sm:pt-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl py-4 font-bold tracking-tight text-white sm:text-6xl font-display">
              {project.title}
            </h1>

            {project.winner && (
              <a target="_blank" href={project.post}>
                <Badge className="bg-yellow-200">
                  {project.title === "CredX" ? (
                    <Star className="pr-2" />
                  ) : (
                    "Winner :"
                  )}{" "}
                  {project.winnerTitle}
                </Badge>
              </a>
            )}
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {project.description}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link target="_blank" key={link.key} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Carousel component */}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8">
        <Carousel className="w-[80%] h-[40%]">
          <CarouselContent>
            {carouselImages[project.slug]?.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={`Carousel Image ${index + 1}`}
                  className="w-full h-full object-contain rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
        </Carousel>
      </div>
    </header>
  );
};
