"use client";

import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="flex min-h-screen mt-4 justify-center">
    <SignIn />
  </div>
);

export default SignInPage;
