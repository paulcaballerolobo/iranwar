import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Radio } from 'lucide-react';

const tickerItems = [
  'URGENTE: Irán cierra temporalmente el Estrecho de Ormuz tras ataque israelí a Natanz',
  'Petróleo Brent supera los USD 118 por barril · máximo desde 2022',
  'YPF anuncia aumento del 15% en naftas por presión del conflicto',
  'Milei en Jerusalén: "Argentina acompaña el derecho de Israel a defenderse"',
  'Trump despliega dos portaaviones en el Golfo Pérsico',
  'Buque argentino Río Paraná Gas detenido en Golfo de Omán · carga de GNL crítica para el invierno',
  'Negociaciones secretas EE.UU.–Irán en Omán · Trump confirma los contactos',
];

export default function Header() {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((i) => (i + 1) % tickerItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Masthead */}
      <div className="bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm">
              <Radio size={16} className="text-white" />
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-gray-400 leading-none">Cobertura Especial</div>
              <div className="text-xl font-black tracking-tight leading-tight">GUERRA EN IRÁN</div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-end">
            <span className="text-xs text-gray-400 tracking-widest uppercase">Actualización continua</span>
            <span className="text-xs text-red-400 font-semibold animate-pulse">● EN VIVO</span>
          </div>
        </div>
      </div>

      {/* Breaking news ticker */}
      <div className="bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">
          <div className="flex items-center gap-1.5 shrink-0">
            <AlertTriangle size={13} className="text-red-200" />
            <span className="text-xs font-black tracking-widest uppercase text-red-100">Último</span>
          </div>
          <div className="w-px h-4 bg-red-500 shrink-0" />
          <div ref={tickerRef} className="overflow-hidden flex-1 min-w-0">
            <p
              key={tickerIndex}
              className="text-xs font-medium truncate transition-all duration-500"
            >
              {tickerItems[tickerIndex]}
            </p>
          </div>
          <div className="hidden sm:flex gap-1 shrink-0">
            {tickerItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setTickerIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === tickerIndex ? 'bg-white' : 'bg-red-400 hover:bg-red-200'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-[#111111] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex gap-1 overflow-x-auto scrollbar-hide">
            {['Mapa Interactivo', 'Cronología', 'Figuras Clave', 'Impacto en Argentina', 'Contexto'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="block px-3 py-3 text-xs font-semibold tracking-wide text-gray-400 hover:text-white whitespace-nowrap border-b-2 border-transparent hover:border-red-500 transition-all duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
