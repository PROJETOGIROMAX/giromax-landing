import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function Solution() {
  return (
    <section id="solucao" className="py-24 overflow-hidden bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative flex justify-center lg:justify-start pt-12 lg:pt-0">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand/20 rounded-full blur-[100px] -z-10" />
            
            {/* First Phone (Background) */}
            <motion.div 
              initial={{ opacity: 0, x: -20, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[240px] sm:w-[280px] aspect-[9/19] bg-zinc-900 rounded-[2.5rem] border-[6px] border-zinc-800 shadow-2xl overflow-hidden z-0"
            >
              <img 
                src="/grafico.png" 
                alt="Gráfico de Lucro" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Second Phone (Foreground) */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: 40, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, y: 20, rotate: 8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-1/2 lg:left-1/3 -translate-x-1/4 lg:translate-x-0 w-[240px] sm:w-[280px] aspect-[9/19] bg-zinc-900 rounded-[2.5rem] border-[6px] border-zinc-800 shadow-2xl overflow-hidden z-10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-800 rounded-b-xl z-20" />
              <img 
                src="/desempenho.png" 
                alt="Desempenho Diário" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              A solução definitiva para o <span className="text-brand">motorista profissional</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              O GiroMax foi desenhado para ser simples, rápido e direto ao ponto. Sem enrolação, sem tutoriais longos.
            </p>

            <div className="grid gap-4 mb-12">
              {[
                "Controle seus ganhos de forma centralizada",
                "Registre despesas em segundos",
                "Veja seu lucro real instantaneamente",
                "Acompanhe seu desempenho diário",
                "Compartilhe seu resumo no WhatsApp"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand shrink-0" size={20} />
                  <span className="text-zinc-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://appgiromax.com.br"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 orange-glow"
            >
              Quero usar o GiroMax
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
