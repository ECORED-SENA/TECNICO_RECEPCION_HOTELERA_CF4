<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(titulo="3. Reportes")

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Una de las principales funciones del  personal del área de reservas de un hotel es la elaboración de reportes que permiten visualizar y actualizar constantemente la disponibilidad de habitaciones y porcentaje de ocupación; estos deben ser remitidos al departamento de recepción, que es el encargado de gestionar  la comunicación con las demás áreas o dependencias del hotel: habitaciones, alimentos y bebidas, entre otros.
    br
    |Estos informes contienen información detallada de las fechas de llegada y salida de huéspedes, lo cual permite la planificación mancomunada y anticipada de las actividades relacionadas con el arribo, recepción, bienvenida y acomodación de huéspedes.
    
    p.mt-4 
      b Los principales reportes son: Rooming list, Waiting list, Forecast, Overbooking, No Show.
    #t_3_1.mt-5.h2 3.1 Rooming lis.
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        div(titulo="Ver mas")
          div.container-acordion.mb-2
            p Para que un establecimiento hotelero pueda garantizar las reservas de grupo, estas deben ser confirmadas con suficiente   anticipación  y documentadas  en el rooming list o lista de distribución de habitaciones, donde se relacionan los siguientes  datos:
            ul.lista-ul.my-4
              li 
                i.fas.fa-angle-right
                | Número de habitaciones (individuales, dobles, triples) asignadas para el grupo.
              li 
                i.fas.fa-angle-right
                | Fecha de llegada y salida.
              li 
                i.fas.fa-angle-right
                | Nombre de los huéspedes. 
              li 
                i.fas.fa-angle-right
                | Número de personas que ocupan la habitación.
              li 
                i.fas.fa-angle-right
                | Plan de alimentación.
              li 
                i.fas.fa-angle-right
                | Tour conductor (responsable del grupo).
            p Generalmente este listado de huéspedes está sujeto a modificaciones de último momento, lo cual retrasa los procesos de check – in, en el área de recepción.

    #t_3_2.h2 3.2 Waiting list, o lista de espera.
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        div(titulo="Ver mas")
          div.container-acordion
            p El waiting list es un término comúnmente empleado en aerolíneas y hoteles que permite reservas de cupos no  disponibles y quedando estas en situación de lista de espera, con la posibilidad de ser confirmadas, si un pasajero cancela una reserva. Cuando esto sucede el hotel no garantiza la reserva de habitación al huésped, motivo por el cual establece una fecha determinada  para el waiting list, donde se informará la  disponibilidad o no de reservas.
            br
            p En ocasiones no es conveniente aceptar pasajeros en lista de espera, dado que ellos consideran que tienen derecho a una  reserva de habitación confirmada.
            br
            p Cuando el hotel hace parte de una cadena hotelera o tienen convenio con otros establecimientos de alojamiento, puede ofrecer lista de espera y no perder la venta por habitaciones.

    #t_3_3.h2 3.3 Forecast.
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      div(titulo="Ver mas")
        div.container-acordion
          p Este planning es implementado por los grandes hoteles (cuatro a cinco estrellas) que manejan un número considerable dellegada y salida de huéspedes; permite visualizar la siguiente información: mes, día, tipo de habitación, llegadas, salidas ycancelaciones. 
          br
          p En la actualidad el forecast es poco utilizado por los hoteles debido a que no permite visualizar  la disponibilidad dehabitaciones en una fecha específica. 
          br
          p En la práctica son más utilizados los planning nominal y numérico.
    #t_3_4.h2 3.4 Overbooking.
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      div(titulo="Ver mas")
        div.container-acordion
          p Los reportes de sobreventa, habitualmente se presentan en las compañías aéreas, que se caracterizan por sobreventas de cupos en los diferentes vuelos; en los establecimientos  hoteleros ocurre  cuando se supera la capacidad máxima de ocupación, es decir, se ha reservado un mayor número de cupos, de los que el hotel puede garantizar según las habitaciones disponibles para la venta.
          br
          p Para muchos hoteles el overbooking está determinado por la existencia de reservas no garantizadas, que sumadas a las que han sido confirmadas, superan la capacidad del establecimiento; esta  situación es conocida como oversell o  sobre venta, con el fin de evitar que las cancelaciones de último momento y los pasajeros no show, puedan influir en el porcentaje de ocupación del hotel (Álvarez, 2020).
    #t_3_5.h2 3.5 No show.
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      div(titulo="Ver mas")
        div.container-acordion
          p El reporte de huésped No Show, es elaborado desde el área de recepción y consiste en la relación de las reservas confirmadas y garantizadas por el huésped, que no se presentó al hotel y no realizó el proceso de check - in en la fecha y hora establecida; este debe ser enviado al área de reservas para que se pueda actualizar el planning.
          br
          p En la práctica la garantía de una reserva hotelera se realiza mediante pago anticipado de la misma y cuando el huésped es un No Show y no canceló con anticipación, el hotel aplica una tarifa No Show, que es definida según políticas del establecimiento, a la que se le realiza el proceso de check in y check out.
          br
          p De acuerdo con lo anterior para un hotel un pasajero No Show, no genera pérdidas en la venta de habitaciones. 
          br
          p Una de las responsabilidades del área de reservas es el control de la disponibilidad de habitaciones, por ello la elaboración  de los diferentes planning o reportes, se convierten en una herramienta esencial para dar cumplimiento a la previsión de ocupación en determinadas fechas y evitar incurrir en sobreventas.
          br
          p Estos reportes muestran el estado real de las reservaciones, mediante la  previsión de llegadas individuales y particulares, emisión del rooming list para llegadas de grupos, información del planning de reservas garantizadas y confirmadas, tratamiento de las modificaciones y cancelaciones, tratamiento de  pasajeros no show, información de pasajeros en lista de espera y manejo de overbooking o sobreventa.
    

    

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
