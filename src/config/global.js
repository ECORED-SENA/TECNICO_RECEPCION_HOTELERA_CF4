export const global = {
  componenteFormativo: 'Procedimientos de reservas',
  descripcionCurso:
    'Bienvenido al componente formativo 4 Procedimientos de Reservas! <br/><br/> Contiene una descripción detallada del procedimiento técnico para reservas hoteleras, donde le explica cómo puede solicitar la disponibilidad y registrar paso a paso la información requerida, indicando el orden para confirmación de la  reservación: estado, condiciones y políticas. Así mismo, estará en capacidad de generar  los reportes de reservas de manera correcta. <br/><br/> ¡Nuevamente bienvenido al programa de formación Técnico en Servicio de Recepción Hotelera! <br/><br/> "Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo" <br/> - Benjamín Franklin',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Canales de reserva.',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Tipos',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Ventajas y desventajas',
          hash: 't_1_2',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Convenciones para identificación de reservas',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Alfabeto aeronáutico',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Códigos aeronáuticos',
          hash: 't_2_2',
        },
      ],
    },
    {
      nombreRuta: 'tema3',
      icono: 'far fa-file-alt',
      numero: '3',
      titulo: 'Reportes',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '3.1',
          titulo: 'Rooming lis',
          hash: 't_3_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.2',
          titulo: 'Waiting list, o lista de espera.',
          hash: 't_3_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.3',
          titulo: 'Forecast.',
          hash: 't_3_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.4',
          titulo: 'Overbooking.',
          hash: 't_3_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.5',
          titulo: 'No show.',
          hash: 't_3_5',
        },
      ],
    },
    {
      nombreRuta: 'tema4',
      icono: 'far fa-file-alt',
      numero: '4',
      titulo: 'Procedimientos técnicos',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '4.1',
          titulo: 'Confirmación',
          hash: 't_4_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '4.2',
          titulo: 'Modificación',
          hash: 't_4_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '4.3',
          titulo: 'Cancelación',
          hash: 't_4_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '4.4',
          titulo: 'Anulación',
          hash: 't_4_4',
        },
      ],
    },
    {
      nombreRuta: 'tema5',
      icono: 'far fa-file-alt',
      numero: '5',
      titulo: 'Reservas',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '5.1',
          titulo: 'Tratamiento de las reservas',
          hash: 't_5_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '5.2',
          titulo: 'Condiciones',
          hash: 't_5_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '5.3',
          titulo: 'Políticas',
          hash: 't_5_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '5.4',
          titulo: 'Garantía de reserva',
          hash: 't_5_4',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario',
    },
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Responsable del equipo',
      centro: 'Centro de Servicios y Gestión Empresarial',
      regional: 'Regional Antioquia',
    },
    {
      nombre: 'Amparo Virgina Moreno Cantero',
      cargo: 'Experto temático',
      centro: 'CENTRO DE SERVICIOS Y GESTIÓN EMPRESARIAL',
    },
    {
      nombre: 'Leidy Carolina Arias Aguirre',
      cargo: 'Diseñadora Instruccional ',
      centro: 'Centro de diseño y metrología',
    },
    {
      nombre: 'Martha Isabel Martínez Vargas',
      cargo: 'Productora audiovisual',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte organizacional',
    },
    {
      nombre: [
        'Camilo Andrés Villamizar Lizcano',
        'Victor Raúl Cárdernas Cáceres',
        'Wilson Andres Arenales Cáceres',
        'Yuly Andrea Rey Quiñonez',
      ],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: ['Camilo Andres Bolaño Rey ', 'Gustavo Adolfo Marun Suarez'],
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: ['Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Álvarez, E. A. (2020). Emilio Alonso Älvarez - Blog Profesional.',
    link: 'https://emilioalonsoalvarez.wordpress.com/',
  },
  {
    referencia: 'Atehortúa, K. S. (2013). Slideshare. Recuperado el 2020. ',
    link: 'https://es.slideshare.net/ksateortua/421-reserva-de-hotel',
  },
  {
    referencia: 'Biblioteca Técnica Hotelera. (2003). Obtenido de',
    link:
      'http://ual.dyndns.org/Biblioteca/T%C3%A9cnicas%20Hoteleras/Pdf/Unidad%2003.pdf ',
  },
  {
    referencia:
      'Boullon, R. C. (2006). Planificación del Espacio Turístico. Ciudad de México: Editorial Trillas. Obtenido de',
    link:
      'http://prepacihuatlan.sems.udg.mx/sites/default/files/planificaciondelespacioturisticorobertoc.boullon.pdf',
  },
  {
    referencia: 'Hosteltur. (Noviembre de 2016). Obtenido de ',
    link: 'https://www.hosteltur.com/files/web/templates/term/wikitur.pdf',
  },
  {
    referencia:
      'Marriott International. (2008). Haciendo la reservación. Excelencia Hotelera, 19-20.Soler, J. R. (2.000). Técnicas de Gestión y Dirección Hotelera. Barcelona: Ediciones Gestión 2.000 S.A.',
  },
  {
    referencia: 'Villegas, A. N. (Enero de 2014). www.hotelesdeblue.com.',
    link:
      'https://realdeminasbajio.mx/media/POLITICAS-Y-REGLAMENTO-INTERNO-HABITACIONES-DE-UN-HOTEL.pdf',
  },
]

