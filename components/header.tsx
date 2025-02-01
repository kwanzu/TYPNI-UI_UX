"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-purple-800">TYPNI</span>
          </Link>
        </div>
        <div className="flex-1" />
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-6">
            <Link href="/about" className="text-foreground/60 hover:text-foreground">
              About
            </Link>
            <Link href="/programs" className="text-foreground/60 hover:text-foreground">
              Programs
            </Link>
            <Link href="/events" className="text-foreground/60 hover:text-foreground">
              Events
            </Link>
            <Link href="/community" className="text-foreground/60 hover:text-foreground">
              Community
            </Link>
          </nav>
          <Button>Join Now</Button>
        </div>
        <button
          className="ml-auto md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="container py-4 space-y-4">
            <Link
              href="/about"
              className="block text-foreground/60 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/programs"
              className="block text-foreground/60 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/events"
              className="block text-foreground/60 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/community"
              className="block text-foreground/60 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <Button className="w-full">Join Now</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

