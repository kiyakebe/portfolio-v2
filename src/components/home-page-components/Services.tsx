"use client";

import { motion } from "framer-motion";
import { ServicesCardProps } from "@/types";
import { services } from "@/constants/services_data";

const ServicesCard = ({
  icon: Icon,
  title,
  description,
  index,
}: ServicesCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.3 * index,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="rounded-lg bg-slate-50 dark:bg-[#1f1930] p-6 hover:bg-[#1a1523] border hover:text-slate-100 transition-all duration-300"
    >
      <div className="mb-4 inline-block rounded-lg bg-[#392f49] p-3">
        <Icon className="h-6 w-6 text-purple-500" strokeWidth={1.5} />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="">{description}</p>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="lg:container mx-auto  px-4 sm:px-6 lg:px-8 md:py-24 md:lg:py-24 lg:max-w-[1440px]">
        <div className="flex justify-center my-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#834EF0] to-[#4d279a] dark:to-[#ECE3FE]  text-transparent bg-clip-text">
            Services
          </h2>
        </div>

        <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
