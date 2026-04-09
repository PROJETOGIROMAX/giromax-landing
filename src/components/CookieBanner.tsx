import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("giromax-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("giromax-cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="glass bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência, analisar o tráfego e personalizar conteúdos. 
                  Ao continuar, você concorda com nossa{" "}
                  <Link to="/privacidade" className="text-brand hover:underline font-semibold">
                    Política de Privacidade
                  </Link>.
                </p>
              </div>
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <button
                  onClick={() => setIsVisible(false)}
                  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 text-zinc-500 transition-colors"
                  title="Fechar"
                >
                  <X size={20} />
                </button>
                <button
                  onClick={acceptCookies}
                  className="flex-1 md:flex-none bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 orange-glow"
                >
                  Aceitar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
