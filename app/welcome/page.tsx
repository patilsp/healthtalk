"use client";

import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Calendar, Clock, Phone } from "lucide-react"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Footer from "@/components/footer"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button"

export const Welcome = () => {
  const categories = [
    { title: "Cardiology", doctorNo: "10", image: "/assets/icons/image1.svg" },
    { title: "Neurology", doctorNo: "5", image: "/assets/icons/image2.svg" },
    { title: "Orthopedics", doctorNo: "8", image: "/assets/icons/image3.svg" },
    { title: "Pediatrics", doctorNo: "7", image: "/assets/icons/image4.svg" },
    { title: "Dermatology", doctorNo: "3", image: "/assets/icons/image6.svg" },
  ];
  const howitworks = [
    { title: "Search Doctor", desc: "Keeping you healthy is our high priority.", image: "/assets/icons/image6.svg" },
    { title: "Check Doctor Profile", desc: "Choose to best doctor's from our list.", image: "/assets/icons/image5.svg" },
    { title: "Schedule Appointment", desc: "Schedule an appointment with variable dates.", image: "/assets/icons/image1.svg" },
    { title: "Get Solution", desc: "Get best solution for your requirement.", image: "/assets/icons/image4.svg" },
  ];

  

  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/appointment");
    }
  }, [isSignedIn, router]);

  return (
    <div className="p-1">
       <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top w-full"
        >
          <SiteHeader />

      </motion.div>
      <div className="w-full py-12 md:py-10  bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Health, Our Priority
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Book your doctors appointment with ease. Fast, secure, and convenient scheduling at your fingertips.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="inline-flex items-center justify-center">
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="inline-flex items-center justify-center">
                Learn More
              </Button>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-500 md:flex-row md:gap-8 md:text-base">
              <div className="flex items-center gap-1">
                <Calendar className="size-4" />
                <span>Easy Scheduling</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="size-4" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="size-4" />
                <span>Reminders & Support</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative size-[280px] sm:size-[350px] md:size-[400px] lg:size-[500px]">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className=""
            >
              <Image
                src="/assets/images/image-1.svg"
                alt="Health Consultation"
                width={600}
                height={600}
                className="object-cover w-full transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top w-full"
      >
      <div className="w-full py-7 px-4  dark:text-white">
        <div className="container-fluid max-w-6xl px-2 md:px-8 mx-auto xl:px-5">
          <div className="flex flex-col items-center justify-between gap-2 md:gap-8">
            {/* Left Side */}
            <div className="w-full">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">
                 How it Works?
                </h1>
                <p className="text-gray-500 dark:text-gray-300">
                  4 Steps to get your solution 
                </p>
              </div>

             
            </div>

            {/* Right Side */}

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
              {howitworks.map((howitworks, index) => (
                <motion.div
                  key={index}
                  className="w-full bg-white dark:bg-gray-800 shadow-lg border rounded-md py-4 px-2 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                 <div className="flex justify-center items-center">
                    <Image
                        src={howitworks.image}
                        alt={howitworks.title}
                        width={40}
                        height={40}
                        className="object-cover"
                    />
                    </div>

                  <div className="py-4 px-2">
                    <h3 className="text-l text-center font-semibold">
                      {howitworks.title}
                    </h3>
                  </div>
                  <div className="p-0">
                    <h4 className="text-sm text-center">
                      {howitworks.desc}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </motion.div>

      <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top w-full"
        >
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
      </motion.div>

      <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top w-full"
        >
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
      </motion.div>

      <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top w-full"
        >
      <div className="w-full py-7 px-4  dark:text-white">
        <div className="container-fluid max-w-6xl px-2 md:px-8 mx-auto xl:px-5">
          <div className="flex flex-col items-center justify-between gap-8">
            {/* Left Side */}
            <div className="w-full">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">
                 Consult Top Doctors Online For <br /> Any Health Concern
                </h1>
                <p className="text-gray-500 dark:text-gray-300">
                  Private Online consultations with verified doctors in all specialists 
                </p>
              </div>

             
            </div>

            {/* Right Side */}

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="w-full bg-white dark:bg-gray-800 shadow-lg border rounded-md py-4 px-2 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                 <div className="flex justify-center items-center">
                    <Image
                        src={category.image}
                        alt={category.title}
                        width={40}
                        height={40}
                        className="object-cover"
                    />
                    </div>

                  <div className="py-4 px-2">
                    <h3 className="text-l text-center font-semibold">
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

            <div className="w-full flex justify-center text-center mt-2">
            <a
                href="/sign-in"
                className="flex items-center justify-center w-60 h-9 mb-3 text-sm text-white transition duration-200 bg-gradient-to-r from-indigo-500 to-purple-500 rounded hover:bg-indigo-700 sm:mb-0"
              >
                See All Specialist
                
              </a>

            </div>
          </div>
        </div>
      </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top"
      >
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
            <p className="pt-4 pb-8 m-0 text-sm  text-gray-700 border-0 border-gray-300">
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
                <div className="text-l font-medium text-black dark:text-white">
                  Consult via Voice and Video all
                </div>
                <p className="text-sm text-slate-500">
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
                <div className="text-l font-medium text-black dark:text-white">
                  Treat as a Family Doctor
                </div>
                <p className="text-sm text-slate-500">
                  When you getting consultation from doctors, you can think its
                  your family doctor. our doctor is friendly for patients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top"
      >
      <div className="w-full py-7 dark:text-white">
        <div className="container max-w-6xl px-1 md:px-8 mx-auto xl:px-5">
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
      </motion.div>
      <Footer />
    </div>
  );
};
