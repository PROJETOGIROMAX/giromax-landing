import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              De motorista para Motorista
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
              Você sabe quanto <span className="text-brand">realmente</span> sobrou no fim do dia?
            </h1>
            
            <p className="text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
              Faturar não é lucrar. O motorista que não controla seus números, perde dinheiro. O GiroMax é a ferramenta definitiva para você enxergar seu lucro real.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-2">
                <a 
                  href="https://appgiromax.com.br"
                  className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 orange-glow"
                >
                  Começar teste grátis <ArrowRight size={20} />
                </a>
                <p className="text-center text-xs text-zinc-500 font-medium italic">Teste grátis por 3 dias</p>
              </div>
              <a 
                href="#prova"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 h-fit"
              >
                Quero saber quanto sobra
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-dark object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm text-zinc-500">
                <span className="text-white font-bold">+5.000 motoristas</span> já estão lucrando mais
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Mockup Container */}
            <div className="relative mx-auto w-[280px] sm:w-[320px] aspect-[9/19] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20" />
              
              <DashboardMockup />
              
              {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-12 glass p-4 rounded-2xl shadow-xl z-30 hidden sm:block"
              >
                <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider mb-1">Saldo Final</p>
                <p className="text-xl font-bold text-brand">R$ 276,95</p>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 -left-12 glass p-4 rounded-2xl shadow-xl z-30 hidden sm:block"
              >
                <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider mb-1">Receita Bruta</p>
                <p className="text-xl font-bold text-green-400">R$ 396,90</p>
              </motion.div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
