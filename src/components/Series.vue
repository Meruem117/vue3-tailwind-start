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

<style>
.series {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  overflow: auto;
  margin-top: 50px;
  height: 755px;
}
.series::-webkit-scrollbar {
  width: 10px;
  color: #2d333b;
}
.v {
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  margin: 25px 0 0 25px;
}
.v-link {
  margin: 0;
  text-decoration: none;
}
.v-img {
  height: 252px;
  width: 180px;
  border: 2px solid rgba(255, 255, 255, 0.18);
  border-radius: 5px;
}
.v-img:hover {
  border: 2px solid #6c97f5;
}
.v-name {
  text-align: center;
  margin: 10px;
  font-size: 18px;
  color: #cdd9e5;
}
.v-name:hover {
  color: #6c97f5;
}
.v-score {
  color: tomato;
}
</style>