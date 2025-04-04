import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandYoutube,
  IconFolder,
  IconHome,
  IconMail,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import {
  TAboutPage,
  TNavigationPage,
  TProgramingLenguage,
  TProyect,
  TSocialMedia,
} from "./types";
import HTML from "../public/html.png";
import CSS from "../public/css-3.png";
import JS from "../public/js.png";
import NODE from "../public/programacion.png";
import DATA_BASE from "../public/base-de-datos.png";

import PROYECTO1 from "../public/proyect1.webp";
import PROYECTO2 from "../public/proyect2.webp";
import PROYECTO3 from "../public/proyect3.webp";
import PROYECTO4 from "../public/proyect4.webp";
import PROYECTO5 from "../public/proyect5.webp";
import PROYECTO6 from "../public/proyect6.webp";
import PROYECTO7 from "../public/proyect7.webp";

export const NAVIGATION_PAGES: TNavigationPage[] = [
  {
    id: 1,
    icon: <IconHome size={24} stroke={1} />,
    route: "/",
  },
  {
    id: 2,
    icon: <IconUser size={24} stroke={1} />,
    route: "/about-me",
  },
  {
    id: 3,
    icon: <IconFolder size={24} stroke={1} />,
    route: "/projects",
  },
  {
    id: 4,
    icon: <IconPhone size={24} stroke={1} />,
    route: "/contact",
  },
];

export const SOCIAL_MEDIA: TSocialMedia[] = [
  {
    id: 1,
    icon: <IconBrandFacebook size={30} stroke={1} />,
    link: "https://www.facebook.com/profile.php?id=100087542244958",
  },
  {
    id: 2,
    icon: <IconBrandInstagram size={30} stroke={1} />,
    link: "https://www.instagram.com/edel.dev?igsh=YzNibWJyeDNveGtp&utm_source=qr",
  },
  {
    id: 3,
    icon: <IconBrandTiktok size={30} stroke={1} />,
    link: "https://www.tiktok.com/@edel.dev?_t=ZM-8tszoN5y8xB&_r=1",
  },
  {
    id: 4,
    icon: <IconBrandYoutube size={30} stroke={1} />,
    link: "https://www.youtube.com/@edeldev",
  },
  {
    id: 5,
    icon: <IconBrandGithub size={30} stroke={1} />,
    link: "https://github.com/edeldev",
  },
];

export const PROGRAMING_LANGUAGES: TProgramingLenguage[] = [
  {
    id: 1,
    title: "HTML",
    image: HTML,
  },
  {
    id: 2,
    title: "CSS",
    image: CSS,
  },
  {
    id: 3,
    title: "js",
    image: JS,
  },
  {
    id: 4,
    title: "NODEJS",
    image: NODE,
  },
  {
    id: 5,
    title: "DATABASE",
    image: DATA_BASE,
  },
];

export const ABOUT_PAGE: TAboutPage[] = [
  {
    id: 1,
    title: "Impulsando tu Negocio Hacia el Éxito Digital",
    description:
      "¿Buscas un sitio web único, atractivo y funcional que se adapte perfectamente a tus necesidades y presupuesto? Estás en el lugar correcto. En nuestro equipo, nos especializamos en diseñar y desarrollar sitios web que no solo cumplen, sino que superan tus expectativas.",
    date: "Éxito ",
  },
  {
    id: 2,
    title: "Entrega Rápida sin Compromisos en Calidad",
    description:
      "Entregamos tu sitio web en tiempo récord, sin comprometer la calidad del trabajo. Nos aseguramos de que cada aspecto de tu sitio web esté alineado con los estándares actuales de diseño y tecnología, garantizando una experiencia óptima tanto para ti como para tus visitantes.",
    date: "Calidad",
  },
  {
    id: 3,
    title: "Relación Profesional",
    description:
      "Más que proveedores de servicios, somos tu socio en el éxito digital. Mantenemos una relación profesional y comprometida contigo durante todo el proceso de desarrollo y más allá. Tu satisfacción es nuestra prioridad número uno.",
    date: "Relación",
  },
  {
    id: 4,
    title: "Atrae Más Clientes, Aumenta tus Ventas",
    description:
      "Un sitio web bien diseñado y funcional no solo mejora la visibilidad de tu negocio, sino que también atrae más clientes y aumenta las ventas. Con una presencia en línea efectiva, tu negocio se vuelve accesible y visible para aquellos que buscan tus productos o servicios en internet.",
    date: "Ventas",
  },
];

