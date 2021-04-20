<template>
  <div
    class="flex flex-row flex-nowrap flex-auto w-screen h-16 p-2 bg-pan-dark align-middle"
  >
    <div
      class="flex flex-row flex-nowrap flex-auto float-left justify-start items-center align-middle h-full w-auto space-x-4"
    >
      <img src="../assets/logo.png" class="w-auto h-full ml-2" />
      <h5 class="font-mun text-4xl text-pink-700 align-baseline tracking-wide">
        The Stitcher
      </h5>
      <router-link
        to="/home"
        class="font-twi text-3xl text-gray-400 align-baseline tracking-wider hover:text-pink-700 hover:underline"
        >Home</router-link
      >
    </div>
    <div
      class="flex flex-row-reverse float-right align-middle items-center h-full w-auto pr-5"
    >
      <button
        class="outline-none focus:outline-none h-4/5 w-12 border-2 border-gray-400 rounded-3xl rounded-l-none hover:border-blue-500"
      >
        <svg
          class="w-6 h-4/5 text-gray-400 cursor-pointer mx-auto hover:text-blue-500"
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
        class="w-auto h-4/5 px-3 border-2 border-r-0 border-gray-400 bg-transparent rounded-xl rounded-r-none text-xl font-twi text-gray-400 placeholder-opacity-70 transition-all ease-in outline-none focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2"
        type="search"
        placeholder="Search..."
      />
    </div>
    <div
      class="flex flex-auto flex-nowrap h-full w-auto items-center justify-end mr-8"
    >
      <div
        class="w-12 h-12 float-right bg-cover rounded-full bg-center absolute"
        style="
          background-image: url(https://images.unsplash.com/photo-1589310766623-cb9c476330f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBvdHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60);
        "
      ></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "test",
});
</script>

<style scoped>
</style>