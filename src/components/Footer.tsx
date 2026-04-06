export default function Footer() {
  return (
    <footer className="py-20 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-display font-bold tracking-tighter text-white mb-6">
              CREDIT TO <span className="text-gold-gradient">CAPITAL</span>
            </div>
            <p className="text-white/40 text-lg font-light max-w-sm leading-relaxed">
              The standard in capital positioning. We engineer profiles for institutional leverage and high-limit liquidity.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/40 font-medium">
              <li><a href="#services" className="hover:text-brand-500 transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-500 transition-colors">Methodology</a></li>
              <li><a href="#funding" className="hover:text-brand-500 transition-colors">Funding</a></li>
              <li><a href="https://www.skool.com/credit-to-capital-8168" className="hover:text-brand-500 transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-white/40 font-medium">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-sm">
            © 2026 Credit To Capital. All rights reserved.
          </p>
          <div className="text-white/20 text-sm font-medium">
            Founder: <span className="text-white">Jordane Sibley</span>
          </div>
        </div>
        
        <div className="mt-12 text-center text-[10px] text-white/10 max-w-3xl mx-auto leading-relaxed">
          Disclaimer: Credit To Capital is a financial consulting firm. We are not a credit repair organization as defined by some state laws. Financial results may vary based on individual profiles and lender criteria. We do not guarantee specific funding amounts.
        </div>
      </div>
    </footer>
  );
}
