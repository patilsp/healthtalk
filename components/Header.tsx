"use client";

import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="top-0 z-50 w-full bg-dark-400 py-2 text-white shadow-md">
        <div className="container mx-auto px-2">
            <div class="group relative flex w-full shrink-0 flex-wrap items-center justify-between py-2">
              <Link href="/">
                <Image
                    src="/assets/icons/health-talk-logo.svg"
                    height={1000}
                    width={1000}
                    alt="patient"
                    className="h-8 w-fit"
                  />
              </Link>
                
                <div class="items-end gap-8 md:flex">
                  <div className="flex items-center">
                    <SignedOut>
                      <Link href="/sign-in">
                        <button className="rounded-lg bg-black px-4 py-2 text-white">
                          Sign In
                        </button>
                      </Link>
                    </SignedOut>
                    <SignedIn>
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                    <Link href="/?admin=true" className="relative  ml-2 p-[3px]">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                      <div className="group relative rounded-[6px]  bg-black px-4 py-1 text-white transition duration-200 hover:bg-transparent">
                        Admin
                      </div>
                    </Link>
                  </div>
                </div>
              
            </div>
            
        </div>

      
    </header>
  );
};

export default Header;
