<template>
  <div class="series">
    <div class="v" v-for="(v, index) in series" :key="index">
      <router-link :to="`/video?vid=${v.video_id}`" class="v-link">
        <img class="v-img" :src="v.video_img" :alt="v.name_en" />
        <p class="v-name">{{ v.name_cn }}</p>
      </router-link>
      <strong class="v-score">{{ v.score }}</strong>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "cateHome",
  components: {},
  data() {
    return {
      series: [],
    };
  },
  created() {
    this.getSeries();
  },
  methods: {
    getSeries() {
      this.axios
        .get("/api/getSeries")
        .then((response) => {
          this.series = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>