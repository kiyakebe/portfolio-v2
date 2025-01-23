"use client";

import { useState } from "react";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { categories, projects } from "@/constants/projects_data";
import { PortfolioCardProps } from "@/types";
import Link from "next/link";

const PortfolioCard = ({
  title,
  category,
  image,
  link,
}: PortfolioCardProps) => {
  return (
    <div className="group relative dark:bg-[#1a1528] border rounded-2xl overflow-hidden">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={image || "/placeholder.png"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="dark:text-gray-400 text-gray-600 text-sm">
            {category.map((cat) => {
              return <span className="me-3">{cat}</span>;
            })}
          </p>
        </div>
        <Link
          href={link}
          target="__blank"
          className="rounded-full text-violet-400 hover:text-violet-300 hover:bg-violet-600/20 p-3"
        >
          <ArrowUpRight className="h-5 w-5" />
          <span className="sr-only">View {title} project</span>
        </Link>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category.includes(activeCategory)
  );

  return (
    <section className="lg:container mx-auto  px-4 sm:px-6 lg:px-8 md:py-24 md:lg:py-24 lg:max-w-[1440px]">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#834EF0] to-[#4d279a] dark:to-[#ECE3FE]  text-transparent bg-clip-text">
            Portfolio Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  activeCategory === category.id ? "secondary" : "outline"
                }
                onClick={() => setActiveCategory(category.id)}
                className={`
                    rounded-full px-6 
                    ${
                      activeCategory === category.id
                        ? "bg-violet-600 text-white hover:bg-violet-700"
                        : "text-gray-400 hover:text-white"
                    }
                  `}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
