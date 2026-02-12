"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const services = [
    {
        id: 1,
        title: "Promocionales",
        description: "Regalos de marca que generan conexión. Contamos con un catálogo extenso que incluye termos, libretas, tecnología y artículos premium personalizados para tus campañas de fidelización.",
        image: null,
        cta: "Cotizar Promocionales"
    },
    {
        id: 2,
        title: "Stands",
        description: "Montaje y presencia profesional en expos y eventos. Ofrecemos soluciones integrales de renta, estructura y diseño espacial para que tu marca destaque en cualquier recinto.",
        image: null,
        cta: "Cotizar Stand"
    },
    {
        id: 3,
        title: "Impresiones",
        description: "Impresión para visibilidad inmediata de gran formato. Soluciones duraderas en banners, lonas, vinilos y materiales rígidos con la mejor resolución del mercado.",
        image: null,
        cta: "Cotizar Impresión"
    },
    {
        id: 4,
        title: "Uniformes",
        description: "Uniformes personalizados para tu equipo que refuerzan la identidad corporativa. Prendas textiles de alta resistencia con bordado, serigrafía o transfer de larga duración.",
        image: null,
        cta: "Cotizar Uniformes"
    },
    {
        id: 5,
        title: "Equipo de Seguridad",
        description: "Equipo de seguridad para operación y campo. Suministramos equipo de protección personal (EPP) certificado y personalizado para garantizar la integridad de tu personal en cualquier entorno.",
        image: null,
        cta: "Cotizar Equipo"
    }
];

export default function Services() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="servicios" className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
            <motion.div
                className="noise-texture relative bg-neutral-950 rounded-3xl md:rounded-[3rem] p-8 md:p-20 overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.99 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 relative z-10">
                    <div className="space-y-4">
                        <motion.div
                            className="flex items-center gap-2 text-primary uppercase tracking-widest text-xs font-bold"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="material-symbols-outlined text-sm">circle</span>
                            impacto de marca®
                        </motion.div>
                        <motion.h2
                            className="text-6xl md:text-8xl font-black text-white tracking-tighter"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Servicios<motion.span
                                className="text-primary inline-block"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, type: "spring" }}
                            >.</motion.span>
                        </motion.h2>
                    </div>
                </div>

                <div className="relative z-10 space-y-0 divide-y divide-white/10">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            className="group py-8 md:py-10"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <button
                                className="w-full flex items-center justify-between text-left focus:outline-none group"
                                onClick={() => toggle(service.id)}
                            >
                                <div className="flex items-center gap-6 md:gap-12">
                                    <span className="text-white/30 text-sm font-mono tracking-widest">{`0${service.id}`}</span>
                                    <h3 className={clsx(
                                        "text-2xl md:text-4xl font-medium transition-colors duration-300",
                                        openId === service.id ? "text-primary" : "text-white group-hover:text-primary"
                                    )}>
                                        {service.title}
                                    </h3>
                                </div>
                                <motion.span
                                    className={clsx(
                                        "material-symbols-outlined text-3xl transition-colors duration-300",
                                        openId === service.id ? "text-primary" : "text-white group-hover:text-primary"
                                    )}
                                    animate={{ rotate: openId === service.id ? 45 : 0 }}
                                >
                                    add
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {openId === service.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-8 pl-14 md:pl-24 max-w-4xl">
                                            <div className="grid md:grid-cols-2 gap-8 items-center pb-4">
                                                <div>
                                                    <motion.p
                                                        className="text-white/60 text-lg leading-relaxed mb-6"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.1 }}
                                                    >
                                                        {service.description}
                                                    </motion.p>
                                                    <motion.button
                                                        className="bg-primary hover:bg-teal-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-primary/20"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.2 }}
                                                        data-event="click_service_card"
                                                    >
                                                        {service.cta}
                                                    </motion.button>
                                                </div>
                                                {service.image && (
                                                    <motion.div
                                                        className="relative hidden md:block"
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.2 }}
                                                    >
                                                        <img
                                                            src={service.image}
                                                            alt={service.title}
                                                            className="rounded-2xl w-full h-56 object-cover border border-white/10"
                                                        />
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Glow effect */}
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            </motion.div>
        </section>
    );
}
