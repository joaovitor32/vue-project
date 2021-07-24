<template>
  <svg class="loading-spinner">
    <circle
      v-for="(item, index) in circles"
      :key="index"
      :cx="circlePositions[index] && circlePositions[index].x"
      :cy="circlePositions[index] && circlePositions[index].y"
      :r="item.radius"
      :fill="item.color" />
  </svg>
</template>

<script>
import { defineComponent } from "vue";
import calculatePositions from "../../utils/calculatePositions";

export default defineComponent({
  name: "Loading",
  data() {
    return {
      // Check later how to provide theme colors
      circles: [
        { color: "#E0F2F1", radius: 0 },
        { color: "#B2DFDB", radius: 0 },
        { color: "#80CBC4", radius: 0 },
        { color: "#4DB6AC", radius: 0 },
        { color: "#26A69A", radius: 0 },
        { color: "#00897B", radius: 0 },
        { color: "#00796B", radius: 0 },
        { color: "#00695C", radius: 0 },
        { color: "#004D40", radius: 0 },
      ],
      counter: 0,
      interval: null,
    };
  },
  computed: {
    circlePositions: calculatePositions,
  },
  created() {
    this.interval = setInterval(() => {
      this.counter++;
      this.circles = this.circles.map((item, index) => ({
        ...item,
        radius: (this.counter + index) % 8,
      }));
    }, 70);
  },
  unmounted() {
    clearInterval(this.interval);
  },
});
</script>

<style scoped>
.loading-spinner {
  width: 48rem;
  height: 48rem;
}
</style>
