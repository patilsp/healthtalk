"use client";

import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="flex justify-center items-center min-h-screen bg-dark-300">
    <SignUp />
  </div>
);

export default SignUpPage;
