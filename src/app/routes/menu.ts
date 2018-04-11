
const Home = {
    text: 'Home',
    link: '/dashboard/v1',
    icon: 'icon-home'
};

const Dashboard = {
    text: 'Cuadro de mando',
    link: '/dashboard',
    icon: 'icon-speedometer',
    submenu: [
        {
            text: 'Dashbord v1',
            link: '/dashboard/v1'
        },
        {
            text: 'Dashbord v2',
            link: '/dashboard/v2'
        },
        {
            text: 'Dashbord v3',
            link: '/dashboard/v3'
        }
    ]
};

const Tareas =   {
    text: 'Mis tareas',
    link: '/extras/todolist',
    icon: 'icon-list'
};

const Agenda = {
    text: 'Agenda',
    link: '/extras/calendar',
    icon: 'icon-calendar'
}


const Widgets = {
    text: 'Widgets',
    link: '/widgets',
    icon: 'icon-grid'
};

const Ayuda = {
    text: 'Faq',
    link: '/extras/faq',
    icon: 'icon-compass'
}

const Elements = {
    text: 'Elements',
    link: '/elements',
    icon: 'icon-chemistry',
    submenu: [
        {
            text: 'Buttons',
            link: '/elements/buttons'
        },
        {
            text: 'Interaction',
            link: '/elements/interaction'
        },
        {
            text: 'Notification',
            link: '/elements/notification'
        },
        {
            text: 'SweetAlert',
            link: '/elements/sweetalert'
        },
        {
            text: 'Spinners',
            link: '/elements/spinners'
        },
        {
            text: 'Dropdown',
            link: '/elements/dropdown'
        },
        {
            text: 'Nav Tree',
            link: '/elements/navtree'
        },
        {
            text: 'Sortable',
            link: '/elements/sortable'
        },
        {
            text: 'Grid',
            link: '/elements/grid'
        },
        {
            text: 'Grid Masonry',
            link: '/elements/gridmasonry'
        },
        {
            text: 'Typography',
            link: '/elements/typography'
        },
        {
            text: 'Font Icons',
            link: '/elements/iconsfont'
        },
        {
            text: 'Weahter Icons',
            link: '/elements/iconsweather'
        },
        {
            text: 'Colors',
            link: '/elements/colors'
        },
        {
            text: 'Infinite Scroll',
            link: '/elements/infinitescroll'
        }
    ]
};

const Forms = {
    text: 'Forms',
    link: '/forms',
    icon: 'icon-note',
    submenu: [
        {
            text: 'Standard',
            link: '/forms/standard'
        },
        {
            text: 'Extended',
            link: '/forms/extended'
        },
        {
            text: 'Validation',
            link: '/forms/validation'
        },
        {
            text: 'Upload',
            link: '/forms/upload'
        },
        {
            text: 'Image Crop',
            link: '/forms/cropper'
        }
    ]
};

const Charts = {
    text: 'Charts',
    link: '/charts',
    icon: 'icon-graph',
    submenu: [
        {
            text: 'Flot',
            link: '/charts/flot'
        },
        {
            text: 'Radial',
            link: '/charts/radial'
        },
        {
            text: 'ChartJS',
            link: '/charts/chartjs'
        }
    ]
};

const Tables = {
    text: 'Tables',
    link: '/tables',
    icon: 'icon-grid',
    submenu: [
        {
            text: 'Standard',
            link: '/tables/standard'
        },
        {
            text: 'Extended',
            link: '/tables/extended'
        },
        {
            text: 'Data-Tables',
            link: '/tables/datatable'
        },
        {
            text: 'Angular Grid',
            link: '/tables/aggrid'
        },
        {
            text: 'NGxDatatables',
            link: '/tables/ngxdatatable'
        }
    ]
};

const Maps = {
    text: 'Maps',
    link: '/maps',
    icon: 'icon-map',
    submenu: [
        {
            text: 'Google',
            link: '/maps/google'
        },
        {
            text: 'Vector',
            link: '/maps/vector'
        }
    ]
};

const Pages = {
    text: 'Pages',
    link: '/pages',
    icon: 'icon-doc',
    submenu: [
        {
            text: 'Login',
            link: '/login'
        },
        {
            text: 'Register',
            link: '/register'
        },
        {
            text: 'Recover',
            link: '/recover'
        },
        {
            text: 'Lock',
            link: '/lock'
        },
        {
            text: '404',
            link: '/404'
        },
        {
            text: '500',
            link: '/500'
        },
        {
            text: 'Maintenance',
            link: '/maintenance'
        }
    ]
};

const Blog = {
    text: 'Blog',
    link: '/blog',
    icon: 'icon-notebook',
    submenu: [
        {
            text: 'List',
            link: '/blog/list'
        },
        {
            text: 'Post',
            link: '/blog/post'
        },
        {
            text: 'Articles',
            link: '/blog/articles'
        },
        {
            text: 'Article View',
            link: '/blog/articleview'
        }
    ]
}

const Ecommerce = {
    text: 'Ecommerce',
    link: '/ecommerce',
    icon: 'icon-basket-loaded',
    submenu: [
        {
            text: 'Orders',
            link: '/ecommerce/orders'
        },
        {
            text: 'Order View',
            link: '/ecommerce/orderview'
        },
        {
            text: 'Products',
            link: '/ecommerce/products'
        },
        {
            text: 'Product View',
            link: '/ecommerce/productview'
        },
        {
            text: 'Checkout',
            link: '/ecommerce/checkout'
        }
    ]
}

