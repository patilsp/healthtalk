"use client";

import { useUser } from '@clerk/nextjs';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const Welcome = () => {
  const router = useRouter();
  const { isSignedIn } = useUser();
  // const [doctor, setDoctor] = useState("");
  // const [location, setLocation] = useState("");

  useEffect(() => {
    if (isSignedIn) {
      router.push('/');
    }
  }, [isSignedIn, router]);

  return (
    <section>
       <div className="px-4 py-24 md:px-0 mb-10">
        <div className="container max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full md:w-1/2 md:px-3"
            >
                <div className="space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="block xl:inline">Expert Health Consultations</span>
                    <br />
                    <span className="block text-green-500 xl:inline">For Better Well being.</span>
                </h1>
                <p className="text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                    Discover the best tools and services to improve your health with our expert consultations.
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                    {/* <a href="/sign-in" className="flex items-center justify-center px-8 py-3 mb-3 text-white transition duration-200 bg-gradient-to-r from-indigo-500 to-purple-500 rounded hover:bg-indigo-700 sm:mb-0">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    </a> */}

                    <a href="/sign-in" class="px-7 py-2.5 rounded-lg relative group text-white font-medium inline-block"><span class="absolute top-0 left-0 size-full rounded opacity-50 blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span><span class="size-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br group-active:opacity-0 rounded-lg opacity-50 from-purple-600 to-blue-500"></span><span class="absolute inset-0 size-full transition-all duration-200 ease-out rounded-lg shadow-xl bg-gradient-to-br group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span><span class="absolute inset-0 size-full transition duration-200 ease-out rounded-lg bg-gradient-to-br to-purple-600 from-blue-500"></span><span class="relative text-lg">Get Started <svg class="size-4 ml-1 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></span></a>
                    <a href="#_" className="flex items-center justify-center px-6 py-3 text-gray-500 transition duration-200 bg-gray-200 border rounded-md hover:bg-gray-300 hover:text-gray-600">
                    Learn More
                    </a>

                    
                </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full mt-10 md:w-1/2 md:mt-0"
            >
                <img
                src="/assets/images/image-1.svg"
                alt="Health Consultation"
                className="object-cover w-full transition-transform duration-500 hover:scale-110"
                />
            </motion.div>
            </div>
        </div>
        </div>

      <div className="w-full bg-gradient-to-r from-green-50 to-white py-7 md:pt-20 md:pb-24">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10"
          >
            <motion.img
              src="/assets/images/image-10.svg"
              alt="Health Tools"
              className="object-cover size-full transition-transform duration-500 hover:scale-110"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none"
          >
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Enhance Your Health
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Utilize our top-notch tools and services to take control of your health and wellbeing.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center size-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span> Personalized health plans
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center size-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span> Access to expert consultations
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center size-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span> Comprehensive health tracking
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-l from-purple-50 to-white py-7 md:pt-20 md:pb-24">
  <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
   
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="box-border order-first w-full text-black border-solid md:w-1/2 md:pr-10 md:order-none"
    >
      <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
        Advanced Health Solutions
      </h2>
      <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
        Explore our innovative solutions designed to enhance your overall health and wellness.
      </p>
      <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
          <span className="inline-flex items-center justify-center size-6 mr-2 text-white bg-green-300 rounded-full">
            <span className="text-sm font-bold">✓</span>
          </span> AI-powered health assessments
        </li>
        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
          <span className="inline-flex items-center justify-center size-6 mr-2 text-white bg-green-300 rounded-full">
            <span className="text-sm font-bold">✓</span>
          </span> 24/7 virtual consultations
        </li>
        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
          <span className="inline-flex items-center justify-center size-6 mr-2 text-white bg-green-300 rounded-full">
            <span className="text-sm font-bold">✓</span>
          </span> Personalized wellness programs
        </li>
      </ul>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="box-border relative w-full max-w-md px-4 mt-5 mb-4 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10"
    >
      <motion.img
        src="/assets/images/image-2.svg"
        alt="Advanced Health Solutions"
        className="object-cover size-full transition-transform duration-500 hover:scale-110"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />
    </motion.div>
  </div>
</div>
    </section>
  );
};
