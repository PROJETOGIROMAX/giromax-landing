import { motion } from "motion/react";
import { AlertCircle, TrendingDown, Wallet, Clock } from "lucide-react";

const pains = [
  {
    icon: <TrendingDown className="text-red-400" />,
    title: "Faturamento não é lucro",
    description: "Muitos motoristas se iludem com o valor bruto, mas esquecem de descontar combustível, taxas e manutenção."
  },
  {
    icon: <AlertCircle className="text-orange-400" />,
    title: "Trabalhar sem controle custa caro",
    description: "Sem saber seu custo real, você pode estar pagando para trabalhar em certas corridas."
  },
  {
    icon: <Wallet className="text-yellow-400" />,
    title: "Pequenos gastos viram prejuízo",
    description: "Aquele cafezinho ou a lavagem rápida se acumulam e destroem seu saldo no fim do mês."
  },
  {
    icon: <Clock className="text-blue-400" />,
    title: "Quem não acompanha roda no escuro",
    description: "Sem organização, fica impossível saber se o dia realmente valeu a pena ou se você só cansou o carro."
  }
];

export default function PainPoints() {
  return (
    <section id="dor" className="py-24 bg-dark-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-6xl font-bold mb-6">
            Faturamento <span className="text-brand italic">não é lucro</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Trabalhar o dia todo sem saber seu lucro real é como dirigir no escuro. Você pode estar pagando para trabalhar sem nem perceber.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <TrendingDown className="text-red-400" />,
              title: "Trabalha muito e não sabe quanto lucrou",
              description: "Somar corridas na cabeça não é gestão. O lucro real só aparece quando você desconta os custos invisíveis."
            },
            {
              icon: <AlertCircle className="text-orange-400" />,
              title: "Confunde faturamento com dinheiro no bolso",
              description: "R$ 400,00 no app da Uber não significa R$ 400,00 na sua conta. Onde foi parar a diferença?"
            },
            {
              icon: <Wallet className="text-yellow-400" />,
              title: "Pequenos gastos acabam com o lucro",
              description: "Aquele cafezinho, a lavagem e o lanche se acumulam. Se você não registra, você não controla."
            },
            {
              icon: <Clock className="text-blue-400" />,
              title: "No fim do dia, tudo fica no achismo",
              description: "Você termina o dia cansado, mas sem a paz mental de saber exatamente quanto sobrou de verdade."
            }
          ].map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-dark border border-white/5 hover:border-brand/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{pain.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
