import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { day: 'Seg', ganhos: 320, gastos: 120 },
  { day: 'Ter', ganhos: 450, gastos: 150 },
  { day: 'Qua', ganhos: 380, gastos: 130 },
  { day: 'Qui', ganhos: 520, gastos: 180 },
  { day: 'Sex', ganhos: 480, gastos: 160 },
  { day: 'Sab', ganhos: 610, gastos: 210 },
  { day: 'Dom', ganhos: 550, gastos: 190 },
];

export default function PerformanceChart() {
  return (
    <div className="w-full h-[300px] bg-zinc-900/50 p-6 rounded-3xl border border-white/5 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-white">Desempenho Semanal</h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-brand" />
            <span className="text-xs text-zinc-400">Ganhos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-xs text-zinc-400">Gastos</span>
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#71717a', fontSize: 12, fontWeight: 500 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#71717a', fontSize: 12 }}
          />
          <Tooltip 
            cursor={{ fill: '#ffffff05' }}
            contentStyle={{ 
              backgroundColor: '#18181b', 
              border: '1px solid #ffffff10', 
              borderRadius: '12px',
              fontSize: '12px'
            }}
          />
          <Bar 
            dataKey="ganhos" 
            fill="#FF5A00" 
            radius={[4, 4, 0, 0]} 
            barSize={20}
          />
          <Bar 
            dataKey="gastos" 
            fill="#ef4444" 
            radius={[4, 4, 0, 0]} 
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
