<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.ct 3
      h1 Requerimientos técnicos y normativos

    p.mb-5 El video que se presenta, ilustra de manera general los requerimientos técnicos y normativos. Se recomienda observar con atención y tomar nota de los aspectos que considere relevantes:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Buenas Prácticas de Manufactura (BPM)

    p.mb-5 Según el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (Invima), las Buenas Prácticas de Manufactura son los requerimientos generales de higiene en la manipulación, preparación, envasado, almacenamiento, transporte y distribución de alimentos para consumo humano, con el objeto de garantizar la calidad de los mismos en cada una de las operaciones mencionadas, velando que cumplan con las condiciones sanitarias adecuadas, disminuyendo los riesgos inherentes a la producción. El Invima es una de las autoridades sanitarias encargadas de vigilar estas prácticas BPM y emitir conceptos sanitarios frente a las mismas.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(data-aos='fade-right')(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img3-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos='fade-left')
        p.mb-0 Las buenas prácticas de manufactura, constituyen un acúmulo de principios con el objetivo de certificar los productos cuya fabricación se haga en condiciones sanitarias apropiadas y de esta manera minimicen los riesgos que lleva consigo la producción de panela y su distribución. Por eso la implementación de las BPM en la industria panelera deben asegurar la calidad, sanidad e inocuidad, aplicando los procesos de elaboración y manipulación para la obtención de productos óptimos para el consumo. (Regino et al., 2019), (Mendieta et al., 2016).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(data-aos='fade-left')(src='@/assets/curso/temas/tema3/img3-2.svg', alt='Película')
      .col-md-5
        p Para profundizar en el estudio de las Buenas Prácticas de Manufactura, te invitamos a observar el siguiente video:
        p
          b “Buenas Prácticas de Manufactura Trapiche panelero”
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=iuW5c9LgQys" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/temas/tema3/icono-link.svg")
          .anexo__texto
            p 
              b Fedepanela. (2019), 
              |Buenas Prácticas de Manufactura Trapiche Panelero

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Concepto sanitario

    p Hace referencia al criterio emitido por la autoridad sanitaria una vez realizada la inspección, vigilancia y control al establecimiento donde se fabrique, procese, prepare, envase, almacene, transporte, distribuyan, comercialicen, importen o exporten alimentos o materias primas.
    p.mb-5 El concepto refleja el porcentaje de cumplimiento de la normatividad de la siguiente manera:

    .tarjeta.tarjeta--rosa2.p-4.mb-5
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p
              b Resolución 779 de 2006
            p Por la cual se establece el reglamento técnico sobre los requisitos sanitarios que se deben cumplir en la producción y comercialización de la panela para consumo humano y se dictan otras disposiciones.
            p La Ley 40 de 1990 reconoce la producción de panela como una actividad agrícola desarrollada en explotaciones que, mediante la utilización de trapiches, tengan como fin principal la siembra de caña con el propósito de hacer panela y mieles vírgenes para el consumo humano y señala en el parágrafo del artículo 4º, que le corresponde a este Ministerio establecer los mecanismos de control que deben ser aplicados por las alcaldías municipales, en coordinación con las secretarías o servicios de salud departamentales (Recomendación estudiar la resolución 779 de 2006).
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 10.
              br
              em Requisitos BPM producción panelera
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema3/img3-3.svg', alt='Requisitos BPM producción panelera')
              figcaption Nota: Adaptado de la Resolución 779/2006

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p
              b Requisitos de calidad de la panela
            p Que la panela es un producto con un importante valor nutricional, de alto consumo especialmente en la dieta de la población infantil.
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2.
              br
              em Requisitos fisicoquímicos
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema3/img3-4.svg', alt='Requisitos fisicoquímicos')
              figcaption Tomada de (García, n.d.)

        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            p
              b Decreto 3075 de 1997
            p Las buenas prácticas de manufactura son los métodos necesarios para obtener alimentos inocuos, saludables y sanos, se estipulan por el decreto 3075 de 1997 que establece los requerimientos para la fabricación de alimentos.
            p La creciente demanda para obtener alimentos derivados de la industria panelera y el deseo de brindar productos de menor calidad, ha creado la obligación de seguir las buenas prácticas de la manufactura, puesto que la seguridad de los alimentos se ha convertido en una prioridad para los consumidores. Lo anterior obliga a las empresas a mejorar los esquemas de protección de alimentos y por ello el decreto 3075 de 1997, brinda las estrategias exactas para mejor la calidad de los mismos.
            p Todas las personas que realizan actividades de manipulación de panela, deben tener capacitación en prácticas higiénicas de manipulación de alimentos de acuerdo a lo establecido en el Título II Capítulo III, Decreto 3075 de 1997; (Ministerio de Salud, 1992).
          .col-xl-3
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema3/img3-5.svg', alt='Mazo')

        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            p
              b Resolución 2674 de 2013
            p La resolución 2674 de 2013 establece los requisitos y condiciones bajo las cuales el Instituto Nacional de Medicamentos y Alimentos INVIMA como autoridad sanitaria del orden nacional, deberá expedir los registros, permisos o notificaciones sanitarias (Ministerio de salud y protección social, 2013).
          .col-xl-3
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema3/img3-6.svg', alt='Mazo')

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Normativa ambiental

    p.mb-5 Como su nombre lo indica se refiere al cuidado del entorno y los recursos naturales. En este documento de estudio se ha hecho hincapié en este item, para minimizar la producción de desechos generados del proceso panelero y mitigar el impacto negativo al ambiente, adicional a ello, los estatutos procuran soportar la economía de todas las actividades realizadas durante la estandarización en la elaboración de panela. Las resoluciones colombianas expiden una serie de leyes que regulan las actividades para dar la tranquilidad, sin que puedan afectar la salud del consumidor.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(data-aos='fade-left')(src='@/assets/curso/temas/tema3/img3-7.svg', alt='Mazo')
      .col-md-9
        p.mb-5 Por las particularidades del proceso productivo, las materias primas e insumos que generalmente son utilizados y los desechos que pueden ser originados; las normas deben ser acatadas en un estricto orden en este ítem se nombran las normativas que rigen para el sector panelero:
        h5.mb-4 Decreto 1076 2015 (mayo 26 de 2015): Sector Ambiente y Desarrollo Sostenible
        ol
          li.mb-3
            i.fas.fa-circle.ct.me-3
            |Que la producción normativa ocupa un espacio central en la implementación de políticas públicas, siendo el medio a través del cual se estructuran los instrumentos jurídicos que materializan en gran parte las decisiones del Estado.
          li.mb-3
            i.fas.fa-circle.ct.me-3
            |Que la racionalización y simplificación del ordenamiento jurídico es una de las principales herramientas para asegurar la eficiencia económica y social del sistema legal y para afianzar la seguridad jurídica.

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Ajuste de técnicas

    p.mb-5 Las técnicas de producción panelera deben ser ajustadas a las condiciones de cada trapiche, dado a que los requerimientos van a depender de características de cada región.
    p.mb-5 A continuación, se presentan algunas técnicas en la producción panelera:

    .row.mb-5
      .col-xl-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3-8.svg')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    p La producción de panela se realiza mediante procesos artesanales donde prevalece el trabajo familiar, determinadas condiciones según la región y una baja implementación de la tecnología y las buenas prácticas de manufactura.
      .col-xl-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3-9.svg')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    p La caña de azúcar puede variar la concentración de azúcares por los valores nutritivos que aportan las zonas donde son cultivadas, además, los porcentajes de vitaminas, minerales y moléculas dependerán del tipo de suelo enriquecido.
      .col-xl-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3-10.svg')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    p La cantidad de cachaza es alterada por las características de la caña.
    .row.mb-5
      .col-xl-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3-11.svg')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    p Cada trapiche usa diferentes mucílagos al tener variedad de plantasen las regiones, algunos con mejores propiedades y esas particularidades brindan las características en el proceso de clarificación.
      .col-xl-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3-12.svg')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    p Los valores de PH no presentan el mismo rango y el uso de sustancias como la cal, tiene la propiedad de regular el valor del jugo de la caña, esto depende de la experticia y habilidad de los trabajadores.
      .col-xl-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3-13.svg')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    p Gracias a las buenas prácticas de manufactura puede estandarizarse cada etapa del proceso dependiendo de cada región o de las características de la materia prima, evitando posibles ajustes durante el proceso de producción panelera.

    Separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.5 Procedimientos y reportes

    p.mb-5 En el siguiente apartado, se hace mención a la importancia de contar con documentos que garanticen el cumplimiento de los requisitos en la calidad de la producción panelera.
    p.mb-5 Con el fin de garantizar el cumplimiento de las BPM en el proceso de producción panelera, y a su vez la inocuidad y calidad, se hace importante contar con documentos que declaren el cumplimiento de requisitos. A continuación, se presentan algunos de ellos, haciendo hincapié en los principales documentos necesarios en la producción (Mendieta et al., 2016).

    .row.mb-5
      .col-md-4
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/tema3/img3-14.svg', alt="Reportes")
      .col-md-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--acordeon")
          .row(titulo="La documentación")
            .col-md-2
              figure
                img(data-aos='fade-right')(src='@/assets/curso/temas/tema3/img3-15.svg', alt="Documentos")
            .col-md-10
              p Si la información no se documenta, no existe la certeza que se cumplan los requerimientos y se puede interpretar improvisación en los procedimientos, aspecto que pueden llegar a la pérdida de control, no obstante, se debe tener presente que los papeles son útiles cuando son sencillos y bien elaborados, además, se debe conocer los objetivos y de este modo sintetizar el trabajo.
          
          div(titulo="La trazabilidad interna")
            .row
              .col-md-2
                figure
                  img(data-aos='fade-right')(src='@/assets/curso/temas/tema3/img3-16.svg', alt="Trazabilidad")
              .col-md-10
                p Adicionalmente, uno de los aspectos que demanda el mercado internacional de la panela, y que debe ser abordado por la unidad productiva, es la trazabilidad interna, asociada a las características (físicas, químicas y organolépticas) y a la manipulación del producto, las operaciones del proceso (equipos y condiciones de operación) y los demás factores de fabricación.

          div(titulo="Los procedimientos")
            .row
              .col-md-2
                figure
                  img(data-aos='fade-right')(src='@/assets/curso/temas/tema3/img3-17.svg', alt="Procedimientos")
              .col-md-10
                p Los procedimientos son un método o modo de ejecutar las actividades. Sobresalen los siguientes: trámite de control de producción, control de plagas, retiro de productos, validación del programa de saneamiento, inspección de proveedores y retiro de productos no conformes.

          div(titulo="Los instructivos")
            .row
              .col-md-2
                figure
                  img(data-aos='fade-right')(src='@/assets/curso/temas/tema3/img3-18.svg', alt="Instructivo")
              .col-md-10
                p Los instructivos de trabajo son documentos que contienen directrices escritas para una actividad específica, como: la limpieza, desinfección, disposición final de desechos.

          div(titulo="Otros requerimientos")
            .row
              .col-md-2
                figure
                  img(data-aos='fade-right')(src='@/assets/curso/temas/tema3/img3-19.svg', alt="Hojas")
              .col-md-10
                p Otros archivos para tener en cuenta o diligenciar son: listado maestro, vigilancia sanitaria, registro sanitario, inspección, fichas técnicas, programas, entre otros.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.p-4
        .cajon.color-secundadrio.p-4.mb-5(style="background-color: #FCF0E5")
          p.mb-0
            b ¡Felicitaciones! 
            |Ha finalizado la temática de este componente formativo a través del cual ha aprendido sobre la limpieza del jugo de caña. Ahora le invitamos a estudiar la síntesis, para recordar de forma general los saberes que se han desarrollado y posteriormente contestar la actividad de aprendizaje donde podrá poner a prueba lo aprendido. consultar el material complementario y el glosario servirá como refuerzo y profundización.
 
</template>

<script>
export default {
  name: 'Tema3',
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
