"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);
    const [inContactSection, setInContactSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after 20% of viewport height
            if (window.scrollY > window.innerHeight * 0.2) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInContactSection(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const contactSection = document.getElementById("contacto");
        if (contactSection) {
            observer.observe(contactSection);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (contactSection) observer.unobserve(contactSection);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && !inContactSection && (
                <motion.div
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden w-full px-6 pointer-events-none"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <a
                        href="https://wa.me/525561491602?text=Hola,%20vengo%20de%20la%20página%20web%20y%20quiero%20solicitar%20información"
                        className="flex items-center justify-center gap-3 bg-primary text-white font-bold py-4 rounded-full shadow-2xl shadow-primary/30 pointer-events-auto"
                        data-event="click_whatsapp"
                    >
                        <span className="material-symbols-outlined text-xl">chat_bubble</span>
                        Cotizar por WhatsApp
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