const Extras = {
    text: 'Extras',
    link: '/extras',
    icon: 'icon-cup',
    submenu: [
        {
            text: 'Contacts',
            link: '/extras/contacts'
        },
        {
            text: 'Contact details',
            link: '/extras/contactdetails'
        },
        {
            text: 'Projects',
            link: '/extras/projects'
        },
        {
            text: 'Projects details',
            link: '/extras/projectsdetails'
        },
        {
            text: 'Team Viewer',
            link: '/extras/teamviewer'
        },
        {
            text: 'Social Board',
            link: '/extras/socialboard'
        },
        {
            text: 'Vote links',
            link: '/extras/votelinks'
        },
        {
            text: 'Bug tracker',
            link: '/extras/bugtracker'
        },
        {
            text: 'Faq',
            link: '/extras/faq'
        },
        {
            text: 'Help center',
            link: '/extras/helpcenter'
        },
        {
            text: 'Followers',
            link: '/extras/followers'
        },
        {
            text: 'Settings',
            link: '/extras/settings'
        },
        {
            text: 'Plans',
            link: '/extras/plans'
        },
        {
            text: 'File manager',
            link: '/extras/filemanager'
        },
        {
            text: 'Forum',
            link: '/extras/forum'
        },
        {
            text: 'Mailbox',
            link: '/extras/mailbox'
        },
        {
            text: 'Timeline',
            link: '/extras/timeline'
        },
        {
            text: 'Calendar',
            link: '/extras/calendar'
        },
        {
            text: 'Invoice',
            link: '/extras/invoice'
        },
        {
            text: 'Search',
            link: '/extras/search'
        },
        {
            text: 'Todo list',
            link: '/extras/todolist'
        },
        {
            text: 'Profile',
            link: '/extras/profile'
        },
        {
            text: 'Code editor',
            link: '/extras/codeeditor'
        }
    ]
}


const headingMain = {
    text: 'Menú Principal',
    heading: true
};

const informes = {
    text: 'Informes',
    link: '/informes',
    icon: 'icon-eyeglass'
}

const headingComponents = {
    text: 'Components',
    heading: true
};

const headingMore = {
    text: 'More',
    heading: true
};

const headingEstructura = {
    text: 'Estructura comercial',
    heading: true
};

const disenioEstructura ={
    text: 'Diseño estructura',
    link: '/elements/navtree',
    icon: 'icon-layers',
}

const empresas ={
    text: 'Empresas',
    link: '/comercial/empresas',
    icon: 'icon-folder',
}

const canales ={
    text: 'Canales',
    link: '/forms/canales',
    icon: 'icon-shuffle',
}

const areasGeograficas ={
    text: 'Áreas Geográficas',
    link: '/areasgeograficas',
    icon: 'icon-compass',
}

const puestos ={
    text: 'Puestos',
    link: '/puestos',
    icon: 'icon-user',
}

const agrupadores ={
    text: 'Agrupadores',
    link: '',
    icon: 'icon-frame',
     submenu: [
        {
            text: 'Puestos',
            link: '/agrupadores/puestos'
        },
        {
            text: 'Nodos',
            link: '/agrupadores/nodos'
        }
        ]
}

const comisiones = {
    text: 'Comisiones',
    link: '/comisiones',
    heading: true
}

const personas = {
    text: 'Personas',
    link: '/personas',
    heading: true
}

const esquemasComisiones ={
    text: 'Diseño Esquemas',
    link: '/elements/sortable',
    icon: 'icon-equalizer',
}

const objetivos ={
    text: 'Objetivos',
    link: '/objetivos',
    icon: 'icon-diamond',
}

const liquidaciones = {
    text: 'Liquidaciones',
    link: '/liquidaciones',
    icon: 'icon-pencil',
}

const regularizaciones = {
    text: 'Regularizaciones',
    link: '/reugularizaciones',
    icon: 'icon-loop',
}

const traspasos = {
    text: 'Traspasos',
    link: '/traspasos',
    icon: 'icon-arrow-right',
}



const asignacionEsquemas = {
    text: 'Asignación Esquemas',
    link: '/asignacionesquemas',
    icon: 'icon-login',
}

const buscarPersonas = {
    text: 'Buscar Personas',
    link: '/extras/contactdetails',
    icon: 'icon-people',
}


export const menu = [
    headingMain,
    Home,
    //Dashboard,
    Agenda,
    Tareas,
    Ayuda,
    informes,
    //Estructura comercial
    headingEstructura,
    disenioEstructura,
    empresas,
    canales,
    areasGeograficas,
    puestos,
    agrupadores,
    //Comisiones
    comisiones,
    esquemasComisiones,
    objetivos,
    liquidaciones,
    regularizaciones,
    traspasos,
    //personas
    personas,
    asignacionEsquemas,
    buscarPersonas,
    Widgets,
    headingComponents,
    Elements,
    Forms,
    Charts,
    Tables,
    Maps,
    headingMore,
    Pages,
    Blog,
    Ecommerce,
    Extras
];
