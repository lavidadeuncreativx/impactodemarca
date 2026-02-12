"use client";

import { motion } from "framer-motion";

const reviews = [
    {
        id: 1,
        author: "Carlos Méndez",
        role: "Director de Marketing",
        rating: 5,
        text: "La atención en WhatsApp fue inmediata. Necesitaba 50 mochilas bordadas para una convención en 3 días y cumplieron perfecto. La calidad es otro nivel."
    },
    {
        id: 2,
        author: "Ana Sofía Ruiz",
        role: "Gerente de RH",
        rating: 5,
        text: "Los kits de bienvenida quedaron increíbles. Me encantó que pudiera ver un mockup antes de pagar nada. Definitivamente seguiremos trabajando con Impacto."
    },
    {
        id: 3,
        author: "Eduardo Vargas",
        role: "Event Planner",
        rating: 5,
        text: "El stand que diseñaron para nuestra expo se robó todas las miradas. No solo se veía premium, sino que resistió perfecto los 3 días de uso rudo."
    }
];

export default function Testimonials() {
    return (
        <section id="resenas" className="py-24 bg-neutral-900 border-y border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #333 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-black tracking-[0.2em] text-[10px] uppercase mb-3 block flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary"></span> TRUSTED PARTNER
                        </span>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-white">
                            Lo que dicen <br /> <span className="text-neutral-500">nuestros clientes.</span>
                        </h2>
                    </motion.div>

                    <div className="flex gap-2">
                        <div className="text-yellow-400 flex text-2xl">★★★★★</div>
                        <span className="text-white font-bold text-lg">4.9/5 Promedio</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="bg-neutral-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl relative group hover:bg-neutral-800 transition-colors"
                        >
                            <div className="text-primary text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>

                            <div className="relative z-10">
                                <div className="flex text-yellow-500 mb-6 text-sm gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    ))}
                                </div>

                                <p className="text-white/80 text-lg leading-relaxed mb-8 font-medium">
                                    {review.text}
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                                        {review.author.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold leading-none">{review.author}</h4>
                                        <p className="text-white/40 text-xs font-bold uppercase tracking-wider mt-1">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
