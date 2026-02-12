"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import clsx from "clsx";

const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Reseñas", href: "#resenas" },
    { name: "Contacto", href: "#contacto" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            // Lenis handles smooth scroll automatically if configured to intercept standard anchors,
            // but we can also use window.scrollTo with behavior smooth if simple.
            // Since we use global Lenis, we can trigger it or just use native scrollIntoView
            // and Lenis will smooth it if we use its instance.
            // For now, let's try standard anchor click which Lenis often catches if configured.
            // Or we can use `lenis.scrollTo(target)`.
            // Since we don't have direct access to lenis instance here without context,
            // we'll use a custom event or just standard behavior since Lenis usually polyfills html scroll.

            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={clsx(
                "fixed top-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center transition-all duration-300",
                isScrolled
                    ? "bg-background-dark/70 backdrop-blur-md shadow-lg border-b border-white/5 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="flex items-center space-x-2 mix-blend-difference text-white">
                <span className="font-extrabold text-xl tracking-tighter">impacto de marca®</span>
            </div>

            <div className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="hover:text-primary transition-colors hover:opacity-100 opacity-80"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            <div className="flex items-center gap-4 text-white">
                <button
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    onClick={() => document.documentElement.classList.toggle('dark')}
                    aria-label="Toggle theme"
                >
                    <span className="material-symbols-outlined text-lg">contrast</span>
                </button>

                <div className="flex flex-col space-y-1.5 cursor-pointer group">
                    <div className="w-8 h-0.5 bg-white transition-all group-hover:w-5 ml-auto"></div>
                    <div className="w-8 h-0.5 bg-white"></div>
                </div>
            </div>
        </motion.nav>
    );
}
