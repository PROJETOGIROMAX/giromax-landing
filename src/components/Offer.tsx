import { motion } from "motion/react";
import { Star, Zap, Check } from "lucide-react";

export default function Offer() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-brand/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-16 rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Star size={120} className="text-brand" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand text-white text-sm font-bold mb-8">
            <Zap size={16} fill="currentColor" /> OFERTA ESPECIAL
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Teste grátis por <span className="text-brand">3 dias</span>
          </h2>
          
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Veja na prática quanto realmente sobra no seu bolso. Sem compromisso, sem enrolação.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
            {["Acesso ao app completo", "Controle de ganhos e despesas", "Visualização do lucro real"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="font-semibold text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <a 
            href="https://appgiromax.com.br"
            className="inline-block w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-12 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 active:scale-95 orange-glow"
          >
            Começar meu teste grátis
          </a>
          
          <p className="mt-6 text-zinc-500 text-sm">
            Assinatura acessível para quem quer controle de verdade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
