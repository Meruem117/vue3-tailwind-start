<template>
  <div class="content">
    <h1 class="text-white text-2xl">{{ vid }}</h1>
    <div class="text-white text-2xl">
      {{ video.video_id }}
      {{ video.name_cn }}
      {{ video.name_en }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "videos", //video,与内置或保留的HTML元素同名，所以用videos
  data() {
    return {
      vid: "",
      video: [],
    };
  },
  // created() {
  //   this.getVideo();
  // },
  methods: {
    getVideo() {
      this.axios
        .get("/api/getVideo?vid=" + this.vid)
        .then((response) => {
          this.video = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    const vid = this.$route.params.vid;
    this.vid = vid;
    this.getVideo();
  },
});
</script>

<style scoped>
</style>