"use client";

// import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form data submitted:", formData);
    };

    return (
        <div className="w-full py-7 dark:text-white">
            <div className="flex flex-col space-y-2 text-center mt-4">
                <h1 className="text-xl font-semibold tracking-tight">Contact Us</h1>
                <h2 className="text-3xl bold tracking-tight py-2">Get in Touch</h2>
                <p className="text-sm text-muted-foreground">We love to hear from you. Please fill out the form below to get in touch with us.</p>
            </div>

            <div className="flex justify-center items-center mt-8">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-semibold tracking-tight text-center">Our Location</h2>
                <div className="flex justify-center items-center mt-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509311!2d144.95373531590474!3d-37.817209979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57765a3a295664!2sEnvato!5e0!3m2!1sen!2sin!4v1627544980826!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg shadow-md w-full max-w-4xl"
                    ></iframe>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-semibold tracking-tight text-center">Contact Information</h2>
                <div className="flex flex-col items-center mt-4 space-y-4">
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">Address: 123 Main Street, City, Country</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">Phone: +1 234 567 890</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">Email: contact@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
