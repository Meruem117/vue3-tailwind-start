<template>
  <div class="content space-x-4">
    <!-- 主体grid -->
    <div
      class="g grid grid-cols-5 gap-x-4 float-right overflow-auto justify-items-center h-full w-3/4 pt-4 px-6"
    >
      <!-- 容器 -->
      <div
        class="flex flex-col flex-auto flex-nowrap h-auto w-sv justify-center mb-4"
        v-for="(v, index) in m"
        :key="index"
      >
        <!-- 图片 -->
        <div class="card w-sv h-sv mx-auto rounded bg-gray-800">
          <div class="card_cover rounded bg-gray-800"></div>
        </div>
        <!-- 文字 -->
        <div
          class="w-sv mt-5 rounded justify-center text-center h-8 bg-gray-800 shadow-2xl"
        ></div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="h-full w-0.5 border-r-2 border-dashed border-gray-600"></div>
    <!-- 推荐区 -->
    <div class="flex flex-col flex-auto flex-nowrap space-y-4 h-auto w-1/4">
      <!-- 标题 -->
      <div
        class="h-10 justify-center font-twi text-2xl font-semibold tracking-widest text-gray-500 text-left pl-3 border-b-2 border-dashed border-gray-600"
      >
        Recommend
      </div>
      <!-- 推荐grid -->
      <div
        class="grid grid-cols-3 gap-4 justify-items-center h-3/4 mx-auto overflow-auto"
      >
        <!-- 容器 -->
        <div
          class="flex flex-col flex-auto flex-nowrap justify-center w-sr"
          v-for="(r, index) in r"
          :key="index"
        >
          <!-- 图片 -->
          <div class="card w-sr h-sr mx-auto rounded bg-gray-800">
            <div class="card_cover rounded bg-gray-800"></div>
          </div>
          <!-- 文字 -->
          <div
            class="w-sr space-x-1 mt-2 h-5 justify-center text-center bg-gray-800 shadow-2xl"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "loadSeries",
  data() {
    return {
      m: [
        { vid: "1" },
        { vid: "2" },
        { vid: "3" },
        { vid: "4" },
        { vid: "5" },
        { vid: "6" },
        { vid: "7" },
        { vid: "8" },
        { vid: "9" },
        { vid: "10" },
        { vid: "11" },
        { vid: "12" },
        { vid: "13" },
        { vid: "14" },
        { vid: "15" },
      ],
      r: [
        { vid: "1" },
        { vid: "2" },
        { vid: "3" },
        { vid: "4" },
        { vid: "5" },
        { vid: "6" },
        { vid: "7" },
        { vid: "8" },
        { vid: "9" },
      ],
    };
  },
});
</script>

<style scoped>
.g ::-webkit-scrollbar {
  display: none;
}
</style>