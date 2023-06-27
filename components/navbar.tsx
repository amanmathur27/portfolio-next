import Image from "next/image";
import Link from "next/link";
import { FiDownloadCloud } from 'react-icons/Fi';

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link href={"/"} className="mr-5 hover:text-blue-600">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href={"#skill"} className="mr-5 hover:text-blue-600">
              Skills
            </Link>
            <Link href={"#projects"} className="mr-5 hover:text-blue-600">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <Image
              src="/assets/images/aman-logo.png"
              alt="Aman Mathur Logo"
              width={100}
              height={100}
              className="w-14"
            />
            <span className="ml-3 text-xl">Aman Mathur</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <a href="/assets/documents/aman-cv.pdf" target="_black">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <FiDownloadCloud className="text-xl ml-2"/>
            </button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
