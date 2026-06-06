import { TrendingUp, Fuel, Package, AlertTriangle, BarChart3 } from 'lucide-react';
import { keyStats } from '../data/warData';

interface ImpactCard {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  value: string;
  delta: string;
  positive: boolean;
  detail: string;
  color: string;
}

const impacts: ImpactCard[] = [
  {
    icon: Fuel,
    title: 'Nafta y combustible',
    subtitle: 'Impacto en consumidores',
    value: '+15%',
    delta: 'en 60 días',
    positive: false,
    detail: 'YPF aumentó el precio en surtidor por el alza del barril de Brent. El impacto se siente especialmente en el transporte y la logística agropecuaria.',
    color: '#ef4444',
  },
  {
    icon: TrendingUp,
    title: 'Petróleo Brent',
    subtitle: 'Precio internacional',
    value: '$118 USD',
    delta: '+43% desde abr.',
    positive: false,
    detail: 'El barril superó los USD 118, el máximo desde la crisis de 2022. El Estrecho cerrado dispara la prima de riesgo geopolítico en todos los contratos de futuros.',
    color: '#f97316',
  },
  {
    icon: Package,
    title: 'GNL para el invierno',
    subtitle: 'Gas natural licuado',
    value: '3 buques',
    delta: 'con retraso',
    positive: false,
    detail: 'Argentina importa GNL de Qatar para cubrir la demanda invernal. Con el Estrecho cerrado, los envíos se demoran semanas. El gobierno evalúa rutas alternativas vía el Cabo de Hornos.',
    color: '#3b82f6',
  },
  {
    icon: BarChart3,
    title: 'Exportaciones soja',
    subtitle: 'Efecto secundario',
    value: '+8%',
    delta: 'en precio FOB',
    positive: true,
    detail: 'Paradójicamente, la soja argentina subió de precio: los países del Golfo reducen compras a EE.UU. y buscan alternativas en Sudamérica. El agro argentino se beneficia.',
    color: '#22c55e',
  },
];

const timelineImpact = [
  { date: 'Abr 2025', nafta: 100, brent: 74 },
  { date: 'May 2025', nafta: 108, brent: 88 },
  { date: 'Jun 2025', nafta: 112, brent: 97 },
  { date: 'Jul 2025', nafta: 118, brent: 118 },
];

export default function ImpactArgentina() {
  const maxBrent = Math.max(...timelineImpact.map((d) => d.brent));

  return (
    <section id="impacto-en-argentina" className="py-16 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-6 bg-amber-500 rounded" />
            <span className="text-xs font-bold tracking-widest uppercase text-amber-400">Impacto en Argentina</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-3">
            Cómo la guerra toca el bolsillo argentino
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            A 14.000 km de Teherán, el conflicto ya se siente en los surtidores, la calefacción y el campo.
            Argentina depende del Estrecho de Ormuz para el 7% de su petróleo importado y todo el GNL de Qatar.
          </p>
        </div>

        {/* Key stats banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {keyStats.map((stat) => (
            <div key={stat.label} className="bg-[#111] border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {impacts.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-xl border border-gray-800 bg-[#111] p-5 hover:border-gray-600 transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${item.color}18` }}
                  >
                    <Icon size={16} style={{ color: item.color }} />
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${item.positive ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'}`}>
                    {item.positive ? '+' : ''}{item.delta}
                  </div>
                </div>
                <div className="text-2xl font-black mb-1" style={{ color: item.color }}>
                  {item.value}
                </div>
                <div className="text-sm font-bold text-white mb-0.5">{item.title}</div>
                <div className="text-xs text-gray-500 mb-3">{item.subtitle}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{item.detail}</p>
              </div>
            );
          })}
        </div>

        {/* Brent price chart */}
        <div className="rounded-2xl border border-gray-800 bg-[#111] p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm font-bold text-white">Precio del barril Brent</div>
              <div className="text-xs text-gray-500">Evolución desde inicio del conflicto (índice base 100 = abr. 2025)</div>
            </div>
            <AlertTriangle size={16} className="text-red-400" />
          </div>
          <div className="flex items-end gap-4 h-32">
            {timelineImpact.map((d) => (
              <div key={d.date} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col items-center gap-1">
                  <span className="text-xs font-bold text-white">${d.brent}</span>
                  <div
                    className="w-full rounded-t-md transition-all duration-700"
                    style={{
                      height: `${(d.brent / maxBrent) * 96}px`,
                      background: d.brent >= 110 ? '#ef4444' : d.brent >= 90 ? '#f97316' : '#f59e0b',
                    }}
                  />
                </div>
                <span className="text-xs text-gray-500">{d.date}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 flex flex-wrap gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-500" /> Moderado (&lt;$90)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-orange-500" /> Alto ($90–$110)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-red-500" /> Crítico (&gt;$110)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
