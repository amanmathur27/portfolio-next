import { AiFillHtml5 } from 'react-icons/ai';
import { SiCss3 } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FaJava } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
const Skills = () => {
  return (
    <div id='skill'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-5">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-3">
        Technical & Soft Skills
      </h2>
      <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
        Technical Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
        {/* Skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <AiFillHtml5 className='text-[22px] font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML5
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>
                100%
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <SiCss3 className='text-[18px] font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS3
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[85%]"></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>
                85%
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <IoLogoJavascript className='text-[18px] font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              JavaScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[70%]"></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>
                70%
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <p className='font-bold text-sm'>C++</p>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              C/C++
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[70%]"></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>
                70%
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <FaJava className='text-[20px] font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              JAVA
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[40%]"></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>
                40%
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <FaNodeJs className='text-[20px] font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              MERN Stack
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[50%]"></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>
                50%
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills;