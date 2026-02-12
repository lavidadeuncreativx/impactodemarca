"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialReviews = [
    {
        id: 1,
        author: "Carlos Méndez",
        role: "Director de Marketing",
        rating: 5,
        text: "Neta me salvaron la vida. Tenía el evento encima y nadie me resolvía lo de las mochilas. Me contestaron rápido en Whats y en 3 días ya las tenía todas perfectas. 🔥"
    },
    {
        id: 2,
        author: "Ana Sofía Ruiz",
        role: "Gerente de RH",
        rating: 5,
        text: "Amé los kits!! 😍 Lo mejor fue que me mandaron el previo de cómo se vería antes de pagar, así no hubo fallas. Súper recomendados."
    },
    {
        id: 3,
        author: "Eduardo Vargas",
        role: "Event Planner",
        rating: 5,
        text: "El stand fue un hit en la expo, literal todo mundo se paraba a ver. Se veía súper pro y aguantó perfecto el uso rudo. 10/10 👌"
    }
];

export default function Testimonials() {
    const [reviews, setReviews] = useState(initialReviews);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newReview, setNewReview] = useState({ author: "", role: "", text: "", rating: 5 });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setReviews([{ ...newReview, id: Date.now() }, ...reviews]);
        setIsModalOpen(false);
        setNewReview({ author: "", role: "", text: "", rating: 5 });
    };
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

                    <div className="flex flex-col md:items-end gap-2">
                        <div className="text-yellow-400 flex text-3xl">★★★★★</div>
                        <span className="text-white font-black text-3xl tracking-tight">4.9/5 Promedio</span>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-primary text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4 mt-2"
                        >
                            Califica nuestro trabajo
                        </button>
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

            {/* Review Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-neutral-900 w-full max-w-md p-8 rounded-3xl border border-white/10 relative shadow-2xl"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-white/50 hover:text-white"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            <h3 className="text-2xl font-black text-white mb-6">Comparte tu experiencia</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Nombre</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        value={newReview.author}
                                        onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Rol / Puesto</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        value={newReview.role}
                                        onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Reseña</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                        value={newReview.text}
                                        onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-teal-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95"
                                >
                                    Publicar reseña
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
