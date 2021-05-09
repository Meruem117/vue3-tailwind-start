<template>
  <navSeries></navSeries>
  <router-view :key="key"></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navSeries from "./Series/NavSeries.vue";

export default defineComponent({
  name: "series",
  components: {
    navSeries,
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
});
</script>

<style scoped>
</style>