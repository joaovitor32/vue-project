import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import Header from "../src/shared/components/Header/Header.vue";
import Footer from "../src/shared/components/Footer/Footer.vue";
import Input from "../src/shared/components/Input/Input.vue";

import ProjectItem from "../src/pages/Projetos/components/ProjectItem.vue";

import router from "./router";

const app = createApp(Header);

app.component("FooterComponent", Footer);
app.component("ProjectItem", ProjectItem);
app.component("Input", Input);

app.use(router);
app.use(vuetify);
app.mount("#app");
