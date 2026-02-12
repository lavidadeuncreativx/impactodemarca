"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formState.name || !formState.email) return;

        setStatus("sending");
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => setStatus("idle"), 2000);
            setFormState({ name: "", email: "", message: "" });
        }, 1200);
    };

    return (
        <>
            <section id="contacto" className="max-w-7xl mx-auto px-6 pb-24 relative z-20">
                <motion.div
                    className="relative bg-slate-900 rounded-[3rem] p-12 md:p-24 overflow-hidden border border-white/5"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="flex flex-col justify-center space-y-12">
                            <div>
                                <motion.h2
                                    className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    ¿Listo para llevar tu marca al siguiente nivel?
                                </motion.h2>
                                <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-md">
                                    Inicia tu proyecto hoy mismo. Respuesta inmediata por WhatsApp.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <a
                                        href="https://wa.me/34623965999"
                                        className="inline-flex items-center gap-4 bg-primary hover:bg-teal-600 text-white px-8 py-5 rounded-3xl text-2xl font-black hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 group"
                                        data-event="click_whatsapp"
                                    >
                                        <span className="material-symbols-outlined text-4xl group-hover:rotate-12 transition-transform">chat_bubble</span>
                                        WhatsApp Directo
                                    </a>
                                    <div className="mt-6 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 max-w-sm">
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-3">GUÍA DE MENSAJE</p>
                                        <p className="text-sm text-slate-300 italic">"Hola, quiero cotizar [categoría] y conocer tiempos de entrega..."</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-12 text-slate-400 pt-4 border-t border-slate-800">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] uppercase tracking-widest font-black text-slate-500">RESUMEN HARD INSIGHTS</span>
                                        <span className="text-white font-bold text-lg">09:00 – 19:00 HRS</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                            <form className="space-y-6 relative z-10" onSubmit={handleSubmit} data-event="start_contact">
                                <div className="text-center mb-8">
                                    <div className="text-primary font-black text-2xl mb-2">impacto de marca<span className="text-slate-900 dark:text-white">®</span></div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Formulario de Briefing</h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Nombre del Proyecto</label>
                                        <input
                                            type="text"
                                            placeholder="Ej. Uniformes Corporativos Q4"
                                            className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder-slate-400 outline-none transition-all"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Email Corporativo</label>
                                        <input
                                            type="email"
                                            placeholder="nombre@empresa.com"
                                            className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder-slate-400 outline-none transition-all"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Requerimientos Específicos</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Descríbenos tu idea y cantidades..."
                                            className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white resize-none placeholder-slate-400 outline-none transition-all"
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className={`w-full font-black py-5 rounded-2xl transition-all shadow-lg uppercase tracking-widest text-sm
                    ${status === 'success' ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-teal-700 hover:shadow-primary/20'}
                  `}
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Enviado Correctamente' : 'Iniciar Cotización'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                        <div className="text-xl font-bold tracking-tighter flex items-center gap-2 text-white">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            impacto de marca<span className="text-primary font-black">®</span>
                        </div>
                    </div>
                    <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-slate-500">
                        <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-primary transition-colors">Términos</a>
                        <span className="text-slate-700">© 2025 IMPACTO DE MARCA STUDIO</span>
                    </div>
                </div>
            </footer>
        </>
    );
}
