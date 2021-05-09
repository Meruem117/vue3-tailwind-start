<template>
  <div class="content space-x-4" v-if="!isNull">
    <!-- 主体grid -->
    <div
      id="g"
      class="grid grid-cols-5 gap-x-4 float-right overflow-auto justify-items-center h-full w-3/4 pt-4 px-6"
    >
      <!-- 容器 -->
      <div
        class="flex flex-col flex-auto flex-nowrap h-auto w-sv justify-center mb-4"
        v-for="(v, index) in main_list"
        :key="index"
        v-show="isShow || index < size"
      >
        <!-- 图片 -->
        <div
          @click="toVideo(v.video_id)"
          class="card w-sv h-sv mx-auto rounded transform ease-in-out duration-300 hover:scale-110"
        >
          <div
            class="card_cover rounded bg-gradient-to-bl from-gray-400 to-gray-900 cursor-pointer"
            :style="{ backgroundImage: 'url(' + v.video_img + ')' }"
          ></div>
        </div>
        <!-- 文字 -->
        <div
          class="flex flex-row flex-auto flex-nowrap w-sv space-x-2 mt-5 justify-center text-center h-auto"
        >
          <p
            @click="toVideo(v.video_id)"
            class="flex-auto text-xl font-serif text-gray-400 tracking-widest hover:text-blue-400 cursor-pointer truncate text-right"
            :title="v.name_cn"
          >
            {{ v.name_cn }}
          </p>
          <strong
            class="flex-auto font-ph tracking-widest text-red-500 text-xl font-bold text-left"
            >{{ v.score }}</strong
          >
        </div>
      </div>
      <!-- 按钮 -->
      <div
        class="mt-2 col-start-1 col-end-6 space-x-6 flex flex-row justify-start font-ph text-base tracking-widest text-gray-400 w-full h-9"
        v-show="isShowBtn"
      >
        <button
          v-show="!isEnd"
          @click="showAll()"
          class="w-auto h-full align-middle px-2 rounded border-dashed border-2 border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:outline-none"
        >
          展开全部
        </button>
        <button
          v-show="!isShow && !isEnd"
          @click="showMore()"
          class="w-auto h-full align-middle px-2 rounded border-dashed border-2 border-gray-400 hover:text-blue-400 hover:border-blue-500 focus:outline-none"
        >
          加载更多
        </button>
        <button
          v-show="isEnd"
          @click="showBack()"
          class="w-auto h-full align-middle px-2 rounded border-dashed border-2 border-gray-400 hover:text-blue-400 hover:border-blue-500 focus:outline-none"
        >
          收起所有
        </button>
        <button
          v-show="isEnd"
          @click="showStart()"
          class="w-auto h-full align-middle px-2 rounded border-dashed border-2 border-gray-400 hover:text-blue-400 hover:border-blue-500 focus:outline-none"
        >
          回到开头
        </button>
      </div>
    </div>
    <!-- 分割线 -->
    <div
      class="h-full w-0 border-r-2 border-dashed border-gray-400 -ml-4"
    ></div>
    <!-- 推荐区 -->
    <div class="flex flex-col flex-auto flex-nowrap space-y-4 h-auto w-1/4">
      <!-- 标题 -->
      <div
        class="h-10 justify-center font-twi text-2xl font-semibold tracking-widest text-green-400 text-left pl-3 border-b-2 border-dashed border-gray-400"
      >
        Recommend
      </div>
      <!-- 推荐grid -->
      <div
        class="grid grid-cols-3 gap-1 justify-items-center h-4/5 mx-auto overflow-auto"
      >
        <!-- 容器 -->
        <div
          class="flex flex-col flex-auto flex-nowrap justify-center w-sr mr-2"
          v-for="(r, index) in recommend_list"
          :key="index"
        >
          <!-- 图片 -->
          <div
            @click="toVideo(r.video_id)"
            class="card w-sr h-sr mx-auto rounded"
          >
            <div
              class="card_cover rounded bg-gradient-to-bl from-gray-400 to-gray-900 cursor-pointer"
              :style="{ backgroundImage: 'url(' + r.video_img + ')' }"
            ></div>
          </div>
          <!-- 文字 -->
          <div
            class="flex flex-row flex-auto flex-nowrap w-sr space-x-1 mt-2 justify-center text-center"
          >
            <p
              @click="toVideo(r.video_id)"
              class="flex-auto text-base font-serif tracking-widest text-gray-400 hover:text-blue-400 cursor-pointer truncate text-right"
              :title="r.name_cn"
            >
              {{ r.name_cn }}
            </p>
            <strong
              class="flex-auto text-base font-ph tracking-widest font-bold text-red-500 text-left"
              >{{ r.score }}</strong
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="content mt-5 ml-5 text-gray-400 text-3xl" v-else>
    Sorry, there is no data...
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "seriesContent",
  props: ["main_list", "recommend_list", "isNull"],
  // emits: ["getMore"],
  data() {
    return {
      isShow: false,
      isEnd: false,
      // number: 1,
      size: 20,
      isShowBtn: true,
    };
  },
  mounted() {
    if (this.main_list.length < this.size) {
      this.isShowBtn = false;
    }
  },
  methods: {
    toVideo(vid: string) {
      // 跳转到新页面
      // let v_url = this.$router.resolve({
      //   name: "series/video",
      //   params: { vid: vid },
      // });
      // window.open(v_url.href, "_blank");
      this.$router.push({
        name: "series/video",
        params: { vid: vid },
      });
    },
    showAll() {
      this.isEnd = true;
      this.isShow = true;
    },
    showMore() {
      this.size += 20;
      let total_number = this.main_list.length;
      if (this.size >= total_number) {
        this.isEnd = true;
      }
      // this.number += 1;
      // 获取父组件函数
      // this.$emit("getMore");
    },
    showBack() {
      this.size = 20;
      this.isEnd = false;
      this.isShow = false;
    },
    showStart() {
      let g = document.getElementById("g");
      if (g) {
        g.scrollTop = 0;
      }
    },
  },
});
</script>

<style scoped>
</style>