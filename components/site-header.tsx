"use client";

import { UserButton, useAuth } from "@clerk/nextjs"
import Link from "next/link"
import { useRouter } from 'next/navigation'

import { CommandMenu } from "@/components/command-menu"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"


export function SiteHeader() {
  const { userId } = useAuth();
  const router = useRouter();

  return (
    <header className="supports-backdrop-blur:bg-background/60 bg-background/95 sticky top-0 z-50 w-full shadow backdrop-blur">
      <div className="px-2 flex justify-between h-14 items-center">

        <MainNav />
        <MobileNav />
        <div className="flex items-center space-x-2 justify-end">
          <div className="hidden md:flex w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center gap-2">
              <ModeToggle />

              {userId == null ? (
                  <Link href='sign-in' className='bg-primary text-white text-sm py-1 px-4 rounded shadow'>
                    Sign In
                  </Link>
                ) : (                  
                  <UserButton afterSignOutUrl="/sign-in" />
                )}
                    
          </nav>
          
          <Link href="/?admin=true">
            <button type="button" onClick={() => router.push('/admin')}>
              Admin
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
