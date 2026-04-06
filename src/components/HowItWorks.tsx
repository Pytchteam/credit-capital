import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Audit & Strategy",
    description: "We perform a deep-dive audit of your current profile and map out a custom positioning strategy."
  },
  {
    number: "02",
    title: "Execution Phase",
    description: "Our team handles the heavy lifting—disputing negatives and building the necessary data points."
  },
  {
    number: "03",
    title: "Funding Unlock",
    description: "Once positioned, we guide you through the application sequence to secure high-limit funding."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-[#0A0A0A] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white tracking-tight">The Path to <br /> <span className="text-gold-gradient">Capital.</span></h2>
            <p className="text-white/60 text-xl font-light">
              A proven, three-step framework designed to take you from restricted to funded.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative group"
            >
              <span className="text-[140px] font-display font-bold text-white/5 absolute -top-24 -left-8 select-none group-hover:text-brand-500/10 transition-all duration-1000 group-hover:-translate-y-4">
                {step.number}
              </span>
              <div className="relative z-10 pt-12">
                <h3 className="text-3xl font-display font-bold mb-6 text-white group-hover:translate-x-2 transition-transform duration-700">{step.title}</h3>
                <p className="text-white/40 leading-relaxed text-lg font-light group-hover:text-white/60 transition-colors duration-700">
                  {step.description}
                </p>
              </div>
              <div className="mt-10 h-[1px] w-12 bg-brand-500/30 group-hover:w-full group-hover:bg-brand-500 transition-all duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
