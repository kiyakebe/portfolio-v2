import { PortfolioCardProps } from "@/types";

export const categories = [
  { id: "all", label: "All" },
  { id: "landing-page", label: "Landing Page" },
  // { id: "app-design", label: "App Design" },
  { id: "dashboard", label: "Dashboard" },
];

export const projects: PortfolioCardProps[] = [
  {
    id: 1,
    title: "BankDash Account Management Dashboard",
    category: ["landing-page", "dashboard"],
    image: "/projects/bank-dash.png",
    categoryLabel: "Website/Landing Page",
    link: "https://astu-web-g1.netlify.app/",
  },
  {
    id: 2,
    title: "VAP Vendor Dashboard",
    category: ["dashboard"],
    image: "/projects/vap.png",
    categoryLabel: "Dashboard Design",
    link: "https://vap-dashboard.vercel.app/",
  },
  {
    id: 3,
    title: "Restaurant Landing Page",
    category: ["landing-page"],
    image: "/projects/restaurant.png",
    categoryLabel: "Mobile App",
    link: "https://restourant-website-design.onrender.com/",
  },
];
