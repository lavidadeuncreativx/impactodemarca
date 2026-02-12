"use client";

import { motion } from "framer-motion";

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
                                <span className="text-white font-bold tracking-widest text-xs uppercase">View Project</span>
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary">{item.category}</p>
                            <h4 className="text-xl font-bold">{item.title}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
