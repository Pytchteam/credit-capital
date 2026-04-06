import { motion } from "motion/react";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

export default function Hero({ onStartFunnel }: { onStartFunnel: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-500/5 to-transparent pointer-events-none" />
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" 
      />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[1px] bg-brand-500" 
              />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-500">
                The Standard in Capital Positioning
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-display font-bold tracking-tight mb-10 text-white leading-[0.9]">
              Access Changes <br /> 
              <span className="text-gold-gradient">Everything.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-14 leading-relaxed font-light">
              We don't just repair credit. We engineer profiles for institutional leverage, 
              high-limit approvals, and the liquidity required to scale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={onStartFunnel}
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-4 group text-lg"
              >
                Check If You Qualify 
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <a href="#how-it-works" className="btn-secondary w-full sm:w-auto text-center text-lg">
                The Methodology
              </a>
            </div>

            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-16">
              {[
                { label: "Capital Unlocked", value: "$100M+" },
                { label: "Success Rate", value: "98%" },
                { label: "Avg. Approval", value: "$50k+" },
                { label: "Client Base", value: "5k+" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                >
                  <div className="text-3xl font-display font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="relative z-10 aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-2xl shadow-brand-500/10 bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/piDEU1FsS6w?autoplay=0&controls=1&rel=0&modestbranding=1" 
                title="Credit To Capital Overview" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Decorative Frame Elements */}
            <div className="absolute -inset-4 bg-brand-500/5 rounded-[40px] blur-2xl -z-10 group-hover:bg-brand-500/10 transition-all duration-1000" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-brand-500/20 rounded-tr-[40px] -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-brand-500/20 rounded-bl-[40px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
