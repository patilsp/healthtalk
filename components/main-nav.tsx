"use client"

import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link"
import * as React from "react"

import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"



// Dummy links for doctor appointment booking app
const services: { title: string; href: string; description: string }[] = [
  {
    title: "Book Appointment",
    href: "/appointments/book",
    description: "Easily book an appointment with a doctor of your choice.",
  },
  {
    title: "Find Doctors",
    href: "/doctors",
    description:
      "Search for doctors by specialty, location, or name and schedule a consultation.",
  },
  {
    title: "Health Check Packages",
    href: "/health-checks",
    description:
      "Explore comprehensive health check-up packages tailored to your needs.",
  },
  {
    title: "Patient Portal",
    href: "/patient-portal",
    description:
      "Access your health records, prescriptions, and appointment history.",
  },
  {
    title: "Telemedicine",
    href: "/telemedicine",
    description:
      "Consult with doctors online through video calls, chat, and secure messaging.",
  },
  {
    title: "Specialty Clinics",
    href: "/specialty-clinics",
    description:
      "Find specialized clinics for specific health issues like heart, skin, or dental care.",
  },
]

export function MainNav() {
  return (
    <div className="hidden md:flex justify-between gap-1">
      <div>
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
          src="/assets/icons/health-talk-logo.svg"
          height={1000}
          width={1000}
          alt="patient"
          className="h-8 w-fit"
        />  
      </Link>
      </div>
      <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.ul
                    className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Icons.logo className="size-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            HealthCareApp
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Book appointments, find doctors, and access medical services.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/about" title="About Us">
                      Learn more about our mission to provide accessible healthcare for everyone.
                    </ListItem>
                    <ListItem href="/contact" title="Contact Us">
                      Reach out to us for inquiries or assistance with your health journey.
                    </ListItem>
                    <ListItem href="/faq" title="FAQs">
                      Have questions? Check out our frequently asked questions for quick answers.
                    </ListItem>
                  </motion.ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.ul
                    className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </motion.ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/help" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Help
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
      </div>
    </div>
  )
}

// Reusable ListItem component with Framer Motion animations
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <motion.a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </motion.a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
