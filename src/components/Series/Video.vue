<template>
  <h1>{{ vid }}</h1>
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
    const vid = this.$route.query;
    this.vid = vid;
    //   console.log(this.$route.params) //动态路由的传值
    console.log(this.$route.query); //get传值
  },
});
</script>

<style scoped>
h1 {
  color: white;
}
</style>