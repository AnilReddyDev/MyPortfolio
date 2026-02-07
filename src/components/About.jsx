function About() {
  return (
    <div className="h-auto w-full pr-2">
      <h1 className=" text-lg font-semibold pb-5 pt-0 opacity-80 lg:opacity-95 lg:text-lg ">
        ABOUT
      </h1>
      <p className="text-base text-normal text-white/[0.85] lg:text-white/[0.90]">
        - I’m a Software Engineer at HCLTech, currently working as a Graduate
        Engineer Trainee and recently transitioned from Java Full Stack training
        into full-time role.
      </p>
      <p className="text-base text-normal text-white/[0.85] lg:text-white/[0.90] pt-1">
        - I have hands-on experience building and understanding end-to-end web
        applications using Java, Spring Boot, REST APIs, and modern frontend
        technologies like React and Tailwind CSS.
      </p>
      <p className="text-base text-normal text-white/[0.85] lg:text-white/[0.90] pt-1">
        - I enjoy working in agile teams, learning enterprise-level development
        practices, and building scalable, maintainable applications that solve
        real-world problems.
      </p>

      <a
        className="lg:py-5 pt-4 flex gap-1 cursor-pointer items-center underline"
        href="/AnilReddy_Resume.pdf"
        download="Resume.pdf"
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
        </svg>
        Resume here
      </a>
    </div>
  );
}

export default About;
