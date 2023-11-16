
import {INavbarData} from "./helper";

export const navbarData: INavbarData[] = [
    {
      routeLink: 'usuarios',
      icon: 'fa fa-solid fa-user' ,  
      label: 'Usuarios',
    },
    {
      routeLink: 'roles',
      icon: 'fa fa-solid fa-genderless' ,  
      label: 'Roles',
      
    },
     {
      routeLink: 'empresas',
      icon: 'fa fa-regular fa-circle-user' ,  
      label: 'Empresas',
      item:[
        {
          routeLink: 'empresas/Alta',
          label: 'Alta Empresas'
        },
        {
          routeLink: 'empresas/Modificion',
          label: 'Modificacion'
        },
        {
          routeLink: 'empresas/List',
          label: 'Listado Empresas'
        }
      ]
    },
    {
      routeLink: 'ofertas',
      icon: 'fa fa-solid fa-bookmark' ,  
      label: 'Ofertas',
    },
    {
      routeLink: 'contratos',
      icon: 'fa fa-solid fa-file-signature' ,  
      label: 'Contratos',
      item:[
        {
          routeLink: 'contratos/Alta',
          label: 'Alta Contratos'
        },
        {
          routeLink: 'contratos/Modificacion',
          label: 'Modificacion'
        },
        {
          routeLink: 'contratos/List',
          label: 'Listado Contratos',
          item:[
            {
              routeLink: 'Contratos/Contratos_Abiertos',
              label: 'Contratos Abiertos '
            },
            {
              routeLink: 'Contratos/Contratos_por_fechas',
              label: 'Contratos entre Fechas '
            }
          ]
        }
      ]
    },
    {
      routeLink: 'productos',
      icon: 'fa fa-brands fa-product-hunt' ,        
      label: 'Productos',
      item:[
        {
          routeLink: 'productos/alta',
          label: 'Alta Productos',
        },
        {
          routeLink:'productos/list',
          label: 'Listado Productos',
          item:[
            {
              routeLink: 'productos/Listado_General',
              label: 'Listado General'
            },
            {
              routeLink: 'productos/Listado_Tipo',
              label: 'Listado Tipo '   
            }
          ]
        },
      ]
    },
    {
      routeLink: 'almacenes',
      icon: 'fa fa-solid fa-warehouse' ,        
      label: 'Almacenes',
    },
    {
      routeLink: 'facturacion',
      icon: 'fa fa-solid fa-receipt' ,        
      label: 'Facturacion',
      item:[
        {
          routeLink: 'facturacion/Generar',
          label: 'Contratos Facturables'
        },
        {
          routeLink: 'facturacion/Pendientes',
          label: 'Facturas Pendientes'
        }
       
      ]
    }
];