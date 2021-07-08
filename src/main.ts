import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import Header from "../src/components/Header/Header.vue";
import router from "./router";

createApp(Header)
  .use(router)
  .use(vuetify)
  .mount("#app");
