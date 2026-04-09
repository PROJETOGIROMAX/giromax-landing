import { motion } from "motion/react";
import { MapPin, Fuel, DollarSign, CheckCircle, Users, Share2 } from "lucide-react";

const steps = [
  {
    icon: <Users size={24} />,
    title: "1. Faça seu login ou cadastro",
    description: "Entre com sua conta Google ou e-mail de forma rápida e segura."
  },
  {
    icon: <MapPin size={24} />,
    title: "2. Registre o KM inicial",
    description: "Informe o KM do veículo antes de começar a rodar para ter o controle da distância."
  },
  {
    icon: <Fuel size={24} />,
    title: "3. Lance seus gastos",
    description: "Abastecimento, alimentação ou manutenção: registre tudo conforme acontece."
  },
  {
    icon: <DollarSign size={24} />,
    title: "4. Finalize o dia",
    description: "Informe KM final, receita e corridas para o GiroMax consolidar seu lucro real."
  },
  {
    icon: <CheckCircle size={24} />,
    title: "5. Veja quanto sobrou",
    description: "Confira seu saldo líquido, tempo ao volante e desempenho detalhado."
  },
  {
    icon: <Share2 size={24} />,
    title: "6. Compartilhe o resumo",
    description: "Envie seu resumo completo diretamente para o WhatsApp com um toque."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Simples de usar. <span className="text-brand">Forte no controle.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A jornada real do motorista, organizada passo a passo.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group bg-dark p-8 rounded-[2rem] border border-white/5 hover:border-brand/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
