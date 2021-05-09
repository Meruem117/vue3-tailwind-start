<template>
  <router-view :key="key"></router-view>
  <dock></dock>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dock from "./components/Home/MacDock.vue";
export default defineComponent({
  name: "app",
  components: {
    dock,
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
});
</script>

<style>
html,
body {
  background-color: #1e2228;
  color: #2d333b;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #2d333b;
  margin: 0;
}
</style>
