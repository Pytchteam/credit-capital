import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import FundingTypes from "./components/FundingTypes";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Founder from "./components/Founder";
import QualificationFunnel from "./components/QualificationFunnel";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import { ArrowRight, Menu, X, Shield, Zap } from "lucide-react";

export default function App() {
  const [isFunnelOpen, setIsFunnelOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const revealVariants: any = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1]
      } 
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-brand-500 selection:text-black">
      <PageLoader />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-tighter text-white"
          >
            CREDIT TO <span className="text-brand-500">CAPITAL</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold text-white/50 uppercase tracking-[0.3em]">
            <a href="#services" className="hover:text-brand-400 transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-brand-400 transition-colors">Methodology</a>
            <a href="#funding" className="hover:text-brand-400 transition-colors">Funding</a>
            <button 
              onClick={() => setIsFunnelOpen(true)}
              className="btn-primary py-3 px-8 text-xs"
            >
              Qualify Now
            </button>
          </div>

          <button 
            className="md:hidden text-white p-2 bg-white/5 rounded-full border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-32 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-8 text-3xl font-display font-bold text-white">
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>Methodology</a>
              <a href="#funding" onClick={() => setMobileMenuOpen(false)}>Funding</a>
            </div>
            <div className="mt-auto mb-12 flex flex-col gap-4">
              <button 
                onClick={() => {
                  setIsFunnelOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="btn-primary w-full"
              >
                Qualify Now
              </button>
              <a 
                href="#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="btn-secondary w-full text-center"
              >
                The Methodology
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero onStartFunnel={() => setIsFunnelOpen(true)} />
        
        <motion.div 
          id="services"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Services />
        </motion.div>
        
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <HowItWorks />
        </motion.div>
        
        {/* Mid-page Dual CTA */}
        <section className="py-20 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="luxe-card p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Ready to engineer <br /> your <span className="text-gold-gradient">financial future?</span>
                </h3>
                <p className="text-white/60 text-lg font-light">
                  Join 5,000+ entrepreneurs who have unlocked institutional leverage.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                <button 
                  onClick={() => setIsFunnelOpen(true)}
                  className="btn-primary flex items-center justify-center gap-3"
                >
                  Start Qualification <ArrowRight className="w-5 h-5" />
                </button>
                <a href="#funding" className="btn-secondary flex items-center justify-center gap-3">
                  View Funding Types
                </a>
              </div>
            </div>
          </div>
        </section>

        <motion.div 
          id="funding"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FundingTypes />
        </motion.div>
        
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Founder />
        </motion.div>
        
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Testimonials />
        </motion.div>
        
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Pricing />
        </motion.div>

        {/* Trust Section */}
        <section className="section-padding bg-[#050505]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Shield, title: "Institutional Security", desc: "We use bank-grade protocols to protect your sensitive data." },
                { icon: Zap, title: "Rapid Execution", desc: "Our engineering process is optimized for speed and high-limit approvals." },
                { icon: ArrowRight, title: "Proven Results", desc: "Over $100M in capital unlocked for our clients globally." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                    <item.icon className="w-8 h-8 text-brand-500" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-4">{item.title}</h4>
                  <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-[#0A0A0A] text-white relative overflow-hidden border-t border-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-500/5 pointer-events-none" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-display font-bold mb-10 tracking-tight leading-[0.95]">
                The standard for <br /> <span className="text-gold-gradient">capital acquisition.</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => setIsFunnelOpen(true)}
                  className="btn-primary px-16 py-8 text-2xl shadow-2xl shadow-brand-500/20 flex items-center gap-4 group"
                >
                  Check If You Qualify 
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </button>
                <a href="https://www.skool.com/credit-to-capital-8168" target="_blank" className="btn-secondary px-16 py-8 text-2xl">
                  Join Community
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {isFunnelOpen && (
          <QualificationFunnel 
            isOpen={isFunnelOpen} 
            onClose={() => setIsFunnelOpen(false)} 
          />
        )}
      </AnimatePresence>

      <WhatsAppButton />
    </div>
  );
}
