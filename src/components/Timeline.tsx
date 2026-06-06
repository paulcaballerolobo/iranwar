import { useState } from 'react';
import { ChevronDown, ChevronUp, Crosshair, Globe, TrendingUp, Users } from 'lucide-react';
import { timelineEvents, type TimelineEvent } from '../data/warData';

const categoryConfig = {
  military: { label: 'Militar', color: '#ef4444', bg: 'bg-red-500/15 text-red-400 border-red-500/30', icon: Crosshair },
  diplomatic: { label: 'Diplomático', color: '#3b82f6', bg: 'bg-blue-500/15 text-blue-400 border-blue-500/30', icon: Globe },
  economic: { label: 'Económico', color: '#f59e0b', bg: 'bg-amber-500/15 text-amber-400 border-amber-500/30', icon: TrendingUp },
  humanitarian: { label: 'Humanitario', color: '#22c55e', bg: 'bg-green-500/15 text-green-400 border-green-500/30', icon: Users },
};

const figureConfig: Record<string, { color: string; label: string }> = {
  Netanyahu: { color: '#3b82f6', label: 'Netanyahu' },
  Trump: { color: '#ef4444', label: 'Trump' },
  Milei: { color: '#f59e0b', label: 'Milei' },
};

const filterOptions: { key: 'all' | TimelineEvent['category']; label: string }[] = [
  { key: 'all', label: 'Todo' },
  { key: 'military', label: 'Militar' },
  { key: 'diplomatic', label: 'Diplomático' },
  { key: 'economic', label: 'Económico' },
];

function EventCard({ event, index }: { event: TimelineEvent; index: number }) {
  const [open, setOpen] = useState(false);
  const cfg = categoryConfig[event.category];
  const CatIcon = cfg.icon;
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex items-start gap-0 w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'} group`}>
      {/* Card */}
      <div className={`w-[calc(50%-28px)] ${isLeft ? 'text-right pr-5' : 'text-left pl-5'}`}>
        <button
          onClick={() => setOpen((v) => !v)}
          className={`w-full text-left border rounded-xl p-4 transition-all duration-200 ${
            open ? 'border-gray-600 bg-gray-800 shadow-lg' : 'border-gray-800 bg-[#111] hover:border-gray-700 hover:bg-[#161616]'
          }`}
        >
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <span className={`text-xs font-semibold tracking-wide text-gray-500`}>{event.dateShort}</span>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${cfg.bg} flex items-center gap-1`}>
              <CatIcon size={10} />
              {cfg.label}
            </span>
          </div>
          <h3 className={`text-sm font-bold text-white leading-snug mb-2 ${isLeft ? 'text-right' : 'text-left'}`}>
            {event.title}
          </h3>
          {event.figures.length > 0 && (
            <div className={`flex flex-wrap gap-1.5 mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {event.figures.map((f) => (
                <span
                  key={f}
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: `${figureConfig[f]?.color}20`, color: figureConfig[f]?.color }}
                >
                  {figureConfig[f]?.label ?? f}
                </span>
              ))}
            </div>
          )}
          {open && (
            <p className={`text-xs text-gray-300 leading-relaxed mt-2 border-t border-gray-700 pt-2 ${isLeft ? 'text-right' : 'text-left'}`}>
              {event.body}
            </p>
          )}
          <div className={`flex items-center gap-1 mt-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            {open ? (
              <ChevronUp size={12} className="text-gray-500" />
            ) : (
              <ChevronDown size={12} className="text-gray-500" />
            )}
            <span className="text-xs text-gray-600">{open ? 'Menos' : 'Más detalles'}</span>
          </div>
          {open && (
            <p className={`text-xs text-gray-600 mt-1 ${isLeft ? 'text-right' : 'text-left'}`}>
              Fuente: {event.source}
            </p>
          )}
        </button>
      </div>

      {/* Timeline spine */}
      <div className="w-14 flex flex-col items-center shrink-0">
        <div
          className="w-3.5 h-3.5 rounded-full border-2 z-10 transition-all duration-200 group-hover:scale-125"
          style={{ background: cfg.color, borderColor: '#0d0d0d', boxShadow: `0 0 8px ${cfg.color}60` }}
        />
      </div>

      {/* Spacer */}
      <div className="w-[calc(50%-28px)]" />
    </div>
  );
}

export default function Timeline() {
  const [filter, setFilter] = useState<'all' | TimelineEvent['category']>('all');

  const filtered = filter === 'all' ? timelineEvents : timelineEvents.filter((e) => e.category === filter);

  return (
    <section id="cronología" className="py-16 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-6 bg-blue-500 rounded" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-400">Cronología</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-3">
            De la escalada a la guerra abierta
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            El conflicto entre Israel e Irán y su impacto en Argentina, desde los primeros ataques hasta el cierre del Estrecho de Ormuz.
            Los roles de Trump, Netanyahu y Milei en cada momento clave.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setFilter(opt.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                filter === opt.key
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-3 text-xs text-gray-600">
            {Object.entries(figureConfig).map(([, val]) => (
              <span key={val.label} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: val.color }} />
                {val.label}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent transform -translate-x-1/2" />

          <div className="flex flex-col gap-6">
            {filtered.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-gray-600 py-16 text-sm">No hay eventos en esta categoría.</div>
        )}
      </div>
    </section>
  );
}
