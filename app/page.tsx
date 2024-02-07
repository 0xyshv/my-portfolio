import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
];

export default function Home() {
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
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Yashasvi Chaudhary
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Hi 👋, My name is Yashasvi chaudhary, I'm a meta certified front-end
          developer.
          <br />
          Building DApps in{" "}
          <span className="text-white">
            {" "}
            Web3 and DeFi space using NextJS, Typescript, Tailwind CSS and Wagmi
          </span>
          <br />
          Currently{" "}
          <span className="text-white">
            learning prompt engineering, LLMs and playing with ChatGPT APIs.
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
    </div>
  );
}
