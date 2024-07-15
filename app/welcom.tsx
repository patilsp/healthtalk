"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Welcome = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/sign-in");
  };

  return (
    <section className="relative flex min-h-screen flex-col md:flex-row">
    {/* Left Side */}
    <div className="relative flex flex-col justify-center w-full md:w-1/2 p-6 bg-white md:bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-2 font-medium text-green-500 rounded-lg text-left uppercase"
      >
        Online Consultant
      </motion.div>
      <motion.h1
         initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="title-font-size text-left text-xl md:text-5xl lg:text-6xl font-bold text-[#5b6889] mb-8"
      >
        Providing the best <br /> online medical <br /> consultant. 
      </motion.h1>
      
      <div className="flex flex-col items-start space-y-4 border shadow rounded p-4 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 w-full"
        >
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="rounded p-2 flex-1"
          >
            <option value="" disabled>Select Doctor</option>
            <option value="doctor1">Doctor 1</option>
            <option value="doctor2">Doctor 2</option>
          </select>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded p-2 flex-1"
          >
            <option value="" disabled>Select Location</option>
            <option value="location1">Bangalore</option>
            <option value="location2">Pune </option>
          </select>
          <Link href="/sign-up">
            <button
              onClick={handleGetStarted}
              className="btn-primary shrink-0 ml-4"
            >
              Search
            </button>
          </Link>
        </motion.div>
        
      </div>
    </div>

    {/* Right Side */}
    <div className="block md:w-1/2 relative">
      <motion.img
        src="/assets/images/image-2.svg"
        alt="Welcome Image"
        className="object-cover size-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>    




  </section>
  );
};