import { RouteRecordRaw } from "vue-router";
import ProjetosPage from "../Projetos/Projetos.vue";
import MainPage from "../Main/Main.vue";

const routes = <Array<RouteRecordRaw>>[
  {
    name: "MainPage",
    path: "/",
    component: MainPage,
    props: (route) => ({ toggleTheme: route.query.toggleTheme }),
  },
  { name: "ProjetoPage", path: "/projetos", component: ProjetosPage },
];

export default routes;
