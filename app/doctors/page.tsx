"use client";

import { motion } from "framer-motion";

const Doctors = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white space-y-16">
      <div className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex items-baseline justify-between mb-8">
          <h1 className="mr-10 text-xl font-bold leading-none md:text-5xl">
            Our Doctors
          </h1>
          <a
            href="#"
            className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600 items-center"
          >
            View All <span className="ml-2">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: "Dr. John Doe",
              specialty: "Cardiologist",
              image: "/assets/images/image-1.svg",
              description: "Expert in cardiovascular diseases with 10 years of experience.",
            },
            {
              name: "Dr. Jane Smith",
              specialty: "Neurologist",
              image: "/assets/images/image-2.svg",
              description: "Specialist in neurological disorders and brain surgery.",
            },
            {
              name: "Dr. Emily White",
              specialty: "Pediatrician",
              image: "/assets/images/image-3.svg",
              description: "Dedicated to children's health and well-being.",
            },
            {
              name: "Dr. Michael Brown",
              specialty: "Orthopedic Surgeon",
              image: "/assets/images/image-4.svg",
              description: "Skilled in treating musculoskeletal system issues.",
            },
            {
              name: "Dr. Linda Green",
              specialty: "Dermatologist",
              image: "/assets/images/image-5.svg",
              description: "Experienced in skin conditions and cosmetic treatments.",
            },
            {
              name: "Dr. David Black",
              specialty: "Oncologist",
              image: "/assets/images/image-6.svg",
              description: "Focused on cancer treatment and patient care.",
            },
          ].map((doctor, index) => (
            <div key={index} className="flex flex-col border border-gray-400 rounded-md shadow overflow-hidden">
              <motion.img
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                src={doctor.image}
                alt={doctor.name}
                className="object-cover object-center w-full h-48"
              />
              <div className="flex grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white">
                  <div>
                    <a
                      href="#"
                      className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-500"
                    >
                      {doctor.specialty}
                    </a>
                    <a
                      href="#"
                      className="block mb-4 text-green-500 font-black leading-tight hover:underline hover:text-green-600"
                    >
                      {doctor.name}
                    </a>
                    <p className="mb-4">
                      {doctor.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-block pb-1 mt-2 text-sm font-black text-blue-500 uppercase border-b border-transparent hover:border-blue-600 items-center"
                    >
                      Read More <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
