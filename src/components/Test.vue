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

  <div class="b-game-card w-sv h-sv mx-auto fixed bottom-48">
    <div
      class="b-game-card__cover bg-gradient-to-bl from-gray-400 to-gray-900"
      :style="{ backgroundImage: 'url(' + url + ')' }"
    ></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "test",
  data() {
    return {
      url:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1285044771.webp",
    };
  },
});
</script>

<style scoped>
.b-game-card {
  z-index: 1;
  perspective: 1000px;
}

.b-game-card__cover {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  transform-origin: top center;
  will-change: transform;
  transform: skewX(0.001deg);
  transition: transform 0.35s ease-in-out;
}

.b-game-card__cover::after {
  display: block;
  content: "";
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background: linear-gradient(
    226deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.4) 35%,
    rgba(255, 255, 255, 0.2) 42%,
    rgba(255, 255, 255, 0) 60%
  );
  transform: translateY(-20%);
  will-change: transform;
  transition: transform 0.65s cubic-bezier(0.18, 0.9, 0.58, 1);
}

.b-game-card:hover .b-game-card__cover {
  transform: rotateX(7deg) translateY(-6px);
}

.b-game-card:hover .b-game-card__cover::after {
  transform: translateY(0%);
}

.b-game-card::before {
  display: block;
  content: "";
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 6px 12px 12px rgba(0, 0, 0, 0.4);
  will-change: opacity;
  transform-origin: top center;
  transform: skewX(0.001deg);
  transition: transform 0.35s ease-in-out, opacity 0.5s ease-in-out;
}

.b-game-card:hover::before {
  opacity: 0.6;
  transform: rotateX(7deg) translateY(-6px) scale(1.05);
}
</style>