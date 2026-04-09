import { motion } from "motion/react";
import { TrendingUp, TrendingDown, Wallet, Plus, MoreHorizontal } from "lucide-react";

export default function DashboardMockup() {
  return (
    <div className="w-full h-full bg-zinc-950 text-white font-sans overflow-hidden flex flex-col">
      {/* App Header */}
      <div className="pt-10 pb-4 px-6 bg-zinc-900/50 border-b border-white/5">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-zinc-500 text-xs font-medium">Bem-vindo de volta,</p>
            <h3 className="text-lg font-bold">Motorista GiroMax</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center">
            <span className="text-brand font-bold">M</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand to-brand-dark p-5 rounded-2xl shadow-lg shadow-brand/20">
          <p className="text-white/70 text-xs font-medium mb-1">Saldo Total do Dia</p>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-black">R$ 276,95</h2>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 px-6 py-4">
        <div className="bg-zinc-900 p-3 rounded-xl border border-white/5">
          <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mb-2">
            <TrendingUp size={16} className="text-green-500" />
          </div>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Receita</p>
          <p className="text-sm font-bold text-green-400">R$ 396,90</p>
        </div>
        <div className="bg-zinc-900 p-3 rounded-xl border border-white/5">
          <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mb-2">
            <TrendingDown size={16} className="text-red-500" />
          </div>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Gastos</p>
          <p className="text-sm font-bold text-red-400">R$ 119,95</p>
        </div>
      </div>

      {/* Mini Chart Mockup */}
      <div className="px-6 py-2 pb-10">
        <div className="bg-zinc-900/50 p-4 rounded-xl border border-white/5">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xs font-bold">Desempenho Semanal</p>
            <MoreHorizontal size={14} className="text-zinc-500" />
          </div>
          <div className="flex items-end justify-between h-24 gap-1">
            {[40, 60, 45, 90, 65, 80, 100].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className={`w-full rounded-t-sm ${i === 6 ? 'bg-brand' : 'bg-brand/30'}`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((day, i) => (
              <span key={i} className="text-[8px] text-zinc-600 font-bold">{day}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
