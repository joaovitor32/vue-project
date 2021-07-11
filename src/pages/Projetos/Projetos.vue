<template>
  <div>
    <ul>
      <li
        v-for="item in projects"
        :key="item.id">
        <ProjectItem :project-item="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import api from "../../shared/service/axios";

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
}

export default defineComponent({
  name: "ProjetoPage",
  data() {
    return {
      projects: [] as Project[],
    };
  },
  async created() {
    await this.load();
  },
  methods: {
    async load() {
      try {
        const response = await api.get<Project[]>("/projects");
        this.projects = response.data;
      } catch (err) {
        throw Error(err);
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>