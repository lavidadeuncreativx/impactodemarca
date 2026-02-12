"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useEffect, useState } from "react";
import clsx from "clsx";

export default function Hero() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia) {
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            setPrefersReducedMotion(mediaQuery.matches);

            const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
            mediaQuery.addEventListener("change", handler);
            return () => mediaQuery.removeEventListener("change", handler);
        }
    }, []);

    const { scrollY } = useScroll();
    // Disable parallax if reduced motion
    const y1 = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 100]);

    // Spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        if (prefersReducedMotion) return;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const spotlightBackground = useMotionTemplate`
        radial-gradient(
          650px circle at ${mouseX}px ${mouseY}px,
          rgba(255,255,255,0.06),
          transparent 80%
        )
    `;

    return (
        <section className="pt-24 px-4 md:px-6">
            <motion.div
                className="hero-panel grainy-texture relative bg-neutral-900 rounded-3xl overflow-hidden flex flex-col justify-between p-8 md:p-20 shadow-2xl min-h-[85vh] group"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onMouseMove={handleMouseMove}
            >
                {/* Spotlight */}
                {!prefersReducedMotion && (
                    <motion.div
                        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block"
                        style={{ background: spotlightBackground }}
                    />
                )}

                <div className="flex justify-end pt-8 md:pt-0 relative z-10">
                    <motion.div
                        className="text-white text-right space-y-1 opacity-60 text-[10px] md:text-xs font-bold uppercase tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <p>Promocionales & Merchandising</p>
                        <p>Stands & Experiencias</p>
                        <p>Impresión de Gran Formato</p>
                        <p>Logística para RH & Marketing</p>
                    </motion.div>
                </div>

                <div className="flex-1 flex items-center relative z-10">
                    <div className="overflow-visible pb-4">
                        <motion.h1
                            className="text-[clamp(2.5rem,10.5vw,9rem)] leading-[0.85] font-extrabold text-white tracking-tighter select-none py-2"
                            style={{ y: y1 }}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        >
                            impacto de marca<span className="text-[0.4em] align-top font-normal -ml-2 relative -top-2">®</span>
                        </motion.h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
                    <motion.div
                        className="max-w-2xl text-white"
                        style={{ y: y2 }}
                    >
                        <div className="overflow-hidden mb-6">
                            <motion.h2
                                className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                            >
                                Promocionales, impresión y stands para eventos — listos a tiempo.
                            </motion.h2>
                        </div>

                        <motion.p
                            className="text-base md:text-xl opacity-70 mb-10 max-w-lg leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 0.7, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Para equipos de Marketing, RH y Compras que necesitan material con fecha definida.
                        </motion.p>

                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                        >
                            <a
                                href="https://wa.me/525561491602?text=Hola,%20vengo%20de%20la%20página%20web%20y%20quiero%20solicitar%20información"
                                className="inline-flex items-center bg-primary hover:bg-teal-700 text-white px-10 py-5 rounded-full font-bold transition-all transform hover:scale-[1.02] active:scale-95 shadow-2xl shadow-primary/20 group"
                                data-event="click_whatsapp"
                            >
                                <span className="mr-3">Cotizar por WhatsApp</span>
                                <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">chat</span>
                            </a>
                            <p className="text-[11px] uppercase tracking-widest font-bold opacity-50 ml-2">
                                Dinos qué necesitas + cantidad + fecha y te cotizamos.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center space-x-4 max-w-xs w-full"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <div className="w-14 h-14 rounded-xl bg-neutral-800 overflow-hidden flex-shrink-0 border border-white/10">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWkzKaNmGSayV9TZVdttfBn150IMM-3Wzm36i-hOQeIs7ZxO93BvulN4satKaN6G7XZr3MviAE9AIGuNmXx9rfwLbFSWhMKQ1jUsEFn3CrC_PLNKYq_DDTlI2U2VVtZ80LeWlXCukIX6WLJBZSlbiH6i87uaa54nI0dGX9pmMR3iT9PxMkMRJ3QIQJJ96AUNTQwKzU_l5LMNbw-kGBGm19abiMEl9f1kAktR9ia2rep5iRi-3hLhQnR7pQHOBsoC42F7hW0sRQfe-o"
                                alt="Fundador"
                                className="w-full h-full object-cover grayscale brightness-110"
                            />
                        </div>
                        <div>
                            <p className="text-[9px] text-primary font-black uppercase tracking-[0.2em] leading-none mb-1.5">Director de Operaciones</p>
                            <p className="font-bold text-white text-sm">Alejandro Ortiz</p>
                            <button className="mt-2 text-[9px] flex items-center bg-white text-black px-3 py-1.5 rounded-full font-black uppercase tracking-wider hover:bg-gray-100 transition-colors">
                                HABLAR AHORA <span className="ml-2 h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Plus Signs */}
                <span className="absolute top-1/4 left-12 text-white opacity-10 text-2xl hidden md:block select-none">+</span>
                <span className="absolute top-3/4 left-1/2 text-white opacity-10 text-2xl hidden md:block select-none">+</span>
                <span className="absolute bottom-1/4 right-20 text-white opacity-10 text-2xl hidden md:block select-none">+</span>
            </motion.div>
        </section>
    );
}
