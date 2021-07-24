<template>
  <div
    v-if="loading"
    class="loading-box">
    <Loading />
  </div>
  <div v-if="!loading">
    <ul>
      <div
        v-for="item in projects"
        :key="item.id">
        <ProjectItem :project-item="item" />
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import api from "../../shared/service/axios";
import Project from "../../shared/entities/ProjectEntity";

export default defineComponent({
  name: "ProjetoPage",
  data() {
    return {
      loading: true,
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
        this.loading = false;
      } catch (err) {
        throw Error(err);
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading-box {
  position: fixed;
  top: 45%;
  left: 45%;
}
</style>