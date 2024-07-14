// config/docs.ts
import { NavItem } from "types/nav";

interface DocsConfig {
  mainNav: NavItem[];
  sidebarNav: NavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Doctors",
      href: "/doctors",
    },
    {
      title: "About US",
      href: "/about-us",
    },
    {
      title: "WHy Choose Us",
      href: "/why-choose-us",
    },
     {
      title: "Settings",
      href: "/forms",
    },
    
  ],
  sidebarNav: [
    {
      title: "General",
      items: [
        {
          title: "Help",
          href: "/helps",
        },
        {
          title: "Settings",
          href: "/forms",
        },
        {
          title: "Sign Up",
          href: "/sign-up",
        },
        // ... other sidebarNav sub-items ...
      ],
    },
    // ... other sidebarNav items ...
  ],
};
