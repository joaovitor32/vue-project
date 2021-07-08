<template>
  <div>
    <p style="font-size: 120px">Main page</p>
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
  name: "MainPage",
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      try {
        const response = await api.get<Project[]>("/projects");
        this.$data.projects = response.data;
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