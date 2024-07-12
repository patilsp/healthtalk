"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Welcome = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/sign-in");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="mx-auto flex w-full flex-col items-center space-y-8">
        <div
          className="max-w-4xl rounded-full bg-slate-500 px-12 py-3 text-white">
          Over 1K people have become part of our Health Talk 🎉
        </div>

        <h1
          className="mx-auto max-w-4xl text-center text-7xl font-bold text-green-500"
          style={{ lineHeight: "80px" }}
        >
          Welcome to Health Talk
        </h1>

        <p className="text-xl text-black">
          Connect with a vibrant community of health enthusiasts and professionals. 
         
        </p>

        <Link href="/sign-up">
          <button
            onClick={handleGetStarted}
            className="btn-primary rou border shadow p-2">
            Get Started
          </button>
        </Link>
      </div>

      {/* <div className="mt-20 rounded border p-1">
        <image
          src="/assets/images/appointment.jpg"
          className="h-full w-full object-cover"
          alt="welcome image"
        />
      </div> */}
    </div>
  );
};