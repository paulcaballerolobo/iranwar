export interface TimelineEvent {
  id: string;
  date: string;
  dateShort: string;
  title: string;
  body: string;
  category: 'military' | 'diplomatic' | 'economic' | 'humanitarian';
  figures: string[];
  source: string;
}

export interface ShipRoute {
  id: string;
  name: string;
  flag: string;
  type: 'tanker' | 'container' | 'bulk';
  cargo: string;
  origin: string;
  destination: string;
  status: 'en_ruta' | 'detenido' | 'desviado' | 'completado';
  path: [number, number][];
  currentPos: [number, number];
  progressPct: number;
  detail: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: '1 de abril de 2025',
    dateShort: 'Abr 1',
    title: 'Israel ataca consulado iraní en Damasco',
    body: 'Un ataque israelí destruye parte del consulado de Irán en Damasco, matando al general Mohammed Zahedi de la Guardia Revolucionaria. Irán promete represalia directa. Netanyahu justifica la acción como legítima defensa preventiva.',
    category: 'military',
    figures: ['Netanyahu'],
    source: 'Reuters / Télam',
  },
  {
    id: '2',
    date: '13 de abril de 2025',
    dateShort: 'Abr 13',
    title: 'Irán lanza 300 drones y misiles contra Israel',
    body: 'Por primera vez en la historia, Irán ataca directamente territorio israelí con más de 300 drones Shahed y misiles balísticos. El 99% es interceptado por la cúpula de hierro con apoyo de EE.UU., Reino Unido y Jordania. Trump convoca al G7 de emergencia.',
    category: 'military',
    figures: ['Netanyahu', 'Trump'],
    source: 'AP / La Nación',
  },
  {
    id: '3',
    date: '19 de abril de 2025',
    dateShort: 'Abr 19',
    title: 'Israel responde con ataque limitado a Isfahan',
    body: 'Israel lanza misiles contra la base aérea de Isfahan, cerca de instalaciones nucleares iraníes. Irán minimiza los daños. El Estrecho de Ormuz registra tensión máxima y el precio del petróleo sube 8% en un día.',
    category: 'military',
    figures: ['Netanyahu'],
    source: 'BBC / Infobae',
  },
  {
    id: '4',
    date: '3 de mayo de 2025',
    dateShort: 'May 3',
    title: 'Milei expresa "solidaridad total" con Israel',
    body: 'El presidente Javier Milei viaja a Jerusalén y se reúne con Netanyahu. Declara que Argentina respalda "incondicionalmente el derecho de Israel a defenderse". La declaración genera críticas de la oposición en el Congreso.',
    category: 'diplomatic',
    figures: ['Milei', 'Netanyahu'],
    source: 'Casa Rosada / Clarín',
  },
  {
    id: '5',
    date: '12 de mayo de 2025',
    dateShort: 'May 12',
    title: 'EE.UU. despliega dos portaaviones en el Golfo Pérsico',
    body: 'Trump ordena el despliegue del USS Gerald R. Ford y el USS Dwight D. Eisenhower al Golfo Pérsico. Declara que "EE.UU. no permitirá que Irán cierre el Estrecho de Ormuz". Irán advierte que cualquier ataque americano tendrá consecuencias "catastróficas".',
    category: 'military',
    figures: ['Trump'],
    source: 'Pentagon / The Guardian',
  },
  {
    id: '6',
    date: '18 de mayo de 2025',
    dateShort: 'May 18',
    title: 'Irán amenaza con cerrar el Estrecho de Ormuz',
    body: 'El Parlamento iraní vota una resolución no vinculante para cerrar el Estrecho ante nuevos ataques. El 21% del petróleo mundial transita por allí. Argentina importa el 7% de su crudo refinado de fuentes que dependen de esa ruta.',
    category: 'economic',
    figures: [],
    source: 'OPEC / El Cronista',
  },
  {
    id: '7',
    date: '25 de mayo de 2025',
    dateShort: 'May 25',
    title: 'Milei vota contra Irán en la ONU',
    body: 'Argentina vota a favor de la resolución que condena el programa de misiles iraní en el Consejo de Seguridad de la ONU. Es la primera vez en 20 años que Argentina adopta una postura tan explícita contra Irán, en el contexto de la investigación AMIA.',
    category: 'diplomatic',
    figures: ['Milei'],
    source: 'Cancillería Argentina / Infobae',
  },
  {
    id: '8',
    date: '2 de junio de 2025',
    dateShort: 'Jun 2',
    title: 'Primer ataque de Hezbolá sobre Haifa',
    body: 'Hezbolá lanza una andanada masiva de cohetes sobre Haifa. Israel responde con bombardeos sobre el sur del Líbano. Trump amenaza con sanciones adicionales a Irán si no detiene el apoyo a Hezbolá.',
    category: 'military',
    figures: ['Trump', 'Netanyahu'],
    source: 'Al Jazeera / La Nación',
  },
  {
    id: '9',
    date: '10 de junio de 2025',
    dateShort: 'Jun 10',
    title: 'Negociaciones secretas en Omán',
    body: 'Se revelan negociaciones secretas entre EE.UU. e Irán mediadas por Omán. Trump confirma los contactos pero insiste en que Irán "debe abandonar toda aspiración nuclear". Milei elogia la gestión diplomática de Trump.',
    category: 'diplomatic',
    figures: ['Trump', 'Milei'],
    source: 'WSJ / Clarín',
  },
  {
    id: '10',
    date: '20 de junio de 2025',
    dateShort: 'Jun 20',
    title: 'Crisis de combustible: nafta sube 15% en Argentina',
    body: 'El precio del petróleo Brent supera los $105 USD por barril. YPF anuncia aumentos del 15% en las naftas. El gobierno Milei culpa a la "guerra de Irán" por la presión inflacionaria, generando debate económico.',
    category: 'economic',
    figures: ['Milei'],
    source: 'YPF / Ámbito Financiero',
  },
  {
    id: '11',
    date: '1 de julio de 2025',
    dateShort: 'Jul 1',
    title: 'Israel ataca instalaciones nucleares en Natanz',
    body: 'En el mayor ataque desde el inicio del conflicto, Israel lanza una operación combinada con misiles balísticos y fuerzas especiales contra el complejo nuclear de Natanz. Irán declara el estado de guerra. El Estrecho de Ormuz se cierra temporalmente al tráfico comercial.',
    category: 'military',
    figures: ['Netanyahu', 'Trump'],
    source: 'NYT / BBC / Infobae',
  },
  {
    id: '12',
    date: '5 de julio de 2025',
    dateShort: 'Jul 5',
    title: 'Argentina activa protocolo de emergencia energética',
    body: 'Con el Estrecho cerrado y el precio del crudo en $118 por barril, el gobierno argentino activa un protocolo de emergencia para diversificar importaciones de crudo. Se exploran rutas alternativas vía Cabo de Buena Esperanza.',
    category: 'economic',
    figures: ['Milei'],
    source: 'Secretaría de Energía / Página 12',
  },
];

