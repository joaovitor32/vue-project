import { createVuetify } from "vuetify";
import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";

import "vuetify/dist/vuetify.min.css";

import { dark, light } from "../config/colors";

export default createVuetify({
  components,
  directives,
  treeShake: true,
  theme: {
    options: {
      customProperties: true,
    },
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: light.primary,
          secondary: light.secondary,
          terciary: light.terciary,
        },
      },
      dark: {
        colors: {
          primary: dark.primary,
          secondary: dark.secondary,
          terciary: dark.terciary,
        },
      },
    },
  },
});
