<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Tipos y codificación de reservas
    figure.mb-5
        img(src="@/assets/curso/img13.jpg", alt="Texto que describa la imagen")
    p.mb-5 Una reserva es el inicio del convenio entre el hotel y una persona natural o jurídica que da como resultado el contrato de alojamiento, en el cual el primero se compromete a la prestación del servicio de alojamiento bajo unas características especificadas y el segundo se compromete a utilizar este servicio en la fecha pactada realizando el pago correspondiente.
    #t_2_1.titulo-segundo
      .h3 2.1 Tipos de reservas hoteleras
    p.mb-5 Teniendo presente el concepto anterior, existen diferentes tipos de reservas en el medio hotelero:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      div(titulo="a. Reserva confirmada (No garantizada)").p-4
        p Son reservaciones provenientes de particulares o intermediarios, en las cuales no media ninguna garantía. Por lo general el hotel fija una hora límite para el registro que usualmente son las 18:00 horas, después de la cual, si los huéspedes no se presentan, la reservación se da de baja.
      div(titulo="b. Reserva garantizada").p-4
        p Una reserva garantizada significa que el hotel, tiene una garantía, usualmente una carta de confirmación, una tarjeta de crédito o un depósito que asegura que, si los huéspedes no se presentan en la fecha estipulada, el hotel cobrará un importe previamente determinado. Por lo general se cobra la primera noche de alojamiento, aunque este puede variar depende las condiciones de reserva.
      div(titulo="c. Reserva provisional (tentativa)").p-4
        p Es una reserva que se hace, para luego ser confirmada o garantizada. En caso de que ningún movimiento suceda con la reserva en un plazo previamente estipulado la reserva se cancela.
      div(titulo="d. Reserva en lista de espera").p-4
        p Cuando una fecha en particular se encuentra totalmente vendida, es decir la ocupación para esa noche está proyectada para el total de las habitaciones, el hotel acorde a su política puede recibir reservaciones adicionales, que pasarán a una lista de espera.
          br
          br
          |Eso en la práctica significa que si de las reservas previamente registradas alguna no se presenta, las reservas en lista de espera entrarán a suplir esas reservas.
      div(titulo="e. Reservas V.I.P.").p-4
        p Dentro del argot hotelero, la sigla VIP (Very Important Person), se usa para identificar las reservas de personas que requieren atención especial por su estatus. Estas reservas requieren de especial atención de todas las áreas del hotel para garantizar la prestación de un excelente servicio.
      div(titulo="f. Reservas de grupos").p-4
        p Por lo general son reservas que hacen para grupos de más de (10) diez habitaciones llegando en una fecha y garantizas por una empresa o agencia de viajes. Las condiciones de manejo del grupo se estipulan en contratos previos.
      div(titulo="g. Reservas anuladas o canceladas").p-4
        p Estas reservas se generan o por solicitud directa de los clientes (canceladas) en caso de no poder honrar la reserva o por parte del hotel (Anuladas) a causa de una situación especial la cual le obligará a dar el manejo acorde a las políticas establecidas.
      div(titulo="h. Reservas con cupo o Allotment").p-4
        p Los allotment en el negocio hotelero corresponden a convenios o negociaciones con empresas, agentes de viajes o aerolíneas, en las cuales a estos se les asignan un determinado número de habitaciones diario, que estos garantizan bien ya sea porque las utilizan o las revenden.
      div(titulo="i. No Show").p-4
        p Este no es un tipo de reservas, pero si es una condición asociada a las reservas y se presenta cuando las reservas garantizadas no se presentan. Este control es muy importante de llevar ya que permite al hotel, entre otras cosas, cobrar las garantías, dar cupo a las listas de espera o usar esta estadística para complementar el forecast.
    #t_2_2.titulo-segundo
      .h3 2.2 Codificación de reservas 
    p.mb-5 Debido al uso de sistemas informáticos y al gran volumen de reservas generados en los hoteles, existen unos códigos generales aceptados para el manejo de las reservaciones. Los más comunes se pueden observar en la tabla 1.
    .row.mb-5.justify-content-center
      .col-lg-8
        .tabla-a.color-acento-contenido.mb-5 
          table
            caption Leyenda de la tabla
            thead.header-table
              tr
                th CÓDIGO
                th SIGNIFICADO
            tbody
              tr.td-gris
                td 
                  b INQ
                td INQUIRY
              tr
                td 
                  b TEN
                td TENTATIVA
              tr.td-gris
                td 
                  b DEF 
                td DEFINITIVA
              tr
                td 
                  b CC
                td GARANTIZADA CON TARJETA DE CRÉDITO
              tr.td-gris
                td 
                  b COM 
                td GARANTIZADA POR COMPAÑÍA
              tr
                td 
                  b PEN
                td PENDIENTE
              tr.td-gris
                td 
                  b CXL
                td CANCELADA
              tr
                td 
                  b NS
                td NO SHOW
              tr.td-gris
                td 
                  b WAIT
                td EN LISTA DE ESPERA
              tr
                td 
                  b 4PM
                td MANTENER HASTA LAS 4 DE LA TARDE
              tr.td-gris
                td 
                  b 6PM
                td MANTENER HASTA LAS 6 DE LA TARDE
    p.mb-5 Una característica importante es que por lo general estos códigos son alfanuméricos.
    .h4 Alfabeto aeronáutico.
    .row.mb-5 
      .col-lg-6
        p El alfabeto aeronáutico, conocido como alfabeto fonético náutico o fonético internacional, es un sistema de códigos alfanuméricos utilizado en la aviación, la navegación, los servicios militares y en el ámbito turístico para comunicarse de manera eficaz, nombrando cada letra del abecedario con una palabra, cuya inicial se toma como equivalente cuando se va a deletrear un código o récord.
          br
          br
          |Debido a la dificultad de transmitir información por radio o teléfono y teniendo en cuenta que en ocasiones hay problemas de comunicación por interferencia en la red y para que el receptor pueda recibir el mensaje, la Organización de Aviación Civil Internacional (OACI), establece un estándar de palabras aceptadas y utilizadas que se encuentran en la tabla 2. 
      .col-lg-6
        figure.mb-5
          img(src="@/assets/curso/img14.jpg", alt="Texto que describa la imagen")
    .row.mb-5.justify-content-center
      .col-lg-10     
        figure.mb-5
          img(src="@/assets/curso/img15.svg", alt="Texto que describa la imagen")
        p Para ampliar la información, se puede observar el video “The History of the NATO Phonetic Alphabet”, cuyo enlace para su visualización se encuentra en el material complementario.
    .h4 Códigos aeronáuticos.
    .row.mb-5 
      .col-lg-6
        p A continuación, se definen los códigos aeronáuticos como un sistema de identificación que se utiliza para nombrar de forma segura a cada aeropuerto y diferenciarlo de los demás a través de un sistema de codificación denominado códigos IATA y OACI. 
          br
          br
          |El código IATA es establecido por la International Air Transport Association (IATA), consiste en un sistema de codificación de tres letras que designa el nombre del aeropuerto y/o la ciudad donde está ubicado; con frecuencia los pasajeros conocen los códigos porque los visualizan en los tiquetes aéreos, pasabordos y etiquetas de equipaje.
          br
          br
          | Algunos ejemplos que se pueden observar en la figura 2 son: 
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Aeropuerto internacional El Dorado (BOG)
          li 
            i.fas.fa-check
            | Aeropuerto Internacional Madrid-Barajas (MAD)
          li 
            i.fas.fa-check
            | Aeropuerto Internacional John F. Kennedy (JFK)
      .col-lg-6
        figure.mb-5
          img(src="@/assets/curso/img16.jpg", alt="Texto que describa la imagen")
    figure.mb-5
      img(src="@/assets/curso/img17.svg", alt="Texto que describa la imagen")
      figcaption Lista de Códigos IATA Sudamérica
    p.mb-3 Los códigos OACI son designados por la Organización de Aviación Civil Internacional (OACI), consisten en un código de cuatro letras, que contienen información de la ubicación geográfica del aeropuerto:
    ul.lista-ul--color.mb-5
          li 
            i.fas.fa-check
            | La primera letra indica la zona geográfica.
          li 
            i.fas.fa-check
            | La segunda letra indica el país.
          li 
            i.fas.fa-check
            | La tercera y la cuarta letra identifican el aeropuerto.
    p.mb-3 Retomando los ejemplos anteriores:
    ul.lista-ul--color.mb-5
          li 
            i.fas.fa-check
            | Aeropuerto internacional El Dorado (BOG)
          li 
            i.fas.fa-check
            | Aeropuerto Internacional Madrid-Barajas (MAD)
          li 
            i.fas.fa-check
            | Aeropuerto Internacional John F. Kennedy (JFK)
    p.mb-5 Específicamente los códigos OACI se utilizan en escenarios en los cuales los profesionales aeronáuticos especializados hacen uso de estos, es así como se hace referencia en el sector de transporte aéreo a controladores aéreos, pilotos, copilotos y personal de despacho y tráfico aéreo.
      br
      br
      |Los códigos aeronáuticos permiten obtener rápidamente información sobre el área, zona y la ubicación geográfica de países como lo muestra la figura 3, ciudades, aeropuertos, hoteles, restaurantes, sitios a visitar, diferencia horaria, hora internacional, entre otros; facilitando información exacta y fidedigna, a través de los sistemas de distribución global, la internet y las redes sociales. Por ello es vital aprender este sistema de codificación desde el proceso de formación como técnico en servicios de recepción hotelera.
    .row.mb-5.justify-content-center
      .col-lg-10     
        figure.mb-5
          img.mb-5(src="@/assets/curso/img18.png", alt="Texto que describa la imagen")
          figcaption.text-center Mapa de las regiones del mundo clasificadas de acuerdo con la primera letra del código de aeropuerto de la OACI. 






































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
