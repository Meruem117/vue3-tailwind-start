<template>
  <div class="content">
    <h1 class="text-white text-2xl">{{ vid }}</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "videos", //video,与内置或保留的HTML元素同名，所以用videos
  data() {
    return {
      vid: "",
      videos: [],
    };
  },
  created() {
    // this.getVideos();
  },
  methods: {
    getVideos() {
      this.axios
        .get("/api/getSeries")
        .then((response) => {
          this.videos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    const vid = this.$route.params.vid;
    this.vid = vid;
  },
});
</script>

<style scoped>
</style>