import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "Done For You Credit Repair",
  "Delete Late Payments & Collections",
  "Get Approved for High-Limit Credit Cards",
  "Turn Credit into $50K–$100K in Funding",
  "Exclusive Community Access",
  "Weekly Funding Strategy Calls"
];

export default function Pricing() {
  return (
    <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-500/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto luxe-card p-8 md:p-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block py-1 px-4 rounded-full bg-brand-500/10 border border-brand-500/20 text-[10px] font-bold tracking-[0.3em] uppercase text-brand-500 mb-10">
                The Elite Standard
              </span>
              <h2 className="text-4xl md:text-7xl font-display font-bold mb-10 text-white tracking-tight leading-[0.95]">Join Credit <br /> <span className="text-gold-gradient">to Capital.</span></h2>
              <p className="text-white/40 text-xl font-light mb-12 leading-relaxed">
                Stop guessing. Start scaling. Join the #1 community for high-level credit repair and institutional business funding.
              </p>
              
              <div className="space-y-6">
                {features.map((f, i) => (
                  <motion.div 
                    key={f} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-6 h-6 bg-brand-500/10 border border-brand-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-500">
                      <Check className="w-3.5 h-3.5 text-brand-500 group-hover:text-black transition-colors duration-500" />
                    </div>
                    <span className="text-white/60 font-medium group-hover:text-white transition-colors duration-500">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="p-12 bg-black rounded-[48px] text-center text-white shadow-2xl relative z-10 border border-brand-500/30 group-hover:border-brand-500 transition-all duration-700">
                <div className="text-[10px] font-bold text-brand-500 uppercase tracking-[0.4em] mb-6 opacity-60">Monthly Membership</div>
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className="text-8xl font-display font-bold text-gold-gradient">$97</span>
                  <span className="text-brand-500 font-bold text-xl">/mo</span>
                </div>
                <div className="text-white/30 mb-12 font-light text-sm">Cancel anytime. No hidden fees.</div>
                
                <a 
                  href="https://www.skool.com/credit-to-capital-8168" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full block text-center py-6 text-xl group shadow-2xl shadow-brand-500/20"
                >
                  Join The Community
                  <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
                </a>
                
                <p className="mt-10 text-[10px] text-white/20 font-bold uppercase tracking-widest">
                  Secure checkout via Skool.
                </p>
              </div>
              
              {/* Decorative background for pricing card */}
              <div className="absolute -inset-6 bg-brand-500/5 rounded-[56px] blur-3xl -z-10 group-hover:bg-brand-500/10 transition-all duration-1000" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
