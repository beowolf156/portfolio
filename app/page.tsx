"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

type NavItem = { id: string; label: string };
type Project = {
  title: string;
  description: string;
  stack: string[];
  imageSrc: string;
};
type Experience = { company: string; role: string; period: string; summary: string };
type Education = { school: string; degree: string; period: string; location: string };

const NAV: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const SKILLS: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Nest.js",
  "Express.js",
  "TailwindCSS",
  "Redux",
  "React Native",
  "GraphQL",
  "REST API",
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "Terraform",
  "PostgreSQL",
  "MongoDB",
  "Neo4j",
  "Kafka",
  "GitHub Actions",
  "CI/CD",
];

const PROJECTS: Project[] = [
  {
    title: "Ticket Booking App",
    description:
      "Full-stack ticket booking application with real-time seat selection, secure payment processing, and user authentication. Features include booking management, QR code generation, and admin dashboard.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    imageSrc: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=400&fit=crop&q=80",
  },
  {
    title: "Enterprise Banking Platform",
    description:
      "Modernized enterprise banking workflows with React, Next.js, Node.js, and event-driven services, improving performance, reliability, and developer scalability.",
    stack: ["React", "Next.js", "Node.js", "Kafka"],
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&q=80",
  },
  {
    title: "Healthcare Member Experience Portal",
    description:
      "Built secure web and mobile experiences with React, React Native, Node.js, and Azure services for highly regulated healthcare use cases.",
    stack: ["React", "React Native", "Azure", "OAuth/JWT"],
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop&q=80",
  },
  {
    title: "Cloud-Native API Platform",
    description:
      "Designed modular APIs and microservices using Nest.js, PostgreSQL, Docker, Kubernetes, and Terraform for scalable enterprise delivery.",
    stack: ["Nest.js", "PostgreSQL", "Docker", "Terraform"],
    imageSrc: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop&q=80",
  },
  {
    title: "Real-Time Data Pipeline System",
    description:
      "Implemented backend services and streaming pipelines using Node.js, Neo4j, Pub/Sub, Kinesis, and cloud-native deployment patterns.",
    stack: ["Node.js", "Neo4j", "Pub/Sub", "Kinesis"],
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80",
  },
];

const EXPERIENCE: Experience[] = [
  {
    company: "Deutsche Bank",
    role: "Sr. Lead React/Node JS Engineer",
    period: "Mar 2024 – Present",
    summary:
      "Leading full-stack delivery for scalable banking applications using React.js, Next.js, Node.js, Nest.js, TypeScript, Tailwind CSS, and AWS/GCP tooling.",
  },
  {
    company: "Elevance Health",
    role: "Sr. React.js/Node.js Engineer",
    period: "Mar 2021 – Feb 2024",
    summary:
      "Delivered secure healthcare web and mobile applications using React, Next.js, React Native, Node.js, FastAPI, and Azure-based cloud services.",
  },
  {
    company: "Sanofi",
    role: "MERN Developer",
    period: "Jan 2020 – Feb 2021",
    summary:
      "Built user-centric full-stack products with React, Next.js, Node.js, Express.js, GraphQL, React Native, and containerized cloud deployments.",
  },
  {
    company: "Blackstone",
    role: "Full Stack Developer",
    period: "Jul 2016 – Dec 2019",
    summary:
      "Built secure microservices, modern React interfaces, and event-driven backend systems for enterprise finance tools.",
  },
];

const EDUCATION: Education[] = [
  {
    school: "University of North Texas",
    degree: "Master’s in Computer Science",
    period: "2014 – 2016",
    location: "Texas, USA",
  },
  {
    school: "Amrita University, Bengaluru",
    degree: "Bachelor’s in Computer Science and Engineering",
    period: "2010 – 2014",
    location: "Bengaluru, India",
  },
];

