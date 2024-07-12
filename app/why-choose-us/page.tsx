"use client";

import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h2 className="text-center">Health Talk Consulting </h2>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-green-500 mb-2"
      >
        Why Choose Health Talk
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl text-lg text-gray-700 space-y-4 text-center"
      >
        <p>
          At Health Talk, we are dedicated to providing the best online medical consultations.
          Here are some reasons why you should choose us:
        </p>
      </motion.div>

      {/* Section 1 */}

      <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-left space-y-4"
        >
          <h2 className="text-2xl font-bold text-green-500">Find Your Best Doctors from here</h2>
          <p className="text-gray-700">
            Get consultations from highly qualified and experienced medical professionals from the comfort of your home.
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src="/assets/images/image-4.svg"
          alt="Doctor"
          className="md:w-1/2 "
        />
      </div>


  {/* Section 2 */}
  <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 space-y-8 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-left space-y-4"
        >
          <h2 className="text-2xl font-bold text-green-500">Affordable and Transparent Pricing</h2>
          <p className="text-gray-700">
            We provide affordable medical consultations with transparent pricing, ensuring no hidden costs.
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src="/assets/images/image-2.svg"
          alt="Doctor"
          className="md:w-1/2 "
        />
      </div>

        {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-left space-y-4"
        >
          <h2 className="text-2xl font-bold text-green-500">Access to Top Medical Professionals</h2>
          <p className="text-gray-700">
            Get consultations from highly qualified and experienced medical professionals from the comfort of your home.
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src="/assets/images/image-3.svg"
          alt="Doctor"
          className="md:w-1/2 "
        />
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 space-y-8 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-left space-y-4"
        >
          <h2 className="text-2xl font-bold text-green-500">Affordable and Transparent Pricing</h2>
          <p className="text-gray-700">
            We provide affordable medical consultations with transparent pricing, ensuring no hidden costs.
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src="/assets/images/image-5.svg"
          alt="Doctor"
          className="md:w-1/2 "
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
