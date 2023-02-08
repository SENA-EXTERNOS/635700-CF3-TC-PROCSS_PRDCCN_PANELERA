export default {
  global: {
    componenteFormativo: 'Limpieza de jugo de caña',
    descripcionCurso:
      'La producción panelera en Colombia supera el millón y medio de toneladas anuales, lo que lo convierte en uno de los países de mayor producción mundial. La proyección para los próximos años estima sobrepasar la cantidad actual, a través de la optimización de procesos y las tendencias de hábitos de consumo saludables.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Materias primas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Jugos de la caña y su clasificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Purificación de jugos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Operaciones básicas para la obtención de la panela',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Elementos de protección',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de limpieza del jugo de caña',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Requerimientos técnicos y normativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Buenas Prácticas de Manufactura (BPM)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Concepto sanitario',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Normativa ambiental',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Ajuste de técnicas',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Procedimientos y reportes',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Jugos de la caña y su clasificación',
      referencia:
        'La Casa de la Cultura Talea de Castro Talea. (2014). <em>Elaboración de la panela con jugo de caña</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SMn6lddVaZI',
    },
    {
      tema: 'Jugos de la caña y su clasificación',
      referencia:
        'Lara Lorena. (2017). <em>Jugo de caña natural-elaboración</em>(video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XCZ8J1tmoh0',
    },
    {
      tema: 'Jugos de la caña y su clasificación',
      referencia:
        'AgrosaviaTV. (2021). <em>Especies vegetales utilizadas en la clarificación de los jugos de caña para la elaboración de panela</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=N0SyD_4mUg8',
    },
    {
      tema: 'Técnicas de limpieza del jugo de la caña',
      referencia:
        'Fedepanela. (2019). <em>Buenas Prácticas de Manufactura Trapiche Panelero</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iuW5c9LgQys',
    },
  ],
  glosario: [
    {
      termino: 'Batido',
      significado:
        'se refiere a la acción de agitación intensiva e intermitente de la panela líquida, con el propósito de cambiarle la estructura y textura, además de hacerle perder su capacidad de adherencia.',
    },
    {
      termino: 'Buenas prácticas de manufactura',
      significado:
        'son las normas establecidas de manera oficial que regulan a las plantas procesadoras de alimentos, en cuanto a los procedimientos de fabricación, limpieza y desinfección, la higiene personal, la manipulación, los controles, registros, almacenamiento, que garantizan calidad y seguridad alimentaria.',
    },
    {
      termino: 'Cachaza',
      significado:
        'es un residuo de la industria azucarera que se forma a partir de los lodos formados por las impurezas, ceras, hidrocarburos y azucares que aporta la caña. <br>El abono orgánico es un compuesto producido con materiales de origen animal o vegetal, el cual tiene como finalidad suministrar nutrientes a las plantas. Es así, que la cachaza, residuo de la agroindustria azucarera, por su composición mayormente orgánica han sido utilizados como enmiendas en los campos cañeros.',
    },
    {
      termino: 'Cal',
      significado:
        'sustancia alcalina constituida por óxido de calcio, de color blanco o grisáceo, que al contacto del agua se hidrata o se apaga, con desprendimiento de calor, y mezclada con arena forma la argamasa o mortero.',
    },
    {
      termino: 'Clarificación',
      significado:
        'consiste en separar los no azúcares, en las tintas de clarificación, donde la temperatura es menor que en las tinas de ebullición y punteo.',
    },
    {
      termino: 'Jugo clarificado',
      significado:
        'producto final libre de impurezas con excelentes características de color y sabor.',
    },
    {
      termino: 'Materia prima',
      significado:
        'insumo que una industria o fabricación necesita para transformarla en un producto.',
    },
    {
      termino: 'Mucilagos',
      significado:
        'sustancias viscosas extraídas de los tallos, hojas, frutos y raíces macerados de alguna especie, que, al entrar en contacto con el agua o el jugo de caña, más la acción del calor, eliminan los sólidos en suspensión, las sustancias coloidales y algunos compuestos colorantes presentes en el jugo, luego se forma la cachaza del jugo limpio por métodos físicos.',
    },
    {
      termino: 'No azúcares',
      significado:
        'impurezas propias del jugo como: gomas, ceras, grasas, pigmentos entre otros.',
    },
    {
      termino: 'Prelimpieza',
      significado:
        'Consiste en un proceso de lavado y una concentración de jugos más rápidos.',
    },
    {
      termino: 'Sacarosa',
      significado:
        'comúnmente conocida como azúcar de mesa, está formada a partir de dos monosacáridos la glucosa y la fructuosa, creando o de esta manera un disacárido. En la naturaleza se encuentra en un 20 % del peso en la caña de azúcar y en un 15 % del peso de la remolacha azucarera. Las plantas son capaces de sintetizar este disacárido por medio del proceso llamado fotosíntesis y es la forma más frecuente para mover azucares desde las hojas a otros órganos vegetales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cadavid, G. O. (2007). <em>Buenas Prácticas Agrícolas Manufactura. Buenas Prácticas D E</em>.',
    },
    {
      referencia:
        'Cadavid, G. O. (2007). Extracción de jugos. <em>Organización de Las Naciones Unidas Para La Agricultura y La Alimentación (FAO)</em>.',
      link: 'https://www.fao.org/3/a1525s/a1525s00.pdf',
    },
    {
      referencia:
        'Cobeña Morán, J. et al. (2016). <em>Caracterización físico-químicas del jugo de cinco variedades de caña de azúcar (Saccharum officinarum) en la hacienda El Jardín</em>. Escuela Superior Politécnica.',
      link: 'http://repositorio.espam.edu.ec/bitstream/42000/264/1/TAI105.pdf',
    },
    {
      referencia:
        'Farfán, K. et al. (2015). Diseño de una línea de producción de panela granulada. <em>Repositorio Institucional PIRHUA, 14</em>, 111.',
    },
    {
      referencia:
        'Guerrero, M. & Escobar, J. (2015). <em>Eficiencia técnica de la producción de panela</em>. ResearchGate.',
      link:
        'https://www.researchgate.net/publication/304583264_Eficiencia_tecnica_de_la_produccion_de_panela_The_technical_efficiency_of_Non_Centrifugal_Sugar_production',
    },
    {
      referencia:
        'Mendieta, O. et al. (2016), <em>Las buenas prácticas de manufactura en la producción de panela</em>.',
    },
    {
      referencia:
        'Resolución número 779 de 2006 [Ministerio de la Protección Social]. De Trapiches paneleros y centrales de acopio de mieles. 17 de Marzo de 2006.',
    },
    {
      referencia:
        'Resolución 002546 de 2004. [Ministerio de Protección Social]. Por la cual se establece el reglamento técnico de emergencia a través del cual se señala los requisitos sanitarios que se deben cumplir en la producción y comercialización de la panela para el consumo humano y se dictan otras disposiciones. Agosto 6 de 2004.',
    },
    {
      referencia:
        'Ley 09 de 1979. Establece las normas sanitarias para la prevención y control de los agentes biológicos, físicos o químicos que alteran las características del ambiente exterior de las edificaciones hasta hacerlo peligroso para la salud humana. 16 de julio de 1979. D.O No. 35308.',
    },
    {
      referencia:
        'Resolución 2674 de 2013. [Ministerio de Protección Social] Por la cual se reglamenta el artículo 126 del Decreto Ley 019 de 2012 y se dictan otras disposiciones. 22 de julio de 2013.',
    },
    {
      referencia:
        'Quezada, W. (2007), <em>Guía Técnica de Agroindustria Panelera</em>.',
      link:
        'http://repositorio.utn.edu.ec/bitstream/123456789/934/1/Guía Técnica de Agroindustria Panelera.pdf',
    },
    {
      referencia:
        'Sagarpa. (2015). <em>Comité Nacional para el Desarrollo Sustentable de la Caña de Azúcar  (Saccharum Officinarum L )</em>. ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
