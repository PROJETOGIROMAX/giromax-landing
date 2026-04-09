import { motion } from "motion/react";
import { ShieldCheck, Zap, Target, Users, Heart, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: <Target className="text-brand" />,
    title: "Saiba quanto realmente sobrou no fim do dia",
    description: "Chegue em casa com a certeza do seu lucro real, sem surpresas."
  },
  {
    icon: <Zap className="text-brand" />,
    title: "Menos achismo",
    description: "Tome decisões baseadas em dados reais, não em palpites."
  },
  {
    icon: <ShieldCheck className="text-brand" />,
    title: "Ganhos, despesas e lucro real em um só lugar",
    description: "Tudo o que você precisa centralizado em uma interface intuitiva."
  },
  {
    icon: <Smartphone className="text-brand" />,
    title: "Histórico e Desempenho",
    description: "Acompanhe sua evolução por dia, semana ou mês com gráficos claros."
  },
  {
    icon: <Users className="text-brand" />,
    title: "App feito para motoristas",
    description: "Interface pensada para quem vive da estrada e precisa de agilidade."
  },
  {
    icon: <Heart className="text-brand" />,
    title: "Compartilhamento Prático",
    description: "Envie seu resumo diário para o WhatsApp com apenas um clique."
  }
];

export default function Benefits() {
  return (
    <section id="desejo" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-6xl font-bold mb-6">
            Clareza total no <span className="text-brand">fim do dia</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Muito mais que um app, é a sua paz mental. Saiba exatamente quanto sobrou no seu bolso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="text-brand" />,
              title: "Lucro real na palma da mão",
              description: "Chegue em casa com a certeza do seu resultado, sem surpresas ou achismos."
            },
            {
              icon: <Zap className="text-brand" />,
              title: "Controle absoluto da rotina",
              description: "Entenda seus números e tome decisões melhores para o seu negócio."
            },
            {
              icon: <ShieldCheck className="text-brand" />,
              title: "Ganhos e despesas organizados",
              description: "Tudo o que você precisa centralizado em uma interface simples e rápida."
            },
            {
              icon: <Smartphone className="text-brand" />,
              title: "Mais controle, menos achismo",
              description: "Trate seu trabalho como um negócio profissional e veja seu lucro crescer."
            },
            {
              icon: <Users className="text-brand" />,
              title: "Feito de motorista para motorista",
              description: "Desenvolvido por quem entende a agilidade que a estrada exige."
            },
            {
              icon: <Heart className="text-brand" />,
              title: "Paz mental no fim do dia",
              description: "Termine sua jornada com a satisfação de ver o saldo positivo de verdade."
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
