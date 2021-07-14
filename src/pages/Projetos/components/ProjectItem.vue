<template>
  <v-card
    v-if="projectItem"
    :elevation="18"
    :hover="'4dp'"
    :tile="true"
    class="content">
    <p>{{ projectItem.name }}</p>
    <p>{{ projectItem.description }}</p>
    <v-img
      :width="'24%'"
      :height="'24%'"
      :src="projectItem.url"
      :alt="projectItem.name" />
  </v-card>
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
  width: 90%;
  padding: 50px 40px;
  align-items: center;
  justify-content: space-between;
  margin: 2% auto;
  border-radius: 25px;
}
.content > p {
  font-size: 16px;
}
.content > img {
  width: 32%;
  height: 32%;
}
</style>