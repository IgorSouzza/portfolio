import { ReactNode } from "react";
import { ScrollReveal } from "./scroll-reveal";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
  delay?: number;
}

export function SkillCard({ title, icon, skills, delay = 0 }: SkillCardProps) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <div className="rounded-xl border border-border bg-card p-6 h-full card-hover">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-portfolio-light-purple text-portfolio-dark-purple">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm font-medium rounded-full bg-accent text-accent-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
