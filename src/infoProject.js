// Images Proyects
import project_1 from "./images/project-1.png";
import project_2 from "./images/project-2.webp";
import project_3 from "./images/project-3.webp";
import project_4 from "./images/project-4.webp";
// Icons Technologies used by Proyect
import tailwindIcon from "./assets/tailwind.svg"
import reactIcon from "./assets/react.svg"
import nodejsIcon from "./assets/nodejs.svg"
import reduxIcon from "./assets/redux.svg"
import mongoDBIcon from "./assets/mongoDB.svg"


const projects = [
  {
    category: "Plataforma E-commerce",
    title: "Nueva Tienda Online",
    date: "Noviembre 2024",
    skills: [
      { technology: "React", icon: reactIcon, colors: "" },
      { technology: "Redux", icon: reduxIcon, colors: "" },
      { technology: "Node.js", icon: nodejsIcon, colors: "" },
      { technology: "MongoDB", icon: mongoDBIcon, colors: "" },
    ],
    description:
      "Nueva Tienda Online es una plataforma de comercio electrónico construida con React para la interfaz de usuario, Redux para la gestión del estado, Node.js para el backend y MongoDB para el almacenamiento de datos.",
    images: project_1,
  },
  {
    category: "Plataforma Social Network",
    title: "Red Social Innovadora",
    date: "Diciembre 2024",
    skills: [
      { technology: "Vue.js", icon: "", colors: "" },
      { technology: "Vuex", icon: "", colors: "" },
      { technology: "Firebase", icon: "", colors: "" },
      { technology: "React", icon: reactIcon, colors: "" },
      { technology: "Redux", icon: "", colors: "" },
    ],
    description:
      "Red Social Innovadora es una red social moderna construida con Vue.js para el front-end, Vuex para la gestión del estado y Firebase para la sincronización de datos en tiempo real.",
    images: project_2,
  },
  {
    category: "Plataforma Travel",
    title: "Plataforma de Viajes",
    date: "Enero 2025",
    skills: [
      { technology: "Angular", icon: "", colors: "" },
      { technology: "Node.js", icon: nodejsIcon, colors: "" },
      { technology: "Express", icon: "", colors: "" },
      { technology: "MongoDB", icon: mongoDBIcon, colors: "" },
      { technology: "React", icon: reactIcon, colors: "" },
    ],
    description:
      "Plataforma de Viajes es una aplicación que facilita la planificación de viajes. Construida con Angular para el front-end, Node.js y Express para el backend, y MongoDB para el almacenamiento de datos.",
    images: project_3,
  },
  {
    category: "Plataforma Health",
    title: "App de Salud Personal",
    date: "Febrero 2025",
    skills: [
      { technology: "React Native", icon: reactIcon, colors: "" },
      { technology: "Firebase", icon: "", colors: "" },
      { technology: "React", icon: reactIcon, colors: "" },
      { technology: "Redux", icon: reduxIcon, colors: "" },
    ],
    description:
      "App de Salud Personal es una aplicación móvil construida con React Native que ayuda a los usuarios a realizar un seguimiento de su bienestar y hábitos de salud. Utiliza Firebase para el almacenamiento de datos.",
    images: project_4,
  },
  {
    category: "Plataforma Education",
    title: "Plataforma Educativa Interactiva",
    date: "Marzo 2025",
    skills: [
        { technology: "Django", icon: "", colors: "" },
        { technology: "Python", icon: "", colors: "" },
        { technology: "PostgreSQL", icon: "", colors: "" },
    ],
    description:
      "Plataforma Educativa Interactiva es una plataforma en línea que ofrece contenido educativo interactivo. Construida con Django y Python en el backend, y utiliza PostgreSQL para el almacenamiento de datos.",
    images: project_1,
  },
  {
    category: "Plataforma Entertainment",
    title: "Juego Multijugador en Línea",
    date: "Abril 2025",
    skills: [
      { technology: "Unity", icon: "", colors: "" },
      { technology: "C#", icon: "", colors: "" },
      { technology: "Photon", icon: "", colors: "" },
      { technology: "React", icon: reactIcon, colors: "" },
      { technology: "Redux", icon: reduxIcon, colors: "" },
    ],
    description:
      "Juego Multijugador en Línea es un emocionante juego construido con Unity y C#. Utiliza la plataforma Photon para la funcionalidad multijugador y ofrece una experiencia de juego interactiva.",
    images: project_4,
  },
  {
    category: "Plataforma Finance",
    title: "Gestor Financiero Personal",
    date: "Mayo 2025",
    skills: [
      { technology: "Flutter", icon: "", colors: "" },
      { technology: "Dart", icon: "", colors: "" },
      { technology: "Firebase", icon: "", colors: "" },
      { technology: "React", icon: reactIcon, colors: "" },
      { technology: "Redux", icon: "", colors: "" },
    ],
    description:
      "Gestor Financiero Personal es una aplicación móvil construida con Flutter y Dart que ayuda a los usuarios a gestionar sus finanzas personales. Utiliza Firebase para el almacenamiento de datos.",
    images: project_2,
  },
  {
    category: "Plataforma Food",
    title: "App de Recetas Gourmet",
    date: "Junio 2025",
    skills: [
      { technology: "Swift", icon: "", colors: "" },
      { technology: "iOS", icon: "", colors: "" },
      { technology: "Core Data", icon: "", colors: "" },
      { technology: "React", icon: "", colors: "" },
      { technology: "Redux", icon: "", colors: "" },
    ],
    description:
      "App de Recetas Gourmet es una aplicación para dispositivos iOS construida con Swift. Ofrece una colección de recetas gourmet y utiliza Core Data para el almacenamiento de datos local.",
    images: project_1,
  },
  {
    category: "Plataforma Technology",
    title: "Blog Tecnológico",
    date: "Julio 2025",
    skills: [
      { technology: "WordPress", icon: "", colors: "" },
      { technology: "PHP", icon: "", colors: "" },
      { technology: "MySQL", icon: "", colors: "" },
      { technology: "React", icon: "", colors: "" },
      { technology: "Redux", icon: "", colors: "" },
    ],
    description:
      "Blog Tecnológico es una plataforma de blogging construida con WordPress, PHP y MySQL. Proporciona contenido sobre las últimas tendencias y noticias tecnológicas.",
    images: project_3,
  },
  {
    category: "Plataforma Sports",
    title: "Plataforma de Deportes en Vivo",
    date: "Agosto 2025",
    skills: [
      { technology: "Java", icon: "", colors: "" },
      { technology: "Spring Boot", icon: "", colors: "" },
      { technology: "Kafka", icon: "", colors: "" },
      { technology: "React", icon: "", colors: "" },
      { technology: "Redux", icon: "", colors: "" },
    ],
    description:
      "Plataforma de Deportes en Vivo es una aplicación que ofrece transmisiones en vivo de eventos deportivos. Construida con Java y Spring Boot, utiliza Kafka para la transmisión de datos en tiempo real.",
    images: project_2,
  },
];

export default projects;
