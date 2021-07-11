import { RouteRecordRaw } from "vue-router";
import Projetos from "../Projetos/Projetos.vue";

const routes = <Array<RouteRecordRaw>>[
  { name: "InitialPage", path: "/", component: Projetos },
  { name: "ProjetoPage", path: "/projetos", component: Projetos },
];

export default routes;
