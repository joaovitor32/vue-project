<template>
  <div class="main-div-contact">
    <div
      id="img-profile-container"
      class="bg-primary">
      <img
        id="profile-img-circle"
        :src="iconUrl.perfilImg">
    </div>
    <div id="icons-box">
      <img
        class="icon"
        :src="iconUrl.githubSvg">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import perfilImg from "../../assets/perfil.png";
import githubSvg from "../../assets/github.svg";

export default defineComponent({
  name: "ContactPage",
  computed: {
    iconUrl() {
      return { perfilImg, githubSvg };
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-div-contact {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
#img-profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 12.4rem;
  width: 24.8rem;
  height: 24.8rem;
}
#profile-img-circle {
  border-radius: 12rem;
  width: 24rem;
  height: 24rem;
}
.icon{
  width:8rem;
  height: 8rem;
}
</style>