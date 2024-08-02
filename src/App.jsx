import React from "react";
import Header from "./components/Header";
import humanArt from './assets/humanArt.svg'
export default function App() {
  return (
    <div className="w-screen h-auto poppins-regular flex flex-col lg:flex-row lg:justify-center items-center lg:items-start  bg-slate-900">
      <Header />

      <div className="lg:w-5/12  lg:pt-28 w-11/12 h-90 pl-2 lg:pl-0 lg:h-auto  text-white">
        <div className="h-auto w-full pr-2">
          <h1 className=" text-base font-semibold pb-9 pt-2  ">ABOUT</h1>
          <p className="text-base text-normal opacity-85 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam
            dolores beatae quaerat praesentium officia sequi, magni iure
            repellat atque ea suscipit unde dolor eligendi cum possimus nihil
            ipsam porro!
          </p>
          <p className="w-full h-5"></p>
          <p className="text-base text-normal opacity-85 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam
            dolores beatae quaerat praesentium officia sequi, magni iure
            repellat atque ea suscipit unde dolor eligendi cum possimus nihil
            ipsam porro!
          </p>
        </div>

        <div className="h-auto w-full pr-2">
          <h1 className=" text-base font-semibold pt-24 pb-9 ">SKILLS</h1>
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
          <h1 className=" text-base font-semibold pt-28 lg:pt-24 lg:pb-10 pb-12 ">
            PROJECTS
          </h1>

          <div className="project1 w-full h-auto  flex flex-col-reverse lg:flex-row lg:hover:shadow-[0_8px_30px_rgb(205,205,205,0.12)] lg:px-3 lg:py-10 ">
            <div className="w-4/5 lg:w-1/3 h-auto">
              <img
                src="https://raw.githubusercontent.com/CatsOnTree/MruImgs/main/assests/img/mru_black_img.jpeg"
                alt="img"
                className="py-5 lg:py-0 lg:h-3/6 pr-8"
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                vel architecto sint deleniti, eos quo excepturi sequi culpa
                molestias eius nihil quia voluptates, ratione, veniam quos a
                eveniet iure. Distinctio!
              </p>
              <ul className="flex flex-wrap gap-3 lg:gap-5 text-green-400 ">
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  Python
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  Java
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  React
                </li>
              </ul>
            </div>
          </div>

          <div className="project2 py-10 w-full h-auto  flex flex-col-reverse lg:flex-row lg:hover:shadow-[0_8px_30px_rgb(205,205,205,0.12)] lg:px-3 lg:py-10 ">
            <div className="w-4/5 lg:w-1/3 h-auto">
              <img
                src="https://raw.githubusercontent.com/CatsOnTree/MruImgs/main/assests/img/mru_black_img.jpeg"
                alt="img"
                className="py-5 lg:py-0 lg:h-3/6 pr-8"
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                vel architecto sint deleniti, eos quo excepturi sequi culpa
                molestias eius nihil quia voluptates, ratione, veniam quos a
                eveniet iure. Distinctio!
              </p>
              <ul className="flex flex-wrap gap-3 lg:gap-5 text-green-400 ">
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  Python
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  Java
                </li>
                <li className=" text-xs lg:text-base px-2 lg:px-4 py-1 lg:py-2 text-medium  rounded-full bg-opacity-20 bg-green-200 hover:bg-opacity-25">
                  React
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-screen  my-auto"> {/* Center the the profile card */}
        <div className="footerCard relative lg:my-32  bg-gray-950 h-auto  poppins-regular w-full p-8 flex flex-col gap-5">
          <h1 className="text-lg lg:text-xl font-semibold lg:font-bold">I'm Always up for a chat</h1>
          <p className="lg:text-base text-sm text-normal opacity-90 lg:pr-32"><span className="font-bold lg:text-lg underline">Pop me an email</span> at Konyalaanilreddy00@gmail.com
          or give me a shout on social media.</p>
          <img src={humanArt} className="z-10 h-44  w-48 lg:h-auto lg:w-auto lg:pl-14 relative left-28" alt="Art"  />
          {/* <a className="text-xs" href="https://www.vecteezy.com/free-vector/2d-character-boy">Vecteezy</a> */}
          <h1 className="text-3xl lg:text-5xl font-bold absolute top-52 lg:top-72 z-0">Hey You! <br></br> What's Up</h1>
        </div>
        </div>


      </div>
    </div>
  );
}
