<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Reservas
    figure.mb-5
      img(src="@/assets/curso/img39.jpg", alt="Texto que describa la imagen")
    #t_5_1.titulo-segundo
      .h3 5.1. Tratamiento de la reserva
    .row.mb-5.justify-content-between
      .col-lg-5 
        p El tratamiento de reservas hoteleras está asociado a cada uno de los procedimientos técnicos, en el caso de modificaciones se manejan igual que una nueva reserva. Las cancelaciones están sujetas a los tiempos de cancelación: 72 a 48 horas antes de la llegada no tiene cargo; cuando se cancela 24 horas antes tienen penalidad y corresponderá al 50% de la tarifa, cuando se cancela en la misma fecha de llegada, el cliente debe asumir el 100% de la tarifa.
      .col-lg-6 
        .cajon2.color-naranja-claro.p-5
          .h5.px-5 En caso de overbooking el hotel debe solucionar los inconvenientes presentados con el huésped, otorgándole algún beneficio en su próxima estadía y debe cancelar los gastos en que incurra el huésped.
    #t_5_2.titulo-segundo
      .h3 5.2 Condiciones
    .row.mb-5
      .col-lg-2
        figure.mb-5
          img(src="@/assets/curso/img40.svg", alt="Texto que describa la imagen")
      .col-lg-8
        p.py-4 La confirmación de la reserva supone la aceptación de las condiciones del contrato de reservas previamente pactado entre el huésped y el hotel; en el caso de agencias de viaje con contratos de tarifas especiales o promocionales, el procedimiento de confirmación está sujeto a las condiciones del contrato.
    #t_5_3.titulo-segundo
      .h3 5.3 Políticas
    p.mb-5 Consiste en una descripción minuciosa de los lineamientos a seguir en el desarrollo de las actividades y la toma de decisiones para el logro de los objetivos empresariales, de tal forma se busca agilizar los procesos decisión, atención y venta de habitaciones.
      br
      br
      |Como ejemplo se puede revisar el siguiente proceso:
      br
      br
      |Requisitos para realizar una reservación en temporada baja:
    .row.mb-5
      .col-lg-11
        .container-icon-text.p-3.mb-3
          img(src="@/assets/curso/img41.svg", alt="Texto que describa la imagen")
          p 
            b Proporcionar los datos 
            b-none (nombre, domicilio, fecha de llegada y salida, tipo de habitación, número de habitación, número de personas, etc.).
        .container-icon-text.p-3.mb-3
          img(src="@/assets/curso/img41.svg", alt="Texto que describa la imagen")
          p 
            b Tarjeta de crédito 
            b-none (número, fecha de vencimiento, dígitos de seguridad) o realizar un depósito en efectivo a la cuenta del hotel. 
        .container-icon-text.p-3.mb-3
          img(src="@/assets/curso/img41.svg", alt="Texto que describa la imagen")
          p La tarjeta de crédito 
            b solo quedará en garantía 
            b-none y no se realizará ningún cargo, hasta su salida.
        .container-icon-text.p-3.mb-3
          img(src="@/assets/curso/img41.svg", alt="Texto que describa la imagen")
          p Políticas de cancelación.
        .container-icon-text.p-3.mb-3
          img(src="@/assets/curso/img41.svg", alt="Texto que describa la imagen")
          p 
            b Check out: 
            b-none 13:00 horas
        .container-icon-text.p-3.mb-3
          img(src="@/assets/curso/img41.svg", alt="Texto que describa la imagen")
          p Check in: 15:00 horas
    #t_5_4.titulo-segundo
      .h3 5.4 Garantía de reserva
    p.mb-5 En la actualidad la mayoría de las reservaciones se realizan con pago anticipado, lo que se conoce como reserva garantizada, e indica que el huésped tiene derecho a ocupar la habitación durante el día hotelero.
      br
      br
      |Para el caso de los clientes VIP (very important person), estas reservas son garantizadas porque están amparadas por una cuenta corporativa.
      br
      br
      |La garantía también se cumple por tiempo límite de llegada.
    .row.mb-5.justify-content-between
      .col-lg-5
        figure.mb-5
          img(src="@/assets/curso/img42.svg", alt="Texto que describa la imagen")
      .col-lg-6
        p A partir de los contenidos revisados se conocen y se aprende a diligenciar los diferentes reportes o planning que se llevan a diario en el área de reservas y recepción, con el fin de dar un manejo adecuado a los casos de rooming list, waiting list, forecast, overbooking, pasajeros no show.
          br
          br
          |Es así como se plantea lo fundamental que es el conocimiento y manejo de los procedimientos técnicos del área de reservas para hacer el seguimiento correspondiente a cada uno de los procesos y de esta forma evitar incurrir en errores que ocasionen mala prestación del servicio.
          br
          br
          |Para finalizar, es importante 
          b tener presente que una de las quejas más frecuentes de los huéspedes es en relación con el tratamiento de las reservaciones,
          b-none  por lo tanto se debe hacer un seguimiento antes y después de la reserva; razón por la cual se sugiere tener presente el procedimiento que se debe seguir en cada una de las situaciones presentadas en el área, con el propósito de mantener los estándares de servicios del establecimiento hotelero. 
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
