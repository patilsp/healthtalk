"use client";

import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import Lottie from "lottie-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import animationData from "@/assets/animation1.json";
import { Form } from "@/components/ui/form";
import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

export const PatientForm = () => {
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        name: user.fullName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
        phone: user.primaryPhoneNumber?.phoneNumber || "",
      });
    }
  }, [user, form]);

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);
    setShowAnimation(true);

    try {
      const newUser = await createUser(values);

      if (newUser) {
        setTimeout(() => {
          router.push(`/patients/${newUser.$id}/register`);
        }, 2000); // Adjust the timeout to match the animation duration
      }
    } catch (error) {
      // Handle error here if needed
    }

    setIsLoading(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row">
      {!showAnimation && (
        <div className="lg:w-1/2 hidden lg:flex items-center justify-center">
          <Image
            src="/assets/images/coming-soon.png"
            width={500}
            height={500}
            alt="doctor"
            className="rounded"
          />
        </div>
      )}
      <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-8">
        {!showAnimation ? (
          <div className="max-w-md w-full border p-8 rounded-lg shadow-lg">
            <Form {...form} className="w-full">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <section className="text-center lg:text-left mb-8">
                  <h1 className="text-2xl lg:text-3xl font-semibold">
                    Hi there 👋
                  </h1>
                  <p className="text-gray-500">
                    Get started with appointments.
                  </p>
                </section>

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="name"
                  label="Full name"
                  placeholder="John Doe"
                  iconAlt="user"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="johndoe@gmail.com"
                  iconAlt="email"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="phone"
                  label="Phone number"
                  placeholder="(555) 123-4567"
                />

                <SubmitButton className="bg-indigo-500 hover:bg-indigo-800 my-2 w-full" isLoading={isLoading}>Get Started</SubmitButton>
              </form>
            </Form>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center justify-center size-full border border-gray-200 rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <Lottie animationData={animationData} loop={false} />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">
                  Preparing Your Registration
                </h2>
                <p className="text-gray-500">
                  Please wait while we prepare your registration page.
                </p>
              </div>
            </div>
          </div>
        
        )}
      </div>
    </section>
  );
};
