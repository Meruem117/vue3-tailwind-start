<template>
  <navHome></navHome>
  <div class="hello">
    <h1>Hello</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navHome from "./Home/NavHome.vue";

export default defineComponent({
  name: "hello",
  components: {
    navHome,
  },
  props: {
    name: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: fixed;
  top: 50%;
  left: 50%;
}
h1 {
  color: white;
}
</style>