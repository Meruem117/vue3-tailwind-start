<template>
  <div class="content">
    <div id="card" class="card w-sv h-sv mx-auto rounded absolute top-1/3">
      <div
        class="card_cover rounded bg-gradient-to-bl from-gray-400 to-gray-900 cursor-pointer"
        style="
          background-image: url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_1.jpg);
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
window.onload = function () {
  let card = document.getElementById("card");
  card.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 10;
    let y = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateX(${-y}deg) rotateY(${-x}deg) scale(1.2)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = ``;
  });
};
</script>

<style scoped>
</style>
