import { RouteRecordRaw } from "vue-router";
import ProjetosPage from "../Projetos/Projetos.vue";
import MainPage from "../Main/Main.vue";
import ContactPage from "../Contact/Contact.vue";
import NewProject from "../Projetos/NewProject.vue";

const routes = <Array<RouteRecordRaw>>[
  {
    name: "MainPage",
    path: "/",
    component: MainPage,
    props: (route) => ({ toggleTheme: route.query.toggleTheme }),
  },
  { name: "ProjetoPage", path: "/projetos", component: ProjetosPage },
  { name: "ContactPage", path: "/contact", component: ContactPage },
  { name: "ProjectPage", path: "/new-project", component: NewProject },
];

export default routes;
