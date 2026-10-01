export type FeatureGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: "light" | "dark";
  features: Feature[];
};

export type Feature = {
  number: string;
  title: string;
  description: string;
  category: string;
  highlight?: boolean;
};

export const featureGroups: FeatureGroup[] = [
  {
    id: "foundation",
    eyebrow: "01 · Your foundation",
    title: "Start with a better understanding of yourself.",
    description:
      "Build your personal wellness context through guided onboarding across your health, lifestyle, wellbeing and preferences.",
    accent: "light",
    features: [
      {
        number: "01",
        title: "Personalized Onboarding",
        category: "Personalization",
        description:
          "Build your wellness context through a structured onboarding experience.",
        highlight: true,
      },
      {
        number: "02",
        title: "About You",
        category: "Personalization",
        description:
          "Provide personal information that forms part of your wellness profile.",
      },
      {
        number: "03",
        title: "Physical Health",
        category: "Health",
        description:
          "Capture physical-health information as part of your wellness context.",
      },
      {
        number: "04",
        title: "Lifestyle Information",
        category: "Lifestyle",
        description:
          "Capture lifestyle information that contributes to your everyday wellbeing.",
      },
      {
        number: "05",
        title: "Nutrition",
        category: "Nutrition",
        description:
          "Include nutrition-related information in your wellness context.",
      },
      {
        number: "06",
        title: "Sleep & Recovery",
        category: "Wellbeing",
        description:
          "Include sleep-related information as part of your personal wellness context.",
      },
      {
        number: "07",
        title: "Wellbeing",
        category: "Wellbeing",
        description:
          "Capture broader wellbeing information during your onboarding journey.",
      },
      {
        number: "08",
        title: "Fitness & Yoga Preferences",
        category: "Movement",
        description: "Share movement, fitness and Yoga-related preferences.",
      },
      {
        number: "09",
        title: "Wellness Preferences",
        category: "Personalization",
        description:
          "Define the preferences and wellness areas that matter to you.",
      },
    ],
  },

  {
    id: "progress",
    eyebrow: "02 · Understand & progress",
    title: "Turn wellness intentions into something you can follow.",
    description:
      "Bring your dashboard, health profile, goals and progress together so your journey has a clear place to begin and continue.",
    accent: "dark",
    features: [
      {
        number: "10",
        title: "Personalized Dashboard",
        category: "Dashboard",
        description:
          "Get a focused overview of your wellness information and active areas.",
        highlight: true,
      },
      {
        number: "11",
        title: "Health Profile",
        category: "Health",
        description: "View your personal health and wellness information.",
      },
      {
        number: "12",
        title: "Health Profile Editing",
        category: "Health",
        description: "Update your health profile as your information changes.",
      },
      {
        number: "13",
        title: "Wellness Goals",
        category: "Goals",
        description:
          "Create goals around the areas of wellbeing you want to work on.",
      },
      {
        number: "14",
        title: "Goal Creation",
        category: "Goals",
        description:
          "Add a new wellness goal through the dedicated goal experience.",
      },
      {
        number: "15",
        title: "Goal Details",
        category: "Goals",
        description: "View the details of an individual wellness goal.",
      },
      {
        number: "16",
        title: "Goal Progress Tracking",
        category: "Goals",
        description: "Follow progress toward your active wellness goals.",
      },
      {
        number: "17",
        title: "Progress Tracking",
        category: "Progress",
        description:
          "Record and review progress throughout your wellness journey.",
      },
      {
        number: "18",
        title: "Progress Entry Creation",
        category: "Progress",
        description: "Add new progress information to your journey.",
      },
      {
        number: "19",
        title: "Progress Details",
        category: "Progress",
        description: "Review individual progress records.",
      },
    ],
  },

  {
    id: "explore",
    eyebrow: "03 · Explore wellness",
    title: "Discover wellness experiences that go beyond the basics.",
    description:
      "Explore content, recommendations and practices across different areas of everyday wellbeing.",
    accent: "light",
    features: [
      {
        number: "20",
        title: "Explore Wellness",
        category: "Explore",
        description:
          "Browse wellness experiences and information across different areas.",
        highlight: true,
      },
      {
        number: "21",
        title: "Personalized Recommendations",
        category: "Recommendations",
        description:
          "Discover recommendations informed by your wellness context and interests.",
      },
      {
        number: "22",
        title: "Wellness Search",
        category: "Discovery",
        description: "Find relevant wellness content through search.",
      },
      {
        number: "23",
        title: "Favorites",
        category: "Personalization",
        description:
          "Keep useful wellness content and experiences accessible through your favorites.",
      },
      {
        number: "24",
        title: "Yoga",
        category: "Movement",
        description: "Explore Yoga practices and information.",
      },
      {
        number: "25",
        title: "Yoga Details",
        category: "Movement",
        description: "Open and explore individual Yoga content.",
      },
      {
        number: "26",
        title: "Ayurveda",
        category: "Traditional Wellness",
        description: "Discover Ayurveda-focused information and experiences.",
      },
      {
        number: "27",
        title: "Ayurveda Details",
        category: "Traditional Wellness",
        description: "Open and explore individual Ayurveda content.",
      },
    ],
  },

  {
    id: "consultation",
    eyebrow: "04 · Professional support",
    title: "Connect your wellness journey with professional consultation.",
    description:
      "Niramaya includes dedicated consultation experiences designed around Ayurvedic professional support.",
    accent: "dark",
    features: [
      {
        number: "28",
        title: "Ayurvedic Consultation",
        category: "Consultation",
        description:
          "Connect with an Ayurvedic professional through the consultation experience.",
        highlight: true,
      },
      {
        number: "29",
        title: "Consultation Discovery",
        category: "Consultation",
        description: "Explore the available consultation experience.",
      },
      {
        number: "30",
        title: "Consultation Booking",
        category: "Booking",
        description:
          "Book an available consultation through the dedicated booking experience.",
      },
      {
        number: "31",
        title: "Consultation Details",
        category: "Consultation",
        description: "View an individual consultation and its information.",
      },
      {
        number: "32",
        title: "Consultation History",
        category: "Consultation",
        description: "Review your previous consultation activity.",
      },
    ],
  },

  {
    id: "account",
    eyebrow: "05 · Stay connected",
    title: "Keep your Niramaya experience under your control.",
    description:
      "Manage your profile, notifications, settings and account information as your wellness journey evolves.",
    accent: "light",
    features: [
      {
        number: "33",
        title: "Notifications",
        category: "Engagement",
        description:
          "Stay informed through notifications relevant to your Niramaya experience.",
      },
      {
        number: "34",
        title: "Profile Management",
        category: "Account",
        description: "View and manage your personal profile information.",
      },
      {
        number: "35",
        title: "Profile Editing",
        category: "Account",
        description: "Update your personal profile information.",
      },
      {
        number: "36",
        title: "App Settings",
        category: "Account",
        description: "Manage available application settings and preferences.",
      },
      {
        number: "37",
        title: "Password Management",
        category: "Security",
        description:
          "Manage your account password through the dedicated password experience.",
      },
    ],
  },

  {
    id: "platform",
    eyebrow: "06 · Your account",
    title: "A secure starting point for your personal experience.",
    description:
      "The Niramaya platform provides the account and authentication foundations needed to access your personalized experience.",
    accent: "dark",
    features: [
      {
        number: "38",
        title: "Secure Authentication",
        category: "Security",
        description:
          "Authentication provides the foundation for accessing your personal Niramaya experience.",
        highlight: true,
      },
      {
        number: "39",
        title: "Login",
        category: "Account",
        description: "Securely return to your Niramaya account.",
      },
      {
        number: "40",
        title: "Signup",
        category: "Account",
        description:
          "Create a Niramaya account and begin your wellness experience.",
      },
      {
        number: "41",
        title: "Personalized User Experience",
        category: "Personalization",
        description:
          "Bring your profile, goals, progress and wellness exploration together around your account.",
      },
    ],
  },
];
