"use client";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const Welcome = () => {
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    // Redirect to home if already signed in
    if (isSignedIn) {
      router.push('/');
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Health Talk</h1>
      <p className="text-lg mb-6">Get started with managing your appointments.</p>

      <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

      <button
        onClick={() => router.push('/sign-up')}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
