<template>
  <div v-if="projectItem">
    <p>{{ projectItem.name }}</p>
    <p>{{ projectItem.description }}</p>
  </div>
  <FooterComponent />
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
</style>