const CERTIFICATIONS: string[] = [
  "AWS Certified Cloud Practitioner — Amazon Web Services",
  "React Developer Certification — Professional Certification",
  "C# Certified .NET Core Services Developer — Professional Certification",
  "Talend Certification — Talend",
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300/90">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-[1.75rem] border border-white/15 bg-white/[0.05] backdrop-blur-xl",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_-30px_rgba(56,189,248,0.5),0_0_30px_-10px_rgba(168,85,247,0.3)]",
        "hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_80px_-20px_rgba(56,189,248,0.6),0_0_40px_-5px_rgba(168,85,247,0.4)] transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.04] px-3 py-1 text-sm text-slate-200 shadow-sm transition hover:border-sky-400/30 hover:bg-gradient-to-br hover:from-sky-400/10 hover:to-violet-500/10 hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.5)]">
      {children}
    </span>
  );
}

function AnchorLink({
  id,
  label,
  onClick,
}: {
  id: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      className="text-sm text-slate-300 transition hover:text-white"
    >
      {label}
    </a>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(() => NAV, []);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.25),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.15),transparent_50%),linear-gradient(to_bottom,rgba(2,6,23,1),rgba(2,6,23,1))]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.35)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-sm font-semibold tracking-[0.2em] text-white">
            SOUMYA<span className="text-sky-400">.</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <AnchorLink key={item.id} id={item.id} label={item.label} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/resume.pdf"
              className="inline-flex items-center rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              Download Resume
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2 text-slate-200 transition hover:bg-white/[0.06] md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-slate-950/90 backdrop-blur-xl md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5">
              {navItems.map((item) => (
                <AnchorLink
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  onClick={closeMenu}
                />
              ))}
              <a
                href="/resume.pdf"
                className="mt-1 inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                Download Resume
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 lg:px-8 lg:py-20"
        >
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-sm font-semibold text-sky-200">
                Senior Lead Full-Stack Engineer
              </div>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text text-transparent">Sri Soumya</span>
                <span className="block bg-gradient-to-r from-sky-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">Narasimhadevara</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I architect scalable React and Node.js systems for real-world enterprise products.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                Full-Stack Software Engineer with 11+ years of experience building scalable web applications, cloud-native services, frontend systems, and enterprise APIs using React.js, Next.js, Node.js, TypeScript, cloud platforms, and modern DevOps workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center rounded-2xl bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-5px_rgba(56,189,248,0.6)] transition hover:shadow-[0_0_40px_0px_rgba(56,189,248,0.8)] hover:scale-105"
                >
                  Let's talk
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  View Projects
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  Download Resume
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-sky-400" /> Texas, USA
                </span>
                <a
                  href="mailto:srisoumya1001@gmail.com"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 text-sky-400" /> srisoumya1001@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/soumya-narasimhadevara/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Linkedin className="h-4 w-4 text-sky-400" /> LinkedIn
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <GlassCard className="overflow-hidden shadow-[0_0_60px_-15px_rgba(56,189,248,0.5)]">
              <div className="relative h-[170px] w-full bg-gradient-to-br from-sky-500/30 via-violet-500/30 to-pink-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>

              <div className="relative px-7 pb-7">
                <div className="-mt-12 flex items-end justify-between">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500 opacity-75 blur-lg animate-pulse" />
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/20 bg-slate-900 shadow-[0_20px_60px_-15px_rgba(56,189,248,0.8)]">
                      <Image
                        src="/images/profile.jpg"
                        alt="Profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-200">
                    Available
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  Senior Lead Full-Stack Engineer
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Focused on scalable frontend architecture, cloud-native services, and enterprise API platforms.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    { k: "Frontend", v: "React, Next.js, TypeScript" },
                    { k: "Backend", v: "Node.js, Nest.js, REST/GraphQL" },
                    { k: "Cloud", v: "AWS, Azure, GCP, CI/CD" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="text-sm font-semibold text-slate-200">{row.k}</span>
                      <span className="text-xs text-slate-400">{row.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="About"
              title="Building enterprise products that stay fast as they scale"
              description="I work across frontend systems, backend services, and cloud delivery to ship secure, reliable experiences. My focus is pragmatic architecture: clear boundaries, strong developer experience, and performance you can measure."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Architecture & delivery",
                body: "I design systems that balance velocity and long-term maintainability: modular UI, stable APIs, and observable services.",
              },
              {
                title: "Enterprise reliability",
                body: "Experienced with regulated and high-traffic environments, with attention to security, resilience, and performance.",
              },
              {
                title: "Hands-on leadership",
                body: "I lead by shipping: aligning stakeholders, unblocking teams, and delivering production-ready solutions end-to-end.",
              },
            ].map((card, idx) => (
              <FadeIn key={card.title} delay={idx * 0.06}>
                <GlassCard className="h-full">
                  <div className="p-7">
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{card.body}</p>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Skills"
              title="A modern stack across frontend, backend, and cloud"
              description="Tools I use to build scalable UI, modular services, and reliable deployments."
            />
          </FadeIn>

          <div className="mt-10">
            <GlassCard>
              <div className="p-7">
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Projects"
              title="Featured work"
              description="Enterprise-style projects representative of the systems I’ve built across finance, healthcare, and platform engineering."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {PROJECTS.map((p, idx) => (
              <FadeIn key={p.title} delay={idx * 0.06}>
                <GlassCard className="group overflow-hidden transition hover:border-white/20">
                  <div className="relative h-48 w-full overflow-hidden border-b border-white/10 bg-white/[0.02]">
                    <Image
                      src={p.imageSrc}
                      alt={p.title}
                      fill
                      className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{p.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Experience"
              title="Where I’ve delivered"
              description="Concise highlights of roles where I built and scaled production applications."
            />
          </FadeIn>

          <div className="mt-10 space-y-6">
            {EXPERIENCE.map((e, idx) => (
              <FadeIn key={`${e.company}-${e.role}`} delay={idx * 0.06}>
                <GlassCard>
                  <div className="p-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-sky-300">
                          <Briefcase className="h-5 w-5" />
                          <span className="text-xs font-semibold uppercase tracking-[0.32em]">
                            {e.company}
                          </span>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-white">{e.role}</h3>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{e.summary}</p>
                      </div>
                      <div className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
                        {e.period}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Education"
              title="Academic background"
              description="Formal education supporting my foundation in systems, problem solving, and software engineering."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {EDUCATION.map((ed, idx) => (
              <FadeIn key={ed.school} delay={idx * 0.06}>
                <GlassCard className="h-full">
                  <div className="p-7">
                    <div className="flex items-center gap-3 text-sky-300">
                      <GraduationCap className="h-5 w-5" />
                      <span className="text-xs font-semibold uppercase tracking-[0.32em]">
                        {ed.school}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{ed.degree}</h3>
                    <p className="mt-3 text-sm text-slate-300">{ed.period}</p>
                    <p className="mt-1 text-sm text-slate-400">{ed.location}</p>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="certifications" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Certifications"
              title="Credentials"
              description="Certifications that reinforce cloud fundamentals and full-stack engineering skills."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {CERTIFICATIONS.map((c, idx) => (
              <FadeIn key={c} delay={idx * 0.06}>
                <GlassCard>
                  <div className="flex items-center gap-4 p-7">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sky-300">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-semibold text-white">{c}</div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <FadeIn>
            <div className="rounded-[2.25rem] border border-sky-400/30 bg-gradient-to-br from-sky-500/15 via-violet-500/10 to-pink-500/15 backdrop-blur-xl shadow-[0_0_60px_-10px_rgba(56,189,248,0.4),0_0_40px_-10px_rgba(168,85,247,0.3)]">
              <div className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300/90">
                  Contact
                </p>
                <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Open to senior frontend, full-stack, and platform engineering opportunities.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  If you’re hiring for React/Next.js leadership, scalable Node.js platforms, or cloud-native API systems, I’d love to connect.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:srisoumya1001@gmail.com"
                    className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
                  >
                    <Mail className="mr-2 h-4 w-4" /> Email Me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/soumya-narasimhadevara/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
                  >
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 text-sm text-slate-400 lg:px-8">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                Sri Soumya Narasimhadevara <span className="text-slate-500">•</span> Texas, USA
              </div>
              <a href="#home" className="transition hover:text-slate-200">
                Back to top
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
