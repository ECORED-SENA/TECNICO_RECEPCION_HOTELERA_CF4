<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Reportes
    figure.mb-5
        img(src="@/assets/curso/img19.jpg", alt="Texto que describa la imagen")
    p.mb-5 Una de las principales funciones del personal del área de reservas de un hotel es la elaboración de reportes que permiten visualizar y actualizar constantemente la disponibilidad de habitaciones y porcentaje de ocupación; estos deben ser remitidos al departamento de recepción, que es el encargado de gestionar la comunicación con las demás áreas o dependencias del hotel: habitaciones, alimentos y bebidas, entre otros. 
      br
      br
      |Estos informes contienen información detallada de las fechas de llegada y salida de huéspedes, lo cual permite la planificación mancomunada y anticipada de las actividades relacionadas con el arribo, recepción, bienvenida y acomodación de huéspedes.
      br
      br
      |A continuación se estudiarán los principales reportes.
    #t_3_1.titulo-segundo
      .h3 3.1 Rooming list
    p.mb-3 Para que un establecimiento hotelero pueda garantizar las reservas de grupo, estas deben ser confirmadas con suficiente anticipación y documentadas en el rooming list o lista de distribución de habitaciones, donde se relacionan los siguientes datos: 
    ul.lista-ul--color.mb-5
          li 
            i.fas.fa-stream
            | Número de habitaciones (individuales, dobles, triples) asignadas para el grupo.
          li 
            i.fas.fa-stream
            | Fecha de llegada y salida.
          li 
            i.fas.fa-stream
            | Nombre de los huéspedes. 
          li 
            i.fas.fa-stream
            | Número de personas que ocupan la habitación.
          li 
            i.fas.fa-stream
            | Plan de alimentación.
          li 
            i.fas.fa-stream
            | Tour conductor (responsable del grupo).
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.bg-acento-contenido-claro.p-4.mb-4
          p Generalmente este listado de huéspedes está sujeto a modificaciones de último momento, lo cual retrasa los procesos de check–in, en el área de recepción. Los sistemas de gestión de propiedad o PMS, traen un módulo de manejo de grupos, que al ser alimentado con las reservas de un grupo automáticamente genera los listados del rooming list como el observable en la figura 3.
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-5
          img(src="@/assets/curso/img20.jpg", alt="Texto que describa la imagen")
          figcaption Nota. Oracle Corporation (s.f.)
    p.mb-5 El rooming list es el listado de reservas que llegan en un día determinado. Pueden ser reservas de grupo o individuales y también se pueden llamar “Reservation List”
      br
      br
      |Los sistemas permiten filtrar esta clase de informes de la manera que se necesite como lo muestra la figura 4.
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-5
          img(src="@/assets/curso/img21.jpg", alt="Texto que describa la imagen")
          figcaption Nota: eZee Technosys Pvt. Ltd. (s.f)
    #t_3_2.titulo-segundo
      .h3 3.2 Waiting list
    .row.mb-5 
      .col-lg-6
        p El waiting list es un término comúnmente empleado en aerolíneas y hoteles que permite reservas de cupos no disponibles y quedando estas en situación de lista de espera como se observa en la figura 5, con la posibilidad de ser confirmadas, si un pasajero cancela una reserva. Cuando esto sucede el hotel no garantiza la reserva de habitación al huésped, motivo por el cual establece una fecha determinada para el waiting list, donde se informará la disponibilidad o no de reservas.
          br
          br
          |En ocasiones no es conveniente aceptar pasajeros en lista de espera, dado que ellos consideran que tienen derecho a una reserva de habitación confirmada.
          br
          br
          |Cuando el hotel hace parte de una cadena hotelera o tienen convenio con otros establecimientos de alojamiento, puede ofrecer lista de espera y no perder la venta por habitaciones. 
      .col-lg-6
        figure.mb-5
          img(src="@/assets/curso/img22.jpg", alt="Texto que describa la imagen")
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-5
          img(src="@/assets/curso/img23.jpg", alt="Texto que describa la imagen")
          figcaption Nota. Oracle Corporation (s.f.)
    p.mb-5 En síntesis el Waitlist es la lista de reservas no confirmadas que superan el cupo del hotel y que pueden ser asignadas según la disponibilidad.
    #t_3_3.titulo-segundo
      .h3 3.3 Forecasting (pronóstico)
    .row.mb-5 
      .col-lg-6
        p Es una estimación de la demanda futura, es implementado por los hoteles que aplican técnicas de Revenue management. No se debe confundir con la estimación de ventas (presupuesto) que realiza el departamento comercial.
          br
          br
          |Este reporte se basa en la analítica de datos y en esencia consta de calcular para una fecha futura el estimado de demanda, de esta forma se puede determinar casi con exactitud la ocupación que se tendrá en una fecha futura.
      .col-lg-6
        figure.mb-5
          img(src="@/assets/curso/img24.jpg", alt="Texto que describa la imagen")
    .h4 Pasos del pronóstico.
    p.mb-5 Lograr este reporte requiere de un proceso técnico que no es objeto de este módulo, aun así es importante señalar que para realizar un forecast se necesita seguir el proceso descrito en la figura 6:
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-5
          img(src="@/assets/curso/img25.svg", alt="Texto que describa la imagen")
    .row.mb-5.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.bg-acento-contenido-claro.p-4.mb-4
          p 
            b Es importante tener presente que toda esta información se basa en la información captada en las reservaciones y es de importancia estratégica para el hotel.
    #t_3_4.titulo-segundo
      .h3 3.4 Overbooking
    .row.mb-5.justify-content-between
      .col-lg-6
        p Los reportes de sobreventa, habitualmente se presentan en las compañías aéreas, que se caracterizan por sobreventas de cupos en los diferentes vuelos; en los establecimientos hoteleros ocurre cuando se supera la capacidad máxima de ocupación, es decir, se ha reservado un mayor número de cupos de los garantizados por el hotel, según las habitaciones disponibles para la venta.
          br
          br
          |Para muchos hoteles la sobreventa está determinada por la existencia de reservas no garantizadas, que sumadas a las que han sido confirmadas, superan la capacidad del establecimiento; esta situación es conocida como oversell o sobre venta, con el fin de evitar que las cancelaciones de último momento y los pasajeros no show, puedan influir en el porcentaje de ocupación del hotel (Álvarez, 2021).
      .col-lg-5
        figure.mb-5
          img(src="@/assets/curso/img26.jpg", alt="Texto que describa la imagen")
    #t_3_5.titulo-segundo
      .h3 3.5 No Show
    .row.mb-5.justify-content-between
      .col-lg-6
        p El reporte de huéspedes No Show, es elaborado desde el área de recepción y consiste en la relación de las reservas confirmadas y garantizadas por el huésped, que no se presentó al hotel y no realizó el proceso de check-in en la fecha y hora establecida; este debe ser enviado al área de reservas o Revenue para que se pueda actualizar el planning.
          br
          br
          |En la práctica la garantía de una reserva hotelera se realiza mediante pago anticipado de la misma y cuando el huésped es un No Show y no canceló con anticipación el hotel aplica una tarifa No Show, que es definida según políticas del establecimiento, a la que se le realiza el proceso de check- in y check out.
          br
          br
          |De acuerdo con lo anterior, para un hotel un pasajero No Show, no genera pérdidas en la venta de habitaciones.
      .col-lg-5
        figure
          img(src="@/assets/curso/img27.jpg", alt="Texto que describa la imagen")
    p.mb-5 Una de las responsabilidades del área de reservas es el control de la disponibilidad de habitaciones, por ello la elaboración de planning o los diferentes reportes, se convierte en una herramienta esencial para dar cumplimiento a la previsión de ocupación en determinadas fechas y evitar incurrir en sobreventas.
      br
      br
      |Estos reportes muestran el estado real de las reservaciones, mediante la previsión de llegadas individuales y particulares, emisión del rooming list para llegadas de grupos, información del planning de reservas garantizadas y confirmadas, tratamiento de las modificaciones y cancelaciones, tratamiento de pasajeros no show, información de pasajeros en lista de espera y manejo de overbooking o sobreventa.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
