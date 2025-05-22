import { ScrollReveal } from "./scroll-reveal";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  repoLink?: string;
  demoLink?: string;
  delay?: number;
  isPrivate?: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  repoLink,
  demoLink,
  delay = 0,
  isPrivate,
}: ProjectCardProps) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <div className="rounded-lg overflow-hidden border border-border bg-card h-full flex flex-col card-hover">
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-auto">
            {isPrivate && (
              <Button variant="outline" disabled>
                Private website
              </Button>
            )}
            {repoLink && (
              <Button variant="outline" asChild>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
              </Button>
            )}
            {demoLink && (
              <Button asChild>
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  Access here
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
