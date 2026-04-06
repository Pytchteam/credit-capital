import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "1234567890"; // Replace with actual number
  const message = "Hi, I'm interested in Credit To Capital funding positioning.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-2xl border border-brand-500/30 hover:bg-brand-500 hover:text-black transition-all duration-300 group"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 px-4 py-2 bg-black text-white text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
        Chat with us
      </span>
    </a>
  );
}
