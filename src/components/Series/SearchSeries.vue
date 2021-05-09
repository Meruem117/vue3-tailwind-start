<template>
  <div class="content flex-col">
    <div class="flex flex-row top-1 justify-center h-20 w-full py-2">
      <input
        class="w-1/3 h-4/5 mt-3 px-3 border-dashed border-2 border-r-0 border-gray-400 bg-transparent text-lg font-hp tracking-widest text-gray-400 placeholder-opacity-60 transition-all ease-in-out outline-none focus:border-blue-500 focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="搜索..."
        ref="getSearchContent"
      />
      <button
        class="mt-3 outline-none focus:outline-none h-4/5 w-12 border-2 border-gray-400 hover:bg-blue-700 active:bg-blue-800"
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
    </div>
    <p class="text-5xl text-gray-400">{{ sc }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "searchSeries",
  data() {
    return {
      sc: "",
    };
  },
  created() {
    const sc = this.$route.query.sc;
    this.sc = sc;
  },
});
</script>

<style scoped>
</style>