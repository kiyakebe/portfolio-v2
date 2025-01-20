import { PortfolioCardProps } from "@/types";

export const categories = [
  { id: "all", label: "All" },
  { id: "landing-page", label: "Landing Page" },
  { id: "app-design", label: "App Design" },
  { id: "dashboard", label: "Dashboard" },
];

export const projects: PortfolioCardProps[] = [
  {
    id: 1,
    title: "Saas Landing Page",
    category: "landing-page",
    image: "/placeholder.png",
    categoryLabel: "Website/Landing Page",
    link: "/",
  },
  {
    id: 2,
    title: "Education Platform",
    category: "dashboard",
    image: "/placeholder.png",
    categoryLabel: "Dashboard Design",
    link: "/",
  },
    {
    id: 3,
    title: "Litigation Mobile App",
    category: "app-design",
    image: "/placeholder.png",
    categoryLabel: "Mobile App",
    link: "/",
    },
    {
    id: 4,
    title: "Furniture Landing Page",
    category: "landing-page",
    image: "/placeholder.png",
    categoryLabel: "Website/Landing Page",
    link: "/",
    },
    {
    id: 5,
    title: "Dog Walking App",
    category: "app-design",
    image: "/placeholder.png",
    categoryLabel: "Mobile App",
    link: "/",
    },
    {
    id: 6,
    title: "Coffee Shop Landing Page",
    category: "landing-page",
    image: "/placeholder.png",
    categoryLabel: "Website/Landing Page",
    link: "/",
  },
];
