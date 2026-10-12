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

  {
    id: "wellness-library",
    eyebrow: "07 · Everyday wellness",
    title: "Discover practical guidance for everyday wellbeing.",
    description:
      "Explore health and wellness information, browse featured tips and find content across different areas of your daily routine.",
    accent: "light",
    features: [
      {
        number: "42",
        title: "Health & Wellness Library",
        category: "Wellness",
        description:
          "Browse a collection of health and wellness tips within the mobile app.",
        highlight: true,
      },
      {
        number: "43",
        title: "Featured Wellness Tips",
        category: "Discovery",
        description:
          "Explore featured wellness content highlighted for discovery.",
      },
      {
        number: "44",
        title: "Wellness Categories",
        category: "Discovery",
        description:
          "Browse wellness tips by category, including nutrition, fitness, sleep and wellbeing.",
      },
      {
        number: "45",
        title: "Wellness Tip Details",
        category: "Content",
        description:
          "Open individual wellness tips and read their detailed information.",
      },
      {
        number: "46",
        title: "Wellness Search and Filtering",
        category: "Discovery",
        description:
          "Search wellness content and narrow results using available categories.",
      },
      {
        number: "47",
        title: "Empty Search Results",
        category: "Usability",
        description:
          "Receive helpful guidance when no wellness tips match the current search or filters.",
      },
      {
        number: "48",
        title: "Wellness Content Loading States",
        category: "Usability",
        description:
          "See content-shaped loading placeholders while wellness information is being fetched.",
      },
      {
        number: "49",
        title: "Pull to Refresh",
        category: "Usability",
        description:
          "Refresh supported wellness content from the mobile screen.",
      },
    ],
  },

  {
    id: "engagement",
    eyebrow: "08 · Stay informed",
    title: "Keep up with the information that matters to you.",
    description:
      "Access announcements, notifications and saved content throughout your wellness journey.",
    accent: "dark",
    features: [
      {
        number: "50",
        title: "Announcements",
        category: "Engagement",
        description:
          "View announcements published for the Niramaya experience.",
        highlight: true,
      },
      {
        number: "51",
        title: "Announcement Details",
        category: "Content",
        description:
          "Read individual announcements and their available information.",
      },
      {
        number: "52",
        title: "Announcement Types",
        category: "Content",
        description:
          "Distinguish announcements using their available type labels and badges.",
      },
      {
        number: "53",
        title: "Notification Center",
        category: "Engagement",
        description: "View notifications associated with your account.",
      },
      {
        number: "54",
        title: "Read and Unread Notifications",
        category: "Engagement",
        description:
          "Display notification read status where supported by the application.",
      },
      {
        number: "55",
        title: "Saved Wellness Content",
        category: "Personalization",
        description:
          "Return to your favorite Yoga and Ayurveda content from the favorites experience.",
      },
    ],
  },

  {
    id: "app-experience",
    eyebrow: "09 · A reliable app experience",
    title: "A mobile experience designed to guide you along the way.",
    description:
      "Support common app states with navigation fallbacks, clear notices and reusable interface components.",
    accent: "light",
    features: [
      {
        number: "56",
        title: "Splash Screen",
        category: "App Experience",
        description:
          "Provide an app entry screen while the application initializes.",
      },
      {
        number: "57",
        title: "Not Found Screen",
        category: "Navigation",
        description:
          "Give users a clear way back when they navigate to an unavailable screen.",
      },
      {
        number: "58",
        title: "Internet Connection Notice",
        category: "Reliability",
        description:
          "Show an internet-required notice when connectivity prevents supported app functionality.",
      },
      {
        number: "59",
        title: "Maintenance Notice",
        category: "Reliability",
        description:
          "Display maintenance information when the app is subject to a maintenance restriction.",
      },
      {
        number: "60",
        title: "App Update Prompt",
        category: "Reliability",
        description:
          "Present app update information through the available update gate and modal.",
      },
      {
        number: "61",
        title: "Health Disclaimer",
        category: "Safety",
        description:
          "Present disclaimer information through the mobile app's disclaimer interface.",
      },
      {
        number: "62",
        title: "Reusable UI Components",
        category: "Design System",
        description:
          "Use shared buttons, inputs, password fields, navigation elements and modal components.",
      },
      {
        number: "63",
        title: "Loading and Error States",
        category: "Usability",
        description:
          "Provide consistent loading, error and empty states across supported screens.",
      },
    ],
  },

  {
    id: "admin-access",
    eyebrow: "10 · Administration",
    title: "Manage the platform from a dedicated admin workspace.",
    description:
      "Give authorized administrators a central interface for managing users, content and the operational areas of Niramaya.",
    accent: "dark",
    features: [
      {
        number: "64",
        title: "Admin Authentication",
        category: "Administration",
        description:
          "Authenticate administrators through the dedicated admin login experience.",
        highlight: true,
      },
      {
        number: "65",
        title: "Protected Admin Workspace",
        category: "Security",
        description:
          "Organize administrative screens behind the admin authentication and layout system.",
      },
      {
        number: "66",
        title: "Admin Dashboard",
        category: "Administration",
        description:
          "Provide a central entry point for administrative modules.",
      },
      {
        number: "67",
        title: "Admin Profile",
        category: "Administration",
        description:
          "Access the administrator profile page within the admin panel.",
      },
      {
        number: "68",
        title: "User Management",
        category: "Administration",
        description:
          "Manage user records through the dedicated admin interface.",
      },
      {
        number: "69",
        title: "Admin Management",
        category: "Administration",
        description:
          "Manage administrator records through the dedicated administrative module.",
      },
      {
        number: "70",
        title: "Consultation Administration",
        category: "Administration",
        description: "Manage consultation records through the admin panel.",
      },
      {
        number: "71",
        title: "Goal Administration",
        category: "Administration",
        description: "Access goal management tools for user goal records.",
      },
      {
        number: "72",
        title: "Progress Administration",
        category: "Administration",
        description:
          "Manage progress records through the available admin module.",
      },
    ],
  },

  {
    id: "content-operations",
    eyebrow: "11 · Content operations",
    title: "Keep wellness content organized and up to date.",
    description:
      "Manage the information that powers the app's Yoga, Ayurveda, wellness, announcements and notification experiences.",
    accent: "light",
    features: [
      {
        number: "73",
        title: "Yoga Content Management",
        category: "Content Management",
        description:
          "Manage Yoga content through the administrative content modules.",
        highlight: true,
      },
      {
        number: "74",
        title: "Ayurveda Content Management",
        category: "Content Management",
        description:
          "Manage Ayurveda content through the administrative content modules.",
      },
      {
        number: "75",
        title: "Wellness Tip Management",
        category: "Content Management",
        description: "Manage health and wellness tips through the admin panel.",
      },
      {
        number: "76",
        title: "Announcement Management",
        category: "Content Management",
        description:
          "Create and manage announcements using the available forms, views and confirmation modals.",
      },
      {
        number: "77",
        title: "Notification Management",
        category: "Content Management",
        description:
          "Manage notification records through the administrative notification module.",
      },
      {
        number: "78",
        title: "Featured and Active Content",
        category: "Content Management",
        description:
          "Support featured and active content selection where provided by the content models and APIs.",
      },
      {
        number: "79",
        title: "Content Forms and Modals",
        category: "Administration",
        description:
          "Use reusable forms, detail views and confirmation dialogs across supported admin workflows.",
      },
    ],
  },

  {
    id: "platform-operations",
    eyebrow: "12 · Platform operations",
    title: "Maintain control over the platform behind the scenes.",
    description:
      "Provide administrative tools for application settings, maintenance, updates, contact submissions and system activity.",
    accent: "dark",
    features: [
      {
        number: "80",
        title: "Contact Submission Management",
        category: "Administration",
        description:
          "Review and manage submissions received through the public website contact form.",
        highlight: true,
      },
      {
        number: "81",
        title: "App Update Management",
        category: "Administration",
        description:
          "Manage app update information through the dedicated admin pages and forms.",
      },
      {
        number: "82",
        title: "Maintenance Management",
        category: "Operations",
        description:
          "Access maintenance settings and maintenance-related administrative pages.",
      },
      {
        number: "83",
        title: "Application Configuration",
        category: "Operations",
        description:
          "Manage application configuration through the available configuration module.",
      },
      {
        number: "84",
        title: "Database Management",
        category: "Operations",
        description:
          "Access the dedicated database-management interface and backend API module.",
      },
      {
        number: "85",
        title: "API Log Management",
        category: "Monitoring",
        description:
          "Access API log records through the administrative logging module.",
      },
      {
        number: "86",
        title: "Centralized API Error Handling",
        category: "Backend",
        description:
          "Handle server errors and unmatched routes through shared Express middleware.",
      },
      {
        number: "87",
        title: "Request Validation",
        category: "Backend",
        description:
          "Validate incoming API requests through the available validation middleware and utilities.",
      },
      {
        number: "88",
        title: "Application Version Utilities",
        category: "Operations",
        description:
          "Support app version-related behavior through the backend's version utility.",
      },
    ],
  },

  {
    id: "public-website",
    eyebrow: "13 · The Niramaya website",
    title: "Introduce the Niramaya experience beyond the app.",
    description:
      "Present the product, its wellness approach and its main experiences through a dedicated public website.",
    accent: "light",
    features: [
      {
        number: "89",
        title: "Public Landing Page",
        category: "Website",
        description:
          "Introduce Niramaya through the public homepage and its main content sections.",
        highlight: true,
      },
      {
        number: "90",
        title: "App Overview Page",
        category: "Website",
        description:
          "Present the mobile app through app-focused information and showcase sections.",
      },
      {
        number: "91",
        title: "Features Page",
        category: "Website",
        description:
          "Explain the main product capabilities through grouped feature sections and feature cards.",
      },
      {
        number: "92",
        title: "How It Works",
        category: "Website",
        description:
          "Explain the user journey through steps, personalization information and calls to action.",
      },
      {
        number: "93",
        title: "About Niramaya",
        category: "Website",
        description:
          "Present the platform story, principles and wellness ecosystem.",
      },
      {
        number: "94",
        title: "Wellness Information Page",
        category: "Website",
        description:
          "Introduce the platform's wellness approach through dedicated overview and journey sections.",
      },
      {
        number: "95",
        title: "Yoga Information Page",
        category: "Website",
        description:
          "Introduce Yoga through dedicated overview, category and experience sections.",
      },
      {
        number: "96",
        title: "Ayurveda Information Page",
        category: "Website",
        description:
          "Introduce Ayurveda through dedicated overview, discovery and consultation sections.",
      },
      {
        number: "97",
        title: "Contact Page",
        category: "Support",
        description:
          "Provide a public contact form and contact information for visitors.",
      },
      {
        number: "98",
        title: "FAQ Page",
        category: "Support",
        description:
          "Organize frequently asked questions into a dedicated support page.",
      },
      {
        number: "99",
        title: "Resources Page",
        category: "Resources",
        description:
          "Present resources through a dedicated page and reusable resource cards.",
      },
      {
        number: "100",
        title: "Privacy Policy",
        category: "Legal",
        description:
          "Publish the website's privacy policy using dedicated legal page components.",
      },
      {
        number: "101",
        title: "Terms and Conditions",
        category: "Legal",
        description:
          "Present terms and conditions through the legal information section.",
      },
      {
        number: "102",
        title: "Disclaimer Page",
        category: "Legal",
        description:
          "Provide public disclaimer information through a dedicated legal page.",
      },
      {
        number: "103",
        title: "Account Deletion Information",
        category: "Account",
        description:
          "Explain account deletion through the dedicated public information page.",
      },
      {
        number: "104",
        title: "Responsive Website Navigation",
        category: "Website",
        description:
          "Provide shared desktop and mobile navigation, a mobile menu and a consistent footer.",
      },
    ],
  },

  {
    id: "seo-discoverability",
    eyebrow: "14 · Search and discoverability",
    title: "Build a clear foundation for website discovery.",
    description:
      "Organize website metadata and search-engine discovery resources across the public landing-page project.",
    accent: "dark",
    features: [
      {
        number: "105",
        title: "Page Metadata",
        category: "SEO",
        description:
          "Manage website metadata through the shared layout and SEO configuration.",
        highlight: true,
      },
      {
        number: "106",
        title: "SEO Constants and Utilities",
        category: "SEO",
        description:
          "Centralize reusable SEO-related values and helper utilities.",
      },
      {
        number: "107",
        title: "Sitemap Configuration",
        category: "SEO",
        description:
          "Provide sitemap configuration for supported public website routes.",
      },
      {
        number: "108",
        title: "Robots Configuration",
        category: "SEO",
        description:
          "Define search crawler directives through the website's robots configuration.",
      },
      {
        number: "109",
        title: "Favicon and Site Assets",
        category: "Branding",
        description:
          "Provide site identity assets and static resources for the public website.",
      },
      {
        number: "110",
        title: "Shared Website Layout",
        category: "Website",
        description:
          "Reuse common layout and presentation elements across website pages.",
      },
      {
        number: "111",
        title: "Legal Page Navigation",
        category: "Website",
        description:
          "Organize legal content using shared headers, sections, sidebars and footer calls to action.",
      },
    ],
  },

  {
    id: "engineering-foundation",
    eyebrow: "15 · Engineering foundation",
    title: "Connect the experiences through a shared technical foundation.",
    description:
      "Support the mobile app, public website, admin panel and backend through dedicated application, API and database layers.",
    accent: "light",
    features: [
      {
        number: "112",
        title: "Express REST API",
        category: "Backend",
        description:
          "Provide server-side API routes and controllers for supported application modules.",
        highlight: true,
      },
      {
        number: "113",
        title: "MongoDB and Mongoose Models",
        category: "Database",
        description:
          "Represent application entities through dedicated Mongoose model definitions.",
      },
      {
        number: "114",
        title: "Dashboard Aggregation Service",
        category: "Backend",
        description:
          "Combine supported user, health, goal, progress, consultation and content data for the dashboard.",
      },
      {
        number: "115",
        title: "Authentication Middleware",
        category: "Security",
        description:
          "Apply authentication middleware to protected backend routes.",
      },
      {
        number: "116",
        title: "Module-Specific Validation",
        category: "Backend",
        description:
          "Use validation utilities for supported profile, goal, progress, consultation and content modules.",
      },
      {
        number: "117",
        title: "API Logging",
        category: "Monitoring",
        description:
          "Support request and activity logging through the backend logging infrastructure.",
      },
      {
        number: "118",
        title: "Centralized Database Connection",
        category: "Database",
        description:
          "Manage MongoDB connectivity through the backend database configuration.",
      },
      {
        number: "119",
        title: "Seed Utilities",
        category: "Development",
        description:
          "Provide seed utilities for administrator, Yoga and Ayurveda data.",
      },
      {
        number: "120",
        title: "TypeScript Mobile Application",
        category: "Development",
        description:
          "Structure the mobile application using TypeScript, React Native and Expo.",
      },
      {
        number: "121",
        title: "Expo Router Navigation",
        category: "Development",
        description:
          "Organize mobile navigation through Expo Router and its route layouts.",
      },
      {
        number: "122",
        title: "NativeWind Styling",
        category: "Design System",
        description:
          "Use NativeWind utility classes alongside React Native styles for mobile UI presentation.",
      },
      {
        number: "123",
        title: "Next.js Applications",
        category: "Development",
        description:
          "Separate the public website and admin panel into dedicated Next.js applications.",
      },
      {
        number: "124",
        title: "Environment Configuration",
        category: "Operations",
        description:
          "Separate environment-dependent application and server configuration.",
      },
      {
        number: "125",
        title: "Build and Lint Configuration",
        category: "Development",
        description:
          "Maintain project configuration for TypeScript, Babel, Metro, Tailwind and ESLint where applicable.",
      },
      {
        number: "126",
        title: "Android and EAS Build Support",
        category: "Deployment",
        description:
          "Maintain Android project files and Expo Application Services build configuration.",
      },
    ],
  },
];
