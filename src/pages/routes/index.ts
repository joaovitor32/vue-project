import { RouteRecordRaw } from "vue-router";
import Main from "../Main/Main.vue";

const routes = <Array<RouteRecordRaw>>[
  { name: "InitialPage", path: "/", component: Main },
  { name: "MainPage", path: "/main", component: Main },
];

export default routes;
