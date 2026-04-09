import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-7xl font-extrabold mb-6">
            Pare de trabalhar no <span className="text-brand">achismo</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Descubra quanto realmente sobra. O GiroMax é o seu parceiro na estrada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://appgiromax.com.br"
              className="bg-brand hover:bg-brand-dark text-white px-12 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 active:scale-95 orange-glow"
            >
              Testar por 3 dias
            </a>
            <a 
              href="https://appgiromax.com.br"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-12 py-5 rounded-full font-bold text-xl transition-all"
            >
              Começar agora
            </a>
          </div>
          
          <p className="mt-12 text-zinc-500 font-display font-bold text-lg">
            GiroMax. De motorista para Motorista.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
