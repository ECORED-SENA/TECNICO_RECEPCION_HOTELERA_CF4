<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(titulo="5. Reservas")

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    figure.my-5
      img(src='@/assets/curso/img28.jpg', alt='Texto que describa la imagen')
    #t_5_1.mt-3.h2 5.1 Tratamiento de las reservas
    .row
      .col-lg-6
        p El tratamiento de reservas hoteleras está asociado a cada uno de los procedimientos técnicos, para el caso de modificaciones se manejan igual que una nueva reserva. 
          b Las cancelaciones están sujetas a los tiempos de cancelación: 
          b-none 72 a 48 horas antes de la llegada no tiene cargo; cuando se cancela 24 horas antes tienen penalidad será del 50% de la tarifa, cuando se cancela en la misma fecha de llegada, el cliente debe asumir el 100% de la tarifa.
        figure.my-5
          img(src='@/assets/curso/img29.jpg', alt='Texto que describa la imagen')
      .col-lg-6
        div.div-box-general-3
          p.p-enfasis En caso de overbooking el hotel debe solucionar los inconvenientes presentados con el huésped, otorgándole algún beneficio en su próxima estadía y debe cancelar los gastos en que incurra el huésped.
    #t_5_2.mt-3.h2 5.2 Condiciones
      div.rp2.mt-2 
          img.img-rp3(src="@/assets/curso/img30.svg")
          p La confirmación de la reserva 
            b supone la aceptación de las condiciones del contrato de reservas previamente pactado entre el huésped y el hotel; 
            b-none en el caso de agencias  de viaje con contratos de tarifas especiales o promocionales, el procedimiento de confirmación está sujeto a las condiciones del contrato.
    #t_5_3.mt-3.h2 5.3 Políticas
    p Consiste en una descripción detallada de los lineamientos a seguir en la toma de decisiones para el logro de los objetivos empresariales; con el fin de agilizar los procesos de toma de decisiones, producción y venta de habitaciones (Villegas, 2014).
    br
    p Tomemos el siguiente ejemplo:
    br
    p Requisitos para realizar una reservación en temporada baja:
    div.div-azul
          img.img-5(src='@/assets/curso/img31.svg', alt='Texto que describa la imagen')
          p 
            b Proporcionar los datos 
            b-none (nombre, domicilio, fecha de llegada y salida, tipo de habitación, número de habitación, número de personas, etc.).
    div.div-azul
          img.img-5(src='@/assets/curso/img32.svg', alt='Texto que describa la imagen')
          p 
            b Tarjeta de crédito 
            b-none (número, fecha de vencimiento, dígitos de seguridad) o realizar un depósito en efectivo a la cuenta del hotel.
    div.div-azul
          img.img-5(src='@/assets/curso/img33.svg', alt='Texto que describa la imagen')
          p La tarjeta de crédito 
            b solo quedará en garantía 
            b-none y no se realizará ningún cargo, hasta su salida.
    div.div-azul
          img.img-5(src='@/assets/curso/img34.svg', alt='Texto que describa la imagen')
          p Políticas de cancelación.
    div.div-azul
          img.img-5(src='@/assets/curso/img35.svg', alt='Texto que describa la imagen')
          p 
            b Check out: 
            b-none 13:00 horas
    div.div-azul
          img.img-5(src='@/assets/curso/img36.svg', alt='Texto que describa la imagen')
          p 
            b Check in: 
            b-none 15:00 horas
    #t_5_4.mt-5.h2 5.4 Garantía de reserva
    p.mt-3 Hoy día la mayoría de las reservaciones se realizan con pago anticipado, lo que se conoce como reserva garantizada, e indica que el huésped tiene derecho a ocupar la habitación durante el día hotelero.
    br
    p Para el caso de los clientes VIP (very important person), estas reservas son garantizadas porque están amparadas por una cuenta corporativa.
    br
    p La garantía también se cumple por tiempo límite de llegada.
    br
    p Cuando una reserva ha sido sostenida, pero no garantizada, por falta de anticipo, no se facturará a la cuenta huésped, por pasajero no show.
    .row.mt-5
      .col-lg-4
        figure
          img.img.col(src='@/assets/curso/img37.svg', alt='Texto que describa la imagen')
      .col-lg-8
        div.p
          p El componente formativo 4, lo pone en contexto con los Procedimientos de Reservas, invitándolo a familiarizarse con los sistemas  de distribución global – GDS y la oportunidad que representan para el hotel en cuanto a agilizar los procesos de reservas; así   mismo a que conozca y comprenda el alfabeto aeronáutico y los sistemas de codificación.
          br
          p Se requiere que conozca y aprenda a diligenciar los diferentes reportes o planning que se llevan a diario en el área de reservas  y recepción, con el fin de dar un manejo adecuado a los casos de rooming list, waiting list, forecast, Overbooking, pasajeros No   Show.
    p.mt-5 Es fundamental que usted como aprendiz conozca y maneje los procedimientos técnicos del área de reservas para hacer el seguimiento correspondiente a cada uno de los procesos y de esta forma evitar incurrir en errores que ocasionen mala prestación del servicio.
    br
    p Una de las quejas más frecuentes de los huéspedes es en relación  al tratamiento de las reservaciones, es preciso que usted haga  el seguimiento antes y después de la reserva; razón por la cual se sugiere tener presente el procedimiento que debe seguir en cada una de las situaciones presentadas en el área, con el propósito de mantener los estándares de servicios del establecimiento hotelero. 


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
