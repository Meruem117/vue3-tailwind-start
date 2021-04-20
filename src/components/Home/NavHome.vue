<template>
  <div
    class="flex flex-row flex-nowrap flex-auto w-screen h-16 p-2 bg-pan-dark align-middle"
  >
    <div
      class="flex flex-row flex-nowrap flex-auto justify-start items-center align-baseline h-full w-auto"
    >
      <img src="../../assets/logo.png" class="w-auto h-full m-2" />
      <div
        class="font-twi text-3xl text-gray-400 align-baseline tracking-wider space-x-5 ml-5"
      >
        <router-link to="/home" class="hover:text-pink-700 hover:underline"
          >Home</router-link
        >
        <router-link to="/about" class="hover:text-pink-700 hover:underline"
          >About</router-link
        >
        <router-link to="/test" class="hover:text-pink-700 hover:underline"
          >Test</router-link
        >
      </div>
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
  name: "navHome",
});
</script>

<style scoped>
</style>