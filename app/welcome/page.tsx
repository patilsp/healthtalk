"use client";

import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Welcome = () => {
  const categories = [
    { title: "Cardiology", doctorNo: "10", image: "/assets/icons/image1.svg" },
    { title: "Neurology", doctorNo: "5", image: "/assets/icons/image2.svg" },
    { title: "Orthopedics", doctorNo: "8", image: "/assets/icons/image3.svg" },
    { title: "Pediatrics", doctorNo: "7", image: "/assets/icons/image4.svg" },
    { title: "Dermatology", doctorNo: "3", image: "/assets/icons/image6.svg" },
  ];

  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  return (
    <div className="p-0">
      <div className="w-full py-7 dark:text-white">
        <div className="container max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-1/2 md:px-3"
            >
              <div className="space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">
                    Expert Health Consultations
                  </span>
                  <br />
                  <span className="block text-green-500 xl:inline">
                    For Better Well being.
                  </span>
                </h1>
                <p className="text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Discover the best tools and services to improve your health
                  with our expert consultations.
                </p>
                <div className="flex w-full items-center justify-start gap-2 py-2">
                  <a
                    href="/sign-in"
                    className="px-7 py-2.5 rounded-lg relative group text-white font-medium inline-block mb-2 sm:mb-0"
                  >
                    <span className="absolute top-0 left-0 size-full rounded opacity-50 blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span className="size-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br group-active:opacity-0 rounded-lg opacity-50 from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 size-full transition-all duration-200 ease-out rounded-lg shadow-xl bg-gradient-to-br group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 size-full transition duration-200 ease-out rounded-lg bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <span className="relative text-lg">
                      Get Started{" "}
                      <svg
                        className="size-4 ml-1 inline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </a>

                  <a
                    href="#_"
                    className="flex items-center justify-center px-6 mb-2 py-3 text-gray-500 transition duration-200 bg-gray-200 border rounded-md hover:bg-gray-300 hover:text-gray-600"
                  >
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
              <Image
                src="/assets/images/image-1.svg"
                alt="Health Consultation"
                width={700}
                height={700}
                className="object-cover w-full transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full py-7 dark:text-white">
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
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 dark:text-white lg:text-3xl md:text-2xl">
              Enhance Your Health
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Utilize our top-notch tools and services to take control of your
              health and wellbeing.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center size-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Personalized health plans
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center size-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Access to expert consultations
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center size-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Comprehensive health tracking
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="w-full py-7 dark:text-white">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="box-border order-first w-full text-black border-solid md:w-1/2 md:pr-10 md:order-none"
          >
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 dark:text-white lg:text-3xl md:text-2xl">
              Advanced Health Solutions
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Explore our innovative solutions designed to enhance your overall
              health and wellness.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center size-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                AI-powered health assessments
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center size-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                24/7 virtual consultations
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center size-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Personalized wellness programs
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
              width={300}
              height={300}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full py-7 px-4  dark:text-white">
        <div className="container max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-col items-center justify-between gap-8">
            {/* Left Side */}
            <div className="w-full block md:flex justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Categories by Disease
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  We provide comprehensive information and services to help you{" "}
                  <br />
                  better understand and manage different health conditions.
                </p>
              </div>

              <a
                href="/sign-in"
                className="flex items-center justify-center w-60 h-9 px-1 mb-3 text-sm text-white transition duration-200 bg-gradient-to-r from-indigo-500 to-purple-500 rounded hover:bg-indigo-700 sm:mb-0"
              >
                See All Specialist
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Right Side */}

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 shadow border rounded-md p-4 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={80}
                    height={80}
                    className="w-full text-center object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl text-center font-semibold">
                      {category.title}
                    </h3>
                  </div>
                  <div className="p-0">
                    <h4 className="text-sm text-center text-green-400">
                      {category.doctorNo} Dcotors
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-7 dark:text-white">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10"
          >
            <motion.img
              src="/assets/images/onboarding-img.png"
              alt="Health Tools"
              className="object-cover size-full rounded-lg transition-transform duration-500 hover:scale-110"
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
            <span className="text-green-400 text-sm mb-4 capitalize">
              {" "}
              Behavior{" "}
            </span>
            <h2 className="mb-2 text-xl font-semibold leading-tight border-0 border-gray-300 dark:text-white lg:text-3xl md:text-2xl">
              Treat Like Live Care
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              At our health center, we believe in treating our patients with the
              same care and attention as we would our own family. Our doctors
              are dedicated to providing personalized care that addresses both
              your immediate and long-term health needs. .
            </p>
            <div className="w-full flex justify-start gap-4 mb-4">
              <div className="shrink-0">
                <motion.img
                  src="/assets/icons/image6.svg"
                  alt="Health Tools"
                  className="object-cover size-12 rounded"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">
                  Consult via Voice and Video all
                </div>
                <p className="text-slate-500">
                  When you getting consultation from doctors, you can consult
                  via voice and video call for better understanding.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-start gap-4">
              <div className="shrink-0">
                <motion.img
                  src="/assets/icons/image7.svg"
                  alt="Health Tools"
                  className="object-cover size-12 rounded"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">
                  Treat as a Family Doctor
                </div>
                <p className="text-slate-500">
                  When you getting consultation from doctors, you can think its
                  your family doctor. our doctor is friendly for patients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full py-7 dark:text-white">
        <div className="container max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-col space-y-2 text-center mt-4">
            <h1 className="text-xl font-semibold tracking-tight">Doctors</h1>
            <h2 className="text-3xl bold tracking-tight py-2">
              Meet Our Expert Doctors
            </h2>
            <p className="text-sm text-muted-foreground">
              Our team of highly skilled doctors is here to provide you with the
              best possible care and expertise in their respective fields.
            </p>
          </div>
          <div className="w-full flex justify-center items-center mt-8">
            <div className="w-full p-5 bg-opacity-40 backdrop-blur-lg">
              <div className="w-full mx-auto rounded-md p-4 bg-opacity-40 backdrop-blur-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center px-2 mx-auto">
                  {[
                    {
                      href: "/doctors",
                      imgSrc: "/assets/images/doctor1.jpg",
                      imgAlt: "Health Consultation",
                      badgeCount: 2,
                      title: "Instant Help at Your Fingertips",
                      specialization: "Cardiologist",
                      name: "Dr. John Doe",
                      description:
                        "Expert in heart diseases and cardiovascular surgery.",
                    },
                    {
                      href: "/doctors",
                      imgSrc: "/assets/images/doctor2.jpg",
                      imgAlt: "Health Consultation",
                      badgeCount: 3,
                      title: "Expert Neurological Care",
                      specialization: "Neurologist",
                      name: "Dr. Jane Smith",
                      description:
                        "Specialist in neurological disorders and brain surgery.",
                    },
                    {
                      href: "/doctors",
                      imgSrc: "/assets/images/doctor1.jpg",
                      imgAlt: "Health Consultation",
                      badgeCount: 1,
                      title: "Comprehensive Medical Support",
                      specialization: "General Practitioner",
                      name: "Dr. Sarah Lee",
                      description:
                        "Providing general health care and preventive services.",
                    },
                    {
                      href: "/doctors",
                      imgSrc: "/assets/images/doctor2.jpg",
                      imgAlt: "Health Consultation",
                      badgeCount: 4,
                      title: "Pediatric Care",
                      specialization: "Pediatrician",
                      name: "Dr. Michael Brown",
                      description:
                        "Specialist in child health and development.",
                    },
                  ].map((article, index) => (
                    <article
                      key={index}
                      className="p-6 mb-6 shadow transition duration-300 group hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border"
                    >
                      <a
                        target="_self"
                        href={article.href}
                        className="absolute opacity-0 inset-0"
                      ></a>
                      <div className="relative mb-4 rounded-2xl">
                        <Image
                          src={article.imgSrc}
                          alt={article.imgAlt}
                          width={200}
                          height={200}
                          className="rounded-2xl w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                          </svg>
                          <span className="ml-1 text-sm text-slate-400">
                            {article.badgeCount}
                          </span>
                        </div>
                      </div>
                      <h6 className="font-medium text-green-500 text-sm leading-8">
                        {article.specialization}
                      </h6>
                      <h3 className="font-medium text-xl leading-8">
                        <a
                          href={article.href}
                          className="block relative group-hover:text-green-500 transition-colors duration-200"
                        >
                          {article.name}
                        </a>
                      </h3>
                      <p className="font-medium text-gray-500 text-sm leading-8">
                        {article.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
