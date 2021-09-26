
import Person from "@material-ui/icons/Person";
import Usuarios from "views/Usuarios/Usuarios";
import Pagos from "views/Pagos_Billeteras/Pagos_Billeteras";
import PaymentIcon from '@material-ui/icons/Payment';
import Curso from "views/Curso/Curso";
import MenuBookIcon from '@material-ui/icons/MenuBook';

import Freelancers from "views/Freelancers/Freelancers";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Tienda from "views/Tienda/Tienda";
import ShopIcon from '@material-ui/icons/Shop';
import Grupos from "views/Grupos/Grupos";
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Servicios from "views/Servicios_Independientes/Servivios";
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
const dashboardRoutes = [
 
  {
    path: "/users",
    name: "Usuarios",
    icon: Person,
    component: Usuarios,
    layout: "/admin",
  },
  {
    path: "/payment",
    name: "Pagos y Billeteras",
    icon: PaymentIcon,
    component: Pagos,
    layout: "/admin",
  },
  {
    path: "/curso",
    name: "Curso de Traiding",
    icon: MenuBookIcon,
    component: Curso,
    layout: "/admin",
  },
  {
    path: "/freelancers",
    name: "Freelancers",
    icon: EmojiPeopleIcon,
    component: Freelancers,
    layout: "/admin",
  },
  {
    path: "/tienda",
    name: "Tienda",
    icon: ShopIcon,
    component: Tienda,
    layout: "/admin",
  },
  {
    path: "/grupos",
    name: "Noticias",
    icon: AnnouncementIcon,
    component: Grupos,
    layout: "/admin",
  },
  {
    path: "/servicios",
    name: "Servicios Independientes",
    icon: BeachAccessIcon,
    component: Servicios,
    layout: "/admin",
  },
];

export default dashboardRoutes;
