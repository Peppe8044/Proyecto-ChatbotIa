"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { ThemeToggle } from "../theme-toggle"
import { Menu, MessageSquare } from "lucide-react"
import { siteContent } from "../../lib/content"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#beneficios", label: "Beneficios" },
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#integraciones", label: "Integraciones" },
    { href: "#precios", label: "Precios" },
    { href: "#preguntas", label: "Preguntas" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <MessageSquare className="h-6 w-6 text-accent" />
          <span className="font-montserrat font-bold text-xl">{siteContent.brand.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex">{siteContent.hero.cta.primary}</Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="mt-4">{siteContent.hero.cta.primary}</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
