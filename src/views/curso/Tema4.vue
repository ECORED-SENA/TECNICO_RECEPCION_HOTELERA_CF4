<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(titulo="4. Procedimientos técnicos")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A través del departamento de reservaciones del hotel, un pasajero o huésped puede hacer una solicitud  de reserva de habitación, en una fecha específica y por un tiempo de estadía o permanencia  determinado.
    br
    p Este proceso consiste en que el 
      b establecimiento hotelero asume el compromiso de separar o apartar una habitación para uno o varios huéspedes, 
      b-none lo cual requiere de un depósito o pago anticipado, por parte del huésped como garantía de la reserva, por parte del hotel (Ateortua, 2013).
    br  
    p Existen procedimientos técnicos para la realización de reservaciones:
    div.div-general.mt-5
      div.div-box-general-2.mt-3
        div.div-box
          img.img-box(src='@/assets/curso/img23.svg', alt='Texto que describa la imagen')
          h6.text-center.mt-3 Confirmación
      div.div-box-general-2.mt-3
        div.div-box
          img.img-box(src='@/assets/curso/img24.svg', alt='Texto que describa la imagen')
          h6.text-center.mt-3 Modificación
      div.div-box-general-2.mt-3
        div.div-box
          img.img-box(src='@/assets/curso/img25.svg', alt='Texto que describa la imagen')
          h6.text-center.mt-3 Cancelación
      div.div-box-general-2.mt-3
        div.div-box
          img.img-box(src='@/assets/curso/img26.svg', alt='Texto que describa la imagen')
          h6.text-center.mt-3 Anulación
    #t_4_1.h2.mt-5 4.1 Confirmación
    p Para el procedimiento de confirmación de una reserva se tendrá en cuenta la secuencia o paso a paso para su  realización:
    ul.lista-ul.my-4
              li 
                i.fas.fa-angle-right
                | El agente de reservaciones recibe la solicitud de reserva por teléfono, internet, correo electrónico, etc.
              li 
                i.fas.fa-angle-right
                | Procede a la toma de los datos para la reserva (fecha de llegada, número de habitaciones que requiere, número de personas.
              li 
                i.fas.fa-angle-right
                | Verifica la disponibilidad de habitaciones.
              li 
                i.fas.fa-angle-right
                | Informa las tarifas disponibles, los tipos de habitaciones e impuestos.
              li 
                i.fas.fa-angle-right
                | Pregunta si el cliente desea hacer la reservación y garantizarla.
              li 
                i.fas.fa-angle-right
                | Informa sobre políticas, cancelaciones y pasajeros 
                b No Show.
              li 
                i.fas.fa-angle-right
                | El agente de reservas pide el nombre del huésped y el número de  contacto.
              li 
                i.fas.fa-angle-right
                | Suministra la información al cliente de los detalles de la reserva y verifica que sea correcta.
              li 
                i.fas.fa-angle-right
                | Para finalizar le indica el récord o número de reserva (Marriott International, 2008).
    p Es necesaria la solicitud de un depósito o pago anticipado, para poder confirmar la habitación reservada.
    #t_4_2.h2.mt-5 4.2  Modificación
    p A partir del momento en que es confirmada una reserva, el cliente podrá modificarla, es decir, realizar cambios de fechas de llegada y salida, tipo de habitación, número de personas y tipo de tarifa. Para cualquier caso, es necesario dejar evidencias de los cambios solicitados y  proceder a la confirmación de la reserva; esto con el fin de evitar que se presenten situaciones de sobreventa de habitaciones.
    br
    | El procedimiento para la modificación de reservas es igual al de una reserva nueva. 
    figure.my-5
      img(src='@/assets/curso/img27.svg', alt='Texto que describa la imagen')  
    #t_4_3.h2.mt-5 4.3 Cancelación
    p El procedimiento de la cancelación de reservas hoteleras es de mucho cuidado, dado que genera consecuencias porque puede afectar la relación del huésped con el hotel.
    br
    p Por lo general 
      b una reserva es cancelada por el hotel cuando no se solicitó anticipo como garantía y cuando es el huésped quien cancela el hotel podrá cobrar una penalidad, 
      b-none que equivale a un porcentaje de la tarifa según la hora de cancelación. 
    br
    p
      |El huésped puede cancelar la reservación entre 72 a 48 horas antes de la fecha de la llegada al hotel, sin ningún recargo. 
    #t_4_3.h2.mt-5 4.4 Anulación
    p Por último, puede darse el caso de anulación de reservas, cuando un cliente realiza una devolución de cupos, por lo general, estas reservas que son liberadas, son tomadas por pasajeros en lista de espera.
    br  
    p Este procedimiento de reservas anuladas  casi nunca tiene recargo.
    br
    p Garantizar la reserva de habitación a un huésped, es uno de los factores más complejos tanto para el área de reservaciones, como para el departamento de recepción; cuando se confirma una reserva es necesario exigir el pago anticipado como garantía de la habitación; en ocasiones la modificación de una reserva, por cambio de fecha de ingreso o salida puede tener una penalidad, dependiendo de la política del establecimiento.
    br
    p Para el caso de las cancelaciones se realizan cargos siempre que sea una reserva garantizada, si el huésped solo confirmó sin ningún tipo de garantía y si se trata de un cliente corporativo o VIP, se realiza el cargo a la cuenta de la empresa; si se trata  de un cliente particular se maneja como pasajero No Show.  
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
