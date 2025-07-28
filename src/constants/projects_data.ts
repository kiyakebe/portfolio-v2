import { PortfolioCardProps } from "@/types";

export const categories = [
  { id: "all", label: "All" },
  { id: "landing-page", label: "Landing Page" },
  { id: "mobile-app", label: "Mobile App" },
  { id: "dashboard", label: "Dashboard" },
];

export const projects: PortfolioCardProps[] = [
  {
    id: 1,
    title: "Liyana Telemedicine Dashboard and Mobile App",
    category: ["landing-page", "dashboard", "mobile-app"],
    image: "/projects/liyana.png",
    categoryLabel: "Dashboard",
    link: "/",
  },
  {
    id: 2,
    title: "Imaltu Travel Management System",
    category: ["landing-page", "dashboard"],
    image: "/projects/imaltu.png",
    categoryLabel: "Website/Landing Page",
    link: "https://imaltu-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Social Media Marketing Website",
    category: ["landing-page", "dashboard"],
    image: "/projects/smm.png",
    categoryLabel: "Website/Landing Page",
    link: "https://jack-top-smm-frontend.vercel.app",
  },
  {
    id: 4,
    title: "BankDash Account Management Dashboard",
    category: ["landing-page", "dashboard"],
    image: "/projects/bank-dash.png",
    categoryLabel: "Website/Landing Page",
    link: "https://astu-web-g1.netlify.app/",
  },
  {
    id: 5,
    title: "VAP Vendor Dashboard",
    category: ["dashboard"],
    image: "/projects/vap.png",
    categoryLabel: "Dashboard Design",
    link: "https://vap-dashboard.vercel.app/",
  },
  {
    id: 6,
    title: "Restaurant Landing Page",
    category: ["landing-page"],
    image: "/projects/restaurant.png",
    categoryLabel: "Mobile App",
    link: "https://restourant-website-design.onrender.com/",
  },
];
