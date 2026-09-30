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
      "Niramaya begins by helping you build a personal wellness context through onboarding information about your health, lifestyle, wellbeing and preferences.",
    accent: "light",
    features: [
      {
        number: "01",
        title: "Personalized Onboarding",
        category: "Personalization",
        description:
          "Build your wellness profile through a structured onboarding experience designed around your individual context.",
        highlight: true,
      },
      {
        number: "02",
        title: "Health Profile",
        category: "Health",
        description:
          "Keep important health-related information organized as part of your personal wellness profile.",
      },
      {
        number: "03",
        title: "Lifestyle Information",
        category: "Lifestyle",
        description:
          "Capture lifestyle information that contributes to a broader understanding of your everyday wellbeing.",
      },
      {
        number: "04",
        title: "Nutrition & Sleep",
        category: "Wellbeing",
        description:
          "Include nutrition and sleep information as part of your overall wellness context.",
      },
      {
        number: "05",
        title: "Fitness & Yoga Preferences",
        category: "Movement",
        description:
          "Share movement, fitness and Yoga-related preferences that help shape your wellness experience.",
      },
      {
        number: "06",
        title: "Wellness Preferences",
        category: "Personalization",
        description:
          "Define preferences that help make your experience more relevant to the areas you care about.",
      },
    ],
  },

  {
    id: "progress",
    eyebrow: "02 · Understand & progress",
    title: "Turn wellness intentions into something you can follow.",
    description:
      "Niramaya brings your dashboard, goals and progress together so your wellness journey has a clear place to begin and continue.",
    accent: "dark",
    features: [
      {
        number: "07",
        title: "Personalized Dashboard",
        category: "Dashboard",
        description:
          "Get a focused overview of your wellness information and the areas you are working on.",
        highlight: true,
      },
      {
        number: "08",
        title: "Wellness Goals",
        category: "Goals",
        description:
          "Create goals around the areas of wellbeing you want to improve or maintain.",
      },
      {
        number: "09",
        title: "Goal Progress Tracking",
        category: "Goals",
        description:
          "Follow progress toward your active goals and understand how your journey is developing.",
      },
      {
        number: "10",
        title: "Progress Journal",
        category: "Progress",
        description:
          "Record progress information and build a clearer picture of your wellness journey over time.",
      },
      {
        number: "11",
        title: "Health Profile Management",
        category: "Health",
        description:
          "Review and manage your health profile as your personal information changes.",
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
        number: "12",
        title: "Explore Wellness",
        category: "Explore",
        description:
          "Browse wellness experiences and information across different areas in one place.",
        highlight: true,
      },
      {
        number: "13",
        title: "Personalized Recommendations",
        category: "Recommendations",
        description:
          "Discover recommendations informed by your wellness context and interests.",
      },
      {
        number: "14",
        title: "Wellness Search",
        category: "Discovery",
        description:
          "Find relevant wellness content and experiences through the app's search functionality.",
      },
      {
        number: "15",
        title: "Favorites",
        category: "Personalization",
        description:
          "Keep useful wellness content and experiences accessible through your favorites.",
      },
      {
        number: "16",
        title: "Yoga",
        category: "Movement",
        description:
          "Explore Yoga practices and information as part of your broader wellness journey.",
      },
      {
        number: "17",
        title: "Ayurveda",
        category: "Traditional Wellness",
        description:
          "Discover Ayurveda-focused information and recommendations within the Niramaya experience.",
      },
    ],
  },

  {
    id: "consultation",
    eyebrow: "04 · Professional support",
    title: "Connect your wellness journey with professional consultation.",
    description:
      "Niramaya includes consultation experiences designed to help users connect with Ayurvedic professionals.",
    accent: "dark",
    features: [
      {
        number: "18",
        title: "Ayurvedic Consultation",
        category: "Consultation",
        description:
          "Connect with an Ayurvedic consultant through the consultation experience.",
        highlight: true,
      },
      {
        number: "19",
        title: "Online Consultation",
        category: "Consultation",
        description:
          "Access consultation options designed for online interaction with professionals.",
      },
      {
        number: "20",
        title: "Offline Consultation",
        category: "Consultation",
        description:
          "Support consultation experiences that can take place offline.",
      },
      {
        number: "21",
        title: "Consultation Booking",
        category: "Booking",
        description:
          "Book an available consultation through the dedicated booking experience.",
      },
      {
        number: "22",
        title: "Consultation History",
        category: "Consultation",
        description:
          "Review your previous consultation activity from one place.",
      },
    ],
  },

  {
    id: "account",
    eyebrow: "05 · Stay connected",
    title: "Keep your Niramaya experience under your control.",
    description:
      "Manage your profile, notifications and account preferences as your wellness journey evolves.",
    accent: "light",
    features: [
      {
        number: "23",
        title: "Notifications",
        category: "Engagement",
        description:
          "Stay informed through notifications relevant to your Niramaya experience.",
      },
      {
        number: "24",
        title: "Profile Management",
        category: "Account",
        description: "View and manage your personal profile information.",
      },
      {
        number: "25",
        title: "App Settings",
        category: "Account",
        description: "Manage available application settings and preferences.",
      },
      {
        number: "26",
        title: "Password Management",
        category: "Security",
        description:
          "Manage your account password through the dedicated password experience.",
      },
      {
        number: "27",
        title: "Account Management",
        category: "Account",
        description:
          "Manage your Niramaya account and account-related actions.",
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
        number: "28",
        title: "Secure Authentication",
        category: "Security",
        description:
          "Authentication provides the foundation for accessing your personal Niramaya experience.",
        highlight: true,
      },
      {
        number: "29",
        title: "Login & Signup",
        category: "Account",
        description:
          "Create an account and securely return to your Niramaya experience.",
      },
      {
        number: "30",
        title: "Personalized User Experience",
        category: "Personalization",
        description:
          "Bring your profile, goals, progress and wellness exploration together around your own account.",
      },
    ],
  },
];
