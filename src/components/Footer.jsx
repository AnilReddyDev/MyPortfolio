import humanArt from "../assets/humanArt.svg";
import EmailLink from "../utils/EmailLink";
function Footer() {
  return (
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
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anilreddy0514@gmail.com"
              target="_blank"
            >
              Pop me an email
            </a>
          </span>
          <span className="mobile lg:hidden font-bold lg:text-lg underline">
            <EmailLink />
          </span>{" "}
          at anilreddy0514@gmail.com or ping me on social media handles.
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
  );
}

export default Footer;
