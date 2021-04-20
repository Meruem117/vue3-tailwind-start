<template>
  <div
    class="flex flex-row flex-auto flex-nowrap justify-center mx-10 mt-16 space-x-10 h-content"
  >
    <div class="g grid grid-cols-3 gap-x-5 gap-y-6 float-left h-72 w-auto">
      <div
        class="flex flex-col flex-auto flex-nowrap justify-center w-sr"
        v-for="(v, index) in series"
        :key="index"
      >
        <img
          @click="toVideo(v.video_id)"
          class="w-sr h-sr cursor-pointer rounded-lg border border-gray-700 hover:border-blue-400"
          :src="v.video_img"
          :alt="v.name_en"
          :title="v.name_en"
        />
        <div
          class="flex flex-row flex-auto flex-nowrap w-sr space-x-1 mt-1 tracking-wide font-serif justify-center text-center"
        >
          <p
            @click="toVideo(v.video_id)"
            class="flex-auto text-gray-400 hover:text-blue-400 text-base cursor-pointer left-0 truncate"
          >
            {{ v.name_cn }}
          </p>
          <strong class="flex-auto right-0 text-red-500 text-2 font-bold">{{
            v.score
          }}</strong>
        </div>
      </div>
    </div>
    <div class="g grid grid-cols-5 gap-5 float-right overflow-auto h-content">
      <div
        class="flex flex-col flex-auto flex-nowrap w-auto h-auto"
        v-for="(v, index) in series"
        :key="index"
      >
        <img
          @click="toVideo(v.video_id)"
          class="w-sv h-sv border rounded-xl border-gray-500 hover:border-blue-500"
          :src="v.video_img"
          :alt="v.name_en"
        />
        <p @click="toVideo(v.video_id)">{{ v.name_cn }}</p>
        <strong class="">{{ v.score }}</strong>
      </div>
      <div
        class="flex flex-col flex-auto flex-nowrap w-auto h-auto"
        v-for="(v, index) in series"
        :key="index"
      >
        <img
          @click="toVideo(v.video_id)"
          class="w-sv h-sv border rounded-xl border-gray-500 hover:border-blue-500"
          :src="v.video_img"
          :alt="v.name_en"
        />
        <p @click="toVideo(v.video_id)">{{ v.name_cn }}</p>
        <strong class="">{{ v.score }}</strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "about",
  data() {
    return {
      series: [
        {
          video_id: "1",
          video_img:
            "https://bit-images.bj.bcebos.com/bit-new/file/20210116/fuwk.jpg",
          name_cn: "嘿嘿嘿asdasdasdasdads",
          name_en: "asdasd",
          score: "9.2",
        },
        {
          video_id: "1",
          video_img:
            "https://bit-images.bj.bcebos.com/bit-new/file/20210116/fuwk.jpg",
          name_cn: "嘿嘿嘿",
          name_en: "asdasd",
          score: "9.2",
        },
        {
          video_id: "1",
          video_img:
            "https://bit-images.bj.bcebos.com/bit-new/file/20210116/fuwk.jpg",
          name_cn: "嘿嘿嘿",
          name_en: "asdasd",
          score: "9.2",
        },
        {
          video_id: "1",
          video_img:
            "https://bit-images.bj.bcebos.com/bit-new/file/20210116/fuwk.jpg",
          name_cn: "嘿嘿嘿",
          name_en: "asdasd",
          score: "9.2",
        },
        {
          video_id: "1",
          video_img:
            "https://bit-images.bj.bcebos.com/bit-new/file/20210116/fuwk.jpg",
          name_cn: "嘿嘿嘿",
          name_en: "asdasd",
          score: "9.2",
        },
        {
          video_id: "1",
          video_img:
            "https://bit-images.bj.bcebos.com/bit-new/file/20210116/fuwk.jpg",
          name_cn: "嘿嘿嘿",
          name_en: "asdasd",
          score: "9.2",
        },
        {
          video_id: "1",
          video_img:
            "https://bit-images.bj.bcebos.com/bit-new/file/20210116/fuwk.jpg",
          name_cn: "嘿嘿嘿",
          name_en: "asdasd",
          score: "9.2",
        },
        {
          video_id: "1",
          video_img:
            "https://bit-images.bj.bcebos.com/bit-new/file/20210116/fuwk.jpg",
          name_cn: "嘿嘿嘿",
          name_en: "asdasd",
          score: "9.2",
        },
      ],
    };
  },
  methods: {
    toVideo(vid: string) {
      this.$router.push({
        path: "/series/video",
        query: { vid: vid },
      });
    },
  },
});
</script>

<style scoped>
.g::-webkit-scrollbar {
  width: 10px;
  color: #2d333b;
}
</style>