export const glosario = [
  {
    termino: 'Availability Disponibilidad',
    significado:
      'En hotelería, número de habitaciones o plazas disponibles para la venta en un día concreto.',
  },
  {
    termino: 'Cancelación',
    significado: 'En hotelería, anulación de una reserva confirmada',
  },
  {
    termino: 'Cupo',
    significado:
      'En hotelería y transporte, conjunto de plazas reservadas sin asignación de un nombre de cliente y que precisan confirmación.',
  },
  {
    termino: 'Forecast',
    significado:
      'En marketing y ventas, voz inglesa para la proyección, pronóstico o predicción futura estimada en el volumen de negocio o más concretamente en la previsión de ventas.',
  },
  {
    termino: 'IATA Asociación Internacional de Transporte Aéreo',
    significado:
      'Colectivo que tiene entre sus principales objetivos asegurar el normal desarrollo del tráfico aéreo, con la mayor velocidad, comodidad y eficiencia posibles para las compañías aéreas. (Hosteltur, 2016)',
  },
  {
    termino: 'No Show',
    significado:
      'En hotelería, expresión inglesa para la anulación de una reserva confirmada.',
  },
  {
    termino: 'Overbooking Sobreventa',
    significado:
      'En turismo, venta excesiva que se realiza sobre un servicio con el objeto de garantizar su plena ocupación.',
  },
  {
    termino: 'PNR Passenger Name Record. Expresión',
    significado:
      'Expresión inglesa para Registro de Nombre de Pasajero, contiene todos los datos y eventos relacionados con la reserva de un pasajero o un grupo de pasajeros que viajan como un conjunto. (Hosteltur, 2016)',
  },
  {
    termino: 'Planning de Ocupación ',
    significado:
      'En hotelería, panel o casillero físico o digital en el que están representadas todas las habitaciones de un establecimiento de alojamiento y que sirve para gestionar el estado en que se encuentran (libre, ocupada, bloqueada, etc.).',
  },
  {
    termino: 'Rooming list',
    significado:
      'En hotelería, expresión inglesa para la relación de habitaciones asignadas a personas o grupos, elaborado en la recepción.',
  },
  {
    termino: 'Waiting list Lista de espera',
    significado:
      'En turismo y transporte, relación de personas inscritas en espera de la cancelación de la reserva de un servicio, al haber más demanda que oferta para el mismo en una fecha y horario determinados. (Hosteltur, 2016)',
  },
]

export const complementario = [
  {
    texto: 'Emilio Alonso Álvarez, (2012) Unidad de Trabajo 6 -  Reservas',
    tipo: 'Documento',
    link:
      'https://emilioalonsoalvarez.files.wordpress.com/2012/10/ut6-reservas.pdf',
  },
  {
    texto: 'Centro de Capacitación Amadeus (2009) Manual de hoteles',
    tipo: 'Manual',
    link:
      'https://drive.google.com/drive/folders/1tIDJ2fBqDVnlQXqt0tmg8u-P0D5e3nev',
  },
]
