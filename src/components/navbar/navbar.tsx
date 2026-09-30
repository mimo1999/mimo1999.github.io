"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting));
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  const linkClass = (href: string) =>
    cn(
      "text-sm transition-colors underline-offset-[0.45em] decoration-primary decoration-2",
      pathname === href || pathname.startsWith(href + "/")
        ? "text-foreground underline"
        : "text-muted-foreground hover:text-foreground"
    );

  return (
    <>
      <div id="scroll-sentinel" aria-hidden className="absolute top-0 h-5 w-px" />
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-background/90 backdrop-blur transition-[border-color] duration-200 border-b",
          scrolled ? "border-border" : "border-transparent"
        )}
      >
        <nav className="mx-auto max-w-6xl px-5 sm:px-8" aria-label="Main">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="font-display text-base font-semibold tracking-tight"
            >
              Maitreya Mohapatra
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </Link>
              ))}
              {mounted && (
                <button
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>

            <div className="flex items-center gap-4 md:hidden">
              {mounted && (
                <button
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                  className="text-muted-foreground"
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden border-t border-border py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn("block py-3 text-base", linkClass(link.href))}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
