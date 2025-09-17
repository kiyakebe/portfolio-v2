import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Code, Globe, Server } from "lucide-react";
import { experiences } from "@/constants/experiences";

export function ExperienceTimeline() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="h-5 w-5" />;
      case "server":
        return <Server className="h-5 w-5" />;
      case "globe":
        return <Globe className="h-5 w-5" />;
      case "briefcase":
        return <Briefcase className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  return (
    <div id="experience" className="lg:container mx-auto mt-8 px-4 sm:px-6 lg:px-8 md:py-24 md:lg:py-24 lg:max-w-[1440px]">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#834EF0] to-[#4d279a] dark:to-[#ECE3FE]  text-transparent bg-clip-text">
          Professional Experience
        </h2>
      </div>

      <div className="relative mx-auto">
        <div className="absolute left-6 h-full w-0.5 bg-primary/20" />

        {experiences.map((experience, index) => (
          <div key={index} className="relative mb-10 pl-16">
            <div className="absolute top-6 left-4 -translate-x-1/2 w-5 h-5 rounded-full bg-primary" />

            <Card className="w-full bg-card hover:bg-card/80 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Calendar className="mr-1 h-4 w-4" />
                  {experience.period}
                </div>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-primary">
                    {getIcon(experience.icon)}
                  </span>
                  {experience.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {experience.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
