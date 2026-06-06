import { Info, BookOpen } from 'lucide-react';

const contextItems = [
  {
    title: '¿Qué es el Estrecho de Ormuz?',
    body: 'El Estrecho de Ormuz es un paso marítimo de apenas 33 km en su punto más angosto, ubicado entre Irán y Omán. Por allí circula el 21% del petróleo mundial y más del 20% del GNL global. Cerrarlo equivaldría a interrumpir el suministro energético de Europa, Asia y partes de América.',
  },
  {
    title: 'El programa nuclear iraní',
    body: 'Irán lleva décadas enriqueciendo uranio, supuestamente con fines civiles. El acuerdo JCPOA de 2015 limitó ese programa a cambio de levantamiento de sanciones. Trump lo abandonó en 2018. Desde entonces, Irán aceleró el enriquecimiento hasta el 84%, cerca del umbral necesario para una bomba.',
  },
  {
    title: 'Por qué le importa a Argentina',
    body: 'Argentina importa el 7% de su crudo de países del Golfo Pérsico y la totalidad del GNL que llega en buques metaneros proviene de Qatar, cuyo acceso depende del Estrecho. Además, el alza global del petróleo impacta directamente en los precios de los combustibles y la energía doméstica.',
  },
  {
    title: 'El rol de Milei en el conflicto',
    body: 'Javier Milei tiene una relación especialmente estrecha con Israel y el judaísmo argentino. Visitó Jerusalén, se comprometió a trasladar la embajada y expresó apoyo explícito a Netanyahu. La postura argentina en la ONU cambió radicalmente respecto a gobiernos anteriores, que habían mantenido equidistancia.',
  },
  {
    title: 'El antecedente AMIA',
    body: 'Argentina sufrió el ataque terrorista más grave de su historia el 18 de julio de 1994 cuando explotó la sede de la AMIA en Buenos Aires: 85 muertos. La justicia argentina señaló a funcionarios iraníes como responsables. Eso explica por qué el posicionamiento argentino frente a Irán tiene una dimensión de política interna muy sensible.',
  },
  {
    title: '¿Puede haber una guerra total?',
    body: 'Analistas coinciden en que ambas partes prefieren evitar un conflicto convencional prolongado. Irán no tiene capacidad de proyección convencional más allá de la región, e Israel depende del paraguas militar de EE.UU. El mayor riesgo es una escalada no deseada ante un error de cálculo de cualquiera de los actores.',
  },
];

export default function Context() {
  return (
    <section id="contexto" className="py-16 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-6 bg-green-500 rounded" />
            <span className="text-xs font-bold tracking-widest uppercase text-green-400">Contexto</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-3">Para entender el conflicto</h2>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            Seis preguntas y respuestas para entender por qué este conflicto importa más allá del Medio Oriente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contextItems.map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-gray-800 bg-[#111] hover:border-gray-700 transition-all duration-200 group">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen size={14} className="text-green-400" />
                </div>
                <h3 className="text-sm font-bold text-white leading-snug">{item.title}</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 p-4 rounded-xl border border-yellow-900/40 bg-yellow-900/10 flex items-start gap-3">
          <Info size={14} className="text-yellow-500 shrink-0 mt-0.5" />
          <p className="text-xs text-yellow-200/70 leading-relaxed">
            <strong className="text-yellow-300">Nota editorial:</strong> Este micro sitio periodístico cubre un conflicto activo en desarrollo. Los datos, posiciones de barcos y cifras económicas corresponden al período abril–julio de 2025 y se actualizan periódicamente. Toda información está basada en fuentes periodísticas verificadas: Reuters, AP, BBC, La Nación, Infobae, Clarín y fuentes oficiales de Argentina.
          </p>
        </div>
      </div>
    </section>
  );
}
