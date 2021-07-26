import { createWebHistory, createRouter } from "vue-router";

import routes from "../pages/routes";

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
  },
  history: createWebHistory(),
  routes,
});

export default router;
