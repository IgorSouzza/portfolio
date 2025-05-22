/* eslint-disable @next/next/no-img-element */
import {
  ArrowRight,
  Code,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  Projector,
  Terminal,
} from "lucide-react";
import { Navbar } from "./components/nav-bar";
import { ProjectCard } from "./components/project-card";
import { ScrollReveal } from "./components/scroll-reveal";
import { Button } from "./components/ui/button";
import { SkillCard } from "./components/skill-card";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-portfolio-light-purple/20 via-transparent to-transparent dark:from-portfolio-purple/10 -z-10" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <ScrollReveal>
                <span className="px-4 py-2 bg-portfolio-light-purple text-portfolio-dark-purple rounded-full text-sm font-medium">
                  Fullstack Developer
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100} className="stagger-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hi, I&apos;m <span className="text-gradient">Igor Souza</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200} className="stagger-2">
                <p className="text-lg text-muted-foreground">
                  I&apos;m a passionate fullstack developer focused on building
                  beautiful, functional, and user-friendly web applications that
                  solve real problems.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300} className="stagger-3">
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="px-6">
                    <a href="#projects">View My Projects</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-6 rounded-lg"
                  >
                    <a href="#contact">Contact Me</a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="w-full md:w-1/3">
              <ScrollReveal delay={400}>
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-portfolio-purple/20 blur-3xl -z-10" />
                  <img
                    src="https://github.com/igorSouzza.png"
                    alt="Profile"
                    className="rounded-full border-4 border-portfolio-purple/30 shadow-xl mx-auto w-64 h-64 object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">
              About <span className="text-gradient">Me</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <p className="text-lg">
                  Hello! I&apos;m Igor, a fullstack developer with a passion for
                  creating elegant, efficient, and user-focused web
                  applications.
                </p>
                <p className="text-muted-foreground">
                  I specialize in building modern web applications using
                  JavaScript, TypeScript, React, Go, and Node.js. With 10+ years
                  of experience in web development, I&apos;ve worked on a wide
                  range of projects, from small business websites to complex
                  enterprise applications.
                </p>
                <p className="text-muted-foreground">
                  My approach to development focuses on clean code, performance
                  optimization, and creating intuitive user experiences.
                  I&apos;m constantly learning and exploring new technologies to
                  stay at the forefront of web development.
                </p>
                <div className="pt-4">
                  <Button asChild variant="outline" className="gap-2">
                    <a href="/resume.pdf" download>
                      <Download className="h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                <ol className="space-y-6 relative border-l border-portfolio-purple/30 ml-3">
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-portfolio-purple rounded-full -left-3 ring-8 ring-background">
                      <span className="text-xs font-medium text-white">1</span>
                    </span>
                    <h4 className="font-semibold">Started Coding</h4>
                    <p className="text-sm text-muted-foreground">
                      Began my journey with HTML, CSS, and JavaScript
                    </p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-portfolio-purple rounded-full -left-3 ring-8 ring-background">
                      <span className="text-xs font-medium text-white">2</span>
                    </span>
                    <h4 className="font-semibold">Frontend Developer</h4>
                    <p className="text-sm text-muted-foreground">
                      Specialized in React and modern frontend frameworks
                    </p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-portfolio-purple rounded-full -left-3 ring-8 ring-background">
                      <span className="text-xs font-medium text-white">3</span>
                    </span>
                    <h4 className="font-semibold">Backend Skills</h4>
                    <p className="text-sm text-muted-foreground">
                      Expanded knowledge with Node.js, Express, and databases
                    </p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-portfolio-purple rounded-full -left-3 ring-8 ring-background">
                      <span className="text-xs font-medium text-white">4</span>
                    </span>
                    <h4 className="font-semibold">Fullstack Developer</h4>
                    <p className="text-sm text-muted-foreground">
                      Now working across the entire stack to build complete
                      solutions
                    </p>
                  </li>
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4 text-center">
              My <span className="text-gradient">Projects</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              expertise in web development.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Hubnari"
              description="Turn your ISP into a smart service hub with neutral network, automation, and efficient management."
              image="https://hubnari.com.br/og-default.jpg"
              technologies={["React", "Nextjs", "Typescript"]}
              demoLink="https://hubnari.com.br"
              delay={100}
            />
            <ProjectCard
              title="Hubnari Blog"
              description="Blog about neutral networks, internet, TV and much more!"
              image="https://blog.hubnari.com.br/api/og?title=Blog%20da%20Hubnari"
              technologies={["Nextjs", "Headless CMS", "Tailwind CSS"]}
              demoLink="https://blog.hubnari.com.br"
              delay={200}
            />
            <ProjectCard
              title="Carteira Global @ Banco Modal"
              description="Investment platform that helps users manage multi-institutional investment portfolios."
              image="https://media.licdn.com/dms/image/v2/D4D22AQGw4xKFfH6HkA/feedshare-shrink_800/feedshare-shrink_800/0/1695761509788?e=2147483647&v=beta&t=bbBkaY9WILKUecGKsCEemwfnca2RvOeC3yZAf8XWw68"
              technologies={["Nextjs", "GraphQL", "Tailwind CSS"]}
              isPrivate
              delay={300}
            />
            <ProjectCard
              title="Lindie"
              description="Blog with focus on performance using full capabilities of Nextjs SSG and ISG."
              image="https://lindie.com.br/cover.jpg"
              technologies={["Nextjs", "Prismic", "GraphQL", "Node.js"]}
              demoLink="https://lindie.com.br/"
              delay={400}
            />
            <ProjectCard
              title="Gibwork"
              description="Gibwork connects skilled professionals with freelance work opportunities, offering seamless integration with all Solana tokens for secure and efficient transactions."
              image="https://gb-work.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgiblanding.f14e0ee0.png&w=3840&q=75"
              technologies={["Nextjs", "Nestjs", "Web3", "Crypto"]}
              demoLink="https://gib.work/"
              delay={500}
            />
            <ProjectCard
              title="BitCapital"
              description="Secure and robust Open Banking Platform based on Blockchain"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNFfnYLdKl7OkxqOhbhd3NzuSqQWQ0HpzGw&s"
              technologies={["Nextjs", "Vuejs", "Node"]}
              demoLink="https://www.bitcapital.com.br/"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4 text-center">
              My <span className="text-gradient">Skills</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              I&apos;ve worked with a wide range of technologies across the full
              stack. Here&apos;s a breakdown of my technical expertise.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="Frontend Development"
              icon={<Code className="h-5 w-5" />}
              skills={[
                "HTML/CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Vue.js",
                "Redux",
                "Zustand",
                "Svelte",
                "Tailwind CSS",
              ]}
              delay={100}
            />
            <SkillCard
              title="Backend Development"
              icon={<Terminal className="h-5 w-5" />}
              skills={[
                "Node.js",
                "Nest.js",
                "Golang",
                "Typescript",
                "GraphQL",
                "REST APIs",
              ]}
              delay={200}
            />
            <SkillCard
              title="Database"
              icon={<Database className="h-5 w-5" />}
              skills={[
                "PostgreSQL",
                "MongoDB",
                "MySQL",
                "Firebase",
                "Redis",
                "Prisma",
                "SQL",
              ]}
              delay={300}
            />
            <SkillCard
              title="DevOps & Tools"
              icon={<Projector className="h-5 w-5" />}
              skills={[
                "Git",
                "Docker",
                "AWS",
                "CI/CD",
                "Vercel",
                "Netlify",
                "Jest",
                "Cypress",
              ]}
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-portfolio-light-purple dark:bg-portfolio-purple/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg mb-8">
                I&apos;m currently available for freelance projects and open to
                new opportunities. Let&apos;s create something amazing together!
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button
                asChild
                size="lg"
                className="px-8 py-6 h-auto text-base gap-2"
              >
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4 text-center">
              Get In <span className="text-gradient">Touch</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Have a project in mind or want to chat? Feel free to reach out
              using the form below or connect with me on social media.
            </p>
          </ScrollReveal>

          <div className="flex w-full justify-center gap-16">
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-portfolio-light-purple text-portfolio-dark-purple">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">
                        igor.souza.webmaster@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/igorSouzza/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.linkedin.com/in/igor-souza-web/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
