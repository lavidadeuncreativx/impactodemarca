"use client";

import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Idea",
        icon: "chat",
        description: "Nos envías tu idea + cantidad + fecha vía WhatsApp. Brief inmediato sin fricciones.",
        tag: "WhatsApp brief",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7Au4iEBxlLwjRjqC32YpsVfq9izAzwZTJktN0K6J8SvnC4VTT9Rk60-6hKen7xReAmDa-VNSBZYrGeGJdsbA4dfHIJjGVHuYVLGgQTRM33Roj9Iz-Jx2iFSoXr0mWCqxDdTnDP0lkxT34qdCSOk48dN8wiyBqde7Gk9SrWuNpLQbvAktHtqPGzZRUEQdnKyepjnSchc8-PL8V96Od4aW8rAEKo-lyqaIVLh0P5vxi3tXU5Ek5M7GrvxdWVMcoprpltDEWCQEgbRU1"
    },
    {
        id: "02",
        title: "Propuesta",
        icon: "view_in_ar",
        description: "Visualizamos tu marca con mockups realistas y opciones que se ajustan a tu presupuesto.",
        tag: "Realistic mockups",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7Au4iEBxlLwjRjqC32YpsVfq9izAzwZTJktN0K6J8SvnC4VTT9Rk60-6hKen7xReAmDa-VNSBZYrGeGJdsbA4dfHIJjGVHuYVLGgQTRM33Roj9Iz-Jx2iFSoXr0mWCqxDdTnDP0lkxT34qdCSOk48dN8wiyBqde7Gk9SrWuNpLQbvAktHtqPGzZRUEQdnKyepjnSchc8-PL8V96Od4aW8rAEKo-lyqaIVLh0P5vxi3tXU5Ek5M7GrvxdWVMcoprpltDEWCQEgbRU1"
    },
    {
        id: "03",
        title: "Entrega",
        icon: "rocket_launch",
        description: "Producción acelerada y logística express directo a tus manos. Sin complicaciones.",
        tag: "Express logistics",
        image: null
    }
];

export default function Process() {
    return (
        <section id="proceso" className="py-20 md:py-40 px-4 md:px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center max-w-4xl mx-auto">
                    <motion.div
                        className="flex items-center justify-center gap-2 text-primary uppercase tracking-[0.2em] text-xs font-bold mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="material-symbols-outlined text-sm">circle</span>
                        impacto de marca®
                    </motion.div>
                    <motion.h2
                        className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        De la idea a tus manos <br />
                        <span className="text-neutral-600">en tres pasos simples.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            className="relative group h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                        >
                            <div className="bg-neutral-900/50 backdrop-blur-md text-white p-10 rounded-[2.5rem] h-full shadow-2xl relative z-10 overflow-hidden border border-white/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-neutral-900 group-hover:border-white/10 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="text-6xl font-black text-white/10 italic">{step.id}</span>
                                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                                    </div>
                                </div>

                                <h4 className="text-3xl font-bold mb-4">{step.title}</h4>
                                <p className="text-neutral-400 text-lg leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    {step.description}
                                </p>

                                <div className="mt-8 flex items-center gap-2 text-primary font-bold">
                                    <span>{step.tag}</span>
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_flat</span>
                                </div>
                            </div>

                            {/* Decorative Floating Elements on Hover (Desktop Only) */}
                            {step.image && (
                                <div className="absolute -top-12 -right-8 w-32 h-32 z-20 hidden md:block opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 delay-100 pointer-events-none">
                                    <div className="bg-white p-2 rounded-2xl shadow-2xl rotate-12 border border-neutral-700">
                                        <img src={step.image} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-24 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <p className="text-neutral-500 text-lg mb-8">¿Listo para elevar la presencia de tu marca?</p>
                    <a
                        href="#"
                        className="inline-flex items-center gap-4 bg-primary hover:bg-teal-600 text-white px-10 py-5 rounded-full text-lg font-black transition-all group shadow-2xl shadow-primary/30 active:scale-95"
                    >
                        Iniciar un proyecto por WhatsApp
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
