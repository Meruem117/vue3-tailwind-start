<template>
  <div
    class="flex fixed -bottom-0.5 justify-center w-auto h-20 bg-pan-dark border rounded-lg border-gray-500 shadow-xl"
  >
    <div class="flex m-0 p-2 justify-center items-center">
      <div
        @click="this.$router.push({ path: icon.path })"
        class="icon inline-block relative select-none outline-none box-border text-center m-1.5 w-16 h-16 transition-all duration-500"
        tabindex="1"
        v-for="(icon, index) in icons"
        :key="index"
      >
        <img :src="icon.img" class="w-full h-full" />
        <div
          class="title absolute left-1/2 -top-16 bg-pan-dark p-2 rounded opacity-0 text-gray-400 transition-all duration-200 transform -translate-x-1/2"
        >
          {{ icon.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "dock",
  data() {
    return {
      icons: [
        {
          name: "Home",
          img:
            "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Home-512.png",
          path: "/home",
        },
        {
          name: "Series",
          img:
            "https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/video-128.png",
          path: "/series",
        },
        {
          name: "Car",
          img:
            "https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/delorean-01-128.png",
          path: "/home",
        },
        {
          name: "Game",
          img:
            "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Toy-128.png",
          path: "/home",
        },
        {
          name: "Animal",
          img:
            "https://cdn2.iconfinder.com/data/icons/free-version/128/recycling-128.png",
          path: "/home",
        },
      ],
    };
  },
});
</script>

<style>
.icon .title {
  z-index: 2;
}

.icon .title:after {
  content: "";
  position: absolute;
  border: 10px solid transparent;
  border-top: 10px solid #2d333b;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%) translateY(0px);
}

.icon:hover .title {
  opacity: 1;
}

.icon:focus img {
  animation: bounce 1s;
}

@keyframes bounce {
  0% {
    transform: translateY(0px) translateX(0.1px);
  }
  25% {
    transform: translateY(-40px) translateX(0.1px);
  }
  50% {
    transform: translateY(0px) translateX(0.1px);
  }
  75% {
    transform: translateY(-20px) translateX(0.1px);
  }
  100% {
    transform: translateY(0px) translateX(0.1px);
  }
}
</style>
