"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Welcome = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/sign-in");
  };

  return (
    // <div className="flex min-h-screen flex-col items-center justify-center p-4">
    //   <h1 className="mb-4 text-3xl font-bold">Welcome to Health Talk!</h1>
    //   <p className="mb-8 text-lg">Your one-stop solution for managing healthcare appointments.</p>
    //   <button
    //     onClick={handleGetStarted}
    //     className="rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
    //   >
    //     Get Started
    //   </button>
    // </div>
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="mx-auto flex w-full flex-col items-center space-y-8">
        <div
          className="text-white max-w-4xl rounded-full px-12 py-3"
          style={{
            background:
              "linear-gradient(91deg, rgba(206, 206, 206, 0.07) 9.41%, rgba(255, 255, 255, 0.07) 146.46%, rgba(2, 255, 255, 0.00) 204.33%, rgba(255, 19, 2, 0.07) 204.33%)",
          }}
        >
          Over 1K people have become part of our Health Talk 🎉
        </div>

        <h1
          className="mx-auto max-w-4xl text-center text-7xl font-bold text-green-500"
          style={{ lineHeight: "80px" }}
        >
          Welcome to Health Talk
        </h1>

        <p className="text-xl text-white">
          Connect with a vibrant community of health enthusiasts and professionals. 
         
        </p>

        <Link href="/sign-up">
          <button
            onClick={handleGetStarted}
            className="rounded-full px-20 py-4 text-white"
            style={{
              background:
                "linear-gradient(91deg, #2FBEFF 7.38%, #1A67DC 92.4%, rgba(255, 255, 255, 0.90) 126.21%, rgba(44, 189, 255, 0.29) 161.04%, rgba(38, 13, 192, 0.00) 224.67%, rgba(108, 84, 255, 0.00) 224.67%)",
            }}
          >
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
