import { motion } from "motion/react";
import { Layout, Shield, Navigation } from "lucide-react";

export default function Positioning() {
  return (
    <section className="py-24 overflow-hidden bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Controle financeiro e operacional na <span className="text-brand">palma da mão</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              O GiroMax não foi feito para complicar sua rotina. Foi feito para ajudar você a entender melhor seus números, organizar seu dia e tomar decisões com mais clareza.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Layout size={20} />, text: "Ganhos, despesas e lucro real em um só lugar" },
                { icon: <Shield size={20} />, text: "App feito para motoristas" },
                { icon: <Navigation size={20} />, text: "Pensado para quem vive da estrada" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-brand">{item.icon}</div>
                  <span className="font-bold text-zinc-200">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/10 rounded-full blur-[100px] -z-10" />
            <img 
              src="https://picsum.photos/seed/giromax-pos/800/800" 
              alt="GiroMax Positioning" 
              className="rounded-[3rem] shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
