import { ExternalLink } from 'lucide-react';

interface Figure {
  name: string;
  title: string;
  country: string;
  countryFlag: string;
  role: string;
  stance: string;
  stanceColor: string;
  keyQuote: string;
  actions: string[];
  imageUrl: string;
}

const figures: Figure[] = [
  {
    name: 'Donald Trump',
    title: 'Presidente de los Estados Unidos',
    country: 'Estados Unidos',
    countryFlag: '🇺🇸',
    role: 'Árbitro militar y mediador forzoso',
    stance: 'Ambiguo',
    stanceColor: '#f59e0b',
    keyQuote: '"EE.UU. no permitirá que Irán cierre el Estrecho de Ormuz. Las consecuencias serían devastadoras para Irán."',
    actions: [
      'Desplegó dos portaaviones en el Golfo Pérsico',
      'Confirmó negociaciones secretas con Irán vía Omán',
      'Convocó G7 de emergencia tras el ataque iraní a Israel',
      'Amenazó con sanciones adicionales a Irán',
    ],
    imageUrl: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Benjamin Netanyahu',
    title: 'Primer Ministro de Israel',
    country: 'Israel',
    countryFlag: '🇮🇱',
    role: 'Conductor de la ofensiva israelí',
    stance: 'Ofensivo',
    stanceColor: '#ef4444',
    keyQuote: '"Israel no permitirá que Irán adquiera armas nucleares. Lo que hicimos en Natanz fue un acto de defensa existencial."',
    actions: [
      'Ordenó el ataque al consulado iraní en Damasco',
      'Respondió al ataque de drones con ofensiva en Isfahan',
      'Autorizó el ataque mayor a Natanz el 1 de julio',
      'Reunión con Milei en Jerusalén (mayo)',
    ],
    imageUrl: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Javier Milei',
    title: 'Presidente de la Argentina',
    country: 'Argentina',
    countryFlag: '🇦🇷',
    role: 'Aliado político de Israel, observador estratégico',
    stance: 'Alineado con Israel',
    stanceColor: '#3b82f6',
    keyQuote: '"Argentina acompaña incondicionalmente el derecho de Israel a defenderse. El terrorismo no tiene justificación."',
    actions: [
      'Viajó a Jerusalén y se reunió con Netanyahu',
      'Votó contra Irán en el Consejo de Seguridad de la ONU',
      'Activó protocolo de emergencia energética ante suba del crudo',
      'Defendió la gestión diplomática de Trump en Oriente Medio',
    ],
    imageUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function KeyFigures() {
  return (
    <section id="figuras-clave" className="py-16 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-6 bg-amber-500 rounded" />
            <span className="text-xs font-bold tracking-widest uppercase text-amber-400">Protagonistas</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-3">Figuras clave del conflicto</h2>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            Tres líderes, tres estrategias. El papel de Trump, Netanyahu y Milei en la crisis que sacude al Medio Oriente y resuena en Argentina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {figures.map((fig) => (
            <div key={fig.name} className="rounded-2xl overflow-hidden border border-gray-800 bg-[#111] group hover:border-gray-600 transition-all duration-300">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={fig.imageUrl}
                  alt={fig.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="text-lg font-black text-white leading-tight">{fig.name}</div>
                    <div className="text-xs text-gray-300">{fig.countryFlag} {fig.country}</div>
                  </div>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${fig.stanceColor}25`, color: fig.stanceColor, border: `1px solid ${fig.stanceColor}40` }}
                  >
                    {fig.stance}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wider">{fig.title}</div>
                <div className="text-xs font-bold mb-4" style={{ color: fig.stanceColor }}>{fig.role}</div>

                {/* Quote */}
                <blockquote className="border-l-2 pl-3 mb-4 italic text-sm text-gray-300 leading-relaxed" style={{ borderColor: fig.stanceColor }}>
                  {fig.keyQuote}
                </blockquote>

                {/* Actions */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Acciones clave</div>
                  {fig.actions.map((action, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: fig.stanceColor }} />
                      <span className="text-xs text-gray-400 leading-relaxed">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Relationship diagram */}
        <div className="mt-10 p-6 rounded-2xl border border-gray-800 bg-[#0a0a0a]">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Mapa de relaciones</div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {[
              { from: 'Trump', to: 'Netanyahu', rel: 'Apoyo con condiciones', color: '#f59e0b' },
              { from: 'Milei', to: 'Netanyahu', rel: 'Alianza política', color: '#3b82f6' },
              { from: 'Trump', to: 'Milei', rel: 'Referente ideológico', color: '#ef4444' },
            ].map((r) => (
              <div key={`${r.from}-${r.to}`} className="flex items-center gap-2 text-xs text-gray-400">
                <span className="font-bold text-white">{r.from}</span>
                <div className="flex flex-col items-center">
                  <span className="text-gray-600" style={{ color: r.color }}>——</span>
                  <span className="text-gray-600 text-center leading-tight" style={{ fontSize: 9, color: r.color }}>{r.rel}</span>
                </div>
                <span className="font-bold text-white">{r.to}</span>
                <ExternalLink size={8} className="text-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
