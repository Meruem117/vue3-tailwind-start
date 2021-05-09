<template>
  <div class="content">
    <div class="flex flex-col w-4/5 pl-32">
      <!-- 标题 -->
      <div class="mt-2 text-left font-tp text-3xl text-gray-400 tracking-wide">
        <p class="inline">{{ v.name_cn }}</p>
        <p class="inline ml-4 text-4xl">{{ v.name_en }}</p>
        <p class="inline font-semibold text-gray-500">({{ v.year }})</p>
      </div>
      <!-- 主体 -->
      <div class="flex flex-row mt-4 w-full">
        <!-- 左 -->
        <div class="flex flex-col mt-2">
          <!-- 图片 -->
          <div class="card w-sv h-sv rounded">
            <div
              class="card_cover rounded bg-gradient-to-bl from-gray-400 to-gray-900 cursor-pointer"
              :style="{ backgroundImage: 'url(' + v.video_img + ')' }"
            ></div>
          </div>
          <div class="mt-2 text-center text-sm text-gray-600">
            {{ v.video_id }}
          </div>
        </div>
        <!-- 中 -->
        <div
          class="flex flex-col ml-4 pl-3 space-y-1 text-left text-xl text-gray-500 font-serif tracking-wide"
        >
          <div>
            类型:
            <p class="v_info text-gray-400">
              {{ v.type }}
            </p>
          </div>
          <div>
            制片国家/地区:
            <p class="v_info text-gray-400">
              {{ v.region }}
            </p>
          </div>
          <div>
            媒体:
            <p class="v_info text-gray-400">
              {{ v.media }}
            </p>
          </div>
          <div>
            首播日期:
            <p class="v_info text-gray-400">
              {{ v.date }}
            </p>
          </div>
          <div>
            季数:
            <p class="v_info text-gray-400">
              {{ v.current_season }}
            </p>
          </div>
          <div>
            集数:
            <p class="v_info text-gray-400">
              {{ v.total_episode }}
            </p>
          </div>
          <div>
            单集时长:
            <p class="v_info text-gray-400">{{ v.length }}分钟</p>
          </div>
          <div>
            豆瓣链接:
            <a
              class="v_info text-green-600 hover:text-blue-400 hover:underline cursor-pointer"
              :href="v.douban_url"
              target="_blank"
            >
              {{ v.douban }}
            </a>
          </div>
          <div>
            IMDb链接:
            <a
              class="v_info text-yellow-500 hover:text-blue-400 hover:underline cursor-pointer"
              :href="v.imdb_url"
              target="_blank"
            >
              {{ v.imdb }}
            </a>
          </div>
        </div>
        <!-- 右 -->
        <div class="flex flex-col ml-4 pl-3">
          <!-- 评分 -->
          <div
            class="pl-6 text-left text-3xl text-red-500 font-tp font-semibold tracking-tight h-32 border-dashed border-l-2 border-gray-400"
          >
            {{ v.score }}
          </div>
          <!-- 进度 -->
          <div></div>
          <!-- 卡片 -->
          <div></div>
        </div>
      </div>
      <!-- 简介 -->
      <div
        class="mt-4 w-full text-left text-xl text-gray-500 font-serif tracking-wide"
      >
        剧情简介:
        <p class="mt-4 text-gray-400">{{ v.summary }}</p>
      </div>
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
      v: [],
    };
  },
  created() {
    const vid = this.$route.params.vid;
    this.vid = vid;
    this.getVideo();
  },
  methods: {
    getVideo() {
      this.axios
        .get("/api/getVideo?vid=" + this.vid)
        .then((response) => {
          this.v = response.data[0];
          this.v.douban = this.v.douban_url.split("/")[4];
          this.v.imdb = this.v.imdb_url.split("/")[4];
          this.v.year = this.v.date.substr(0, 4);
          this.v.date = this.v.date.substr(0, 10);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>

<style scoped>
.v_info {
  @apply inline;
  @apply ml-2;
  @apply text-xl;
  @apply font-ph;
}
</style>