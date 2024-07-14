"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
          src="/assets/icons/health-talk-logo.svg"
          height={1000}
          width={1000}
          alt="patient"
          className="h-8 w-fit"
        />
      </Link>
      <nav className="flex items-center space-x-6 text-xs font-bold">
        <Link
          href="/"
          className={cn(
            "relative transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-active" : "text-foreground/60"
          )}
        >
          Home
          {pathname === "/" && <span className="border-active absolute bottom-[-5px] left-0 w-full border-b-2"></span>}
        </Link>
        <Link
          href="/doctors"
          className={cn(
            "relative transition-colors hover:text-foreground/80",
            pathname === "/doctors" ? "text-active" : "text-foreground/60"
          )}
        >
          Doctors
          {pathname === "/doctors" && <span className="border-active absolute bottom-[-5px] left-0 w-full border-b-2"></span>}
        </Link>
        {/* <Link
          href="/consultations"
          className={cn(
            "relative transition-colors hover:text-foreground/80",
            pathname === "/consultations" ? "text-active" : "text-foreground/60"
          )}
        >
          Consultations
          {pathname === "/consultations" && <span className="border-active absolute bottom-[-5px] left-0 w-full border-b-2"></span>}
        </Link> */}
        <Link
          href="/about-us"
          className={cn(
            "relative transition-colors hover:text-foreground/80",
            pathname === "/about-us" ? "text-active" : "text-foreground/60"
          )}
        >
          About Us
          {pathname === "/about-us" && <span className="border-active absolute bottom-[-5px] left-0 w-full border-b-2"></span>}
        </Link>
        <Link
          href="/why-choose-us"
          className={cn(
            "relative transition-colors hover:text-foreground/80",
            pathname === "/why-choose-us" ? "text-active" : "text-foreground/60"
          )}
        >
          Why Choose Us
          {pathname === "/why-choose-us" && <span className="border-active absolute bottom-[-5px] left-0 w-full border-b-2"></span>}
        </Link>
        
     

      </nav>
    </div>
  )
}
