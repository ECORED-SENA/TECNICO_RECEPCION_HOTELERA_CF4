<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Canales de reserva
    .row.mb-5 
      .col-lg-6
        p Las reservaciones son recibidas directamente por el hotel o mediante canales de venta externos que han acrecentado con la llegada del internet a la distribución hotelera. Las cadenas más grandes tienen centrales de reservaciones, que pueden o no estar ubicadas en el establecimiento de alojamiento, pueden operar las 24 horas y muchas veces ponen a disposición de los clientes líneas telefónicas de acceso gratuito.
          br
          br
          |Los canales de reservas son los conductos por los cuales el personal de reservaciones del hotel recibe las solicitudes de alojamiento o servicios, entre los cuales están: 
      .col-lg-6
        figure.mb-5
          img(src="@/assets/curso/img2.jpg", alt="Texto que describa la imagen")
    #t_1_1.titulo-segundo
      .h3 1.1 Canales de reserva directos
    p.mb-5 Son los canales implementados y gestionados directamente por el hotel. A continuación se revisarán cuáles son los canales de reserva directos.
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      div(titulo="1. Solicitud directa o personal").p-4
        p Son las solicitudes que el hotel recibe de sus propios visitantes, esta clase de reservas deben ser motivadas por los recepcionistas y otros funcionarios del hotel, toda vez que son las más rentables.
      div(titulo="2. Telefónicas").p-4
        p Las reservas telefónicas fueron el medio más utilizado por los clientes individuales, incluso por empresas y agencias de viajes. Hoy en día los establecimientos hoteleros disponen de medios técnicos a través de internet y las diferentes redes sociales, que resultan más accesibles, lo que ha hecho desaparecer gradualmente las líneas telefónicas gratuitas para usuarios.
      div(titulo="3. Correo electrónico ").p-4
        p Es un método de reservas sencillo y muy utilizado, porque permite el contacto directo entre el cliente y el hotel. Consiste en reservar, confirmar y cancelar respectivamente una solicitud de reserva, de manera que el cliente puede disponer de un documento de confirmación. Es la evolución de sistemas como el fax o télex que en otra época eran muy comunes.
      div(titulo="4. Página web").p-4
        p La página web en los hoteles es la mejor forma de mostrar los productos y servicios, pero en esencia es la mejor herramienta de ventas que tiene el hotel. En las páginas web se integran aplicativos conocidos como motores de reserva (IBE), que además de mostrar información, permiten que a través de la web se pueda vender en tiempo real, 24 horas al día, 7 días a la semana y 365 días al año.
      div(titulo="5. Mensajería y Chatbots").p-4
        p Casi siempre están asociadas a la página web o a las redes sociales, son aplicaciones que permiten un contacto rápido y directo con los clientes para resolver dudas, pero en la actualidad tienen gran capacidad de venta directa, un ejemplo es WhatsApp en su versión business.
      div(titulo="6. Redes Sociales ").p-4
        p Hoy en un mundo hiperconectado, las redes sociales han ganado un lugar importante en el comportamiento cotidiano y por ende son una buena forma de llegar a los clientes para presentar el producto, compartir experiencias, interactuar con personas que siguen la marca. En el caso de los hoteles y con un adecuado manejo, las redes sociales se han convertido en una importante fuente de reservas directas, en algunas de estas también es posible conectar el motor de reservas para que el proceso de reserva sea más expedito. Algunos ejemplos son: Facebook o Instagram.
      div(titulo="7. Centrales de Reservas – CRS").p-4
        p Las centrales de reservaciones son normalmente potestad de las grandes cadenas hoteleras que pueden concentrar una cuota de personal y tecnología para este fin. En los hoteles más pequeños e independientes, esta función se cubre en el departamento de teléfonos o recepción, haciendo muy importante el desempeño del personal de estas secciones.
    #t_1_2.titulo-segundo
      .h3 1.2 Canales de reserva indirectos
    p.mb-5 Son aquellos donde intervienen intermediarios entre el cliente y el establecimiento hotelero. A continuación se revisarán.
    SlyderB.mb-5(:datos="datosSlyder")
    p.mb-5 Todos estos canales que pueden agrupar como se observa en la figura 1, se conocen como “Ecosistema de distribución” y su manejo cada vez más complejo, requiere de herramientas tecnológicas especializadas.
    .titulo-quinto.color-acento-contenido
      h4 Canales de reserva
    figure.mb-5
      img(src="@/assets/curso/img11.svg", alt="Texto que describa la imagen")
    #t_1_3.titulo-segundo
      .h3 1.3 Ventajas y desventajas
    p.mb-5 La explosión de canales de reservas presenta ventajas y desventajas para los hoteles.
    .h4 Ventajas
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.bg-gris.p-4.mb-4
          p Los clientes particulares, las empresas y las agencias de viajes, cuando se dirigen directamente a las empresas hoteleras, hacen uso del teléfono inteligente como medio más habitual. Eso facilita el contacto y la interacción con los clientes.
        .cajon.color-acento-contenido.bg-gris.p-4.mb-4
          p El correo electrónico es un canal que resulta muy sencillo y asequible para cualquier cliente, empresa, agencia de viajes o proveedor.
        .cajon.color-acento-contenido.bg-gris.p-4.mb-4
          p El posicionamiento de las reservas online es un buen recurso para la oferta de servicios, porque la internet resulta ser una buena opción para la gestión de reservas.
        .cajon.color-acento-contenido.bg-gris.p-4.mb-4
          p Las reservas online son un modelo de distribución adoptado por la mayoría del mercado turístico y que goza de un excelente grado de aceptación por parte de los usuarios.
        .cajon.color-acento-contenido.bg-gris.p-4.mb-4
          p Las agencias de viajes online se constituyen como agencia de viajes tradicionales que emplean la tecnología que ofrece la red para realizar las gestiones con un cliente particular. 
        .cajon.color-acento-contenido.bg-gris.p-4.mb-4
          p El manejo de las plataformas de reservas online es relativamente sencillo y disponen de una buena capacidad de contratación y distribución, lo que las hace ser un canal muy atractivo.
        .cajon.color-acento-contenido.bg-gris.p-4.mb-4
          p La implementación de los GDS en las reservas hoteleras no es tan representativa, como sucede con las compañías aéreas.  
        .cajon.color-acento-contenido.bg-gris.p-4.mb-4
          p La hiper conectividad genera nuevas oportunidades de negocio
    .h4 Desventajas
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.bg-gris.p-4.mb-4
          p La gran cantidad de canales hace complejo el manejo de los inventarios por lo que se debe usar software especializado para su manejo.
        .cajon.color-secundario.bg-gris.p-4.mb-4
          p La gran cantidad de canales hace que aumenten los costos de distribución y bajen los márgenes de rentabilidad.
        .cajon.color-secundario.bg-gris.p-4.mb-4
          p El manejo de tarifas también se hace más difícil y cambiante, según las condiciones del mercado.
        .cajon.color-secundario.bg-gris.p-4.mb-4
          p El cliente está más informado y cada vez tiene mayor poder de negociación. 
    .row.mb-5 
      .col-lg-6
        p De acuerdo con lo anterior, es importante que los prestadores de servicios turísticos puedan acceder a programas de capacitación para el personal del área de reservaciones, en cuanto a los procedimientos y procesos que deben manejar, para facilitar la información a los clientes y usuarios, ofreciendo, vendiendo y promocionando los diferentes productos y servicios, mediante el uso adecuado y óptimo de los sistemas de distribución actuales.
          br
          br
          |Así mismo, es fundamental la actualización permanente de los conocimientos que ya poseen, ya que el funcionamiento de los sistemas de información exige adaptarse continuamente a los nuevos retos y nuevas formas de comercialización y venta de productos turísticos.
      .col-lg-6
        figure.mb-5
          img(src="@/assets/curso/img12.svg", alt="Ilustración de edificio")



























