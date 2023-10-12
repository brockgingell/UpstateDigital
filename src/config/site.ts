import { MetadataRoute } from 'next'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Upstate Digital Design",
  description: 'Web Development Agency',
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Projects",
      href: "/portfolio",
    },
    {
      title: "About Us",
      href: "/company",
    },
  ],
  links: {
    twitter: "https://twitter.com/Upstate_Digital/",
    github: "https://github.com/StackedDeckSoftware/",
    facebook: "https://www.facebook.com/StackedDeckSoftware/",
    instagram: "https://www.instagram.com/StackedDeckAi/",
    linkedin: "https://www.linkedin.com/company/stacked-deck-ai/",
  },
}

