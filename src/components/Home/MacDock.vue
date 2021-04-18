<template>
  <div class="glass">
    <div class="dock">
      <div @click="toHome" class="icon" tabindex="1">
        <img
          src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Home-512.png"
        />
        <div class="title">Home</div>
      </div>
      <div @click="toSeries" class="icon" tabindex="1">
        <img
          src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/video-128.png"
        />
        <div class="title">Series</div>
      </div>
      <div class="icon" tabindex="1">
        <img
          src="https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/delorean-01-128.png"
        />
        <div class="title">Car</div>
      </div>
      <div class="icon" tabindex="1">
        <img
          src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Toy-128.png"
        />
        <div class="title">Game</div>
      </div>
      <div class="icon" tabindex="1">
        <img
          src="https://cdn2.iconfinder.com/data/icons/free-version/128/recycling-128.png"
        />
        <div class="title">Animal</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "dock",
  setup() {
    function toHome() {
      this.$router.push({
        path: "/home",
      });
    }
    function toSeries() {
      this.$router.push({
        path: "/series",
      });
    }
    return {
      toHome,
      toSeries,
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
  /* background: rgba(255, 255, 255, 0.18);
  border-radius: 50%; */
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
