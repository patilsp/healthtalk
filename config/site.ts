// eslint-disable-next-line no-use-before-define
export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Health Talk",
  description:
    "Health Talk: Your trusted companion for seamless doctor appointment bookings. Access top healthcare professionals, book appointments with ease, and manage your health efficiently from the comfort of your home.",
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
  links: {
    twitter: "https://twitter.com/patilsp",
    github: "https://github.com/patilsp",
    docs: "https://ui.shadcn.com",
  },
}
