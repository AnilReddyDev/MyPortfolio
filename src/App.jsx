import React from "react";
import Header from "./components/Header";

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
          <h1 className=" text-base font-semibold pt-28 lg:pt-24 pb-10 ">PROJECTS</h1>
          <div className="project1 w-full h-56 flex flex-col-reverse lg:flex-row">
            <div className="w-4/5 lg:w-1/3 h-full">
              <img
                src="https://raw.githubusercontent.com/CatsOnTree/MruImgs/main/assests/img/mru_black_img.jpeg"
                alt="img"
              />
            </div>
            <div className="w-full lg:w-2/3 h-full">
              <h1 className=" text-base font-semibold ">Mruspace.in</h1>
              <p className="text-base text-normal opacity-85 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                vel architecto sint deleniti, eos quo excepturi sequi culpa
                molestias eius nihil quia voluptates, ratione, veniam quos a
                eveniet iure. Distinctio!
              </p>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
