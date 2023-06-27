"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I Am A
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI-UX Designer",
                  "Software Engineer",
                  "Cloud Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[150px] h-[2px] bg-blue-700">
            <br />
          </div>
          <br />
          <p className="mb-8 leading-relaxed">
            Welcome to my portfolio website! I'm Aman Mathur, a passionate
            computer science engineer currently pursuing my B.Tech degree in CSE
            from Siliguri Institute of Technology. <br />I have a strong
            affinity for technology and a drive to explore its vast
            possibilities. My academic journey has allowed me to develop skills
            in programming, algorithms, data structures, and software
            development.
            <br /> I'm particularly interested in Web Developmentm, Artificial
            Intelligence and Cloud Computing, and I stay updated with the latest
            advancements in these areas. My portfolio showcases my projects,
            experiences, and skills, giving you insight into my journey as a
            computer science engineer.
            <br />
            <br /> Thank you for visiting, and feel free to reach out if you
            have any inquiries or exciting collaboration opportunities.
          </p>
          <div className="flex justify-center">
            <Link href={"#contact"}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
            </Link>
            <Link href={"/assets/documents/aman-updated-resume.pdf"} target="_blank">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Download My Resume
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[20rem]"
            alt="hero"
            src={"/assets/images/Aman formal.jpg"}
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
