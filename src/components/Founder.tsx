import { motion } from "motion/react";

export default function Founder() {
  return (
    <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-500/5 skew-x-12 translate-x-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl relative z-10 border border-white/5 group">
              <img 
                src="https://picsum.photos/seed/jordane/800/1000" 
                alt="Jordane Sibley" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl -z-10" 
            />
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-brand-500/20 rounded-tl-[48px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-brand-500 tracking-[0.3em] uppercase mb-6 block">
              The Visionary
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white tracking-tight">
              Jordane <br /> Sibley.
            </h2>
            
            <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed mb-12">
              <p>
                Jordane Sibley founded Credit To Capital with a singular mission: to democratize institutional financial leverage. 
                With years of experience navigating the complexities of credit algorithms and lending criteria, she realized that 
                most people weren't "unqualified"—they were simply unpositioned.
              </p>
              <p>
                Under her leadership, the firm has evolved from a boutique agency into the #1 community for credit repair and 
                business funding, helping thousands of entrepreneurs unlock the capital required to build generational wealth.
              </p>
            </div>

            <blockquote className="relative p-8 rounded-3xl bg-white/5 border border-white/10 shadow-xl mb-8">
              <div className="text-4xl text-brand-500/20 font-serif absolute top-4 left-4">"</div>
              <p className="text-2xl font-display font-medium text-white italic relative z-10">
                Your credit score is just a number. Your credit profile is a key. We make sure that key opens the doors you've been knocking on.
              </p>
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-500" />
              <span className="text-sm font-bold text-white uppercase tracking-widest">Founder & CEO</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
