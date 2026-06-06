import { Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#080808] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/50 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl">
          {/* Category tag */}
          <div className="flex items-center gap-2 mb-5">
            <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded tracking-widest uppercase">
              Especial
            </span>
            <span className="text-gray-500 text-xs tracking-wider uppercase">Conflicto Internacional</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-5">
            La guerra en Irán<br />
            <span className="text-red-500">y su impacto</span><br />
            en Argentina
          </h1>

          {/* Deck */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
            Israel bombardeó instalaciones nucleares iraníes. Irán cerró el Estrecho de Ormuz.
            El precio del petróleo se disparó y los barcos argentinos quedaron varados en el Golfo Pérsico.
            Una crisis a 14.000 km que ya golpea los surtidores de Buenos Aires.
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap gap-5 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <Calendar size={12} className="text-red-400" />
              <span>Actualizado: 5 de julio de 2025</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={12} className="text-red-400" />
              <span>Buenos Aires / Teherán / Jerusalén / Washington</span>
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp size={12} className="text-red-400" />
              <span>Cobertura en tiempo real</span>
            </div>
          </div>
        </div>

        {/* Quick facts strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-800 rounded-xl overflow-hidden border border-gray-800">
          {[
            { value: '1 jul', label: 'Ataque a Natanz', color: '#ef4444' },
            { value: '21%', label: 'Petróleo mundial por Ormuz', color: '#f97316' },
            { value: '$118', label: 'Precio barril Brent', color: '#f59e0b' },
            { value: '4', label: 'Buques argentinos afectados', color: '#3b82f6' },
          ].map((fact) => (
            <div key={fact.label} className="bg-[#0f0f0f] px-5 py-4 hover:bg-[#141414] transition-colors">
              <div className="text-2xl font-black mb-0.5" style={{ color: fact.color }}>{fact.value}</div>
              <div className="text-xs text-gray-500 leading-snug">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
