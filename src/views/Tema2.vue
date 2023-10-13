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
      .col-lg-10.col-sm-10(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 1.
          br
          em Defectos de la panela
        figure
          img(src='@/assets/curso/temas/tema2/img2-1.svg', alt='Defectos en la panela')
          figcaption Nota. Adaptado de Quezada (2007).

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Técnicas de limpieza

    p(data-aos="fade-right") Durante esta etapa se retiran impurezas por medios físicos como la decantación y flotación en los prelimpiadores. Se realiza de la siguiente manera: los procesos físicos térmicos en las primeras pailas y bioquímicos con los aglutinantes. Se lleva a cabo por medio de tres operaciones: prelimpieza, clarificación y encalado.
    p.mb-5(data-aos="fade-left") Se presentan las operaciones que se ejecutan para realizar la limpieza del jugo crudo, la clarificación, formación de aglutinantes, cachaza y mieles.

    .BGIMG01.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo='b')
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El jugo crudo se limpia en frío por medio de la decantación natural, esto sucede debido al efecto de la gravedad. Consiste en aislar por medio del proceso de precipitación la mayor cantidad de sólidos contenidos en el zumo, retirando fragmentos de tierra, lodo y arena; paralelamente, por la sucesión de flotación, el prelimpiador ayuda a separar las partículas livianas como lo son: hojas, insectos, flores, etc. Estas se deben apartar varias veces durante la molienda. Los prelimpiadores tienen orificios inferiores con tapones los cuales se deben retirar periódicamente para evacuar lodos acumulados en el fondo; también deben ser lavados 2 o 3 veces durante la molienda. Las anteriores labores constituyen buenas prácticas de manufactura.
          .col-md-5
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-2.png', alt='Decantación')
              figcaption Nota. Adaptado de Panela del cañabusal S.A

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El néctar sale del prelimpiador por la parte intermedia y se dirige hacia la paila recibidora de la hornilla panelera a través de una tubería. El prelimpiador debe estar situado entre la salida del molino y el pozuelo o paila recibidora, aprovechando la gravedad para la conducción de los jugos.
          .col-md-5
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-3.svg', alt='Prelimpieza')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Al macerar las cortezas de algunos árboles y arbustos tales como cadillos, balso y guásimo, se obtiene un mucílago que contiene polímeros celulósicos con propiedades aglutinantes. Los sólidos en suspensión se agregan entre sí y forman una masa homogénea que se conoce como cachaza la cual flota sobre el zumo y permite extraerla manualmente. Otras especies utilizadas para formar el aglutinante son juan blando y san joaquín.
            p La mayor parte de las cortezas referentes a las especies utilizadas como aglutinantes se encuentran en las zonas boscosas próximas a los trapiches paneleros, algunas ocasiones son traídas de municipios cercanos.
          .col-md-5
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-4.svg', alt='Plantas para clarificación')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Durante la clarificación se eleva la temperatura de los jugos en los sistemas de hornillas. En el primer recipiente esta debe oscilar entre los 75 °C y 82 °C, con el propósito de iniciar la segunda etapa de limpieza del jugo y dejarlo en óptimas condiciones, se prosigue a estabilizar el pH. En este punto el zumo se calienta y en ese momento se añade el aglutinante de preferencia para eliminar los residuos sólidos que son difíciles de retirar. Gracias a las propiedades de la corteza de balso, el guásimo o el cadillo, los sólidos empiezan a acumularse en la superficie, generando un residuo llamado cachaza el cual es cocinado hasta formar una masa espesa conocida como melote, la cual es utilizada para alimentar los animales de las fincas, sin embargo, la cachaza puede ser eliminada en cuerpos de aguas cercanos, aunque causa afectaciones a las fuentes hídricas. (Quezada y Cadavid, 2007)
          .col-md-5
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-5.svg', alt='Cachaza')

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Variables físicoquímicas

    p Los aglutinantes son una sustancia que, por efecto del calor, reúne los sólidos coloidales y colorantes de los jugos de la caña, y que se consideran impurezas en la elaboración de la panela.
    p.mb-5 A continuación, se presenta las características de los aglutinantes:

    .row.justify-content-center.mb-5
      .col-lg-12.col-sm-8(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img2-6.svg', alt='Características de aglutinantes')
          .tarjeta.bgVerdeFluorescente.p-3(x="11%" y="96%" numero="1")
            p La producción de aglutinantes en la finca evita el uso de especies que crecen en los bosques relictos.
          .tarjeta.bgVerdeFluorescente.p-3(x="30%" y="3%" numero="2")
            p Fomenta la reducción de costos de producción y mejora la inocuidad y calidad de la panela, en la medida en que se evita la utilización de productos químicos en el proceso de clarificación de los jugos.
          .tarjeta.bgVerdeFluorescente.p-3(x="50%" y="96%" numero="3")
            p Favorece la sostenibilidad ambiental de las zonas, dado que disminuye la presión sobre especies aglutinantes.
          .tarjeta.bgVerdeFluorescente.p-3(x="70%" y="3%" numero="4")
            p Desde el punto de vista social, contribuye a que los productores tengan una oportunidad de negocio, a través de la siembra y comercialización de estas especies en las zonas paneleras.
          .tarjeta.bgVerdeFluorescente.p-3(x="90%" y="96%" numero="5")
            p Los aglutinantes dependen de algunas variables físicoquímicas, entre ellas la temperatura, entre 50 °C y 55 °C acelera la formación de partículas de gran tamaño, aumentando la cinética de las mismas, lo cual facilita la separación del jugo de caña.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Cachaza y su disposición

    p(data-aos="fade-left") Se conoce como cachaza al subproducto generado durante la fabricación de panela, específicamente en la etapa de clarificación, en el siguiente espacio se ahondará en este elemento y la correcta forma de utilizarlo.
    p(data-aos="fade-right") A continuación, se explica detalladamente el proceso para obtener la cachaza y cómo hacer una correcta disposición final.

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Cachaza")
        .row.mb-4
          p El jugo fresco de caña, resultado de la molienda, debe someterse a una limpieza para eliminar las partículas que no pueden formar parte del producto final; todo esto, gracias a la floculación y aglutinación de las impurezas; en este proceso, se eleva la temperatura y, adicional a ello, se agrega la cal y se procede a la agitación con plantas naturales, creando una sustancia conocida como mucílago. En la superficie se ve una capa de aspecto coloidal, con aproximadamente 20 % de materia seca, el cual está compuesto por sacarosa, azúcares reductores, ceniza en poca cantidad y proteínas; a este subproducto se le denomina cachaza, que también es rica en fósforo, calcio, nitrógeno y materia orgánica y es bajo en potasio.

        .row.justify-content-center.align-items-center
          .col-md-6

            table.table
              caption Composición de la cachaza
              thead
                tr.text-center.bg1
                  th Componente
                  th Cantidad
              tbody
                tr
                  td Agua
                  td.text-center 57

                tr
                  td Cera Cruda
                  td.text-center 2 - 4

                tr
                  td Arcillas y cenizas
                  td.text-center 7
                tr
                  td Bagacillo  y azúcares
                  td.text-center 15


      .py-4.py-md-5(titulo="Disposición")
        .row.justify-content-around.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-8.png', alt='Disposición cachaza')
          .col-md-6
            p Existen varias formas de eliminar la cachaza, por lo general se vierte a las corrientes de agua cercanas al trapiche, otra opción es hacer una quema del material sobrante, este método no es recomendado dado las afectaciones a la calidad del aire y el suelo al ocasionar contaminación directa, también está la disposición en zonas de desecho afectando la capa vegetal a causa del estado de fermentación.  Por lo que se recomienda emplearlo como abono, mejorando algunas propiedades físicas y ácidas del suelo.

      .py-4.py-md-5(titulo="Innovación")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema2/img2-9.png', alt='Vacas')
          .col-md-6
            p La cachaza se identifica como desecho orgánico, por lo que sirve para crear subproductos.
            p Se puede pretender buscar alternativas en productos innovadores que puedan ofrecer alto impacto para el consumo masivo en la agricultura y la ganadería; es de acotar que este elemento no solo se emplea para obtener la tradicional melaza, pues aporta altos valores nutritivos, y sirve para plantas y animales. Un ejemplo de esto, es que se emplea como alimento en bovinos, porcinos y equinos.


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
