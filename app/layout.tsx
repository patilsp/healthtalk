import {
  ClerkProvider,
} from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Health Talk",
  description:
    "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/icons/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={cn(
            "min-h-screen flex flex-col bg-dark-300 font-sans antialiased",
            fontSans.variable
          )}
        >
          <Header />
          <main className="grow">
            <ThemeProvider attribute="class" defaultTheme="dark">
              {children}
            </ThemeProvider>
          </main>
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  );
}
