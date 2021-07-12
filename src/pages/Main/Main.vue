<template>
  <div class="main-div">
    <div>
      <p>Essa é a página principal</p>
      <v-btn
        class="bg-secondary"
        @click="toggleTheme">
        Mudar tema
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Props {
  [key: string]: string;
}

export default defineComponent({
  name: "MainPage",
  props: {
    toggleTheme: {
      type: Object as () => Props,
      default(this: void, toggleTheme: () => Props) {
        return toggleTheme;
      },
      validator(this: void, toggleTheme: () => Props) {
        return !!toggleTheme;
      },
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-div {
  height:90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
</style>