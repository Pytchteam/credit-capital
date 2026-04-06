import { motion } from "motion/react";
import { CreditCard, Briefcase, Landmark } from "lucide-react";

const fundingTypes = [
  {
    title: "High-Limit Cards",
    amount: "$10k - $50k+",
    description: "0% interest business and personal cards to fuel your growth.",
    icon: CreditCard,
    color: "from-brand-600/10 to-transparent"
  },
  {
    title: "Business Funding",
    amount: "$50k - $250k+",
    description: "Unsecured lines of credit and term loans for your LLC.",
    icon: Briefcase,
    color: "from-brand-600/10 to-transparent"
  },
  {
    title: "Personal Liquidity",
    amount: "$20k - $100k+",
    description: "Low-interest personal capital for any financial need.",
    icon: Landmark,
    color: "from-brand-600/10 to-transparent"
  }
];

export default function FundingTypes() {
  return (
    <section className="section-padding bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white tracking-tight">Funding <span className="text-gold-gradient">Potential.</span></h2>
          <p className="text-white/60 text-xl font-light max-w-2xl mx-auto">
            Our clients leverage their positioned profiles to unlock significant capital across multiple vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {fundingTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="luxe-card relative p-12 overflow-hidden group hover:scale-[1.02] transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-700 border border-white/10">
                  <type.icon className="w-8 h-8 text-brand-500 group-hover:text-black transition-colors duration-700" />
                </div>
                <h3 className="text-[10px] font-bold mb-4 text-brand-500 uppercase tracking-[0.4em] opacity-60 group-hover:opacity-100 transition-opacity">{type.title}</h3>
                <div className="text-5xl font-display font-bold mb-6 text-white group-hover:text-gold-gradient transition-all duration-700">{type.amount}</div>
                <p className="text-white/40 text-lg font-light leading-relaxed group-hover:text-white/60 transition-colors duration-700">
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
