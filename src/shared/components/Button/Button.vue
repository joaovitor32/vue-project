<template>
  <button
    class="btn bg-primary"
    @click="onClick">
    <string class="btn-title text-secondary">
      {{ buttonTitle }}
    </string>
  </button>
</template>

<script>
export default {
  props: {
    buttonTitle: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: false,
      default: null,
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  width: auto;
  padding: 0.5rem 1rem;
  border-radius: 16px;
}
.btn:hover {
  filter: brightness(80%);
  transition: 0.5s;
}
.btn-title {
  font-family: "Comfortaa";
  font-size: 1em;
}
</style>