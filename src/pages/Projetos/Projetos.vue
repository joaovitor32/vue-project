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
        <ProjectItem
          class="project-item"
          :project-item="item" />
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
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(_: any) {
      const lastScrollPosition = window.scrollY;
      const projectsItem = document.getElementsByClassName("project-item");
      Object.values(projectsItem).map((elem:any) =>
        console.log(elem.offsetTop)
      );
      //console.log(lastScrollPosition, projectsItem[0]);
    },
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