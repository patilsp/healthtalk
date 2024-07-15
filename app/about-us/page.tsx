"use client";

import { motion } from "framer-motion";

const About = () => {
  
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-16">
      <div className="container">
        <section className="text-center py-12 px-4">
          <motion.h1
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="text-4xl font-bold tracking-tight sm:text-6xl"
        >
          About Us
        </motion.h1>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-4 text-gray-700 max-w-2xl mx-auto"
          >
            Our mission is to provide exceptional healthcare services with a focus on availability, reliability, and support.
          </motion.p>
          <div className="flex justify-center space-x-8 mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="transition hover:scale-110"
            >
              <h3 className="text-xl font-bold">85+</h3>
              <p className="text-gray-700">Specialists</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="transition hover:scale-110"
            >
              <h3 className="text-xl font-bold">25+</h3>
              <p className="text-gray-700">Years of Experience</p>
            </motion.div>
          </div>
        </section>

        <section className="bg-green-500 text-white py-12 px-4 rounded shadow">
          <h2 className="text-2xl font-bold text-center">Our Vision</h2>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-4 text-center max-w-2xl mx-auto"
          >
            Healthcare anytime, anywhere. We aim to revolutionize the healthcare industry by making quality healthcare accessible to everyone.
          </motion.p>
        </section>

        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Our Healthcare Specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {["Cardiology", "Neurology", "Pediatrics", "Oncology"].map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 shadow-lg rounded-lg bg-green-200 hover:bg-green-300 transition-colors"
              >
                <h3 className="text-xl font-bold">{specialty}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section className=" py-12 px-4">
          <h2 className="text-2xl font-bold text-center">State-Of-The-Art Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
            {[
              { title: "Advanced Diagnostics", description: "We utilize the latest technology for accurate diagnostics." },
              { title: "Telemedicine", description: "Consult with our specialists from the comfort of your home." },
              { title: "Robotic Surgery", description: "Minimally invasive procedures with precision." },
              { title: "Electronic Health Records", description: "Secure and easy access to your medical records." }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold">{tech.title}</h3>
                <p className="text-gray-700 mt-2">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Committed To Your Health And Happiness</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {["Book Appointment", "Informed Staff", "Total Health", "Get Consultation"].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 shadow-lg rounded-lg border transition-colors"
              >
                <h3 className="text-xl font-bold">{item}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-green-500 text-white text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Patient Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
            {[
              { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique mi.", patient: "Patient A" },
              { quote: "Nullam ac augue eget diam posuere vehicula. Vivamus quis nulla ac justo euismod posuere.", patient: "Patient B" },
              { quote: "Fusce tincidunt, arcu nec vestibulum tincidunt, eros massa ullamcorper urna.", patient: "Patient C" }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 shadow-lg rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors"
              >
                <p>{testimonial.quote}</p>
                <h3 className="mt-4 font-bold">- {testimonial.patient}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center py-12 px-4 w-full">
          <h2 className="text-2xl font-bold">Get Answers To Your Most Asked Questions</h2>
          <div className="mt-8">
            {[
              { question: "How do I make an appointment online?", answer: "You can book an appointment online through our website or mobile app." },
              { question: "What types of medical tests do you offer?", answer: "We offer a wide range of medical tests including blood tests, imaging, and more." },
              { question: "Do you accept insurance plans?", answer: "Yes, we accept most major insurance plans." }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 border rounded-lg shadow-md transition hover:scale-105 mt-4"
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
