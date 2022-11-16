<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.ct 2
      h1 Técnicas de limpieza del jugo de la caña

    p.mb-5(data-aos="fade-right") El proceso de elaboración de panela ha sido pensado y preparado bajo etapas estandarizadas para lograr resultados de calidad. Por lo tanto, un buen sistema de limpieza se hace a través del uso de clarificadores químicos, permitiendo obtener productos naturales de buena calidad y sabor.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 5.
          br
          em Defectos de la panela
        figure
          img(src='@/assets/curso/temas/tema2/img2-1.svg', alt='Defectos en la panela')
          figcaption Nota: Adaptado de Quezada (2007)

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Técnicas de limpieza

    p(data-aos="fade-right") Durante esta etapa se retiran impurezas por medios físicos como la decantación y flotación en los prelimpiadores. Se realiza de la siguiente manera: los procesos físicos térmicos en las primeras pailas y bioquímicos con los aglutinantes. Se lleva a cabo por medio de tres operaciones: prelimpieza, clarificación y encalado.
    p.mb-5(data-aos="fade-left") Se presentan las operaciones que se ejecutan para realizar la limpieza del jugo crudo, la clarificación, formación de aglutinantes, cachaza y mieles.

    .tarjeta.tarjeta--rosa.p-4.mb-5
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El jugo crudo se limpia en frío por medio de la decantación natural, esto sucede debido al efecto de la gravedad. Consiste en aislar por medio del proceso de precipitación la mayor cantidad de sólidos contenidos en el zumo, retirando fragmentos de tierra, lodo y arena; paralelamente, por la sucesión de flotación, el prelimpiador ayuda a separar las partículas livianas como lo son: hojas, insectos, flores, etc. Estas se deben apartar varias veces durante la molienda. Los prelimpiadores tienen orificios inferiores con tapones los cuales se deben retirar periódicamente para evacuar lodos acumulados en el fondo; también deben ser lavados 2 o 3 veces durante la molienda. Las anteriores labores constituyen buenas prácticas de manufactura.
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 6.
              br
              em Prelimpiador
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-2.png', alt='Decantación')
              figcaption Nota: Adaptado de panela del cañaduzal S.A. Prelimpiador. S/F

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El néctar sale del prelimpiador por la parte intermedia y se dirige hacia la paila recibidora de la hornilla panelera a través de una tubería. El prelimpiador debe estar situado entre la salida del molino y el pozuelo o paila recibidora, aprovechando la gravedad para la conducción de los jugos.
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 7.
              br
              em Prelimpieza de la materia prima
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-3.svg', alt='Prelimpieza')
              figcaption Nota: Adaptado de Cadavid (2017)
              
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Al macerar las cortezas de algunos árboles y arbustos tales como cadillos, balso y guásimo, se obtiene un mucilago que contiene polímeros celulósicos con propiedades aglutinantes. Los sólidos en suspensión se agregan entre sí y forman una masa homogénea que se conoce como cachaza la cual flota sobre el zumo y permite extraerla manualmente. Otras especies utilizadas para formar el aglutinante son juan blando y san joaquín.
            p La mayor parte de las cortezas referentes a las especies utilizadas como aglutinantes se encuentran en las zonas boscosas próximas a los trapiches paneleros, algunas ocasiones son traídas de municipios cercanos.
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 8.
              br
              em Plantas utilizadas en la clarificación
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-4.svg', alt='Plantas para clarificación')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Durante la clarificación se eleva la temperatura de los jugos en los sistemas de hornillas. En el primer recipiente esta debe oscilar entre los 75 °C y 82 °C, con el propósito de iniciar la segunda etapa de limpieza del jugo y dejarlo en óptimas condiciones, se prosigue a estabilizar el PH. En este punto el zumo empieza se calienta y en ese momento se añade el aglutinante de preferencia para eliminar los residuos sólidos que son difíciles de retirar. Gracias a las propiedades de la corteza de balso, el guásimo o el cadillo, los sólidos empiezan a acumularse en la superficie, generando un residuo llamado cachaza el cual es cocinado hasta formar una masa espesa conocida como melote, la cual es utilizada para alimentar los animales de las fincas, sin embargo, la cachaza puede ser eliminada en cuerpos de aguas cercanos, aunque causa afectaciones a las fuentes hídricas. (Quezada y Cadavid 2007).
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 9.
              br
              em Cachaza
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-5.svg', alt='Cachaza')
            
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Variables físicoquímicas

    p Los aglutinantes son una sustancia que, por efecto del calor, reúne los sólidos coloidales y colorantes de los jugos de la caña, y que se consideran impurezas en la elaboración de la panela.
    p.mb-5 A continuación, se presenta las características de los aglutinantes:

    ImagenInfografica.color-primario.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img2-6.svg', alt='Características de aglutinantes')
          
      .tarjeta.pc1.p-3(x="11%" y="100%" numero="")
        p La producción de aglutinantes en la finca evita el uso de especies que crecen en los bosques relictos.

      .tarjeta.pc1.p-3(x="30%" y="100%" numero="")
        p Fomenta la reducción de costos de producción y mejora la inocuidad y calidad de la panela, en la medida en que se evita la utilización de productos químicos en el proceso de clarificación de los jugos.

      .tarjeta.pc1.p-3(x="50%" y="100%" numero="")
        p Favorece la sostenibilidad ambiental de las zonas, dado que disminuye la presión sobre especies aglutinantes.

      .tarjeta.pc1.p-3(x="70%" y="100%" numero="")
        p Desde el punto de vista social, contribuye a que los productores tengan una oportunidad de negocio, a través de la siembra y comercialización de estas especies en las zonas paneleras.

      .tarjeta.pc1.p-3(x="90%" y="100%" numero="")
        p Los aglutinantes dependen de algunas variables físico-químicas entre ellas la temperatura, entre 50 °C y 55 °C acelera la formación de partículas de gran tamaño, aumentando la cinética de las mismas lo cual facilita la separación del jugo de caña.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Cachaza y su disposición

    p(data-aos="fade-left") Se conoce como cachaza al subproducto generado durante la fabricación de panela, específicamente en la etapa de clarificación, en el siguiente espacio se ahondará en este elemento y la correcta forma de utilizarlo.
    p.mb-5(data-aos="fade-right") A continuación, se explica detalladamente el proceso para obtener la cachaza y como hacer una correcta disposición final.

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Cachaza")
        .row.mb-4
          p El jugo fresco de caña, resultado de la molienda debe someterse a una limpieza para eliminar las partículas que no pueden formar parte del producto final; todo esto gracias a la floculación y aglutinación de las impurezas, en este proceso se eleva la temperatura, adicional a ello es agrega el cal y se procede a la agitación con plantas naturales creando una sustancia conocida como mucílago. En la superficie se ve una capa de aspecto coloidal con aproximadamente 20% de materia seca, el cual está compuesto por sacarosa, azúcares reductores, ceniza en poca cantidad y proteínas; a este subproducto se le denomina cachaza, también es rica en fósforo, calcio, nitrógeno y materia orgánica y es bajo en potasio.

        .row.justify-content-center.align-items-center
          .col-md-6
            .titulo-sexto.color-acento-contenido.mb-5
              h5 Tabla 1.
              br
              em Composición de la cachaza
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-7.svg', alt='Composición cachaza')

      .py-4.py-md-5(titulo="Disposición")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-8.png', alt='Disposición cachaza')
          .col-md-6
            p Existen varias formas de eliminar la cachaza, por lo general se vierte a las corrientes de agua cercanas al trapiche, otra opción es hacer una quema del material sobrante, este método no es recomendado dado las afectaciones a la calidad del aire y el suelo al ocasionar contaminación directa, también está la disposición en zonas de desecho afectando la capa vegetal a causa del estado de fermentación.  Por lo que se recomienda emplearlo como abono, mejorando algunas propiedades físicas y acidas del suelo.

      .py-4.py-md-5(titulo="Innovación")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-9.png', alt='Vacas')
          .col-md-6
            p La cachaza se identifica como desecho orgánico, por lo que sirve para crear subproductos.
            p Se puede pretender buscar alternativas en productos innovadores que puedan ofrecer alto impacto para el consumo masivo en la agricultura y la ganadería; es de acotar que este elemento no solo emplea para obtener la tradicional melaza, pues dado a que aporta altos valores nutritivos, que sirve para plantas y animales. Un ejemplo de ellos es que se emplea como alimento en bovinos, porcinos y equinos.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
