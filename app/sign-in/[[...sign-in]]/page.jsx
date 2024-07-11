"use client";

import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="flex justify-center items-center min-h-screen bg-dark-300">
    <SignIn />
  </div>
);

export default SignInPage;
