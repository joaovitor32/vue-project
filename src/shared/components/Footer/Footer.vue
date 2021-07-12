<template>
  <v-footer class="bg-primary footer">
    <p class="text-secondary">
      Desenvolvido por João Vitor Muniz Lopes - 2021
    </p>
  </v-footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
});
</script>

<style scoped>
.footer {
  display: flex;
  text-align: center;
  justify-content: center;
  bottom: 0;
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 10;
}
.footer > p {
  font-family: "Monteserrat", sans-serif;
  font-weight: bold;
  font-size: 0.8em;
  padding: 0.5rem;
}
</style>
