<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-5
      img(src="@/assets/curso/img1.jpg", alt="Texto que describa la imagen")

    p.mb-0 Este componente formativo contiene una descripción detallada del procedimiento técnico para reservas hoteleras, donde se explica cómo se puede consultar la disponibilidad y registrar paso a paso la información requerida, indicando el orden para la confirmación de la reservación: estado, condiciones y políticas. Así mismo, se estará en la capacidad de generar los reportes de reservas de manera correcta.
      br
      br
      |¡Nuevamente bienvenido al programa de formación en Servicio de recepción hotelera!

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
