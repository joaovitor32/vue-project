 
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
        :key="item.id"
        class="project-container">
        <ProjectItem
          class="project-item"
          :transition="item.active"
          :project-item="item.project" />
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "../../shared/service/axios";
import Project from "../../shared/entities/ProjectEntity";
interface IProjectItem {
  active: boolean;
  project: Project;
}
export default defineComponent({
  name: "ProjetoPage",
  data() {
    return {
      loading: true,
      projects: [] as IProjectItem[],
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
    handleScroll() {
      const lastScrollPosition = window.scrollY;
      const navbarHeight = document
        .getElementsByClassName("navbar")[0]
        .getBoundingClientRect().height;
      Object.values(document.getElementsByClassName("project-item")).map(
        (elem, index) => {
          const distanceFromTop =
            elem.getBoundingClientRect().top - navbarHeight;
          if (lastScrollPosition > distanceFromTop) {
            this.projects[index].active = true;
          }
        }
      );
    },
    async load() {
      try {
        const response = await api.get<Project[]>("/projects");
        this.projects = response.data.map((elem, index) => {
          return { project: elem, active: index !== 0 ? false : true };
        });
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
.project-container {
  height: 100vh;
  overflow-y: scroll;
}
</style>