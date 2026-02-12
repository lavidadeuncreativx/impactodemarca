"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Reseñas", href: "#resenas" },
    { name: "Contacto", href: "#contacto" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMenuOpen(false);

        const target = document.querySelector(href);
        if (target) {
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
                isScrolled || isMenuOpen
                    ? "bg-background-dark/90 backdrop-blur-md shadow-lg border-b border-white/5 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="flex items-center space-x-2 mix-blend-difference text-white relative z-50">
                <span className="font-extrabold text-xl tracking-tighter">impacto de marca®</span>
            </div>

            {/* Desktop Menu */}
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

            <div className="flex items-center gap-4 text-white relative z-50">
                <button
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    onClick={() => document.documentElement.classList.toggle('dark')}
                    aria-label="Toggle theme"
                >
                    <span className="material-symbols-outlined text-lg">contrast</span>
                </button>

                <div
                    className="flex flex-col space-y-1.5 cursor-pointer group md:hidden"
                    onClick={toggleMenu}
                >
                    <motion.div
                        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 bg-white transition-transform"
                    ></motion.div>
                    <motion.div
                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-8 h-0.5 bg-white transition-opacity"
                    ></motion.div>
                    <motion.div
                        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 bg-white transition-transform"
                    ></motion.div>
                </div>

                <div className="hidden md:flex flex-col space-y-1.5 cursor-pointer group">
                    <div className="w-8 h-0.5 bg-white transition-all group-hover:w-5 ml-auto"></div>
                    <div className="w-8 h-0.5 bg-white"></div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined text-3xl">close</span>
                        </button>

                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-3xl font-black uppercase tracking-widest text-white hover:text-primary transition-colors hover:scale-105 transform duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
