export default {
  global: {
    componenteFormativo: 'Procedimientos técnicos de reservas en hoteles',
    descripcionCurso:
      'Este componente formativo contiene una descripción detallada del procedimiento técnico para reservas hoteleras, donde se explica cómo se puede consultar la disponibilidad y registrar paso a paso la información requerida, indicando el orden para la confirmación de la reservación: estado, condiciones y políticas. Así mismo, se estará en la capacidad de generar los reportes de reservas de manera correcta. <br><br>¡Nuevamente bienvenido al programa de formación en Servicio de recepción hotelera!',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Canales de reserva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Canales de reserva directos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Canales de reserva indirectos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ventajas y desventajas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos y codificación de reservas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de reservas hoteleras',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Codificación de reservas ',
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
            titulo: 'Rooming list',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Waiting list',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Forecasting (pronóstico)',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Overbooking',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'No Show',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Procedimientos técnico',
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
            titulo: 'Tratamiento de la reserva',
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
  },
  referencias: [
    {
      referencia:
        'Unknown. (2015, diciembre 17).  Códigos IATA. [Web log post]. Agencia de Viajes I.',
      link: 'http://av1germainebatson.blogspot.com/2015/12/codigos-iata.html',
    },
    {
      referencia:
        'Álvarez, E. A. (2021, enero 7). Recepción y reservas. Unidad de trabajo 6. [Web log post]. Emilio Alonso Álvarez - Blog Profesional.',
      link:
        'https://emilioalonsoalvarez.files.wordpress.com/2012/10/ut6-reservas.pdf',
    },
    {
      referencia:
        'Ateortua, K. S. [ksateortua]. (2013, noviembre, 13). Reserva hotelera [Presentación]. Slideshare.',
      link: 'https://es.slideshare.net/ksateortua/421-reserva-de-hotel',
    },
    {
      referencia:
        'Duran, W. (2018, mayo , 9). Tarifas dinámicas en hoteles, tendencia que ya existe en los viajes de negocios. [Publicación en perfil].  Linkedin. ',
      link:
        'https://www.linkedin.com/pulse/tarifas-din%C3%A1micas-en-hoteles-tendencia-que-ya-existe-los-waldin-duran#:~:text=El%20establecimiento%20de%20precios%20din%C3%A1micos,Esp',
    },
    {
      referencia: 'Oracle Corporation. (s.f.). Group Rooming List. oracle.com',
      link:
        'https://docs.oracle.com/cd/E53547_01/opera_5_04_03_core_help/grprmlist_help.htm',
    },
    {
      referencia: 'Oracle Corporation. (s.f.). Waitlist Screen. oracle.com',
      link:
        'https://ohdcs.hospitality.oracleindustry.com/OperaHelp/waitlist_options.',
    },
    {
      referencia:
        'eZee Technosys Pvt. Ltd. (s.f) How to Assign Bookings/Rooms in eZee Absolute',
      link:
        'https://help.ezeetechnosys.com/how-to-assign-bookings-rooms-in-ezee-absolute/',
    },
    {
      referencia: 'Hytar. (2013) Código de aeropuertos de OACI. Wikipedia.',
      link:
        'https://es.wikipedia.org/wiki/C%C3%B3digo_de_aeropuertos_de_OACI#/media/Archivo:ICAO_FirstLetter.svg',
    },
    {
      referencia:
        'Marrero, F. J. (2016, Noviembre 1). Glosario de términos hoteleros, turísticos y relacionados. Obtenido de Hosteltur:',
      link: 'https://www.hosteltur.com/files/web/templates/term/wikitur.pdf',
    },
    {
      referencia:
        'Soler, J. R. (2.000). Técnicas de Gestión y Dirección Hotelera. Barcelona: Ediciones Gestión 2.000 S.A.',
    },
  ],
  glosario: [
    {
      termino: 'Availability - Disponibilidad',
      significado:
        '“En hotelería, número de habitaciones o plazas disponibles para la venta en un día concreto” (Marrero, 2016, p. 55).',
    },
    {
      termino: 'Cancelación',
      significado:
        '“En hotelería, anulación de una reserva confirmada” (Marrero, 2016, p. 37).',
    },
    {
      termino: 'Allotment - Cupo',
      significado:
        '“En hotelería y transporte, conjunto de plazas reservadas sin asignación de un nombre de cliente y que precisan confirmación” (Marrero, 2016, p. 50).',
    },
    {
      termino: 'Dynamic Pricing',
      significado:
        '“El establecimiento de precios dinámicos o dynamic pricing es una estrategia en la que el valor de la venta cambia en función de la oferta y la demanda en tiempo real. significa que usted les ofrece a sus clientes corporativos un descuento porcentual de su BAR” (Duran, 2018).',
    },
    {
      termino: 'Forecast',
      significado:
        '“En marketing y ventas, voz inglesa para la proyección, pronóstico o predicción futura estimada en el volumen de negocio o más concretamente en la previsión de ventas” (Marrero, 2016, p. 66).',
    },
    {
      termino: 'IATA Asociación Internacional de Transporte Aéreo',
      significado:
        '“Colectivo que tiene entre sus principales objetivos asegurar el normal desarrollo del tráfico aéreo, con la mayor velocidad, comodidad y eficiencia posibles para las compañías aéreas” (Marrero, 2016, p. 24).',
    },
    {
      termino: 'No Show',
      significado:
        '“En hotelería, expresión inglesa para una reserva confirmada no presentada” (Marrero, 2016, p. 99).',
    },
    {
      termino: 'Overbooking - Sobreventa',
      significado:
        '“En turismo, venta excesiva que se realiza sobre un servicio con el objeto de garantizar su plena ocupación” (Marrero, 2016, p. 129).',
    },
    {
      termino: 'PNR - Passenger Name Record',
      significado:
        '“Expresión inglesa para Registro de Nombre de Pasajero” (Marrero, 2016, p.111). “contiene todos los datos y eventos relacionados con la reserva de un pasajero o un grupo de pasajeros que viajan como un conjunto” (Marrero, 2016, p. 119).',
    },
    {
      termino: 'Planning ',
      significado:
        'En español Plano de ocupación. “En hotelería, panel o casillero físico o digital en el que están representadas todas las habitaciones de un establecimiento de alojamiento y que sirve para gestionar el estado en que se encuentran (libre, ocupada, bloqueada, etc.)” <br>(Marrero, 2016, p.  110).',
    },
    {
      termino: 'Rooming List',
      significado:
        '“En hotelería, expresión inglesa para la relación de habitaciones asignadas a personas o grupos, elaborado en la recepción” (Marrero, 2016, p. 122 ).',
    },
    {
      termino: 'Waiting list Lista de espera',
      significado:
        '“En turismo y transporte, relación de personas inscritas en espera de la cancelación de la reserva de un servicio, al haber más demanda que oferta para el mismo en una fecha y horario determinados” (Marrero, 2016, p. 89).',
    },
  ],
  complementario: [
    {
      texto:
        'Misra, A. (2020). The History of the NATO Phonetic Alphabet [Video]. Youtube',
      tipo: 'Video en youtube.',
      link: 'https://www.youtube.com/watch?v=0U6y9JysqXA ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Amparo Virginia Moreno Cantero',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios y Gestión Empresarial',
      },
      {
        nombre: 'Harbey Castelblanco',
        cargo: 'Experto temático',
        centro: 'Centro Colombo Alemán',
      },
      {
        nombre: 'Leidy Carolina Arias Aguirre',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología',
      },
      {
        nombre: 'Martha Isabel Martínez Vargas',
        cargo: 'Productora audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Yuly Rey', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
