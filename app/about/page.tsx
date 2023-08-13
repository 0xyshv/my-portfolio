import React from "react";
import { Navigation } from "../components/nav";
import { Link } from "lucide-react";

export default function About() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex flex-col gap-4 justify-center min-h-screen px-4 mx-auto text-zinc-200">
        <div className="text-3xl">
          <h1>About Me</h1>
        </div>
        <div>
          <p>
            Hello! I am a <i>Meta-certified front-end developer</i>
            with a passion for crafting user-friendly and visually appealing web
            experiences.
          </p>
        </div>
        <div>
          <p>
            With over 2 years of freelancing experience, I've had the
            opportunity to work on a diverse range of projects, sharpening my
            skills in creating responsive, accessible, and performant web
            applications.
          </p>
        </div>
        <div>
          <p>
            Currently, I'm serving as a lead developer at a dynamic named
            startup
            {/* <Link href="https://www.alphadevs.dev/">
              {" "}
              <span>Alphadevs.dev</span>
            </Link> */}
            that comprises a talented team of 2-10 employees. My role involves
            guiding the team, making architectural decisions, and collaborating
            closely with designers and backend developers to bring our vision to
            life.
          </p>
        </div>
        <div>
          <p>
            My expertise lies in HTML, CSS, JavaScript, and modern front-end
            frameworks like React. I am proficient in optimizing websites for
            speed and SEO while ensuring seamless cross-browser compatibility.
          </p>
        </div>
        <div>
          <p>
            Feel free to get in touch if you're interested in discussing web
            development, collaboration opportunities, or if you simply want to
            connect!
          </p>
        </div>
      </div>
    </div>
  );
}
