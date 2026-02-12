"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const faqs = [
    {
        question: "¿Qué necesito para cotizar?",
        answer: "Requerimos tu logotipo en alta resolución, cantidad por artículo y fecha esperada. Nosotros nos encargamos del mockup."
    },
    {
        question: "¿Mínimos de producción?",
        answer: "Depende del producto: Textil desde 25 pzs, promocionales desde 50 pzs. Consultar por artículos especializados."
    },
    {
        question: "¿Tiempos de entrega?",
        answer: "Estándar 10-12 días hábiles. Contamos con servicio Express de 5 días para requerimientos urgentes de alta prioridad."
    },
    {
        question: "¿Envíos a todo el país?",
        answer: "Sí, operamos con logística nacional. Aseguramos que tus materiales lleguen en perfectas condiciones y a tiempo."
    },
    {
        question: "¿Muestras físicas?",
        answer: "Podemos generar muestras previas a la producción masiva para asegurar que la calidad sea exactamente lo que buscas."
    },
    {
        question: "¿Facturación inmediata?",
        answer: "Sí, todos nuestros procesos son 100% fiscales. Emitimos factura al confirmar tu pedido."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-6xl font-black tracking-tighter mb-6 leading-none text-white">Preguntas frecuentes.</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        Todo lo que necesitas saber sobre nuestra logística de producción y entrega.
                    </p>
                    <div className="p-8 bg-slate-800/50 rounded-3xl border border-slate-800 backdrop-blur-sm">
                        <p className="text-primary font-black tracking-[0.2em] text-[10px] uppercase mb-4">HARD INSIGHTS</p>
                        <p className="font-bold text-2xl mb-4 leading-tight text-white">Procesos optimizados para resultados de alto nivel.</p>
                        <a href="mailto:proyectos@impacto.studio" className="text-primary font-bold text-xl hover:underline underline-offset-4 decoration-2">Contáctanos directamente →</a>
                    </div>
                </motion.div>

                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            className="group border-b border-slate-800"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <button
                                className="w-full flex justify-between items-center cursor-pointer py-6 text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <h4 className={clsx(
                                    "text-xl font-bold transition-colors duration-300",
                                    openIndex === i ? "text-primary" : "text-white group-hover:text-primary"
                                )}>
                                    {faq.question}
                                </h4>
                                <motion.span
                                    className={clsx(
                                        "material-symbols-outlined transition-colors duration-300",
                                        openIndex === i ? "text-primary" : "text-white group-hover:text-primary"
                                    )}
                                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                                >
                                    add
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-slate-400">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
