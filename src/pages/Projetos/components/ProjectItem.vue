<template>
  <div v-if="projectItem">
    <transition
      :duration="500"
      name="bounce">
      <v-card
        v-if="transition"
        :elevation="18"
        :hover="'4dp'"
        :tile="true"
        class="content">
        <v-card-title>{{ projectItem.name }}</v-card-title>

        <v-spacer />

        <v-card-subtitle>{{ projectItem.description }}</v-card-subtitle>

        <v-spacer />

        <v-img
          :width="'56%'"
          :height="'56%'"
          class="rounded-img"
          :src="projectItem.url"
          :alt="projectItem.name" />
      </v-card>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
}

export default defineComponent({
  name: "ProjectItem",
  props: {
    transition: Boolean,
    projectItem: {
      type: Object as PropType<Project>,
      default(this: void, project: Project) {
        return project;
      },
      validator(this: void, project: Project) {
        return !!project;
      },
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 50px 40px;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  border-radius: 25px;
}
.rounded-img {
  border-radius: 50%;
  margin: 2% auto;
}

/*---------- Transition ---------------*/
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>