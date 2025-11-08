"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ThemeToggle from "@/components/ThemeToggle"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur dark:bg-black/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600" />
          <span className="font-semibold tracking-tight">ITIMA</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex text-sm">
          <Link href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Services</Link>
          <Link href="#security" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Security</Link>
          <Link href="#training" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Training</Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button asChild>
            <Link href="#contact">Book a Free Consultation</Link>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t bg-white dark:bg-black md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3">
            <Link href="#services" onClick={() => setOpen(false)} className="py-1">Services</Link>
            <Link href="#security" onClick={() => setOpen(false)} className="py-1">Security</Link>
            <Link href="#training" onClick={() => setOpen(false)} className="py-1">Training</Link>
            <Link href="#contact" onClick={() => setOpen(false)} className="py-1">Contact</Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button asChild className="flex-1">
                <Link href="#contact" onClick={() => setOpen(false)}>Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

