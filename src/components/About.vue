<template>
  <div class="content flex-row">
    <div
      class="g grid grid-cols-5 gap-4 float-right overflow-auto justify-items-center h-full w-3/4"
    >
      <div
        class="flex flex-col flex-auto flex-nowrap h-auto w-sv justify-center"
        v-for="(v, index) in series"
        :key="index"
      >
        <img
          @click="toVideo(v.video_id)"
          class="w-sv h-sv border rounded-xl border-gray-700 hover:border-blue-600 cursor-pointer"
          :src="v.video_img"
          :alt="v.name_en"
          :title="v.name_cn"
        />
        <div
          class="flex flex-row flex-auto flex-nowrap w-sv space-x-2 mt-1 font-serif justify-center text-center h-auto"
        >
          <p
            @click="toVideo(v.video_id)"
            class="flex-auto text-gray-400 hover:text-blue-400 text-base cursor-pointer truncate text-right tracking-widest"
          >
            {{ v.name_cn }}
          </p>
          <strong class="flex-auto text-red-500 text-2 font-bold text-left">{{
            v.score
          }}</strong>
        </div>
      </div>
      <div
        class="flex flex-col flex-auto flex-nowrap h-auto w-sv justify-center"
        v-for="(v, index) in series"
        :key="index"
      >
        <img
          @click="toVideo(v.video_id)"
          class="w-sv h-sv border-double border-4 border-gray-500"
          :src="v.video_img"
          :alt="v.name_en"
        />
        <div
          class="flex flex-row flex-auto flex-nowrap w-sv space-x-2 mt-1 font-serif justify-center text-center h-auto"
        >
          <p
            @click="toVideo(v.video_id)"
            class="flex-auto text-gray-400 hover:text-blue-400 text-base cursor-pointer truncate text-right tracking-widest"
          >
            {{ v.name_cn }}
          </p>
          <strong class="flex-auto text-red-500 text-2 font-bold text-left">{{
            v.score
          }}</strong>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-auto flex-nowrap space-y-4 h-auto w-1/4">
      <div
        class="w-full h-8 justify-center font-twi tracking-widest text-2xl font-semibold border border-dashed border-green-600 rounded text-green-400 hover:text-gray-600 bg-gradient-to-r hover:from-green-400 hover:to-blue-400"
      >
        Recommend
      </div>
      <div class="g grid grid-cols-3 gap-4 justify-items-center h-72 mx-auto">
        <div
          class="flex flex-col flex-auto flex-nowrap justify-center w-sr"
          v-for="(v, index) in series"
          :key="index"
        >
          <img
            @click="toVideo(v.video_id)"
            class="w-sr h-sr cursor-pointer rounded-lg border border-gray-700 hover:border-blue-600 transform duration-300 hover:-translate-y-3"
            :src="v.video_img"
            :alt="v.name_en"
          />
          <div
            class="flex flex-row flex-auto flex-nowrap w-sr space-x-1 mt-1 font-serif justify-center text-center"
          >
            <p
              @click="toVideo(v.video_id)"
              class="flex-auto text-gray-400 hover:text-blue-400 text-base cursor-pointer truncate text-right tracking-widest"
            >
              {{ v.name_cn }}
            </p>
            <strong class="flex-auto text-red-500 text-2 font-bold text-left">{{
              v.score
            }}</strong>
          </div>
        </div>
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