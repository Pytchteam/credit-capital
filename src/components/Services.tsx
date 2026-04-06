import { motion } from "motion/react";
import { ShieldCheck, TrendingUp, Landmark, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Negative Erasure",
    description: "Surgical removal of late payments, collections, and inaccuracies that create friction in your funding journey.",
    icon: ShieldCheck,
    tag: "Phase 01"
  },
  {
    title: "Profile Engineering",
    description: "Strategic primary and tradeline additions to build a profile that institutional lenders recognize as low-risk.",
    icon: TrendingUp,
    tag: "Phase 02"
  },
  {
    title: "Capital Acquisition",
    description: "Optimizing your data points to unlock $50k - $250k+ in business and personal liquidity for your LLC.",
    icon: Landmark,
    tag: "Phase 03"
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-[#050505] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white tracking-tight">The Architecture of <br /> <span className="text-gold-gradient">Leverage.</span></h2>
            <p className="text-white/60 text-xl font-light">
              We move beyond basic repair. We build the foundation for your financial future.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="luxe-card group p-12 hover:scale-[1.02] transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-700">
                  <service.icon className="w-8 h-8 text-brand-500 group-hover:text-black transition-colors duration-700" />
                </div>
                <span className="text-[10px] font-bold text-brand-500 tracking-[0.3em] uppercase opacity-50 group-hover:opacity-100 transition-opacity">{service.tag}</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-6 text-white group-hover:text-gold-gradient transition-all duration-700">{service.title}</h3>
              <p className="text-white/40 leading-relaxed text-lg mb-10 font-light group-hover:text-white/60 transition-colors duration-700">
                {service.description}
              </p>
              <div className="flex items-center gap-3 text-brand-500 font-bold text-sm group-hover:gap-5 transition-all duration-500">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
