<template>
  <v-footer class="footer">
    <p>Desenvolvido por João Vitor Muniz Lopes - 2021</p>
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
  background-color: red;
  bottom: 0;
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 10;
}
.footer > p {
  color: #ed8e2a;
  font-family: "Monteserrat", sans-serif;
  font-weight: bold;
  font-size: 0.8em;
  padding: 0.5rem;
}
</style>
