"use client";

import { motion } from "framer-motion";

export default function Trust() {
    const stats = [
        { icon: "verified", text: "10+ años" },
        { icon: "schedule", text: "Entregas puntuales" },
        { icon: "local_shipping", text: "Cobertura Nacional" },
    ];

    const logos = [
        { name: "SONY", className: "text-white/90 tracking-tighter border-b-2 border-transparent" },
        { name: "La Costeña", className: "text-white/90 tracking-tight italic font-black" },
        { name: "URREA", className: "text-white/90 font-bold uppercase tracking-[0.2em] border border-white/20 px-4 py-1" },
        { name: "amanco", className: "text-white/90 tracking-normal font-medium lowercase italic" },
    ];

    return (
        <section className="py-24 px-4 bg-background-dark">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="bg-neutral-900/50 backdrop-blur-sm px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest border border-white/5 shadow-xl flex items-center text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <span className="material-symbols-outlined text-sm mr-2 text-primary">{stat.icon}</span>
                            {stat.text}
                        </motion.div>
                    ))}
                </div>

                <div className="w-full px-4 overflow-hidden">
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-80 grayscale transition-all duration-500 hover:grayscale-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {logos.map((logo, i) => (
                            <span key={i} className={`text-[1.5rem] ${logo.className} font-display`}>
                                {logo.name}
                            </span>
                        ))}

                        <div className="flex flex-col items-center leading-none text-white/90">
                            <span className="text-[10px] font-black tracking-[0.3em] mb-0.5">AMERICAN</span>
                            <span className="text-sm font-black tracking-[0.1em]">EXPRESS</span>
                        </div>
                    </motion.div>
                </div>

                <motion.p
                    className="mt-20 text-center text-gray-500 text-[12px] font-bold uppercase tracking-[0.3em] max-w-2xl leading-loose"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Más de 500 corporativos confían en nuestra gestión de tiempos.
                </motion.p>
            </div>
        </section>
    );
}
