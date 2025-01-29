import React from "react";
import Header from "./components/Header";
import humanArt from "./assets/humanArt.svg";
import noteimg from "./assets/noteImg.png";
import terminalimg from "./assets/terminalimg.png";
import tweetimg from "./assets/tweetimg.png";
import finder from "./assets/finder.png";
import story from "./assets/story.png";
import mruimg from "./assets/mruimg.png";
import TextHighlight from "./components/TextHighlight";
import HighlightEffect from "./components/HighlightEffect";
import EmailLink from "./components/EmailLink";

export default function App() {
  return (
    <div className="w-screen h-auto poppins-regular flex flex-col lg:flex-row lg:justify-center items-center lg:items-start  bg-[#0E1733]">
      <HighlightEffect />
      <Header />

      <div className="lg:w-5/12  lg:pt-28 w-11/12 h-90 pl-2 lg:pl-0 lg:h-auto  text-white">
        <div className="h-auto w-full pr-2">
          <h1 className=" text-base font-semibold pb-9 pt-2 opacity-80 lg:opacity-95 lg:text-lg ">
            ABOUT
          </h1>
          <p className="text-base text-normal text-white/[0.65] lg:text-white/[0.75] ">
            <p className="hidden lg:block">
              I’m a <TextHighlight text="Web Developer & AI Enthusiast" /> based
              in <TextHighlight text="Hyderabad" />, passionate about building{" "}
              <TextHighlight text="scalable, user-friendly applications" />.
              Currently, I’m in my <TextHighlight text="final year of B.Tech" />{" "}
              in <TextHighlight text="CSE (AI & ML)" /> at{" "}
              <TextHighlight
                text="Malla Reddy
              University, Hyderabad"
              />
              .
            </p>
            <p className="hidden lg:block pt-2">
              I specialize in <TextHighlight text="React, TailwindCSS, JS " />
              and{" "}
              <TextHighlight
                text="AI-driven
              technologies"
              />
              , leveraging them to create impactful digital experiences.{" "}
              <TextHighlight text="Beyond coding" />, I love exploring new{" "}
              <TextHighlight text="tech trends" />, contributing to{" "}
              <TextHighlight text="open-source" />, and{" "}
              <TextHighlight text="watching movies & web series" />.
            </p>

            <p className="hidden lg:block pt-2">
              I'm <TextHighlight text="constantly" /> on the lookout for new{" "}
              <TextHighlight text="opportunities" /> to grow and collaborate
              with like-minded individuals. Let's{" "}
              <TextHighlight text="connect" /> and{" "}
              <TextHighlight
                text="create
              something amazing together!"
              />
            </p>
          </p>
          <p
            className="py-2 flex gap-1 cursor-pointer items-center underline"
            onClick={() =>
              window.open("/public/AnilReddy_Resume.pdf", "_blank")
            }
          >
        
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>Resume here
          </p>
        </div>

        <div className="h-auto w-full pr-2">
          <h1 className=" text-base font-semibold pt-16 lg:pt-16 pb-9 lg:text-lg opacity-80 lg:opacity-95">
            SKILLS
          </h1>
          <ul className="flex flex-wrap gap-5 text-green-400 ">
            <li className="text-base px-4 py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
              Python
            </li>
            <li className="text-base px-4 py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
              Java
            </li>
            <li className="text-base px-4 py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
              React
            </li>
            <li className="text-base px-4 py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
              JavaScript
            </li>
            <li className="text-base px-4 py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
              HTML
            </li>
            <li className="text-base px-4 py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
              CSS
            </li>
            <li className="text-base px-4 py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
              Express
            </li>
            <li className="text-base px-4 py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
              Node
            </li>
            <li className="text-base px-4 py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
              MongoDB
            </li>
            <li className="text-base px-4 py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
              TailwindCSS
            </li>
          </ul>
        </div>

        <div className="ProjectsContainer h-auto w-full pr-2">
          <h1 className=" text-base font-semibold pt-28 lg:pt-20 lg:pb-10 pb-12 opacity-80 lg:opacity-95 lg:text-lg">
            PROJECTS
          </h1>

          <div className="project1  w-full h-auto  flex flex-col-reverse lg:flex-row rounded-md lg:px-3 lg:py-10 ">
            <div className="w-4/5 lg:w-1/3 h-auto">
              <img
                src={mruimg}
                alt="img"
                className="py-5 lg:py-0 lg:h-auto pr-4"
              />
            </div>
            <div className="w-full lg:w-2/3 h-auto flex flex-col gap-3">
              <h1
                className=" text-base font-semibold flex gap-2 cursor-pointer items-center"
                onClick={() => window.open("https://mruspace.in", "_blank")}
              >
                Mruspace.in{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </h1>
              <p className="lg:text-base text-sm text-normal opacity-85 ">
                Developed an open-source web application for Malla Reddy
                University students, providing a cen- tralized platform for
                academic resources.
              </p>
              <ul className="flex flex-wrap gap-3 lg:gap-5 text-green-400 ">
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  React
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  TailwindCSS
                </li>
              </ul>
            </div>
          </div>

          <div className="project2 py-10 w-full h-auto  flex flex-col-reverse lg:flex-row  rounded-md  lg:px-3 lg:py-10 ">
            <div className="w-4/5 lg:w-1/3 h-auto">
              <img
                src={story}
                alt="img"
                className="py-5 lg:py-0 lg:h-auto pr-4"
              />
            </div>
            <div className="w-full lg:w-2/3 h-auto flex flex-col gap-3">
              <h1
                className=" text-base cursor-pointer font-semibold flex gap-2 items-center"
                onClick={() =>
                  window.open("https://storysketch.netlify.app/", "_blank")
                }
              >
                StorySketchAI{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </h1>
              <p className="lg:text-base text-sm text-normal opacity-85 ">
                Developed an AI-driven web application that generates images
                from textual narratives, enhancing storytelling through visual
                representation.
                <span className="lg:text-base text-sm font-semibold ">
                  Secured Second Place in the MRUH Intellithon 2024,
                  outperforming over 50 competing teams from the university
                </span>
              </p>
              <ul className="flex flex-wrap gap-3 lg:gap-5 text-green-400 ">
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  React
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  TailwindCSS
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  GeminiAPI
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  Stable Diffusion API
                </li>
              </ul>
            </div>
          </div>

          <div className="project2 py-10 w-full h-auto  flex flex-col-reverse lg:flex-row  rounded-md  lg:px-3 lg:py-10 ">
            <div className="w-4/5 lg:w-1/3 h-auto">
              <img
                src={noteimg}
                alt="img"
                className="py-5 lg:py-0 lg:h-auto pr-4"
              />
            </div>
            <div className="w-full lg:w-2/3 h-auto flex flex-col gap-3">
              <h1
                className=" text-base cursor-pointer font-semibold flex gap-2 items-center"
                onClick={() =>
                  window.open("https://saveurnotes.netlify.app/", "_blank")
                }
              >
                MyNotes{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </h1>
              <p className="lg:text-base text-sm text-normal opacity-85 ">
                "MyNotes" is a web application that allows users to create,
                edit, and delete notes.The data is stored in the user device
                itself.It provides a seamless and intuitive experience for
                users.
              </p>
              <ul className="flex flex-wrap gap-3 lg:gap-5 text-green-400 ">
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  React
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  TailwindCSS
                </li>
              </ul>
            </div>
          </div>

          <div className="project3  py-10 w-full h-auto  flex flex-col-reverse lg:flex-row  rounded-md  lg:px-3 lg:py-10 ">
            <div className="w-4/5 lg:w-1/3 h-auto">
              <img
                src={finder}
                alt="img"
                className="py-5 lg:py-0 lg:h-auto pr-4"
              />
            </div>
            <div className="w-full lg:w-2/3 h-auto flex flex-col gap-3">
              <h1
                className=" text-base cursor-pointer font-semibold flex gap-2 items-center"
                onClick={() =>
                  window.open("https://mrufinder.netlify.app/", "_blank")
                }
              >
                FindItMRU{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </h1>
              <p className="lg:text-base text-sm text-normal opacity-85 ">
                Created a full-stack application to assist the college community
                in recovering lost items, connecting users with found
                belongings.
              </p>
              <ul className="flex flex-wrap gap-3 lg:gap-5 text-green-400 ">
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  React
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  TailwindCSS
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  Express
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  Node
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  MongoDB
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  Firebase
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  Cloudinary
                </li>
              </ul>
            </div>
          </div>

          <div className="project4 py-10 w-full h-auto  flex flex-col-reverse lg:flex-row  rounded-md  lg:px-3 lg:py-10 ">
            <div className="w-4/5 lg:w-1/3 h-auto">
              <img
                src={terminalimg}
                alt="img"
                className="py-5 lg:py-0 lg:h-auto pr-4"
              />
            </div>
            <div className="w-full lg:w-2/3 h-auto flex flex-col gap-3">
              <h1
                className=" text-base font-semibold flex gap-2 items-center cursor-pointer"
                onClick={() =>
                  window.open("https://anilterminal.netlify.app", "_blank")
                }
              >
                Ubuntu Portfolio{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </h1>
              <p className="lg:text-base text-sm text-normal opacity-85 ">
                Its a portfolio website based on the Ubuntu theme. The users can
                see my skills, bio and projects etc by interacting with
                terminal.
              </p>
              <ul className="flex flex-wrap gap-3 lg:gap-5 text-green-400 ">
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  React
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  TailwindCSS
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-auto   my-auto">
          {" "}
          {/* Center the the profile card */}
          <div className="footerCard relative mt-[50%] mb-[50%] lg:my-32  bg-gray-950 h-auto  poppins-regular w-full p-8 flex flex-col gap-5">
            <h1 className="text-lg lg:text-xl font-semibold lg:font-bold">
              I'm Always up for a chat
            </h1>
            <p className="lg:text-base text-sm text-normal opacity-90 lg:pr-32">
              <span className="font-bold hidden lg:inline-block lg:text-lg underline">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=konyalaanilreddy00@gmail.com"
                  target="_blank"
                >
                  Pop me an email
                </a>
              </span>
              <span className="mobile lg:hidden font-bold lg:text-lg underline">
                <EmailLink />
              </span>{" "}
              at Konyalaanilreddy00@gmail.com or ping me on social media
              handles.
            </p>
            <img
              src={humanArt}
              className="z-10 h-44  w-48 lg:h-auto lg:w-auto lg:pl-14 relative left-28"
              alt="Art"
            />
            {/* <a className="text-xs" href="https://www.vecteezy.com/free-vector/2d-character-boy">Vecteezy</a> */}
            <h1 className="text-3xl lg:text-5xl font-bold absolute top-52 lg:top-72 z-0">
              Hey You! <br></br> What's Up
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
