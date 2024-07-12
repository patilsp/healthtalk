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
      <nav className="flex items-center space-x-6 text-sm font-medium">
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
          href="/dashboard"
          className={cn(
            "relative transition-colors hover:text-foreground/80",
            pathname === "/dashboard" ? "text-active" : "text-foreground/60"
          )}
        >
          About Us
          {pathname === "/dashboard" && <span className="border-active absolute bottom-[-5px] left-0 w-full border-b-2"></span>}
        </Link>
        <Link
          href="/help"
          className={cn(
            "relative transition-colors hover:text-foreground/80",
            pathname === "/help" ? "text-active" : "text-foreground/60"
          )}
        >
          How it Works
          {pathname === "/help" && <span className="border-active absolute bottom-[-5px] left-0 w-full border-b-2"></span>}
        </Link>
        <Link
          href="/doctor"
          className={cn(
            "relative transition-colors hover:text-foreground/80",
            pathname === "/doctor" ? "text-active" : "text-foreground/60"
          )}
        >
          Doctor
          {pathname === "/doctor" && <span className="border-active absolute bottom-[-5px] left-0 w-full border-b-2"></span>}
        </Link>
        <Link
          href="/contactus"
          className={cn(
            "relative transition-colors hover:text-foreground/80",
            pathname === "/contactus" ? "text-active" : "text-foreground/60"
          )}
        >
          Contact Us
          {pathname === "/contactus" && <span className="border-active absolute bottom-[-5px] left-0 w-full border-b-2"></span>}
        </Link>

      </nav>
    </div>
  )
}