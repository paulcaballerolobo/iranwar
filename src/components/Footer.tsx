import { Radio } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-red-600 flex items-center justify-center rounded-sm">
              <Radio size={14} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-black text-white">GUERRA EN IRÁN</div>
              <div className="text-xs text-gray-600">Cobertura Especial · Perspectiva Argentina</div>
            </div>
          </div>

          <div className="text-xs text-gray-700 leading-relaxed max-w-md">
            Cobertura periodística de acceso libre. Información basada en fuentes verificadas.
            Las cifras económicas son estimadas al 5 de julio de 2025.
          </div>

          <div className="flex gap-4 text-xs text-gray-700">
            {['Reuters', 'AP', 'BBC', 'La Nación', 'Infobae'].map((s) => (
              <span key={s} className="hover:text-gray-500 transition-colors cursor-default">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
