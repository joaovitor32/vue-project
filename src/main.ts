import { createApp } from "vue";
import Header from "../src/components/Header/Header.vue";
import router from "./router";

const vue = createApp(Header);

vue.use(router);
vue.mount("#app");

export default vue;
