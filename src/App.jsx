import React from "react";
import Header from "./components/Header";
import humanArt from "./assets/humanArt.svg";
import noteimg from "./assets/noteImg.png";
import terminalimg from "./assets/terminalimg.png";
import tweetimg from "./assets/tweetimg.png";
import mruimg from "./assets/mruimg.png";
import TextHighlight from "./components/TextHighlight";
import HighlightEffect from "./components/HighlightEffect";
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
            <p>
              Currently, I am in my{" "}
              <span className="text-white font-medium">4th year</span> of
              pursuing a <span className="text-white font-medium">B.Tech</span>{" "}
              in{" "}
              <span className="text-white font-medium">
                Computer Science and Engineering (Artificial Intelligence &
                Machine Learning)
              </span>{" "}
              at{" "}
              <span className="text-white font-medium">
                Malla Reddy University
              </span>{" "}
              in Hyderabad, India. I started my B.Tech in 2021 and will be{" "}
              <span className="text-white font-medium">graduating</span> in{" "}
              <span className="text-white font-medium">2025</span>.
            </p>
            <br></br>

            <p>
              Back in <span className="text-white font-medium">2022</span>, I
              began my journey into the world of
              <span className="text-white font-medium"> Web Development</span>.
              I started with basic website designs, slowly immersing myself in
              coding and the ever-evolving tech landscape. Today, I specialize
              in <TextHighlight text="Frontend Development" />,{" "}
              <TextHighlight text="user-friendly interfaces" /> and developing{" "}
              <TextHighlight text="impactful web applications" /> that make a
              difference.
            </p>
            <br></br>

            <p>
              My passion for technology goes beyond just coding. I am always
              eager to learn and implement new technologies, which you can see
              reflected in my <TextHighlight text="GitHub contributions" />.
              Feel free to explore my &nbsp;
              <TextHighlight text="projects" /> and{" "}
              <TextHighlight text="collaborations" /> on{" "}
              <span className="text-white underline font-medium">
                <a href="http://github.com/AnilreddyDev" target="_blank">
                  GitHub
                </a>
                .
              </span>
            </p>
            <br></br>

            <p className="hidden lg:block">
              When <TextHighlight text="I'm not coding" />, you'll often find me
              enjoying <TextHighlight text="movies" /> and
              <TextHighlight text="web series" />
              ,. I also stay updated with the latest{" "}
              <TextHighlight text="trends in technology" />
              &nbsp;by following <TextHighlight text="tech news" />. This keeps
              me inspired and informed about new{" "}
              <TextHighlight text="developments" /> in the tech world.
            </p>
            <br className=""></br>

            <p className="hidden lg:block">
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
        </div>

        <div className="h-auto w-full pr-2">
          <h1 className=" text-base font-semibold pt-16 lg:pt-24 pb-9 lg:text-lg opacity-80 lg:opacity-95">
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
          <h1 className=" text-base font-semibold pt-28 lg:pt-24 lg:pb-10 pb-12 opacity-80 lg:opacity-95 lg:text-lg">
            PROJECTS
          </h1>

          <div onClick={() => window.open("https://mruspace.in", "_blank")} className="project1 cursor-pointer w-full h-auto  flex flex-col-reverse lg:flex-row rounded-md lg:hover:shadow-[0px_1px_31px_0px_#44337a] lg:px-3 lg:py-10 ">
            <div className="w-4/5 lg:w-1/3 h-auto">
              <img
                src={mruimg}
                alt="img"
                className="py-5 lg:py-0 lg:h-auto pr-4"
              />
            </div>
            <div className="w-full lg:w-2/3 h-auto flex flex-col gap-3">
              <h1 className=" text-base font-semibold flex gap-2 items-center">
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
                "Mruspace" is a dynamic and engaging web application designed to
                provide MRU students Learning Resources for exam preparation.
                This project showcases my ability to create a responsive,
                user-friendly interface that delivers a wealth of information in
                an accessible and visually appealing format
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

          <div onClick={() => window.open("https://saveurnotes.netlify.app/", "_blank")} className="project2 cursor-pointer py-10 w-full h-auto  flex flex-col-reverse lg:flex-row  rounded-md lg:hover:shadow-[0px_1px_31px_0px_#44337a] lg:px-3 lg:py-10 ">
            <div className="w-4/5 lg:w-1/3 h-auto">
              <img
                src={noteimg}
                alt="img"
                className="py-5 lg:py-0 lg:h-auto pr-4"
              />
            </div>
            <div className="w-full lg:w-2/3 h-auto flex flex-col gap-3">
              <h1 className=" text-base font-semibold flex gap-2 items-center">
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

          <div onClick={() => window.open("https://github.com/AnilReddyDev/TweetIt/tree/master/Api", "_blank")} className="project3 cursor-pointer py-10 w-full h-auto  flex flex-col-reverse lg:flex-row  rounded-md lg:hover:shadow-[0px_1px_31px_0px_#44337a] lg:px-3 lg:py-10 ">
            <div className="w-4/5 lg:w-1/3 h-auto">
              <img
                src={tweetimg}
                alt="img"
                className="py-5 lg:py-0 lg:h-auto pr-4"
              />
            </div>
            <div className="w-full lg:w-2/3 h-auto flex flex-col gap-3">
              <h1 className=" text-base font-semibold flex gap-2 items-center">
                TweetIt{" "}
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
                A Twitter-like social media platform with a full stack. Users
                are able to read each other's profiles and create posts. Also,
                users can view each other's posts.
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
              </ul>
            </div>
          </div>

          <div onClick={() => window.open("https://anilterminal.netlify.app", "_blank")} className="project4 cursor-pointer py-10 w-full h-auto  flex flex-col-reverse lg:flex-row  rounded-md lg:hover:shadow-[0px_1px_31px_0px_#44337a] lg:px-3 lg:py-10 ">
            <div className="w-4/5 lg:w-1/3 h-auto">
              <img
                src={terminalimg}
                alt="img"
                className="py-5 lg:py-0 lg:h-auto pr-4"
              />
            </div>
            <div className="w-full lg:w-2/3 h-auto flex flex-col gap-3">
              <h1 className=" text-base font-semibold flex gap-2 items-center">
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
              <span className="font-bold lg:text-lg underline">
                Pop me an email
              </span>{" "}
              at Konyalaanilreddy00@gmail.com or ping me  on social
              media handles.
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
