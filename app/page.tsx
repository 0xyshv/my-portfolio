"use client";

import Link from "next/link";
import React, { useState } from "react";
import Particles from "./components/particles";
import { Github, Linkedin, Twitter } from "lucide-react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
];

export default function Home() {
  const [isIntersecting, setIntersecting] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4 font-bold">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-zinc-400 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Yashasvi Chaudhary
      </h1>
      <h1 className="z-10 mt-4 text-md text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-2xl md:text-4xl whitespace-nowrap bg-clip-text ">
        Frontend Developer (Web3 & Blockchain)
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in ">
        <h2 className="text-lg text-zinc-500 ">
          Hi 👋, My name is
          <span className="text-white"> Yashasvi chaudhary</span>, I'm a
          <span className="text-white"> front-end developer.</span>
          <br />I have worked on web applications in{" "}
          <span className="text-white">
            {" "}
            Web3, Decentalized Finance, Storage and Identity space during my
            <br />
            <span className="text-zinc-500"> developemnt journey using </span>
            NextJS, Typescript, Tailwind CSS and numerous other tooling.
          </span>
          <br />I also have experience with{" "}
          <span className="text-white">
            configuring and integrating AI models into web apps.
          </span>
        </h2>
        <br />
        {/* <a
          href="/contact"
          className="px-4 py-2 text-sm font-bold text-white transition duration-500 ease-in-out transform bg-zinc-500 rounded-full hover:bg-zinc-300 hover:text-zinc-500"
        >
          Contact
        </a> */}
      </div>
      <div className="flex justify-between gap-8 animate-fade-in">
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
    </div>
  );
}
