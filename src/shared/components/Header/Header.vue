<template>
  <v-app :theme="theme">
    <v-app-bar
      :density="'comfortable'"
      :elevation="'12'"
      color="secondary"
      class="navbar"
      elevate-on-scroll>
      <v-app-bar-title style="padding: 8px 1%; font-family: Comfortaa">
        Vue project
      </v-app-bar-title>
      <div>
        <router-link
          :to="{ path: 'projetos' }"
          tag="li">
          <a>
            <span>Projetos</span>
          </a>
        </router-link>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view :toggle-theme="toggleTheme" />
      </v-container>
    </v-main>

    <FooterComponent />
  </v-app>
  <div id="app" />
</template>

    <script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const theme = ref("light");

    return {
      theme,
      toggleTheme: () =>
        (theme.value = theme.value === "light" ? "dark" : "light"),
    };
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* Style the header with a grey background and some padding */

.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width:100%
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body {
  background: #312e38;
  color: #fff;
  -webkit-font-smoothing: antialiased;
}
body,
input,
button {
  font-family: "Roboto Slab", serif;
  font-size: 16px;
}
h1,
h2,
h3,
h4,
h4,
h6,
strong {
  font-weight: 500;
  cursor: pointer;
}
</style>
