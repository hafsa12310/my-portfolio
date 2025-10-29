'use client'

import { AuroraText } from "@/components/ui/aurora-text"
import { Timeline } from '@/components/ui/timeline';
import { useState, useEffect } from "react";
import { motion } from 'motion/react'
import Navbar from '@/components/navbar';
import { BorderBeam } from "@/components/ui/border-beam"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MagicCard } from "@/components/ui/magic-card"
import { IconCloud } from "@/components/ui/icon-cloud"
import { ShinyButton } from "@/components/ui/shiny-button"
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import ScrollToTop from '@/components/ui/scroll-to-top'
import {
  SiJavascript,
  SiPython,
  SiTensorflow,
  SiTypescript,
  SiReact,
  SiDocker,
  SiAmazon,
  SiTailwindcss,
  SiNestjs,
  SiNextdotjs,
  SiHuggingface,
  SiApachecassandra,
  SiMariadb,
  SiCplusplus,
  SiIntellijidea
  ,SiGithub
  ,SiLinkedin
} from 'react-icons/si'
import { FiDownload } from 'react-icons/fi'


export default function Example() {
  

  const data = [
    {
      title: "Oct 2024 - Present",
      content: (
        <div>
          <p className="mb-2 text-lg md:text-xl font-semibold text-foreground">Unikrew Solutions</p>
          <p className="mb-4 text-sm md:text-base text-foreground">Full Stack Engineer</p>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-2 text-left">
              <li>
                Contributed to the <strong>Cascade</strong> web app (React): built reusable components, implemented routing and API integration, and improved performance, responsiveness, and accessibility across key flows.
              </li>
              <li>
                Built <strong>Al Baraka Bank’s</strong> digital onboarding app in Flutter: translated Figma to production screens, implemented multi-step KYC/OTP flows, integrated required SDKs/APIs, and optimized the end-to-end user experience.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "July 2024 - Oct 2024",
      content: (
        <div>
          <p className="mb-2 text-lg md:text-xl font-semibold text-foreground">Sarmaaya Financials</p>
          <p className="mb-4 text-sm md:text-base text-foreground">Backend Developer</p>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-2 text-left">
              <li>
                Developed a scalable, efficient backend for a fintech app using Node.js and NestJS.
              </li>
              <li>
                Created a reusable NestJS package library to streamline code sharing across projects.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "June 2023 - Aug 2023",
      content: (
        <div>
          <p className="mb-2 text-lg md:text-xl font-semibold text-foreground">Pakistan Civil Aviation Authority</p>
          <p className="mb-4 text-sm md:text-base text-foreground">Software Engineering Intern</p>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-2 text-left">
              <li>
                Automated the Lost and Found Items System by developing over 3 modules of the website using the MERN stack.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const [cloudSize, setCloudSize] = useState(520)
  useEffect(() => {
    function update() {
      const w = window.innerWidth
      if (w < 640) setCloudSize(300) 
      else if (w < 1024) setCloudSize(520) 
      else setCloudSize(720) 
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.997 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 14, mass: 0.6 }}
      >

      {/* Main content */}
      <main className="pt-24 px-6 flex items-center justify-center">
        <div className="relative max-w-3xl pt-30 text-center">
          <h1 className="pointer-events-none text-6xl sm:text-7xl font-semibold leading-none">
            <AuroraText speed={2} colors={["#8a79ab", "#dfd9ec", "#e6a5b8", "#8a79ab"]}>Hi, I am Hafsa Anis</AuroraText>
          </h1>
          <p className="mt-8 text-lg sm:text-xl font-medium">
            A Full-Stack Engineer turning ideas into polished Mobile & modern Web Apps.
          </p>
          {/* Hero CTAs: GitHub and CV */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <ShinyButton
              className="px-4 py-2 text-sm"
              onClick={() => window.open('https://github.com/hafsa12310', '_blank')}
            >
              <span className="flex items-center gap-2">
                <SiGithub size={18} />
                <span>GitHub</span>
              </span>
            </ShinyButton>

            <ShinyButton
              className="px-4 py-2 text-sm"
              onClick={() => window.open('https://www.linkedin.com/in/syedahafsaanis/', '_blank')}
            >
              <span className="flex items-center gap-2">
                <SiLinkedin size={18} />
                <span>LinkedIn</span>
              </span>
            </ShinyButton>

            <a href="/Syeda Hafsa Anis_CV.pdf" download className="inline-block">
              <ShinyButton className="px-4 py-2 text-sm">
                <span className="flex items-center gap-2">
                  <FiDownload size={18} />
                  <span>Download CV</span>
                </span>
              </ShinyButton>
            </a>
          </div>
        </div>
      </main>

      {/* About section */}
      <section id="about" aria-label="About" className="mt-50 scroll-mt-24">
  <div className="mx-auto max-w-3xl px-6 py-12">
    <h1 className="text-2xl md:text-5xl text-foreground text-center font-bold tracking-tight">
      About
    </h1>

    <Card className="relative mt-6 p-10 w-full max-w-[1000px] mx-auto overflow-hidden">
      <CardContent className="text-base md:text-lg leading-relaxed">I’m Syeda Hafsa Anis, a GIKI Computer Engineering graduate experienced in Web/Mobile, DevOps, and AI. I focus on building reliable features, tightening performance, and taking solutions from prototype to production. I work best in collaborative teams, keep feedback loops short, and stay curious—adopting new tools and practices when they make the product faster, safer, or more user-friendly.</CardContent>
      {/* <CardFooter className="flex justify-between" /> */}
      <BorderBeam duration={8} size={100} />
    </Card>
  </div>
</section>


      {/* Work Experience section */}
      <div>
        <section id="work-experience" aria-label="Work Experience">
          <Timeline data={data} />
        </section>
      </div>

      <div>
        <section id="projects" aria-label="Work Experience">
  <div className="m-20">
    <h1 className="text-2xl md:text-5xl text-foreground text-center font-bold tracking-tight">
      Projects
    </h1>

    {/* 3 horizontal cards (responsive) */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <MagicCard className="h-full">
        <div className="p-6 space-y-2">
          <p className="font-medium text-base md:text-lg">IntelliDent</p>
          <span className="text-base md:text-lg text-muted-foreground">Collaborated with Aga Khan University Hospital to curate a dataset of 1,000 orthopantomograms (panoramic dental X-rays). Using this dataset, built a compact web application that deploys machine learning and deep learning models to perform tooth-level classification and segmentation directly on OPGs, enabling fast, consistent analysis suitable for clinical workflows.</span>

          {/* Technologies for IntelliDent */}
          <div className="mt-3">
            <p className="text-sm font-semibold text-foreground">Technologies</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">Python</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">Flask</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">React</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">Next</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">TensorFlow</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">Firebase</ShinyButton>
            </div>
          </div>
        </div>
      </MagicCard>

      <MagicCard className="h-full">
        <div className="p-6 space-y-2">
          <p className="font-medium text-base md:text-lg">Book Blog</p>
          <span className="text-base md:text-lg text-muted-foreground">Built a fully deployable MERN-stack blogging platform where users can create and publish personalized posts across a multi-page (3+) site. It features a fully responsive UI and secure authentication with signup/login for a seamless experience.</span>
          <div className="mt-3">
            <p className="text-sm font-semibold text-foreground">Technologies</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">JavaScript</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">MongoDB</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">Expres</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">React</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">Node</ShinyButton>
            </div>
            
            {/* View source button (replace URL with actual repo) */}
            <div className="mt-3">
              <InteractiveHoverButton
                className="text-xs md:text-sm"
                onClick={() => window.open('https://github.com/hafsa12310/Book-Blog', '_blank')}
              >
                View source
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </MagicCard>

      <MagicCard className="h-full">
        <div className="p-6 space-y-2">
          <p className="font-medium text-base md:text-lg">HR Salary Slip Portal</p>
          <span className="text-base md:text-lg text-muted-foreground">The HR Salary Slip Portal provides secure authentication, bulk upload of employee data via Excel, and automatic PDF generation for individual payslips. HR can download all payslips and email them directly to the respective employees in one streamlined workflow.</span>
          <div className="mt-3">
            <p className="text-sm font-semibold text-foreground">Technologies</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">Python</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">Django</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">React</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">MongoDB</ShinyButton>
            </div>

            {/* View source button (replace URL with actual repo) */}
            <div className="mt-3">
              <InteractiveHoverButton
                className="text-xs md:text-sm"
                onClick={() => window.open('https://github.com/hafsa12310/HR-Salary-Slip-Portal', '_blank')}
              >
                View source
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </MagicCard>

      <MagicCard className="h-full">
        <div className="p-6 space-y-2">
          <p className="font-medium text-base md:text-lg">Library Management System</p>
          <span className="text-base md:text-lg text-muted-foreground">A secure, documented REST API for end-to-end library management: full CRUD for books and users, authenticated borrow/return workflows that update availability, and paginated listings with search by title, author, or genre. Includes error handling and input validation.</span>


          <div className="mt-3">
            <p className="text-sm font-semibold text-foreground">Technologies</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">Express</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">PostgreSQL</ShinyButton>
              <ShinyButton className="px-2 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs">Sequelize</ShinyButton>
            </div>


            <div className="mt-3">
              <InteractiveHoverButton
                className="text-xs md:text-sm"
                onClick={() => window.open('https://github.com/hafsa12310/Library-Management-System', '_blank')}
              >
                View source
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </MagicCard>
    </div>
  </div>
</section>

      </div>

      <div>
        <section id="technologies" aria-label="Technologies" className="scroll-mt-24 py-12">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h1 className="text-2xl md:text-5xl text-foreground text-center font-bold tracking-tight">
              Technologies
            </h1>

                  <div className="mt-0 flex items-center justify-center">
      <IconCloud
        icons={[
          <SiJavascript key="js" size={100} color='#8a79ab' />,
          <SiPython key="py" size={100} color='#8a79ab' />,
          <SiTensorflow key="tf" size={100} color='#8a79ab' />,
          <SiTypescript key="ts" size={100} color='#8a79ab' />,
          <SiReact key="react" size={100} color='#8a79ab' />,
          <SiDocker key="docker" size={100} color='#8a79ab' />,
          <SiAmazon key="aws" size={100} color='#8a79ab' />,
          <SiTailwindcss key="tailwind" size={100} color='#8a79ab' />,
          <SiNestjs key="nest" size={100} color='#8a79ab' />,
          <SiNextdotjs key="next" size={100} color='#8a79ab' />,
          <SiHuggingface key="huggingface" size={100} color='#8a79ab' />,
          <SiApachecassandra key="cassandra" size={100} color='#8a79ab' />,
          <SiMariadb key="mariadb" size={100} color='#8a79ab' />,
          <SiCplusplus key="cpp" size={100} color='#8a79ab' />,
          <SiIntellijidea key="intellij" size={100} color='#8a79ab' />,
        ]}
        size={cloudSize}
      />
            </div>
            
            {/* Technologies button groups */}
            <div className="mt-10 space-y-6">
              {/** Row: Core Tools */}
              <div className="grid grid-cols-12 items-center gap-6">
                <div className="col-span-3 w-40 text-left text-sm font-semibold text-foreground">Core Tools</div>
                <div className="col-span-9">
                  <div className="flex flex-wrap gap-2 items-center justify-start">
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Git</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">JavaScript</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">TypeScript</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Python</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Dart</ShinyButton>
                  </div>
                </div>
              </div>

              {/** Row: Frontend */}
              <div className="grid grid-cols-12 items-center gap-6">
                <div className="col-span-3 w-40 text-left text-sm font-semibold text-foreground">Frontend</div>
                <div className="col-span-9">
                  <div className="flex flex-wrap gap-2 items-center justify-start">
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">React</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Next.js</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">TypeScript</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Tailwind</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Redux</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">HTML</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">CSS</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Flutter</ShinyButton>
                  </div>
                </div>
              </div>

              {/** Row: Backend */}
              <div className="grid grid-cols-12 items-center gap-6">
                <div className="col-span-3 w-40 text-left text-sm font-semibold text-foreground">Backend</div>
                <div className="col-span-9">
                  <div className="flex flex-wrap gap-2 items-center justify-start">
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Node</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Express</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Nest</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Flask</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Django</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">MongoDB</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">PostgreSQL</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">MariaDB</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Cassandra</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Firebase</ShinyButton>
                  </div>
                </div>
              </div>

              {/** Row: Other Tools */}
              <div className="grid grid-cols-12 items-center gap-6">
                <div className="col-span-3 w-40 text-left text-sm font-semibold text-foreground">Other Tools</div>
                <div className="col-span-9">
                  <div className="flex flex-wrap gap-2 items-center justify-start">
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Figma</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Vercel</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">GitHub</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">AWS</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Docker</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">TensorFlow</ShinyButton>
                    <ShinyButton className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">Postman</ShinyButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact section */}
      <div>
        <section id="contact" aria-label="Contact me" className="scroll-mt-24 py-12">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h1 className="text-2xl md:text-5xl text-foreground text-center font-bold tracking-tight">
              Get in Touch
            </h1>

            <div className="mt-8 md:mt-10">
              <TypewriterEffect words={[{ text: "Let's" }, { text: "build" }, { text: "something" }, { text: "great" }, { text: "together" }]} />
            </div>

            {/* Follow-up contact sentence: LinkedIn link should be replaced with your real profile URL */}
            <p className="mt-6 text-sm md:text-base text-muted-foreground">
              Want to chat? Send me a direct message on{' '}
              <a
                href="https://www.linkedin.com/in/syedahafsaanis/" /* TODO: replace with your LinkedIn profile URL, e.g. https://www.linkedin.com/in/your-handle */
                className="font-medium underline underline-offset-2 text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              {' '}or email me at{' '}
              <a
                href="mailto:hafsa.172001@gmail.com"
                className="font-medium underline underline-offset-2 text-foreground"
              >
                hafsa.172001@gmail.com
              </a>
              . I’ll respond as soon as I can.
            </p>
          </div>
        </section>
      </div>

      {/* Separator + Footer */}
      <div className="mx-auto max-w-3xl px-6">
        <div className="my-8 border-t border-muted-foreground/30" />
        <footer className="pb-8 text-center">
          <p className="text-sm text-muted-foreground">
            Built with Next.js and TypeScript. Coded in VS Code. Copyright Ⓒ Syeda Hafsa Anis
          </p>
        </footer>
      </div>
      {/* Scroll-to-top button */}
      <ScrollToTop />
    </motion.div>
  </div>
  );
}


