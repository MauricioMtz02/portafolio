export const listProjects = [
  {
    id: 1,
    title: 'Sistema de Pedidos',
    description: 'Un sistema realizado para gestionar pedidos, consultar el estatus de cada uno y consultar en el menú los productos disponibles junto con sus tamaños e ingredientes extra. Existe un registro de los clientes y sus direcciones para asignar a cada pedido. De igual forma es posible seleccionar el mesero o responsable de tomar el pedido. El sistema se realizó para una pizzería, por lo que se desarrolló un módulo que permite combinar ingredientes para dar como resultado una pizza al gusto del cliente.',
    content: `

    `,
    picture: 'point.jpg',
    link: '',
    url: 'sistema-de-pedidos',
    rolId: 1
  },
  {
    id: 2,
    title: 'Web Blog',
    description: 'En el web blog es posible crear categorías para cada artículo, se cuenta con un panel administrativo para gestionar las redes sociales, mensajes recibidos por el formulario y usuarios con permiso para entrar al sistema. Desde el panel administrativo se crean los artículos y las categorías. Se incorporó un editor de texto enriquecido (CKEditor) para escribir los artículos.',
    content: `

    `,
    picture: 'mulata.jpg',
    link: 'https://www.lamulatadecordoba.com.mx/',
    url: 'web-blog',
    rolId: 1
  },
  {
    id: 3,
    title: 'Sistema Web Barberia',
    description: 'El sistema permite a los clientes registrarse dentro del sitio, con una cuenta es posible agendar citas, seleccionar los servicios, escribir recomendaciones y recuperar su cuenta en caso de olvidar la contraseña. Se desarrolló un servicio de envío de correos electrónicos, cuando el cliente se registra se confirma a través de su correo, al igual que cuando agenda una cita, los datos de la misma se envían por correo electrónico. El sistema cuenta con un panel administrador donde se pueden consultar las citas pendientes del día, registrar barberos y consultar los servicios que realizaron en determinada fecha.',
    content: `

    `,
    picture: 'barberia.jpg',
    link: 'https://izquierdos-barber.com/',
    url: 'sistema-web-barberia',
    rolId: 1
  },
  {
    id: 4,
    title: 'Control de Inventario',
    description: 'En la aplicación se pueden registrar categorías, productos y usuarios. Los productos forman parte del inventario, estos tienen un stock que se va alimentando de la lista de compras y disposiciones. El sistema genera reportes por periodo, donde se destacan los productos más costosos y más solicitados. Se cuenta con dos roles para los usuarios dentro del sistema (Administradores y trabajadores), cada uno tiene sus restricciones y operaciones.',
    content: `

    `,
    picture: 'inventario.jpg',
    link: '',
    url: 'control-de-inventario',
    rolId: 2
  },
  {
    id: 5,
    title: 'Menú Digital',
    description: 'Dentro del menú es posible consultar los productos y categorías a las que pertenecen. El sitio está orientado a los clientes y este mismo permite generar una plantilla de pedido que se envía al whatsapp del negocio utilizando la API de Whatsapp. Dentro del sitio uno puede seleccionar el producto, su tamaño y cantidad. También cuenta con un módulo para armar una pizza al gusto del cliente, donde puede escoger el tamaño, los ingredientes de su pizza y los ingredientes extra en caso de ser requeridos.',
    content: `

    `,
    picture: 'menu.jpg',
    link: '',
    url: 'menu-digital',
    rolId: 3
  }
]