import { useState, useCallback } from 'react';
import { Ship, AlertCircle, CheckCircle, Clock, Navigation } from 'lucide-react';
import { shipRoutes, type ShipRoute } from '../data/warData';

// Mercator-like projection bounds
// Viewport covers: lon -80 to 130, lat -55 to 45
const MAP_W = 900;
const MAP_H = 500;
const LON_MIN = -80;
const LON_MAX = 130;
const LAT_MIN = -55;
const LAT_MAX = 45;

function project(lon: number, lat: number): [number, number] {
  const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * MAP_W;
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * MAP_H;
  return [x, y];
}

function pathToD(path: [number, number][]): string {
  return path
    .map(([lon, lat], i) => {
      const [x, y] = project(lon, lat);
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');
}

const statusConfig = {
  en_ruta: { label: 'En ruta', color: '#22c55e', bg: 'bg-green-500/20 text-green-400', icon: Navigation },
  detenido: { label: 'Detenido', color: '#ef4444', bg: 'bg-red-500/20 text-red-400', icon: AlertCircle },
  desviado: { label: 'Desviado', color: '#f59e0b', bg: 'bg-amber-500/20 text-amber-400', icon: AlertCircle },
  completado: { label: 'Completado', color: '#3b82f6', bg: 'bg-blue-500/20 text-blue-400', icon: CheckCircle },
};

const typeLabel = { tanker: 'Tanquero', container: 'Portacontenedor', bulk: 'Granelero' };

// Key locations
const locations = [
  { name: 'Est. Ormuz', lon: 56.3, lat: 26.5, important: true },
  { name: 'Buenos Aires', lon: -58.4, lat: -34.6, important: true },
  { name: 'Teherán', lon: 51.4, lat: 35.7, important: true },
  { name: 'Natanz', lon: 51.9, lat: 33.5, important: false },
  { name: 'Tel Aviv', lon: 34.8, lat: 32.1, important: true },
  { name: 'Riad', lon: 46.7, lat: 24.7, important: false },
  { name: 'Ras Laffan', lon: 51.5, lat: 25.9, important: false },
  { name: 'Bahía Blanca', lon: -62.3, lat: -38.7, important: false },
];

export default function ShipMap() {
  const [selected, setSelected] = useState<ShipRoute | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const handleShipClick = useCallback((ship: ShipRoute) => {
    setSelected((prev) => (prev?.id === ship.id ? null : ship));
  }, []);

  return (
    <section id="mapa-interactivo" className="py-16 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-6 bg-red-500 rounded" />
            <span className="text-xs font-bold tracking-widest uppercase text-red-400">Mapa Interactivo</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-3">
            Barcos argentinos en zona de conflicto
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            El Estrecho de Ormuz, puerta de entrada al Golfo Pérsico, concentra el 21% del petróleo mundial.
            Seguí en tiempo real los barcos argentinos afectados por el conflicto entre Israel e Irán.
            Hacé clic en cada buque para ver detalles.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-5">
          {Object.entries(statusConfig).map(([key, val]) => (
            <div key={key} className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${val.bg}`}>
              <span className="w-2 h-2 rounded-full" style={{ background: val.color }} />
              {val.label}
            </div>
          ))}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            Estrecho de Ormuz
          </div>
        </div>

        {/* Map container */}
        <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#0a1628] relative">
          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="w-full"
            style={{ maxHeight: 520 }}
          >
            {/* Ocean background */}
            <rect width={MAP_W} height={MAP_H} fill="#0a1628" />

            {/* Continent shapes (simplified polygons) */}
            {/* South America */}
            <polygon
              points="230,175 245,185 250,210 238,240 220,270 205,300 200,330 210,355 220,375 215,390 200,400 185,405 175,395 165,370 155,340 150,305 155,270 165,240 175,210 190,190 210,175"
              fill="#1a2a1a" stroke="#2a4a2a" strokeWidth="0.8"
            />
            {/* Africa */}
            <polygon
              points="430,90 460,80 490,75 520,80 540,100 550,130 545,165 530,200 520,235 510,265 500,290 490,305 480,300 465,285 450,265 440,240 430,215 420,185 415,155 418,125 425,100"
              fill="#1a2a1a" stroke="#2a4a2a" strokeWidth="0.8"
            />
            {/* Europe */}
            <polygon
              points="435,60 450,45 475,40 500,42 520,38 540,40 550,50 545,65 530,70 515,68 500,72 485,70 470,75 455,72 440,68"
              fill="#1a2a1a" stroke="#2a4a2a" strokeWidth="0.8"
            />
            {/* Middle East */}
            <polygon
              points="540,85 565,80 595,82 615,90 625,105 620,120 605,130 590,125 575,120 560,115 545,110 535,100"
              fill="#1a2a1a" stroke="#2a4a2a" strokeWidth="0.8"
            />
            {/* Arabian Peninsula */}
            <polygon
              points="565,110 590,108 615,112 630,120 635,140 625,165 610,175 595,170 580,160 565,145 555,130 558,118"
              fill="#2a2010" stroke="#4a3a20" strokeWidth="0.8"
            />
            {/* Persian Gulf (water highlight) */}
            <polygon
              points="560,108 590,108 610,112 618,118 622,128 614,132 600,130 585,120 568,114"
              fill="#0d2a3a" stroke="#1a4a5a" strokeWidth="0.8"
            />
            {/* Iran */}
            <polygon
              points="580,80 615,75 645,78 665,88 670,105 658,118 640,120 618,118 600,112 582,105 575,95"
              fill="#1a1510" stroke="#3a2a10" strokeWidth="0.8"
            />
            {/* South Asia */}
            <polygon
              points="665,82 700,78 730,80 745,92 750,110 740,130 720,140 700,135 680,120 665,105 662,92"
              fill="#1a2a1a" stroke="#2a4a2a" strokeWidth="0.8"
            />
            {/* Southeast Asia */}
            <polygon
              points="740,88 780,80 820,75 855,78 870,90 865,108 845,115 820,110 795,105 770,102 750,100 742,95"
              fill="#1a2a1a" stroke="#2a4a2a" strokeWidth="0.8"
            />

            {/* Estrecho de Ormuz - animated pulse ring */}
            {(() => {
              const [ox, oy] = project(56.3, 26.5);
              return (
                <g>
                  <circle cx={ox} cy={oy} r="18" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6">
                    <animateTransform attributeName="transform" type="rotate" from={`0 ${ox} ${oy}`} to={`360 ${ox} ${oy}`} dur="12s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={ox} cy={oy} r="8" fill="#f97316" opacity="0.25">
                    <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={ox} cy={oy} r="5" fill="#f97316" opacity="0.9" />
                  <text x={ox + 9} y={oy - 9} fill="#f97316" fontSize="8" fontWeight="bold" opacity="0.95">Est. Ormuz</text>
                </g>
              );
            })()}

            {/* Ship routes */}
            {shipRoutes.map((ship) => {
              const isSelected = selected?.id === ship.id;
              const isHovered = hovered === ship.id;
              const cfg = statusConfig[ship.status];
              return (
                <g key={ship.id}>
                  <path
                    d={pathToD(ship.path)}
                    fill="none"
                    stroke={cfg.color}
                    strokeWidth={isSelected || isHovered ? 2.5 : 1.5}
                    strokeDasharray={ship.status === 'detenido' ? '4 4' : ship.status === 'desviado' ? '6 3' : undefined}
                    opacity={isSelected || isHovered ? 1 : 0.5}
                    style={{ transition: 'all 0.3s' }}
                  />
                  {/* Direction arrow at midpoint */}
                  {(() => {
                    const mid = Math.floor(ship.path.length / 2);
                    if (mid < 1) return null;
                    const [x1, y1] = project(...ship.path[mid - 1]);
                    const [x2, y2] = project(...ship.path[mid]);
                    const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
                    return (
                      <polygon
                        points="0,-3 6,0 0,3"
                        transform={`translate(${x2},${y2}) rotate(${angle})`}
                        fill={cfg.color}
                        opacity={isSelected || isHovered ? 0.9 : 0.4}
                      />
                    );
                  })()}
                </g>
              );
            })}

            {/* Ship icons */}
            {shipRoutes.map((ship) => {
              const [cx, cy] = project(...ship.currentPos);
              const isSelected = selected?.id === ship.id;
              const isHovered = hovered === ship.id;
              const cfg = statusConfig[ship.status];
              return (
                <g
                  key={`icon-${ship.id}`}
                  transform={`translate(${cx}, ${cy})`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleShipClick(ship)}
                  onMouseEnter={() => setHovered(ship.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {isSelected && (
                    <circle r="18" fill={cfg.color} opacity="0.15">
                      <animate attributeName="r" values="12;20;12" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    r={isSelected || isHovered ? 11 : 9}
                    fill="#0d0d0d"
                    stroke={cfg.color}
                    strokeWidth={isSelected ? 2.5 : 1.5}
                    style={{ transition: 'all 0.2s' }}
                  />
                  <text
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={isSelected ? 11 : 9}
                    fill={cfg.color}
                  >
                    ⚓
                  </text>
                  {(isSelected || isHovered) && (
                    <text
                      x="14"
                      y="-10"
                      fill="white"
                      fontSize="7"
                      fontWeight="bold"
                      style={{ pointerEvents: 'none' }}
                    >
                      {ship.name}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Location labels */}
            {locations.map((loc) => {
              const [lx, ly] = project(loc.lon, loc.lat);
              if (lx < 10 || lx > MAP_W - 10 || ly < 10 || ly > MAP_H - 10) return null;
              return (
                <g key={loc.name}>
                  <circle cx={lx} cy={ly} r={loc.important ? 3 : 2} fill={loc.important ? '#94a3b8' : '#475569'} />
                  <text
                    x={lx + 5}
                    y={ly - 4}
                    fill={loc.important ? '#94a3b8' : '#475569'}
                    fontSize={loc.important ? 7.5 : 6.5}
                    fontWeight={loc.important ? 'bold' : 'normal'}
                  >
                    {loc.name}
                  </text>
                </g>
              );
            })}

            {/* Scale bar */}
            <g transform="translate(20, 470)">
              <line x1="0" y1="0" x2="60" y2="0" stroke="#64748b" strokeWidth="1" />
              <line x1="0" y1="-3" x2="0" y2="3" stroke="#64748b" strokeWidth="1" />
              <line x1="60" y1="-3" x2="60" y2="3" stroke="#64748b" strokeWidth="1" />
              <text x="30" y="-5" textAnchor="middle" fill="#64748b" fontSize="7">~5.000 km</text>
            </g>
          </svg>
        </div>

        {/* Ship cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
          {shipRoutes.map((ship) => {
            const cfg = statusConfig[ship.status];
            const StatusIcon = cfg.icon;
            const isSelected = selected?.id === ship.id;
            return (
              <button
                key={ship.id}
                onClick={() => handleShipClick(ship)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? 'border-gray-500 bg-gray-800 shadow-lg shadow-black/50'
                    : 'border-gray-800 bg-[#111] hover:border-gray-600 hover:bg-gray-900'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Ship size={14} className="text-gray-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-white leading-tight">{ship.name}</span>
                  </div>
                  <span className="text-xs text-gray-500 shrink-0 ml-1">{ship.flag}</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2">
                  <StatusIcon size={11} style={{ color: cfg.color }} />
                  <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${cfg.bg}`}>{cfg.label}</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{typeLabel[ship.type]} · {ship.cargo}</p>
                {/* Progress bar */}
                <div className="w-full bg-gray-800 rounded-full h-1.5 mb-1">
                  <div
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${ship.progressPct}%`, background: cfg.color }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{ship.origin.split(',')[0]}</span>
                  <span>{ship.progressPct}%</span>
                  <span>{ship.destination.split(',')[0]}</span>
                </div>
                {isSelected && (
                  <p className="mt-3 text-xs text-gray-300 leading-relaxed border-t border-gray-700 pt-3">
                    {ship.detail}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-xs text-gray-600 flex items-center gap-1.5">
          <Clock size={10} />
          Posiciones estimadas al 5 de julio de 2025. Fuentes: MarineTraffic, Lloyd's List, Armada Argentina.
        </p>
      </div>
    </section>
  );
}
