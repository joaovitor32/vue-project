<template>
  <v-app :theme="theme">
    <v-app-bar
      :density="'comfortable'"
      :elevation="'12'"
      color="secondary"
      elevate-on-scroll>
      <div class="navbar">
        <v-app-bar-title style="padding: 8px 1%; font-family: Comfortaa">
          Vue project
        </v-app-bar-title>
        <div id="nav-link-box">
          <router-link
            :to="{ path: 'projetos' }"
            tag="li">
            <a class="text-primary">
              <span>Projetos</span>
            </a>
          </router-link>
          <router-link
            :to="{ path: 'contact' }"
            tag="li">
            <a class="text-primary">
              <span>Contacts</span>
            </a>
          </router-link>
        </div>
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
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
}
#nav-link-box {
  padding: 0% 4rem;
  width: 20rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
a {
  display: block;
  padding: 8px 15px;
  text-decoration: none;
  font-weight: bold;
  font-family: "Comfortaa";
}
a:hover {
  background: rgba(255,255,255,0.1);
  border-radius:8px;
  transition:0.5s;
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
