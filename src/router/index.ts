import { createWebHistory, createRouter } from "vue-router";

import routes from "../pages/routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
