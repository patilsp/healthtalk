import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from "next";
import { Toaster } from 'react-hot-toast';

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/healthcare.png",
    shortcut: "/healthcare.png",
    apple: "/healthcare.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        
      <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
             <div className='main'>
              <div className='gradient' />
            </div>
            
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              {/* <SiteHeader /> */}
                <div className="flex-1">{children}</div>
              {/* <SiteFooter /> */}
            </div>
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
      </ClerkProvider>
    </>
  )
}
