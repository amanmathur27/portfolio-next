import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/assets/images/aman-logo.png"
              alt="Aman Mathur Logo"
              width={100}
              height={100}
              className="w-14"
            />
            <span className="ml-3 text-xl">Aman Mathur</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Aman Mathur
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              href={"https://www.facebook.com"}
              className="text-gray-500"
              target="_blanck"
            >
              <BsFacebook className="text-2xl hover:text-[black]" />
            </Link>
            <Link
              href={"https://github.com/amanmathur27"}
              className="ml-3 text-gray-500"
              target="_blanck"
            >
              <BsGithub className="text-2xl hover:text-[black]" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/aman-mathur-am27"}
              className="ml-3 text-gray-500"
              target="_blanck"
            >
              <BsLinkedin className="text-2xl hover:text-[black]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
