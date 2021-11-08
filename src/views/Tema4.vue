<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Procedimientos técnicos
    figure.mb-5
        img(src="@/assets/curso/img28.jpg", alt="Texto que describa la imagen")
    p.mb-5 A través del departamento de reservaciones del hotel, un pasajero (PAX) o huésped puede hacer una solicitud de reserva de habitación, en una fecha específica y por un tiempo de estadía o permanencia determinado. Este proceso consiste en que el establecimiento hotelero asume el compromiso de separar una habitación para uno o varios huéspedes, lo cual requiere de un depósito o pago anticipado por parte del huésped como garantía de la reserva a favor del hotel (Ateortua, 2013). Existen procedimientos técnicos para la realización de reservaciones:
    .row.mb-5
      .col-lg-3
        .container-amarillo-claro.p-2.justify-content-center
          img.mb-3(src="@/assets/curso/img29.svg", alt="Texto que describa la imagen" style="width:103px").m-auto
          .h5.text-center Confirmación
      .col-lg-3
        .container-amarillo-claro.p-2.justify-content-center
          img.mb-3(src="@/assets/curso/img30.svg", alt="Texto que describa la imagen" style="width:88px").m-auto
          .h5.text-center Modificación
      .col-lg-3
        .container-amarillo-claro.p-2.justify-content-center
          img.mb-3(src="@/assets/curso/img31.svg", alt="Texto que describa la imagen" style="width:63px").m-auto
          .h5.text-center Cancelación
      .col-lg-3
        .container-amarillo-claro.p-2.justify-content-center
          img.mb-3(src="@/assets/curso/img32.svg", alt="Texto que describa la imagen" style="width:79px").m-auto
          .h5.text-center Anulación
    .titulo-quinto.color-acento-contenido
      h4 Flujo toma de reservas
    figure.mb-5
        img(src="@/assets/curso/img33.svg", alt="Texto que describa la imagen")
    #t_4_1.titulo-segundo
      .h3 4.1 Confirmación
    p.mb-5 Para el procedimiento de confirmación de una reserva se tendrá en cuenta la secuencia o paso a paso para su realización, así como se puede observar en la figura 7:
    ol.lista-ol--cuadro.mb-5
        li 
          .lista-ol--cuadro__vineta
            span 1
          | El agente de reservaciones recibe la solicitud de reserva por teléfono, internet, correo electrónico, etc.

        li 
          .lista-ol--cuadro__vineta
            span 2
          | Procede a la toma de los datos para la reserva (fecha de llegada, número de habitaciones que requiere, número de personas).

        li 
          .lista-ol--cuadro__vineta
            span 3
          | Verifica la disponibilidad de habitaciones.

        li 
          .lista-ol--cuadro__vineta
            span 4
          | Informa las tarifas disponibles, los tipos de habitaciones e impuestos.

        li 
          .lista-ol--cuadro__vineta
            span 5
          | Pregunta si el cliente desea hacer la reservación y garantizarla.

        li 
          .lista-ol--cuadro__vineta
            span 6
          | Informa sobre políticas, cancelaciones y pasajeros No Show.

        li 
          .lista-ol--cuadro__vineta
            span 7
          | El agente de reservas pide el nombre del huésped y el número de contacto.

        li 
          .lista-ol--cuadro__vineta
            span 8
          | Suministra la información al cliente de los detalles de la reserva y verifica que sea correcta.

        li 
          .lista-ol--cuadro__vineta
            span 9
          | Al finalizar se indica el récord o número de reserva.
    p.mb-5 Sin embargo, es necesaria la solicitud de un depósito o pago anticipado, para poder confirmar la habitación reservada. Hoy en día estos procesos se encuentran automatizados, de manera que por ejemplo un cliente puede reservar en línea y el sistema hace las verificaciones y reservas de forma automática. Para que esto suceda se requiere una configuración previa y una sincronización de los sistemas. De todas formas, aunque  en el proceso automático no hay intervención humana, esta es requerida para verificar que todo esté acorde a las políticas del hotel y la verificación del funcionamiento adecuado de los sistemas.
    br
    br
    br
    figure.mb-5
        img(src="@/assets/curso/img34.svg", alt="Texto que describa la imagen")
    figure.mb-5
        img(src="@/assets/curso/img38.svg", alt="Texto que describa la imagen")
    #t_4_2.titulo-segundo
      .h3 4.2 Modificación
    .row.mb-5 
      .col-lg-4
        img(src="@/assets/curso/img35.svg", alt="Texto que describa la imagen")
      .col-lg-8
        p A partir del momento en que es confirmada una reserva como se observa en la figura 8, el cliente podrá modificarla, es decir, realizar cambios de fechas de llegada y salida, tipo de habitación, número de personas y tipo de tarifa. Para cualquier caso, es necesario dejar evidencias de los cambios solicitados y proceder a la confirmación de la reserva, esto con el fin de evitar que se presenten situaciones de sobreventa de habitaciones. El procedimiento para la modificación de reservas es igual al de una reserva nueva.
    #t_4_3.titulo-segundo
      .h3 4.3 Cancelación
    .row.mb-5 
      .col-lg-4
        img(src="@/assets/curso/img36.svg", alt="Texto que describa la imagen")
      .col-lg-8
        p El procedimiento de la cancelación de reservas hoteleras es de mucho cuidado, dado que genera consecuencias porque puede afectar la relación del huésped con el hotel.
          br
          br
          |Por lo general una reserva es cancelada por el hotel cuando no se solicitó anticipo como garantía y cuando es el huésped quien cancela el hotel podrá cobrar una penalidad, que equivale a un porcentaje de la tarifa según la hora de cancelación. 
          br
          br
          |El huésped puede cancelar la reservación entre 72 a 48 horas antes de la fecha de la llegada al hotel, sin ningún recargo. 
    #t_4_4.titulo-segundo
      .h3 4.4 Anulación
    .row.mb-5 
      .col-lg-4
        img(src="@/assets/curso/img37.svg", alt="Texto que describa la imagen")
      .col-lg-8
        p Por último, puede darse el caso de anulación de reservas, cuando un cliente realiza una devolución de cupos, por lo general, estas reservas que son liberadas, son tomadas por pasajeros en lista de espera. Este procedimiento de reservas anuladas casi nunca tiene recargo.
          br
          br
          |Garantizar la reserva de habitación a un huésped, es uno de los factores más complejos tanto para el área de reservaciones, como para el departamento de recepción; cuando se confirma una reserva es necesario exigir el pago anticipado como garantía de la habitación; en ocasiones la modificación de una reserva como se visualiza en la figura 9, por cambio de fecha de ingreso o salida puede tener una penalidad, dependiendo de la política del establecimiento.
          br
          br
          |Para el caso de las cancelaciones se realizan cargos siempre que sea una reserva garantizada, si el huésped solo confirmó sin ningún tipo de garantía y si se trata de un cliente corporativo o VIP, se realiza el cargo a la cuenta de la empresa, si se trata de un cliente particular se maneja como pasajero No Show.
    figure.mb-5
        img(src="@/assets/curso/img100.svg", alt="Texto que describa la imagen")


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
