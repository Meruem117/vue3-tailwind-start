<template>
  <navSeries></navSeries>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navSeries from "./Series/NavSeries.vue";

export default defineComponent({
  name: "series",
  components: {
    navSeries,
  },
});
</script>

<style scoped>
</style>