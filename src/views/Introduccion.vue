<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.ct
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(data-aos='fade-right')(
        :style="{'background-image':`url(${require('@/assets/curso/intro/intro.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos='fade-left')
        p Apreciado aprendiz, sea bienvenido a este espacio en el que aprenderá sobre materias primas, identificación de los jugos de caña, su clasificación, limpieza, purificación, estudio de la cachaza y la disposición final, entre otros aspectos a tener en cuenta para lograr un producto final óptimo. También se abarcan conceptos teóricos, técnicos y normativos propios del área de este estudio.

    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.


    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/d-83QW4dQHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
