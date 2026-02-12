"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
    {
        title: "Stands & Experiencias",
        category: "Espacios de Marca",
        image: "/images/portfolio/stands.jpg"
    },
    {
        title: "Uniformes Corporativos",
        category: "Apparel",
        image: "/images/portfolio/uniformes.jpg"
    },
    {
        title: "Activaciones BTL",
        category: "Eventos",
        image: "/images/portfolio/activaciones.jpg"
    },
    {
        title: "Material POP",
        category: "Retail",
        image: "/images/portfolio/material-pop.jpg"
    },
    {
        title: "Exhibidores",
        category: "Punto de Venta",
        image: "/images/portfolio/exhibidores.jpg"
    },
    {
        title: "Impresión Gran Formato",
        category: "Branding",
        image: "/images/portfolio/gran-formato.jpg"
    }
];

export default function Portfolio() {
    const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);

    return (
        <section id="portafolio" className="py-24 max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary font-black tracking-[0.2em] text-[10px] uppercase mb-3 block flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-primary"></span> HARD INSIGHTS
                    </span>
                    <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-none text-white">Mira nuestro trabajo.</h2>
                </motion.div>

                <motion.p
                    className="max-w-md text-slate-400 text-lg leading-relaxed font-medium"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Producimos activos de marca que la gente realmente quiere conservar. Mockups de alta fidelidad para visión inmediata.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        className="group relative aspect-square bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -4 }}
                        onClick={() => setSelectedItem(item)}
                    >
                        <motion.img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        />

                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="border-2 border-white/50 px-6 py-3 rounded-lg backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-white font-bold tracking-widest text-xs uppercase">Ver proyecto</span>
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary">{item.category}</p>
                            <h4 className="text-xl font-bold">{item.title}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-neutral-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl border border-white/10 relative no-scrollbar"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            <div className="grid md:grid-cols-2">
                                {/* Carousel Section */}
                                <div className="bg-black relative aspect-square md:aspect-auto select-none overflow-x-auto snap-x snap-mandatory flex no-scrollbar">
                                    {[1, 2, 3].map((_, idx) => (
                                        <div key={idx} className="min-w-full h-full relative snap-center">
                                            <img
                                                src={selectedItem.image}
                                                alt={`${selectedItem.title} - View ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                {[1, 2, 3].map((dot) => (
                                                    <div
                                                        key={dot}
                                                        className={`w-2 h-2 rounded-full ${idx + 1 === dot ? "bg-white" : "bg-white/30"}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    {/* Carousel Indicators Hint */}
                                    <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                                        Desliza →
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <p className="text-primary font-black uppercase tracking-widest text-xs mb-4">
                                        {selectedItem.category}
                                    </p>
                                    <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                                        {selectedItem.title}
                                    </h3>
                                    <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                                        Desarrollamos una solución integral para {selectedItem.title.toLowerCase()},
                                        enfocándonos en la calidad de los materiales y el impacto visual de la marca.
                                        Cada detalle fue cuidado para garantizar durabilidad y estética premium.
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 mb-8 border-t border-white/10 pt-8">
                                        <div>
                                            <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest mb-1">Cliente</p>
                                            <p className="text-white font-medium">Confidencial</p>
                                        </div>
                                        <div>
                                            <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest mb-1">Servicio</p>
                                            <p className="text-white font-medium">{selectedItem.category}</p>
                                        </div>
                                        <div>
                                            <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest mb-1">Año</p>
                                            <p className="text-white font-medium">2024</p>
                                        </div>
                                        <div>
                                            <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest mb-1">Resultado</p>
                                            <p className="text-primary font-bold">100% Satisfacción</p>
                                        </div>
                                    </div>

                                    <a
                                        href={`https://wa.me/525561491602?text=Hola,%20me%20interesa%20un%20proyecto%20similar%20a%20${encodeURIComponent(selectedItem.title)}`}
                                        className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                                    >
                                        Cotizar similar
                                        <span className="material-symbols-outlined">arrow_outward</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
