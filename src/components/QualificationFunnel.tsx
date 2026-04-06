import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { X, CheckCircle2, Loader2, ArrowRight, ArrowLeft, Sparkles, Shield, TrendingUp, Landmark } from "lucide-react";
import { cn } from "../lib/utils";

type FunnelData = {
  fullName: string;
  email: string;
  phone: string;
  creditScore: string;
  monthlyIncome: string;
  fundingGoal: string;
  hasLLC: boolean;
};

export default function QualificationFunnel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FunnelData>();
  const totalSteps = 6;

  const formData = watch();

  const getInsight = () => {
    const score = formData.creditScore;
    const goal = formData.fundingGoal;
    const llc = String(formData.hasLLC) === "true";

    if (score === 'Below 620') {
      return {
        title: "Foundation First",
        text: "Your current score indicates high friction for institutional funding. Our 'Negative Erasure' phase will be critical to remove the anchors holding your profile back.",
        icon: Shield,
        color: "text-red-500"
      };
    }
    if (score === '620-679') {
      return {
        title: "Optimization Needed",
        text: "You're in the 'Fair' range. We need to focus on 'Profile Engineering'—adding strategic tradelines to push you into the 720+ tier for high-limit approvals.",
        icon: TrendingUp,
        color: "text-amber-500"
      };
    }
    if (llc && (score === '720+' || score === '680-719')) {
      return {
        title: "Funding Ready",
        text: "With an LLC and a solid score, you are perfectly positioned for Business Credit. We can likely unlock $50k-$100k in 0% interest capital within 30-60 days.",
        icon: Landmark,
        color: "text-emerald-500"
      };
    }
    return {
      title: "Strategic Positioning",
      text: "Based on your goals, we'll focus on building a profile that lenders recognize as low-risk, ensuring you get the maximum leverage possible.",
      icon: Sparkles,
      color: "text-brand-600"
    };
  };

  const onSubmit = async (data: FunnelData) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "leads"), {
        ...data,
        hasLLC: String(data.hasLLC) === "true",
        status: "new",
        createdAt: serverTimestamp(),
      });
      setIsComplete(true);
    } catch (error) {
      console.error("Error adding lead: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  if (!isOpen) return null;

  const insight = getInsight();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-xl bg-[#0A0A0A] rounded-[40px] overflow-hidden shadow-2xl border border-white/10"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-10 md:p-14">
          {!isComplete ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between text-[10px] font-bold text-white/40 mb-3 uppercase tracking-[0.2em]">
                  <span>Phase {step} of {totalSteps}</span>
                  <span>{Math.round((step / totalSteps) * 100)}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-brand-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / totalSteps) * 100}%` }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[340px]"
                >
                  {step === 1 && (
                    <div className="space-y-8">
                      <h2 className="text-4xl font-display font-bold text-white tracking-tight">Current Credit Score?</h2>
                      <div className="grid grid-cols-1 gap-3">
                        {['720+', '680-719', '620-679', 'Below 620'].map((score) => (
                          <label key={score} className="relative group cursor-pointer">
                            <input 
                              type="radio" 
                              {...register("creditScore", { required: true })} 
                              value={score}
                              className="peer sr-only"
                            />
                            <div className="p-5 rounded-2xl border-2 border-white/5 bg-white/5 peer-checked:border-brand-500 peer-checked:bg-brand-500/10 transition-all group-hover:border-white/10 text-lg font-medium text-white/70 peer-checked:text-brand-500">
                              {score}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8">
                      <h2 className="text-4xl font-display font-bold text-white tracking-tight">Monthly Income?</h2>
                      <div className="grid grid-cols-1 gap-3">
                        {['$10k+', '$5k - $10k', '$3k - $5k', 'Under $3k'].map((income) => (
                          <label key={income} className="relative group cursor-pointer">
                            <input 
                              type="radio" 
                              {...register("monthlyIncome", { required: true })} 
                              value={income}
                              className="peer sr-only"
                            />
                            <div className="p-5 rounded-2xl border-2 border-white/5 bg-white/5 peer-checked:border-brand-500 peer-checked:bg-brand-500/10 transition-all group-hover:border-white/10 text-lg font-medium text-white/70 peer-checked:text-brand-500">
                              {income}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-8">
                      <h2 className="text-4xl font-display font-bold text-white tracking-tight">Funding Goal?</h2>
                      <div className="grid grid-cols-1 gap-3">
                        {['$100k+', '$50k - $100k', '$20k - $50k', 'Just Credit Repair'].map((goal) => (
                          <label key={goal} className="relative group cursor-pointer">
                            <input 
                              type="radio" 
                              {...register("fundingGoal", { required: true })} 
                              value={goal}
                              className="peer sr-only"
                            />
                            <div className="p-5 rounded-2xl border-2 border-white/5 bg-white/5 peer-checked:border-brand-500 peer-checked:bg-brand-500/10 transition-all group-hover:border-white/10 text-lg font-medium text-white/70 peer-checked:text-brand-500">
                              {goal}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-8">
                      <h2 className="text-4xl font-display font-bold text-white tracking-tight">Active LLC?</h2>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: 'Yes', value: true },
                          { label: 'No', value: false }
                        ].map((opt) => (
                          <label key={opt.label} className="relative group cursor-pointer">
                            <input 
                              type="radio" 
                              {...register("hasLLC", { required: true })} 
                              value={opt.value ? "true" : "false"}
                              className="peer sr-only"
                            />
                            <div className="p-10 rounded-2xl border-2 border-white/5 bg-white/5 peer-checked:border-brand-500 peer-checked:bg-brand-500/10 text-center transition-all group-hover:border-white/10 text-xl font-bold text-white/70 peer-checked:text-brand-500">
                              {opt.label}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-8">
                      <h2 className="text-4xl font-display font-bold text-white tracking-tight">Your Identity?</h2>
                      <div className="space-y-5">
                        <div>
                          <label className="block text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">Full Name</label>
                          <input 
                            {...register("fullName", { required: true })}
                            className="w-full bg-white/5 border-2 border-white/10 rounded-2xl p-5 focus:outline-none focus:border-brand-500 transition-colors text-lg text-white"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">Phone Number</label>
                          <input 
                            {...register("phone", { required: true })}
                            className="w-full bg-white/5 border-2 border-white/10 rounded-2xl p-5 focus:outline-none focus:border-brand-500 transition-colors text-lg text-white"
                            placeholder="(555) 000-0000"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 6 && (
                    <div className="space-y-8">
                      <h2 className="text-4xl font-display font-bold text-white tracking-tight">Final Step.</h2>
                      <p className="text-white/60 text-lg">We'll send your custom funding roadmap to this address.</p>
                      <div>
                        <label className="block text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">Email Address</label>
                        <input 
                          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                          className="w-full bg-white/5 border-2 border-white/10 rounded-2xl p-5 focus:outline-none focus:border-brand-500 transition-colors text-lg text-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-12 flex items-center justify-between gap-4">
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="flex items-center gap-2 text-white/40 hover:text-white font-bold transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                )}
                
                {step < totalSteps ? (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="btn-primary ml-auto flex items-center gap-2"
                  >
                    Next Phase <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary ml-auto flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Generate Insight"}
                  </button>
                )}
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-brand-500/20">
                <insight.icon className={cn("w-12 h-12", insight.color)} />
              </div>
              
              <div className="mb-10">
                <span className="text-xs font-bold text-brand-500 tracking-[0.3em] uppercase mb-4 block">
                  Qualification Insight
                </span>
                <h2 className="text-4xl font-display font-bold mb-6 text-white">{insight.title}</h2>
                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 text-left">
                  <p className="text-white/60 text-lg leading-relaxed font-light">
                    {insight.text}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href="https://www.skool.com/credit-to-capital-8168" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full block text-center py-5 text-lg"
                >
                  Unlock Full Roadmap
                </a>
                <p className="text-white/40 text-sm">
                  Our team will contact you via WhatsApp shortly to discuss your specific case.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
