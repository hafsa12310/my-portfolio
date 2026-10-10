"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"

const links = [{ href: "#about", label: "About" }, { href: "#projects", label: "Work" }, { href: "#experience", label: "Experience" }, { href: "#education", label: "Education" }, { href: "#skills", label: "Skills" }]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"><nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-border/70 bg-background/80 px-4 shadow-[0_8px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:px-5" aria-label="Primary navigation"><a href="#home" className="flex items-center gap-3 font-semibold tracking-tight" onClick={() => setOpen(false)}><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-xs font-bold text-background">HA</span><span className="hidden sm:inline">Syeda Hafsa Anis</span></a><div className="hidden items-center gap-1 md:flex">{links.map((link) => <a key={link.href} href={link.href} className="nav-link">{link.label}</a>)}</div><div className="flex items-center gap-2"><AnimatedThemeToggler className="icon-button h-9 w-9 [&_svg]:h-4 [&_svg]:w-4" /><a href="#contact" className="hidden rounded-xl bg-foreground px-4 py-2.5 text-xs font-semibold text-background transition-transform hover:-translate-y-0.5 sm:inline-flex">Let’s talk</a><button className="icon-button h-9 w-9 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button></div>{open && <div className="absolute left-4 right-4 top-[4.75rem] rounded-2xl border border-border bg-background p-3 shadow-xl md:hidden">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-muted">{link.label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="mt-2 flex rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background">Let’s talk</a></div>}</nav></header>
}
