import { motion } from "motion/react";
import PerformanceChart from "./PerformanceChart";

const screenshots = [
  { title: "Login", img: "/login.png" }
];

export default function VisualProof() {
  return (
    <section id="prova" className="py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-6xl font-bold mb-6">
            O GiroMax <span className="text-brand">na prática</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Não é apenas promessa. É um produto real, pronto para transformar sua rotina.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-[300px] w-full"
            >
              <div className="aspect-[9/19] rounded-[3rem] overflow-hidden border-8 border-zinc-800 shadow-2xl bg-zinc-900 relative">
                {/* Phone Frame Detail */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-10" />
                
                <img 
                  src={screenshots[0].img} 
                  alt={screenshots[0].title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-center font-bold text-lg text-zinc-300 mt-6">{screenshots[0].title}</p>
            </motion.div>
          </div>

          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Análise de Desempenho</h3>
              <p className="text-zinc-400 leading-relaxed">
                Visualize seus ganhos e gastos de forma clara. O GiroMax transforma seus dados em inteligência para você decidir melhor seus horários e rotas.
              </p>
            </div>
            <PerformanceChart />
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-zinc-500 text-xs font-bold uppercase mb-1">Média Diária</p>
                <p className="text-xl font-bold text-white">R$ 481,42</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-zinc-500 text-xs font-bold uppercase mb-1">Lucro Semanal</p>
                <p className="text-xl font-bold text-brand">R$ 2.429,95</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
