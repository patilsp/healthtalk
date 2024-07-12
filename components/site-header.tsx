"use client";

import { UserButton, useAuth } from "@clerk/nextjs"
import Link from "next/link"

import { CommandMenu } from "@/components/command-menu"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"


export function SiteHeader() {
  const { userId } = useAuth();

  return (
    <header className="supports-backdrop-blur:bg-background/60 bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">

        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center gap-2">
              <ModeToggle />

              {userId == null ? (
                  <Link href='sign-in' className='btn-primary bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-8 items-center justify-center rounded px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50'>
                    Sign In
                  </Link>
                ) : (                  
                  <UserButton afterSignOutUrl="/sign-in" />
                )}
                    
          </nav>
          
          <Link href="/?admin=true" className="relative  ml-2 p-[3px]">
            <div className="relative rounded bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1 text-white transition duration-200 hover:bg-transparent">
              Admin
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