export const shipRoutes: ShipRoute[] = [
  {
    id: 's1',
    name: 'YPF Iberá',
    flag: 'AR',
    type: 'tanker',
    cargo: 'Petróleo crudo (Medio Oriente)',
    origin: 'Puerto de Ras Tanura, Arabia Saudita',
    destination: 'Puerto La Plata, Argentina',
    status: 'en_ruta',
    path: [
      [50.1, 26.6],
      [56.3, 23.8],
      [58.5, 20.2],
      [44.0, 11.5],
      [43.5, 11.0],
      [41.8, 12.0],
      [32.0, 14.5],
      [28.0, 14.0],
      [20.0, 10.5],
      [5.0, 5.0],
      [-10.0, -2.0],
      [-20.0, -15.0],
      [-30.0, -25.0],
      [-38.0, -34.5],
    ],
    currentPos: [20.0, 10.5],
    progressPct: 55,
    detail: 'Buque tanquero que transporta 2 millones de barriles de crudo árabe. Actualmente en el Océano Índico, evitando rutas costeras por alerta de la Guardia Costera iraní.',
  },
  {
    id: 's2',
    name: 'Maersk Corrientes',
    flag: 'AR',
    type: 'container',
    cargo: 'Autopartes y electrónica',
    origin: 'Shanghái, China',
    destination: 'Buenos Aires, Argentina',
    status: 'desviado',
    path: [
      [121.5, 31.2],
      [114.1, 22.3],
      [103.8, 1.3],
      [80.0, 5.0],
      [56.3, 23.8],
      [56.0, 24.5],
    ],
    currentPos: [56.0, 24.5],
    progressPct: 78,
    detail: 'Contenedor desviado: originalmente planeaba cruzar el Estrecho de Ormuz. Por alerta bélica fue redirigido al norte del Golfo de Omán, aguardando autorización para continuar.',
  },
  {
    id: 's3',
    name: 'Río Paraná Gas',
    flag: 'AR',
    type: 'tanker',
    cargo: 'GNL - Gas Natural Licuado',
    origin: 'Qatar (Ras Laffan)',
    destination: 'Escobar, Argentina',
    status: 'detenido',
    path: [
      [51.5, 25.9],
      [56.3, 23.8],
      [57.0, 22.0],
      [58.5, 20.0],
    ],
    currentPos: [57.0, 22.0],
    progressPct: 30,
    detail: 'Buque metanero detenido en el Golfo de Omán por cierre temporal del Estrecho de Ormuz tras los ataques israelíes del 1 de julio. Carga estimada en 138.000 m³ de GNL crítico para el invierno argentino.',
  },
  {
    id: 's4',
    name: 'San Lorenzo Bulk',
    flag: 'AR',
    type: 'bulk',
    cargo: 'Fertilizantes (Urea)',
    origin: 'Jubail, Arabia Saudita',
    destination: 'Bahía Blanca, Argentina',
    status: 'en_ruta',
    path: [
      [49.6, 27.0],
      [56.3, 23.8],
      [58.5, 20.0],
      [60.0, 15.0],
      [65.0, 10.0],
      [70.0, 5.0],
      [68.0, -5.0],
      [50.0, -25.0],
      [38.0, -34.9],
      [-62.3, -38.7],
    ],
    currentPos: [68.0, -5.0],
    progressPct: 65,
    detail: 'Granelero que transporta 45.000 toneladas de urea para la campaña agrícola argentina. Salió antes del cierre del Estrecho y ahora navega por el sur del Índico.',
  },
];

export const keyStats = [
  { label: 'Del petróleo mundial pasa por Ormuz', value: '21%' },
  { label: 'Aumento del crudo Brent desde inicio', value: '+43%' },
  { label: 'Barcos argentinos afectados', value: '4' },
  { label: 'Aumento naftas en Argentina', value: '+15%' },
];
