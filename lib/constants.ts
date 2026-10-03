export const SITE_CONFIG = {
  name: "Niramaya",
  shortName: "NIRAMAYA",
  description:
    "Niramaya is a personalized wellness app for understanding your wellbeing, setting goals, tracking progress, and discovering Yoga and Ayurveda.",
  url: "https://niramaya-mobile.vercel.app",
  email: "hello@niramaya.app",
} as const;

export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Wellness",
    href: "/wellness",
  },
  {
    label: "About",
    href: "/about",
  },
] as const;

export const FOOTER_LINKS = {
  explore: [
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "How It Works",
      href: "/how-it-works",
    },
    {
      label: "The App",
      href: "/app",
    },
    {
      label: "Resources",
      href: "/resources",
    },
  ],

  wellness: [
    {
      label: "Wellness",
      href: "/wellness",
    },
    {
      label: "Yoga",
      href: "/yoga",
    },
    {
      label: "Ayurveda",
      href: "/ayurveda",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
  ],

  information: [
    {
      label: "About Niramaya",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  legal: [
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
    {
      label: "Wellness Disclaimer",
      href: "/disclaimer",
    },
    {
      label: "Delete Account",
      href: "/delete-account",
    },
  ],
} as const;
