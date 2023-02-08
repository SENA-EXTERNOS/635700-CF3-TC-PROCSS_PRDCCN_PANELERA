<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.ct 1
      h1 Materias primas

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(data-aos='fade-right')(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos='fade-left')
        p.mb-0 La panela como insumo rico en azúcar, es el producto transformado gracias a varias etapas de un proceso en el que, por medio de la evaporación, se obtiene el jugo de la caña de azúcar cuando el proceso se efectúa en una en molienda y se consume sin haber sido sometida a refinación. Cabe destacar que el azúcar de mayor uso y consumo común que se encuentra en los supermercados, está constituida por la sacarosa que es obtenida en la molienda donde se exprimen los tallos para conseguir el producto líquido y durante estos eventos de transformación lograr condensar una especie de miel de color oscura que pueda ser llevada fácilmente a los hogares para su aprovechamiento y consumo. El color y la forma resaltan frente a otros alimentos, adicionalmente aporta sustancias como vitaminas y minerales.

    p.mb-5 A continuación, se presenta información relevante sobre las materias primas. Se sugiere leer con atención y tomar nota de los aspectos a considerar para un proceso de producción panelera de calidad.

    .BGIMG01.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) define como azúcar no centrifugado, sin embargo, manifiesta que es un producto que puede ser consumido por la población para permitir el buen desarrollo físico de las personas al igual que el desarrollo intelectual.
          .col-md-6.col-sm-12
            figure
              img(data-aos='fade-left')(src='@/assets/curso/temas/tema1/img1-2b.png', alt='FAO')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Colombia se ha preocupado por la seguridad alimentaria de su población, haciendo énfasis en el desarrollo óptimo de la primera infancia, velando por los derechos de los niños y niñas durante el proceso de crecimiento y desarrollo; la nutrición es uno de los aspectos que más se resalta dado a la obtención de nutrientes que se requiere para un adecuado crecimiento. Es así como el país, ha aprovechado su título como el segundo productor de panela a nivel mundial para mantener la producción alimentaria de miles de familias campesinas a través de la formalización laboral y el emprendimiento de los derivados de la panela, es por ello que muchas de estas personas optaron por cultivar la caña de azúcar con el fin de tener la materia prima al momento de la producción, reduciendo costos, brindando oportunidades de empleo e innovando en la transformación del jugo de la caña para producir panela como uno de sus derivados.
          .col-md-6.col-sm-12
            figure
              img(src='@/assets/curso/temas/tema1/img1-3b.png', alt='Paila revolviendo panela')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p No se puede obviar la importancia de la producción panelera en los renglones de la economía colombiana, esta actividad ha permanecido a lo largo del tiempo, el conocimiento se ha trasmitido de forma empírica a muchas generaciones, convirtiendo el proceso en la principal estrategia productiva y de generación de ingresos para miles de personas dedicadas a la agroindustria, los cuales trabajan en su mayoría en pequeñas fábricas paneleras conocidas como trapiches, donde los procesos de estandarización  no cumplen los requisitos óptimos. Es por ello que cada región donde se realice la fabricación panelera, debe cumplir parámetros para poder efectuarla, según el contexto que indique el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA), haciendo el proceso de registro, acatando las normas y cumpliendo con las buenas prácticas de manufactura.
          .col-md-6.col-sm-12
            figure
              img(src='@/assets/curso/temas/tema1/img1-4b.png', alt='Panelas redondas')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p De lo anterior se puede deducir que el cultivo de la caña de azúcar presenta un gran valor, dado que es considerada la materia prima de mayor importancia en la agroindustria panelera y azucarera, la producción oscila alrededor de 50 millones de toneladas de caña para obtener de allí la sacarosa que se emplea en la preparación de panela y otros derivados.
          .col-md-6.col-sm-12
            figure
              img(src='@/assets/curso/temas/tema1/img1-5b.png', alt='Cultivo de caña')

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Jugos de caña y su clasificación

    p.mb-5 La elaboración de panela en un proceso fisicoquímico en el cual se cuenta con la ayuda de equipos mecánicos industrializados y tratamientos químicos para extraer el jugo de la caña y lograr la transformación del producto terminado.

    p.mb-5 A continuación, se detalla el proceso de elaboración de la panela.

    .BGIMG01.p-4.mb-5(data-aos="fade-right")
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="Paso 1").justify-content-evenly
          .col-md-4.col-sm-12.mb-4.mb-md-0
            figure.mt-4
              img(src='@/assets/curso/temas/tema1/img1-6.svg', alt='Proceso productivo panela')
          .col-md-6
            p.mt-4 Después del corte de caña, se inicia inmediatamente la fase de apronte, que es el almacenamiento de la caña en el patio de trapiche. El efecto del tiempo de apronte depende de las condiciones ambientales y de la variedad, el retraso se manifiesta negativamente sobre el peso de la caña, la inversión de azúcares y por ende en el rendimiento y la calidad de la panela.

        .row(titulo="Paso 2").justify-content-evenly
          .col-md-4.col-sm-12.mb-4.mb-md-0
            figure.mt-4
              img(src='@/assets/curso/temas/tema1/img1-7.png', alt='Molienda')
          .col-md-6
            p.mt-4 Una vez cortada la caña requerida, es necesario aglomerarla en un mismo sitio alrededor del trapiche y posteriormente empezar con la molienda, en el proceso se extrae el jugo de los tallos, esto ocurre al pasarlos por los molinos, donde se obtiene un subproducto llamado bagazo que se utiliza como combustible.

        .row(titulo="Paso 3").justify-content-evenly
          .col-md-4.col-sm-12.mb-4.mb-md-0
            figure.mt-4
              img(src='@/assets/curso/temas/tema1/img1-8.png', alt='Sacarosa cristalizada')
          .col-md-6
            p.mt-4 Mediante el proceso natural de la caña de azúcar, esta origina carbohidratos, celulosa y otros materiales, lo que enriquece la diversificación del producto, dado que, del jugo de sacarosa, se cristaliza y se convierte en un insumo indispensable para dicha industria.

        .row(titulo="Paso 4").justify-content-evenly
          .col-md-4.col-sm-12.mb-4.mb-md-0
            figure.mt-4
              img(src='@/assets/curso/temas/tema1/img1-9.png', alt='Caña de azúcar cortada')
          .col-md-6
            p.mt-4 El dulzor y la pureza del jugo, es decir la concentración de sacarosa se determina a partir de la maduración de la caña de azúcar.

        .row(titulo="Paso 5").justify-content-evenly
          .col-md-4.col-sm-12.mb-4.mb-md-0
            h6.mb-2.text-center.mt-4 Composición química promedio de la caña de azúcar
            figure
              img(data-aos='fade-right')(src='@/assets/curso/temas/tema1/img1-10.svg', alt='Composición química de la caña de azúcar')
              figcaption.mt-2.br Nota: Adaptado de Composición química promedio de la caña de azúcar, (2015).
          .col-md-6
            p.mt-4 La caña está constituida principalmente por agua, fibra y sólidos solubles (especialmente azúcares), adicional a ello, otros compuestos en cantidades menores como minerales, proteínas, ceras, grasas y ácidos que pueden estar en forma libre o combinada.

        .row(titulo="Paso 6").justify-content-evenly
          .col-md-4.col-sm-12.mb-4.mb-md-0
            figure.mt-4
              img(src='@/assets/curso/temas/tema1/img1-11.png', alt='Jugo crudo de caña de azúcar')
          .col-md-6
            p.mt-4 El jugo crudo (guarapo) y sin clarificar, se limpia en frío utilizando un sistema de decantación natural, por efecto de la gravedad denominado prelimpiador. Este retiene la precipitación de una importante proporción de los sólidos contenidos en el jugo de la caña, como tierra, lodo y arena; simultáneamente, por flotación, el prelimpiador separa partículas livianas como bagacillo, hojas, insectos, entre otros. (Cadavid, 2007)

        .row(titulo="Paso 7").justify-content-evenly
          .col-md-4.col-sm-12.mb-4.mb-md-0
            figure.mt-4
              img(data-aos='fade-right')(src='@/assets/curso/temas/tema1/img1-12.svg', alt='Composición del guarapo')
              figcaption.mt-2.br Nota: Adaptado de Cobeña Morán & Loor Chávez, (2016).
          .col-md-6
            p.mt-4 Según la FAO (2013), con respecto a los requisitos físico químicos para el “jugo de caña de azúcar” sólido o en bloque, de acuerdo con los comentarios remitidos y la revisión de los estudios realizados, se incluyó un nivel mínimo del 75 % para azúcares totales, así como también un nivel máximo del 10 % para edulcorantes reductores, dado que, para favorecer la granulometría y reducir los cambios reológicos, es necesario contar con la inversión de la sacarosa. (Cobeña Morán & Loor Chávez, 2016)

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Purificación de jugos

    p.mb-4 Los jugos de la caña de azúcar de buena calidad, tienen un porcentaje aproximado de 16,5 % de sacarosa, de 18 a 22 oBrix, 79 % a 89 % de pureza, menos del 2 % de azúcares reductores, 0,3 % de cenizas, 0,12 % de gomas y pectina, 0,03 % de albúmina, 0,05 % de ácidos libres y menos del 4 % de bagazo y, adicional, la entrada al molino debe oscilar en un espacio que no supere las 24 horas después del corte.

    p.mb-5 A continuación, se expone el proceso de purificación de los jugos:

    .row.mb-5
      .col-lg-4.mb-sm-4(data-aos='fade-right')
        figure
          img(src='@/assets/curso/temas/tema1/img1-13.png', alt="Jugo de caña")
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-verde")
          .row(titulo="La clarificación")
            p Es el proceso panelero que tiene como fin eliminar todos los sólidos que aparecen en los jugos en suspensión, además de las sustancias coloidales y algunos compuestos colorantes presentes en el zumo, por ello, la limpieza ocurre por acción del calentamiento en las hornillas combinado el ejercicio de aglutinamiento de ciertos compuestos naturales (balso, cadillo, juan blanco y el san Joaquín), se maceran las cortezas de las especies hasta obtener un compuesto que unifique las propiedades de dichas plantas.

          div(titulo="Uso de los mucílagos")
            p La corteza clarificante se sumerge en el néctar a una temperatura que oscila entre los 60 °C y 70 °C, no requiere adición extra de agua y se debe tener presente el momento de cambiarla, de no hacerlo disminuye la efectividad y el efecto aglutinante o clarificante restando el uso de la misma corteza.
            p Se separa la solución clarificante depositando la corteza en un recipiente con agua, luego se obtiene una baba la cual se puede aplicar de forma total o fraccionada. Algunos aspectos negativos son: soluciones que contienen mucha agua y poco agente clarificante, esto hace que disminuya el rendimiento de la hornilla y la calidad de la panela; aumenta en el uso del bagazo puesto que se debe evaporar mayor cantidad de agua.
            p La solución clarificante dispuesta debe ser usada en un periodo menor a 4 horas después de la preparación, debido a que puede fermentarse, reduciendo el componente aglutinante.

          div(titulo="Preparación de la solución clarificante")
            p Se realiza con jugo clarificante frio, allí se deposita la corteza. Se sugiere preparar la solución necesaria para el uso dependiendo del volumen de la ceba, de la concentración, variedad de la caña y de la época del año que se hace la molienda, puesto que no debe almacenarse por tiempo prolongados, porque se pueden fermentar.
            p Cada trapiche debe ajustar la dosis al usar los agentes clarificantes: el balso saca la cachaza negra, el cadillo para eliminar la cachaza blanca o balso y juan blanco. No requiere añadir agua adicional.

      h3(data-aos="fade-right")
        i.fas.fa-square.cs.me-3
        |Uso de la cal

      p En el proceso de producción panelera el crudo de los jugos de azúcar se debe reactivar con el uso de cal, para formar un sustrato de calcio insoluble, el cual se filtra para remover los materiales fosfáticos y ácidos orgánicos indeseables.
      p.mb-5 El organizador gráfico que se presenta a continuación, ilustra el uso de la cal en el proceso de producción de la panela.

      .row.justify-content-center.align-items-center
        .col-lg-8.col-sm-9(data-aos="zoom-in")


          .bgRed.p-3.d-flex.my-4.justify-content-around.align-items-center
            img(src='@/assets/curso/temas/tema1/icon_1-4.svg', alt='Uso de la cal en el proceso de producción de la panela', id='iconHeaderInfo').d-none.d-md-inline
            h3.text-white.m-0.ml-3 Uso de la cal en el proceso de producción panelera

          p.text-center.my-4 Para añadir la cal a los jugos deben estar a una temperatura de 60°C, se usa para regular el PH de los jugos.


          .bgGray.p-3.my-4
            h3.text-center.m-0 Regulación del PH

          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/info_1-4.svg', alt='Uso de la cal en el proceso de producción de la panela')
            .tarjeta.img-infografica__tooltip.p-3(x="16%" y="102%" numero="+")
              p Habitualmente el PH de los guarapos oscila entre 5.0 y 5.2 pero deber ser subido a un PH de que varíe entre 5.6 y 5.8 para prevenir la formación de azúcares reductores, además de ayudar a la clarificación que hace flotar la materia orgánica.
            .tarjeta.img-infografica__tooltip.p-3(x="50%" y="102%" numero="+")
              p Se debe añadir la cantidad precisa de la cal hasta el grado de ser alimenticio para evitar que contamine la panela, si se excede la cantidad de cal la panela toma colores oscuros alterando la calidad del producto y bajas concentraciones de cal permite el aumento de azúcares reductores permitiendo la contaminación por hongos reduciendo la vida útil.
            .tarjeta.img-infografica__tooltip.p-3(x="85%" y="102%" numero="+")
              p Para determinar la cantidad de cal que se debe añadir al guarapo, se debe determinar  el PH del guarapo por medio del uso de cintas indicadoras de PH, o instrumentos indicadores de PH, de carecer de estos indicadores, se recomienda aplicar pequeñas cantidades hasta lograr el mejor resultado.


          .bgGray.p-3.mt-4.mb-3
            h3.text-center.m-0 Adicionar los guarapos cuando:

          .bgVainilla.px-5.py-4
            .d-flex.align-items-center.justify-content-start.mb-3
              img(src='@/assets/curso/temas/tema1/icon_li.svg', alt='Icono').icon_li
              p.mx-3.my-0 Cañas de lotes recién desmontados

            .d-flex.align-items-center.justify-content-start.mb-3
              img(src='@/assets/curso/temas/tema1/icon_li.svg', alt='Icono').icon_li
              p.mx-3.my-0 Lotes ricos en materia orgánica

            .d-flex.align-items-center.justify-content-start.mb-3
              img(src='@/assets/curso/temas/tema1/icon_li.svg', alt='Icono').icon_li
              p.mx-3.my-0 Cañas inmaduras

            .d-flex.align-items-center.justify-content-start.mb-3
              img(src='@/assets/curso/temas/tema1/icon_li.svg', alt='Icono').icon_li
              p.mx-3.my-0 Sobremaduras

            .d-flex.align-items-center.justify-content-start.mb-3
              img(src='@/assets/curso/temas/tema1/icon_li.svg', alt='Icono').icon_li
              p.mx-3.my-0 Florecidas

            .d-flex.align-items-center.justify-content-start
              img(src='@/assets/curso/temas/tema1/icon_li.svg', alt='Icono').icon_li
              p.mx-3.my-0 Que han superado el tiempo de apronte de la caña es mayor de cuatro días y tallos afectados por ataque de barrenadores.


    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Operaciones básicas en la obtención de la panela

    .row.justify-content-start.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right").order-lg-first.order-sm-last

        #cajon_t1-3.cajon.tarjeta--curuba.p-5.borde-redondo

          .row.justify-content-start.align-items-center
            .col-lg-9.col-12

              p.mb-0 La panela se ha caracterizado por ser un producto prometedor incluido dentro del consumo de alimentos que se denominan saludables y poco procesados. La limitada evolución tecnológica en el proceso de producción puede comprometer la eficiencia y la rentabilidad, la medida para disponer de la mejor trazabilidad de la panela enfrenta desafíos coordinados como la estandarización del proceso y de las características del producto final, (Guerrero & Escobar, 2015).



    p.mb-5 En la cadena de fabricación panelera se identifican cinco eslabones internos: proveedores, cultivadores, procesadores, comercializadores y clientes. En los procesadores de la caña panelera en su mayoría son los dueños de pequeñas y medianas unidades de producción conocidos como trapiches.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.bgGray-2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img1-16.svg' alt='Proveedores' width='150px' height='150px')
        h2.text-center Proveedores
        p.text-center Consiste en brindar al panelero la materia prima requerida de acuerdo a las especificaciones previstas por la empresa.

      .tarjeta.bgGray-2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img1-17.svg' alt='Cultivadores' width='150px' height='150px')
        h2.text-center Cultivadores
        p.text-center Personas encargadas de cultivar, cuidar y cortar la materia prima para el proceso de fabricación.

      .tarjeta.bgGray-2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img1-18.svg' alt='Procesadores' width='150px' height='150px')
        h2.text-center Procesadores
        p.text-center Se tiene en cuenta la mayor parte de los dueños de pequeñas y medianas unidades de producción conocidos como trapiches.

      .tarjeta.bgGray-2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img1-19.svg' alt='Comercializadores' width='150px' height='150px')
        h2.text-center Comercializadores
        p.text-center Es la persona o empresa que se encarga de distribuir el producto final. Debe capacitarse en estrategias de mercado para lograr un buen posicionamiento.

      .tarjeta.bgGray-2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img1-20.svg' alt='Clientes' width='150px' height='150px')
        h2.text-center Clientes
        p.text-center Persona que compra en un establecimiento comercial o público el producto que necesita con llamativa presentación como en el caso de la panela.

    p.mb-5 Uno de los pasos que se realiza, tiene que ver con los procesadores; encargados de la evaporación del agua que destila el jugo de la caña, para posteriormente batirlo; en esta etapa se requiere de una batea amplia donde el enfriamiento de la miel ocurra en el menor tiempo posible. Luego se deposita el melao en el contenedor de acero y posteriormente se procede a moverlo con el uso de una espátula, esto ayuda a que la miel conserve el color, evitando el uso de anilinas. El batido permite cambiarle la estructura y textura al melao, además de reducir la capacidad de adherencia.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(data-aos='fade-right')(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1-21.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos='fade-left')
        p.mb-0 Las melazas son sometidas a una agitación inicial que va de tres o cuatro minutos, luego se debe dejar en reposo, para que el aire que fluye por la miel le ayude a subir, aquí se debe reiniciar la agitación, este es un paso importante dado a las características del grano, dureza, color y textura. La velocidad e intensidad de la agitación determinan el estado final de la panela.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Elementos de protección personal


    .row.justify-content-start.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right").order-lg-first.order-sm-last

        #cajon_t1-4.cajon.tarjeta--curuba.p-5.borde-redondo

          .row.justify-content-start.align-items-center
            .col-lg-8.col-12

              p.mb-0 El proceso de producción, debe ejecutarse bajo el paso de la extracción del zumo de la caña; allí se evidencian peligros variados para los trabajadores y, es de acotar que, en el 80 % de los trapiches se labora de manera informal, el personal es diverso, no distingue género ni edad, por lo que se presume que se efectúa desde la informalidad; en su mayoría, gente de bajo nivel educativo y, por ello, prefieren obviar los elementos de protección personal, lo que aumenta el riesgo de situaciones peligrosas, dejando como consecuencia, lesiones, heridas, e incluso amputaciones de miembros, durante el proceso de fabricación.


    p.mb-5 La resolución número 2546 de 2004 del Ministerio de Protección Social, establece el reglamento técnico de emergencia a través del cual se señala los requisitos sanitarios que se deben cumplir en la producción y comercialización de la panela para el consumo humano y se dictan otras disposiciones (Ministerio de Protección Social, 2004), a continuación, se dan a conocer algunos de los requisitos que deben ser considerados:

    .row.justify.content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos='fade-right')
        figure
          img(src='@/assets/curso/temas/tema1/img1-23.svg', alt="EPP")
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-verde")
          .row(titulo="Sobre la salud ocupacional")
            p a. El establecimiento debe disponer de un botiquín con la dotación adecuada.
            p b. El personal requiere contar con indumentaria acorde, que cumpla con la reglamentación de seguridad industrial.
            p c. Las áreas de riesgo deben estar claramente identificadas y demarcadas.

          div(titulo="Sobre el personal capacitado")
            p Deben contar con conocimientos referentes a la normatividad sanitaria y el cumplimiento de las buenas prácticas de manufactura dentro de las instalaciones, priorizando el área de moldeo y almacenamiento, entre otros. Se incluyó formación básica sobre los programas que son exigidos por el INVIMA, como: control de plagas, capacitación, limpieza y desinfección. (Rozo, 2013)

          div(titulo="Sobre el uso de elementos de protección personal")
            ol
              li.mb-3
                i.fas.fa-circle.ct.me-3
                | #[b Lavado de manos:]
                |esta práctica permite el cuidado y preservación del producto, por lo que es de obligatorio cumplimiento dentro de las instalaciones.
              li.mb-3
                i.fas.fa-circle.ct.me-3
                | #[b Uso de dotación personal:]
                |se debe disponer de un botiquín con los elementos necesarios para atender emergencias, las áreas de riesgo deben estar claramente identificadas, el personal debe contar con implementos de bioseguridad para evitar el contacto directo con elementos de riesgo que puedan generar una lesión o enfermedad.
              li.mb-3
                i.fas.fa-circle.ct.me-3
                | #[b Comportamiento dentro de las zonas de producción:]
                |la atención y la optimización del tiempo, son propicias para prevenir accidentes, es por ello que se debe evitar acciones diferentes a las laborales, reduciendo los riesgos de contaminación, daño y/o pérdida del producto.
              li.mb-3
                i.fas.fa-circle.ct.me-3
                | #[b Conocimiento de la normatividad:]
                |hace referencia a la apropiación de conocimiento específico de un tema, en este caso normas para la protección y el desarrollo de la producción de la panela, al igual que la cuota de fomento panelero.
          div(titulo="Sobre el análisis de riesgos en seguridad y salud en el trabajo")
            p Se debe identificar a través del análisis de riesgos en seguridad y salud en el trabajo, además de la gestión en saneamiento básico, como la implementación de las BPM, las cuales son de gran ayuda para mejorar condiciones relacionadas con riesgos ocupacionales, procurando el autocuidado, protección del trabajador y conservación del entorno (Regino et al., 2019).
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
figcaption.br
  border-radius: 12px;
.mt-2.br

.bgRed
  background: #E53935

.bgGray
  background: #DEE4F0

.bgVainilla
  background: #F9F7EC

.icon_li
  width: 29px
  height: 29px

#iconHeaderInfo
  width: 80px
  height: 76px

#cajon_t1-3
  position: relative
  &:after
    content: ''
    display: block
    position: absolute
    bottom: 0
    right: -150px
    width: 420px
    height: 306px
    background-image: url("../assets/curso/temas/tema1/img1-15.svg")

#cajon_t1-4
  position: relative
  &:after
    content: ''
    display: block
    position: absolute
    bottom: 0
    right: -190px
    width: 524px
    height: 335px
    background-image: url("../assets/curso/temas/tema1/img1-22.svg")

@media screen and (max-width: 400px)
  #cajon_t1-3,#cajon_t1-4
    position: relative
    &:after
      content: ''
      display: none
      position: absolute
      bottom: 0
      right: 0
      width: 0
      height: 0
</style>
