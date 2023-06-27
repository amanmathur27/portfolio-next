import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              These are few of my minor projects. Some are based on web-dev and some of them are on machine learning. Have a look at my projects. 
            </p>
          </div>
          <div className="flex flex-wrap -m-5 -mt-9">
            {/* project1 */}

            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center w-full h-full"
                  src={"/assets/images/word-count.png"}
                  width={500}
                  height={200}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Web-Dev
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Text Counter
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    I had made this simple yet very beautiful text counter
                    website using HTML 5, CSS 3, and JavaScript as one of my
                    minor projects.
                  </p>
                  <br />
                  <Link href={"#"}>
                    <p className="leading-relaxed text-indigo-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center w-full h-full"
                  src={"/assets/images/uber-data-analysis.png"}
                  width={500}
                  height={200}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Machine Learning
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Uber Data Analysis
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    A group project on data science with ML in which we did the
                    visualization and analysis of Uber's ridership growth in NYC
                    in 2014 and 2018. Also Estimated the predicted fare using
                    the extracted features from the dataset using two ML Models.
                  </p>
                  <br />
                  <Link href={"https://github.com/lachenlama/TeamOverFlow"} target="_blanck">
                    <p className="leading-relaxed text-indigo-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center w-full h-full"
                  src={"/assets/images/word-count.png"}
                  width={500}
                  height={200}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Web-Dev
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Text Counter
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    I had made this simple yet very beautiful text counter
                    website using HTML 5, CSS 3, and JavaScript as one of my
                    minor projects.
                  </p>
                  <br />
                  <Link href={"#"}>
                    <p className="leading-relaxed text-indigo-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
