import { LucideIcon } from "lucide-react";

export type NavigationItemsType = {
  label: string;
  href: string;
};
export interface TestimonialType {
  name: string;
  content: string;
  image: string;
  position: string;
}
export interface ServicesCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}