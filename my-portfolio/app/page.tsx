"use client"

import { motion } from "motion/react"
import { ArrowDownRight, ArrowUpRight, Award, Download, Github, GraduationCap, Linkedin, Mail, MapPin, Sparkles } from "lucide-react"
import Navbar from "@/components/navbar"
import ScrollToTop from "@/components/ui/scroll-to-top"

const experience = [
  { period: "Oct 2024 — Present", company: "Unikrew Solutions", location: "Karachi, Pakistan", role: "Full Stack Developer", points: ["Deploy and maintain production-grade applications with TypeScript, Node.js, NestJS, React and Next.js, building REST APIs, reusable components and database-driven workflows.", "Deliver complex digital onboarding flows spanning KYC, biometric verification, OTP, third-party APIs, retry handling and persistent server-driven workflow state.", "Use RabbitMQ for reliable asynchronous message processing across distributed application components."] },
  { period: "Jun 2024 — Oct 2024", company: "Sarmaaya Financials", location: "Islamabad, Pakistan", role: "Backend Developer", points: ["Developed and maintained backend functionality and RESTful APIs for a fintech application using Node.js, NestJS and databases.", "Integrated real-time Pakistan Stock Exchange data while collaborating with frontend and product teams to deliver and troubleshoot production features."] },
  { period: "Jun 2023 — Aug 2023", company: "Pakistan Civil Aviation Authority", location: "Karachi, Pakistan", role: "IT / Software Engineering Intern", points: ["Automated the Lost and Found Items System by developing more than three website modules with the MERN stack."] },
]

const projects = [
  { number: "01", title: "HookRelay", label: "Event-driven webhook delivery", description: "An asynchronous producer-consumer system with retries, failure recovery, the Outbox pattern and idempotent processing. Redis sliding-window rate limiting protects downstream services and controls traffic.", tags: ["TypeScript", "NestJS", "Kafka", "Redis", "PostgreSQL", "Docker"], accent: "from-cyan-500/20 via-sky-400/10 to-transparent", repo: "https://github.com/hafsa12310/hook-relay" },
  { number: "02", title: "HireAI", label: "AI resume matching", description: "A full-stack resume and job-description matching application with a responsive multi-step interface, document parsing, structured API responses and IBM watsonx.ai-powered match scores, skill-gap analysis and interview questions.", tags: ["React", "TypeScript", "Flask", "IBM watsonx.ai"], accent: "from-rose-500/20 via-pink-400/10 to-transparent", repo: "https://github.com/hafsa12310/HireAI" },
  { number: "03", title: "IntelliDent", label: "Final year project · Healthcare AI", description: "Built with Aga Khan University Hospital, this orthodontics web application adapts deep-learning models for tooth classification and segmentation using a dataset of 1,000 panoramic dental X-rays.", tags: ["Python", "Flask", "React", ".NET", "TensorFlow", "Firebase"], accent: "from-violet-500/20 via-fuchsia-400/10 to-transparent" },
  { number: "04", title: "Client Project Management System", label: "Full-stack business operations", description: "A centralized client project management system for maintaining client records, tracking onboarding and interactions, managing projects, and organizing day-to-day workflows through a responsive, database-driven interface.", tags: ["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL"], accent: "from-amber-500/20 via-orange-400/10 to-transparent", repo: "https://github.com/hafsa12310/client-projects-management-system" },
]

const skillGroups = [
  { title: "Languages", skills: ["TypeScript", "JavaScript", "Python", "Dart", "Java", "SQL", "C / C++"] },
  { title: "Backend", skills: ["Node.js", "NestJS", "Express.js", "Flask", "Django", "REST APIs"] },
  { title: "Frontend", skills: ["React.js", "Next.js", "Flutter", "Tailwind CSS"] },
  { title: "Distributed systems & data", skills: ["Kafka", "Redis", "RabbitMQ", "PostgreSQL", "MongoDB", "MySQL", "CassandraDB"] },
  { title: "Cloud & DevOps", skills: ["Docker", "AWS", "CI/CD", "Git", "Vercel", "Render", "Cloudflare"] },
  { title: "Testing & tools", skills: ["Postman", "Git", "Insomnia"] },
]

