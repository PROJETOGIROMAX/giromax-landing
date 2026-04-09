import { motion } from "motion/react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center orange-glow">
              <span className="text-white font-display font-bold text-xl">G</span>
            </div>
            <div className="flex flex-col -gap-1">
              <span className="text-white font-display font-bold text-xl tracking-tighter leading-none">GiroMax</span>
              <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest">De motorista para Motorista</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#dor" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">O Problema</a>
            <a href="#solucao" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">A Solução</a>
            <a href="#prova" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">O App</a>
            <div className="flex items-center gap-4 border-l border-white/10 pl-8">
              <a href="https://instagram.com/appgiromax" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-brand transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/share/1CiX52QA5b/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-brand transition-colors">
                <Facebook size={18} />
              </a>
            </div>
            <a 
              href="https://appgiromax.com.br" 
              className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
            >
              Começar Grátis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-surface border-b border-white/10 px-4 py-6 flex flex-col gap-4"
        >
          <a href="#dor" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white py-2">O Problema</a>
          <a href="#solucao" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white py-2">A Solução</a>
          <a href="#prova" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white py-2">O App</a>
          <div className="flex gap-6 py-2">
            <a href="https://instagram.com/appgiromax" target="_blank" rel="noreferrer" className="text-zinc-400">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/share/1CiX52QA5b/" target="_blank" rel="noreferrer" className="text-zinc-400">
              <Facebook size={20} />
            </a>
          </div>
          <a 
            href="https://appgiromax.com.br"
            className="bg-brand text-white px-6 py-3 rounded-full font-semibold text-center w-full"
          >
            Começar Grátis
          </a>
        </motion.div>
      )}
    </nav>
  );
}
