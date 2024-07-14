"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const services = [
  {
    imgSrc: "/assets/images/image-1.svg",
    title: "Consult with Top Doctors",
    description: "Get personalized consultations with our top medical experts.",
    buttonText: "Book Now",
  },
  {
    imgSrc: "/assets/images/image-2.svg",
    title: "24/7 Medical Support",
    description: "Access medical support at any time of the day or night.",
    buttonText: "Contact Us",
  },
  {
    imgSrc: "/assets/images/image-3.svg",
    title: "Health Tracking Tools",
    description: "Utilize advanced tools to keep track of your health metrics.",
    buttonText: "Explore Tools",
  },
  {
    imgSrc: "/assets/images/image-4.svg",
    title: "Wellness Programs",
    description: "Join our wellness programs for a healthier lifestyle.",
    buttonText: "Join Now",
  },
];

const ServiceSection = () => {
  return (
    <section className="py-6 bg-gray-50 rounded shadow">
      <div className="flex justify-center container mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center mb-12"
          >
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "order-2" : "order-1"} md:order-none`}>
              <img
                src={service.imgSrc}
                alt={service.title}
                className="object-cover w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? "order-1" : "order-2"} md:order-none`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <Link href="#">
                <Button className="btn-primary">
                  {service.buttonText}
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
