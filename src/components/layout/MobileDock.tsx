"use client";

import Dock from "@/components/Dock";
import { Home, Layers, Images, MessageSquare, Send } from "lucide-react";
import { useMemo } from "react";

type SectionId =
  | "home"
  | "services"
  | "portfolio"
  | "testimonial"
  | "contact";

function scrollToSection(id: SectionId) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function MobileDock() {
  const items = useMemo(
    () => [
      {
        key: "home",
        icon: <Home className="h-6 w-6" />,
        label: "Home",
        onClick: () => scrollToSection("home" as SectionId),
      },
      {
        key: "services",
        icon: <Layers className="h-6 w-6" />,
        label: "Services",
        onClick: () => scrollToSection("services" as SectionId),
      },
      {
        key: "portfolio",
        icon: <Images className="h-6 w-6" />,
        label: "Portfolio",
        onClick: () => scrollToSection("portfolio" as SectionId),
      },
      {
        key: "testimonial",
        icon: <MessageSquare className="h-6 w-6" />,
        label: "Testimonials",
        onClick: () => scrollToSection("testimonial" as SectionId),
      },
      {
        key: "contact",
        icon: <Send className="h-6 w-6" />,
        label: "Contact",
        onClick: () => scrollToSection("contact" as SectionId),
      },
    ],
    []
  );

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50 pointer-events-none">
      <Dock
        items={items.map((i) => ({
          icon: i.icon,
          label: i.label,
          onClick: i.onClick,
        }))}
        className="backdrop-blur bg-black/50 pointer-events-auto"
        baseItemSize={44}
        magnification={64}
        distance={160}
        panelHeight={64}
        dockHeight={128}
      />
    </div>
  );
}
