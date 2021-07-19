<template>
  <div class="main-div">
    <div class="inner-main-div">
      <p
        id="inner-main-title"
        class="text-secondary">
        Essa é a página principal!
      </p>
      <p
        id="inner-main-description"
        class="text-secondary">
        Selecione alguma aba para ser redirecionado.
      </p>
      <v-btn
        class="bg-secondary"
        :elevation="12"
        @click="toggleTheme">
        <p
          id="btn-title"
          class="text-primary">
          Mudar tema
        </p>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "MainPage",
  props: {
    toggleTheme: {
      type: Function,
      default(this: void, toggleTheme:()=>string) {
        return toggleTheme;
      },
      validator(this: void, toggleTheme:()=>string) {
        return !!toggleTheme;
      },
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-div {
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.inner-main-div {
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
#inner-main-title {
  font-size: 3.2em;
  font-family: "Comfortaa";
}
#inner-main-description {
  font-size: 2.4em;
  font-family: "Comfortaa";
}
#btn-title {
  font-size: 1.6em;
  font-family: "Comfortaa";
}
</style>