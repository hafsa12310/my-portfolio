'use client'

import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { AuroraText } from "@/components/ui/aurora-text"
import { Timeline } from '@/components/ui/timeline';
import { useState } from "react";
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

export default function Example() {
  

  const data = [
    {
      title: "Oct 2024 - Present",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Unikrew Solutions
          </p>
          <div className="grid grid-cols-2 gap-4">
            <p>
              Working as a Full Stack Engineer
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "July 2024 - Oct 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Sarmaaya Financials
          </p>
          <div className="grid grid-cols-2 gap-4">
            <p>
              Working as a Backend Develepor
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "June 2023 - Aug 2023",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Pakistan Civil Aviation Authority
          </p>

          <p>
            Software Engineering Intern
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main className="pt-24 px-6 flex items-center justify-center">
        <div className="relative max-w-3xl pt-30 text-center">
          <h1 className="pointer-events-none text-6xl sm:text-7xl font-semibold leading-none">
            <AuroraText speed={2} colors={["#8a79ab", "#dfd9ec", "#e6a5b8", "#8a79ab"]}>Hi, I am Hafsa Anis</AuroraText>
          </h1>
          <p className="mt-8 text-lg sm:text-xl font-medium">
            A Full-Stack Engineer turning ideas into polished Mobile & modern Web Apps.
          </p>
        </div>
      </main>

      {/* About section */}
      <section id="about" aria-label="About" className="mt-50 scroll-mt-24">
  <div className="mx-auto max-w-3xl px-6 py-12">
    <h1 className="text-2xl md:text-5xl text-foreground text-center font-bold tracking-tight">
      About
    </h1>

    <Card className="relative mt-6 w-full max-w-[1000px] mx-auto overflow-hidden py-4">
      <CardContent className="text-base md:text-lg leading-relaxed">My name is Syeda Hafsa Anis,, I am a recent Computer Engineering graduate of Ghulam Ishaq Khan Institute (GIKI), with expertise in Software Development (Web/Mobile), DevOps and Artificial Intelligence. Proven skills in designing and implementing robust solutions using a diverse set of technologies. Eager to contribute innovative ideas and technical proficiency to dynamic projects in the field of technology. Demonstrates strong leadership and communication skills through active collaboration with cross-functional teams.</CardContent>
      <CardFooter className="flex justify-between" />
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
    <h1 className="text-lg md:text-4xl text-foreground text-center font-bold tracking-tight">
      Projects
    </h1>

    {/* 3 horizontal cards (responsive) */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <MagicCard className="h-full">
        <div className="p-6 space-y-2">
          <p className="font-medium">Project One</p>
          <span className="text-sm text-muted-foreground">Hover me</span>
        </div>
      </MagicCard>

      <MagicCard className="h-full">
        <div className="p-6 space-y-2">
          <p className="font-medium">Project Two</p>
          <span className="text-sm text-muted-foreground">Hover me</span>
        </div>
      </MagicCard>

      <MagicCard className="h-full">
        <div className="p-6 space-y-2">
          <p className="font-medium">Project Three</p>
          <span className="text-sm text-muted-foreground">Hover me</span>
        </div>
      </MagicCard>
    </div>
  </div>
</section>

      </div>
    </div>
  );
}