</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: '1. Agencias de viajes tradicionales',
        texto:
          'Con la aparición de las agencias de viajes en línea (OTA) en el final de los años noventa, estas entidades empezaron a desaparecer. Hoy día se mantienen algunas que se dedican más al sector corporativo y al segmento tour and travel, donde la organización de viajes es imperativa. Algunos ejemplos son: Carlson Wagonlit. Aviatur.',
        imagen: require('@/assets/curso/img3.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '2. Agencias de viajes en línea (on-line) – OTA',
        texto:
          'Estos son esencialmente sitios web dedicados a la venta de servicios turísticos y hoteleros, son la evolución en el mundo globalizado de las agencias de viaje tradicionales. Estas agencias han logrado una gran participación en el mercado, debido a las importantes sumas que invierten en mercadeo, por ejemplo: Booking.com',
        imagen: require('@/assets/curso/img4.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '3. Bancos de camas',
        texto:
          'Los bancos de camas son entidades que trabajan en ventas al por mayor, estas negocian con los proveedores (hoteles, traslados desde los aeropuertos a los hoteles y viceversa, excursiones, entradas a espectáculos, eventos deportivos y conciertos, tiquetes para trenes, barcos). Su modelo de negocio está en aglutinar porciones importantes de la disponibilidad que luego renegocian con agencias de viajes, por ejemplo: Hotelbeds.',
        imagen: require('@/assets/curso/img5.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '4. Sistemas de distribución global – GDS',
        texto:
          'Los GDS vienen de la industria aérea y son una valiosa herramienta de trabajo para la industria turística, poniendo a disposición de los prestadores de servicios, una amplia y variada gama de productos de viaje: tiquetes aéreos, trenes, cruceros, hoteles, restaurantes, congresos, convenciones, ferias, tours, seguros de viaje, alquiler de autos, entre otros servicios. Estos han ido evolucionando con las nuevas tecnologías, adaptándose rápidamente al cambio, pasando de las solicitudes y respuestas por medios físicos como cartas y telegramas y por llamadas telefónicas y telefax, a medios para reservaciones más eficientes, más confiables y que optimizan la venta a través de los diferentes proveedores de servicios, con enlaces disponibles en la internet y redes sociales de fácil acceso, por ejemplo: Amadeus.',
        imagen: require('@/assets/curso/img6.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '5. Buscadores y metabuscadores',
        texto:
          'Son también páginas web que se mueven a través de la venta de anuncios publicitarios y la comparación de precios, para luego poder vender habitaciones a las OTA, por ejemplo: Trivago.',
        imagen: require('@/assets/curso/img7.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '6. Sitios de reputación social',
        texto:
          'Estos sitios web nacieron como respuesta al manejo de los comentarios de los productos y servicios, a partir de lo que se conoce como reputación online. Estos en su evolución se han vuelto una importante fuente de información para decidir por un producto u otro y por esta vía generar ventas. En el sector hotelero el más conocido es Tripadvisor.',
        imagen: require('@/assets/curso/img8.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '7. Vacation Rentals',
        texto:
          'Estas entidades web nacieron como la competencia de los hoteles, permitiendo a los dueños de propiedades con ciertas prestaciones, rentarlas para estadías cortas y a un valor más favorable. Este modelo encontró rápidamente su nicho de cliente y ha tenido un crecimiento sostenido en participación del mercado.<br><br>En la evolución del mercado se han convertido en un aliado estratégico para vender las habitaciones, por ejemplo: Airbnb.',
        imagen: require('@/assets/curso/img9.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '8. Blogs',
        texto:
          'Los blog son páginas web independientes en las cuales se hacen recomendaciones de productos y servicios, estos funcionan con base en la generación de contenido que lleva tráfico al blog. Este tráfico que llega por diversos temas es aprovechado por las marcas para vender sus productos por medio de tácticas de marketing digital y remarketing.',
        imagen: require('@/assets/curso/img10.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
