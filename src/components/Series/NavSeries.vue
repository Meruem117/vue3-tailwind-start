<template>
  <div class="nav">
    <div
      class="flex flex-nowrap flex-auto items-center h-full w-auto space-x-1 text-gray-400 tracking-wider justify-end"
    >
      <router-link
        v-for="(nav, index) in seriesNav"
        :key="index"
        :to="nav.path"
        class="block h-full p-4 text-xl font-medium hover:text-red-400 hover:border-red-400 transition-all ease-in-out font-serif"
        :class="{
          'border-b-4 border-blue-500 text-2xl text-blue-400':
            active == nav.cate,
        }"
        @click="selected(nav.cate)"
        >{{ nav.cate }}</router-link
      >
    </div>
    <div
      class="flex flex-row-reverse align-middle items-center h-full w-auto py-2 ml-6"
    >
      <button
        class="outline-none focus:outline-none h-4/5 w-12 border-2 border-gray-400 rounded-3xl rounded-l-none hover:bg-blue-700 active:bg-blue-800"
        @click="search()"
      >
        <svg
          class="w-6 h-4/5 text-gray-400 cursor-pointer mx-auto"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
      <input
        class="w-auto h-4/5 px-3 border-dashed border-2 border-r-0 border-gray-400 bg-transparent rounded-xl rounded-r-none text-lg font-twi text-gray-400 placeholder-opacity-60 transition-all ease-in-out outline-none focus:border-blue-500 focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search..."
        ref="getSearchContent"
      />
    </div>
    <div
      class="flex flex-auto flex-nowrap h-full w-auto items-center justify-end mr-8"
    >
      <div
        class="w-12 h-12 float-right bg-cover rounded-full bg-center absolute"
        style="background-image: url(../../../static/img/V.jpg)"
      ></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "navSeries",
  data() {
    return {
      seriesNav: this.$store.state.seriesNav,
      active: this.$store.state.seriesCate,
    };
  },
  methods: {
    selected(cate) {
      // this.active = cate;
      this.$store.commit("setSeriesCate", cate);
    },
    search() {
      let sc = this.$refs.getSearchContent.value;
      this.$router.push({
        path: "/series/search",
        query: { sc: sc },
      });
    },
  },
});
</script>

<style scoped>
</style>
