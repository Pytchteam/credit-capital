import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus R.",
    role: "E-commerce Founder",
    text: "Went from a 640 to a 754 in 90 days. More importantly, I just got approved for my first $25k business card at 0%.",
    score: "+114 Points"
  },
  {
    name: "Sarah L.",
    role: "Real Estate Investor",
    text: "Credit To Capital is different. They actually understand how to position a profile for funding. Secured $85k for my next flip.",
    score: "$85k Approved"
  },
  {
    name: "David K.",
    role: "Agency Owner",
    text: "The community alone is worth it. The funding sequence they gave me worked perfectly. $40k in unsecured lines unlocked.",
    score: "$40k Unlocked"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white tracking-tight">Client <span className="text-gold-gradient">Results.</span></h2>
          <p className="text-white/60 text-xl font-light max-w-2xl mx-auto">
            Real people, real approvals, real leverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="luxe-card p-12 relative group hover:scale-[1.02] transition-all duration-700"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-brand-500/10 transition-all duration-700" />
              <div className="flex gap-1 mb-10 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
                ))}
              </div>
              <p className="text-xl text-white/80 mb-12 leading-relaxed font-light relative z-10 italic group-hover:text-white transition-colors duration-700">"{t.text}"</p>
              <div className="flex items-center justify-between relative z-10 pt-8 border-t border-white/5">
                <div>
                  <div className="font-bold text-white group-hover:text-brand-500 transition-colors duration-700">{t.name}</div>
                  <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{t.role}</div>
                </div>
                <div className="px-4 py-2 bg-brand-500/5 rounded-full text-[10px] font-bold text-brand-500 border border-brand-500/10 group-hover:bg-brand-500 group-hover:text-black transition-all duration-700">
                  {t.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
