interface SkillCardProps {
  name: string;
  icon: string;
  category?: string;
}

export function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center group">
      <div className="dark:bg-[#1a1528] bg-slate-50 rounded-lg mb-4 w-32 h-32 flex items-center justify-center transition-transform hover:scale-105">
        <img
          src={icon || "/skill/skill-default.png"}
          alt={`${name} icon`}
          className="w-20 grayscale-[90%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 opacity-50 group-hover:opacity-100 w-60px"
        />
      </div>
      <div className="text-violet-400"><p>{name}</p></div>
    </div>
  );
}

const skills: SkillCardProps[] = [
  { 
    name: "Next.js",
    icon: "/skill/nextjs.png",
    category: "frontend",
  },
  {
    name: "React",
    icon: "/skill/react.png",
    category: "frontend",
  },
  {
    name: "NestJS",
    icon: "/skill/nestjs.svg",
    category: "backend",
  },
  {
    name: "Tailwind CSS",
    icon: "/skill/tailwindcss.png",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "/skill/js.png",
    category: "frontend",
  },
  {
    name: "Figma",
    icon: "/skill/figma.png",
    category: "design",
  },
];

const Skills = () => {
  return (
    <section className="w-full dark:bg-slate-900 bg-slate-100 py-16 px-4 md:px-6 lg:px-8">
      <div className="lg:container mx-auto  px-4 sm:px-6 lg:px-8 md:py-24 md:lg:py-24 lg:max-w-[1440px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#834EF0] to-[#4d279a] dark:to-[#ECE3FE]  text-transparent bg-clip-text">
            My Skills
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              category={skill.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