export const PROYECTS: TProyect[] = [
  {
    id: 1,
    lenguages: "HTML, CSS, Next",
    image: PROYECTO1,
    alt: "Sitio web de servicio",
    title: "Sitio de servicio",
    link: "https://edeldev-studio.vercel.app",
    code: "https://github.com/edeldev/edeldev-studio",
    proyect: "01",
  },
  {
    id: 2,
    lenguages: "HTML, CSS, Next",
    image: PROYECTO2,
    alt: "Sitio web de Arquitectura",
    title: "Sitio de Arquitectura",
    link: "https://parrallax-arquitectura.vercel.app",
    code: "https://github.com/edeldev/Parrallax-Arquitectura",
    proyect: "02",
  },
  {
    id: 3,
    lenguages: "HTML, CSS, Next",
    image: PROYECTO3,
    alt: "Portafolio personal",
    title: "Portafolio personal",
    link: "https://edeldev.vercel.app",
    code: "https://github.com/edeldev/Portafolio-web-personal",
    proyect: "03",
  },
  {
    id: 4,
    lenguages: "HTML, CSS, Next",
    image: PROYECTO4,
    alt: "Sitio web de tienda de ropa",
    title: "Sitio de ropa",
    link: "https://ledbeey.vercel.app",
    code: "https://github.com/edeldev/ledbeey",
    proyect: "04",
  },
  {
    id: 5,
    lenguages: "HTML, CSS, React",
    image: PROYECTO5,
    alt: "Sitio tipo linktree",
    title: "Sitio web de enlaces",
    link: "https://edeldev-links.vercel.app",
    code: "https://github.com/edeldev/edeldev-links",
    proyect: "05",
  },
  {
    id: 6,
    lenguages: "HTML, CSS y Boostrap",
    image: PROYECTO6,
    alt: "Clon de Udemy",
    title: "Clon de Udemy",
    link: "https://demyclone.netlify.app",
    code: "https://github.com/edeldev/Udemy-Clon",
    proyect: "06",
  },
  {
    id: 7,
    lenguages: "HTML, CSS, React",
    image: PROYECTO7,
    alt: "Buscador de peliculas",
    title: "Buscador de películas",
    link: "https://edelfilms.netlify.app",
    code: "https://github.com/edeldev/search-movie",
    proyect: "07",
  },
];

export const SOCIAL_MEDIA_CONTACT: TSocialMedia[] = [
  {
    id: 1,
    icon: <IconBrandFacebook size={30} stroke={1} />,
    link: "https://www.facebook.com/profile.php?id=100087542244958",
  },
  {
    id: 2,
    icon: <IconBrandInstagram size={30} stroke={1} />,
    link: "https://www.instagram.com/edel.dev?igsh=YzNibWJyeDNveGtp&utm_source=qr",
  },
  {
    id: 3,
    icon: <IconBrandTiktok size={30} stroke={1} />,
    link: "https://www.tiktok.com/@edel.dev?_t=ZM-8tszoN5y8xB&_r=1",
  },
  {
    id: 4,
    icon: <IconBrandYoutube size={30} stroke={1} />,
    link: "https://www.youtube.com/@edeldev",
  },
  {
    id: 5,
    icon: <IconBrandGithub size={30} stroke={1} />,
    link: "https://github.com/edeldev",
  },
  {
    id: 6,
    icon: <IconBrandLinkedin size={30} stroke={1} />,
    link: "https://www.linkedin.com/in/edel-dev",
  },
  {
    id: 7,
    icon: <IconMail size={30} stroke={1} />,
    link: "mailto:edeldev25@gmail.com",
  },
];
