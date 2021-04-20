<template>
  <div class="glass">
    <div class="dock">
      <div
        @click="this.$router.push({ path: icon.icon_path })"
        class="icon"
        tabindex="1"
        v-for="(icon, index) in icons"
        :key="index"
      >
        <img :src="icon.icon_img" />
        <div class="title">{{ icon.icon_name }}</div>
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
          icon_name: "Home",
          icon_img:
            "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Home-512.png",
          icon_path: "/home",
        },
        {
          icon_name: "Series",
          icon_img:
            "https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/video-128.png",
          icon_path: "/series",
        },
        {
          icon_name: "Car",
          icon_img:
            "https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/delorean-01-128.png",
          icon_path: "/home",
        },
        {
          icon_name: "Game",
          icon_img:
            "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Toy-128.png",
          icon_path: "/home",
        },
        {
          icon_name: "Animal",
          icon_img:
            "https://cdn2.iconfinder.com/data/icons/free-version/128/recycling-128.png",
          icon_path: "/home",
        },
      ],
    };
  },
});
</script>

<style>
.glass {
  height: 6rem;
  width: auto;
  position: fixed;
  bottom: -1%;
  background: #2d333b;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  display: flex;
  justify-content: center;
}

.dock {
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  margin: 10px;
  display: inline-block;
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  text-align: center;
  display: flex;
  position: relative;
  user-select: none;
  transition: all 0.5s;
  transform-style: flat;
  outline: none;
  cursor: default;
}

.icon img {
  width: 70px;
  height: 70px;
}

.icon .title {
  z-index: 2;
  position: absolute;
  top: -110%;
  left: 50%;
  transform: translateX(-50%);
  background: #2d333b;
  padding: 10px 15px;
  border-radius: 4px;
  color: #cdd9e5;
  opacity: 0;
  transition: all 0.25s;
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