const certificates = [
  "Develop Generative AI Applications: Get Started — Coursera",
  "AWS Cloud Technical Essentials — Amazon Web Services",
]

const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6, ease: "easeOut" as const } }

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <section id="home" className="relative flex min-h-[92vh] items-center pt-24">
          <div className="hero-grid absolute inset-0 opacity-60" /><div className="hero-glow absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full" />
          <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="mb-8 flex items-center gap-3 text-sm font-medium text-muted-foreground"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card"><Sparkles className="h-3.5 w-3.5 text-primary" /></span><span>Full-stack developer · Karachi, Pakistan</span></div>
              <div className="grid items-end gap-10 lg:grid-cols-[1fr_280px]">
                <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Hello, I’m Syeda Hafsa Anis</p><h1 className="max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-semibold leading-[0.87] tracking-[-0.07em]">I build digital products that <span className="text-gradient">work beautifully.</span></h1></div>
                <p className="max-w-sm pb-2 text-base leading-7 text-muted-foreground lg:text-lg">From polished interfaces to dependable backends, I turn complex product ideas into fast, thoughtful web and mobile experiences.</p>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-3">
                <a href="#projects" className="button-primary">Explore my work <ArrowDownRight className="h-4 w-4" /></a>
                <a href="/Syeda Hafsa Anis_CV.pdf" download className="button-secondary"><Download className="h-4 w-4" /> Download résumé</a>
                <div className="ml-0 flex gap-2 sm:ml-2"><a className="icon-button" href="https://github.com/hafsa12310" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></a><a className="icon-button" href="https://www.linkedin.com/in/syedahafsaanis/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-shell scroll-mt-24"><motion.div {...reveal} className="grid gap-10 border-y border-border py-16 lg:grid-cols-[0.7fr_1.3fr] lg:py-24"><SectionLabel number="01" title="About" /><div><p className="text-balance text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">Engineering with a product mindset—clear thinking, careful details, and no gap between idea and execution.</p><div className="mt-10 grid gap-8 text-base leading-7 text-muted-foreground sm:grid-cols-2"><p>I’m a GIKI Computer Engineering graduate building production-grade web products, distributed backend services and AI-enabled experiences.</p><p>My work spans reusable frontends, REST APIs, database-driven workflows, real-time data and reliable asynchronous processing.</p></div><div className="mt-10 flex flex-wrap gap-6 border-t border-border pt-8"><Stat value="4" label="Featured projects" /><Stat value="3" label="Industry roles" /><Stat value="Web · Systems · AI" label="Core focus" /></div></div></motion.div></section>

        <section id="projects" className="section-shell scroll-mt-24 py-24 lg:py-32"><motion.div {...reveal}><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionLabel number="02" title="Selected work" /><p className="max-w-md text-sm leading-6 text-muted-foreground">A selection of systems spanning event-driven infrastructure, business operations, AI-assisted recruitment, and healthcare machine learning.</p></div><div className="grid gap-4 lg:grid-cols-2">{projects.map((project) => <article key={project.title} className="project-card group"><div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} /><div className="relative flex h-full flex-col"><div className="flex items-start justify-between"><span className="font-mono text-xs text-muted-foreground">{project.number}</span>{project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="project-link" aria-label={`View ${project.title} on GitHub`} title="View repository on GitHub"><Github className="h-4 w-4" /></a>}</div><div className="mt-20"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{project.label}</p><h3 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{project.title}</h3><p className="mt-5 max-w-xl leading-7 text-muted-foreground">{project.description}</p></div><div className="mt-8 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>{project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">View on GitHub <ArrowUpRight className="h-4 w-4" /></a>}</div></article>)}</div></motion.div></section>

        <section id="experience" className="section-shell scroll-mt-24 border-t border-border py-24 lg:py-32"><motion.div {...reveal} className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]"><div><SectionLabel number="03" title="Experience" /><p className="mt-8 max-w-xs text-sm leading-6 text-muted-foreground">Building customer-facing products and the systems behind them.</p></div><div className="divide-y divide-border border-y border-border">{experience.map((job) => <article key={job.company} className="grid gap-5 py-9 sm:grid-cols-[160px_1fr] sm:py-11"><p className="font-mono text-xs leading-5 text-muted-foreground">{job.period}</p><div><div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline"><div><h3 className="text-xl font-semibold tracking-tight">{job.role}</h3><p className="mt-1 text-xs text-muted-foreground">{job.location}</p></div><p className="text-sm text-primary">{job.company}</p></div><ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">{job.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />{point}</li>)}</ul></div></article>)}</div></motion.div></section>

        <section id="education" className="section-shell scroll-mt-24 pb-24 lg:pb-32"><motion.div {...reveal} className="grid gap-4 lg:grid-cols-2"><article className="rounded-[2rem] border border-border bg-card p-7 shadow-sm sm:p-10"><GraduationCap className="h-7 w-7 text-primary" /><p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Education</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">Ghulam Ishaq Khan Institute of Engineering Sciences and Technology</h2><p className="mt-3 text-muted-foreground">Bachelor of Science in Computer Engineering</p><div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-6 text-sm text-muted-foreground"><span>Sep 2020 — May 2024</span><span>CGPA: 3.39 / 4.00</span><span>Dean’s Honor List · 2 times</span></div></article><article className="rounded-[2rem] border border-border bg-card p-7 shadow-sm sm:p-10"><Award className="h-7 w-7 text-primary" /><p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Certificates</p><div className="mt-4 divide-y divide-border">{certificates.map((certificate) => <p key={certificate} className="py-5 text-lg font-medium leading-7">{certificate}</p>)}</div></article></motion.div></section>

        <section id="skills" className="section-shell scroll-mt-24 pb-24 lg:pb-32"><motion.div {...reveal} className="rounded-[2rem] border border-border bg-card p-7 shadow-sm sm:p-10 lg:p-14"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionLabel number="04" title="Toolkit" /><p className="max-w-sm text-sm leading-6 text-muted-foreground">A practical stack spanning product interfaces, backend systems, data and delivery.</p></div><div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{skillGroups.map((group) => <div key={group.title} className="bg-background p-6 sm:p-7"><h3 className="mb-5 text-sm font-semibold">{group.title}</h3><div className="space-y-2.5 text-sm text-muted-foreground">{group.skills.map((skill) => <p key={skill}>{skill}</p>)}</div></div>)}</div></motion.div></section>

        <section id="contact" className="section-shell scroll-mt-24 pb-10"><motion.div {...reveal} className="contact-panel"><div className="relative"><p className="mb-7 flex items-center gap-2 text-sm text-white/60"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for meaningful opportunities</p><h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">Have a product in mind? Let’s make it real.</h2><div className="mt-10 flex flex-wrap gap-3"><a href="mailto:hafsa.172001@gmail.com" className="button-light"><Mail className="h-4 w-4" /> Start a conversation</a><a href="https://www.linkedin.com/in/syedahafsaanis/" target="_blank" rel="noreferrer" className="button-dark-outline">Connect on LinkedIn <ArrowUpRight className="h-4 w-4" /></a></div></div><div className="relative mt-16 flex flex-col gap-3 border-t border-white/15 pt-7 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between"><span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Karachi, Pakistan</span><span>hafsa.172001@gmail.com</span></div></motion.div></section>
      </main>
      <footer className="section-shell flex flex-col gap-3 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Syeda Hafsa Anis</p></footer><ScrollToTop />
    </div>
  )
}

function SectionLabel({ number, title }: { number: string; title: string }) { return <div className="flex items-center gap-4"><span className="font-mono text-xs text-primary">{number}</span><h2 className="text-sm font-semibold uppercase tracking-[0.18em]">{title}</h2></div> }
function Stat({ value, label }: { value: string; label: string }) { return <div><p className="text-lg font-semibold tracking-tight">{value}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p></div> }
