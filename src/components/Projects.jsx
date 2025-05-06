import noteimg from "../assets/noteImg.png";
import terminalimg from "../assets/terminalimg.png";
import finder from "../assets/finder.png";
import story from "../assets/story.png";
import mruimg from "../assets/mruimg.png";

export default function Projects() {
  return (
    <div className="ProjectsContainer h-auto w-full pr-2">
      <h1 className=" text-base font-semibold pt-28 lg:pt-20 lg:pb-1 pb-8 opacity-80 lg:opacity-95 lg:text-lg">
        PROJECTS
      </h1>

      <div className="project1  w-full h-auto  flex flex-col-reverse lg:flex-row rounded-md lg:px-3 lg:py-10 ">
        <div className="w-4/5 lg:w-1/3 h-auto">
          <img src={mruimg} alt="img" className="py-5 lg:py-0 lg:h-auto pr-4" />
        </div>
        <div className="w-full lg:w-2/3 h-auto flex flex-col gap-3">
          <h1
            className=" text-base font-semibold flex gap-2 cursor-pointer items-center"
            onClick={() =>
              window.open("https://mruspace.netlify.app", "_blank")
            }
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
            Developed an open-source web application for Malla Reddy University
            students, providing a cen- tralized platform for academic resources.
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

      <div className="project2 py-6 w-full h-auto  flex flex-col-reverse lg:flex-row  rounded-md  lg:px-3 lg:py-10 ">
        <div className="w-4/5 lg:w-1/3 h-auto">
          <img src={story} alt="img" className="py-5 lg:py-0 lg:h-auto pr-4" />
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
            Developed an AI-driven web application that generates images from
            textual narratives, enhancing storytelling through visual
            representation.
            <span className="lg:text-base text-sm font-semibold ">
              Secured Second Place in the MRUH Intellithon 2024, outperforming
              over 50 competing teams from the university
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

      <div className="project2 py-6 w-full h-auto  flex flex-col-reverse lg:flex-row  rounded-md  lg:px-3 lg:py-10 ">
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
            "MyNotes" is a web application that allows users to create, edit,
            and delete notes.The data is stored in the user device itself.It
            provides a seamless and intuitive experience for users.
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

      <div className="project3  py-6 w-full h-auto  flex flex-col-reverse lg:flex-row  rounded-md  lg:px-3 lg:py-10 ">
        <div className="w-4/5 lg:w-1/3 h-auto">
          <img src={finder} alt="img" className="py-5 lg:py-0 lg:h-auto pr-4" />
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
            Created a full-stack application to assist the college community in
            recovering lost items, connecting users with found belongings.
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

      <div className="project4 py-6 w-full h-auto  flex flex-col-reverse lg:flex-row  rounded-md  lg:px-3 lg:py-10 ">
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
            Its a portfolio website based on the Ubuntu theme. The users can see
            my skills, bio and projects etc by interacting with terminal.
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
  );
}
