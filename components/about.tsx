import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[20rem]"
              alt="hero"
              src={"/assets/images/Aman formal.jpg"}
              width={500}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to my portfolio website! I'm Aman Mathur, a passionate
              computer science engineer currently pursuing my B.Tech degree in
              CSE from Siliguri Institute of Technology. <br />I have a strong
              affinity for technology and a drive to explore its vast
              possibilities. My academic journey has allowed me to develop
              skills in programming, algorithms, data structures, and software
              development.
            </p>
            <p className="mb-8 leading-relaxed">
              I'm particularly interested in Web Developmentm, Artificial
              Intelligence and Cloud Computing, and I stay updated with the
              latest advancements in these areas.<br/> My portfolio showcases my
              projects, experiences, and skills, giving you insight into my
              journey as a computer science engineer. Thank you for visiting,
              and feel free to reach out if you have any inquiries or exciting
              collaboration opportunities.
            </p>
            <div className="flex justify-center">
                <Link href={"/assets/documents/Aman-CV.pdf"} target="_blank">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View CV
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
