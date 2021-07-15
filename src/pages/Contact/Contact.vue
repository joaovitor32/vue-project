<template>
  <transition
    :duration="500"
    name="slide-fade">
    <div
      v-if="show"
      class="main-div-contact">
      <div
        id="img-profile-container"
        class="bg-primary">
        <img
          id="profile-img-circle"
          :src="iconUrl.perfil">
      </div>
      <div id="icons-box">
        <a
          href="https://github.com/joaovitor32"
          target="_blank">
          <img
            class="icon"
            :src="iconUrl.github">
        </a>
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-vitor-muniz-lopes-3545a3154/"
          target="_blank">
          <img
            class="icon"
            :src="iconUrl.linkedin">
        </a>
        <a
          href="https://www.facebook.com/joao.buzina"
          target="_blank">
          <img
            class="icon"
            :src="iconUrl.facebook">
        </a>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import perfil from "../../assets/perfil.png";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";

export default defineComponent({
  name: "ContactPage",
  data() {
    return {
      show: false
    }
  },
  computed: {
    iconUrl() {
      return { perfil, github, linkedin, facebook };
    },
  },
  mounted() {
    this.show = true; // might need this.$nextTick
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-div-contact {
  margin-top: 2%;
  padding: 2rem 0%;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
#icons-box {
  display: flex;
  justify-content: space-around;
  width: 50%;
}
.icon {
  width: 5rem;
  height: 5rem;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(84px);
  opacity: 0;
}
</style>