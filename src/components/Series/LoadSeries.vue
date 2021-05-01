<template>
  <div class="content">
    <div
      class="loading-text absolute top-1/2 leading-10 m-auto text-center w-full h-full"
    >
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "loadSeries",
});
</script>

<style>
.loading-text span {
  @apply inline-block;
  @apply m-2;
  @apply text-gray-400;
  @apply text-5xl;
  @apply font-semibold;
  @apply tracking-widest;
}

.loading-text span:nth-child(1) {
  filter: blur(0px);
  animation: blur-text 1.5s 0s infinite linear alternate;
}

.loading-text span:nth-child(2) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.2s infinite linear alternate;
}

.loading-text span:nth-child(3) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.4s infinite linear alternate;
}

.loading-text span:nth-child(4) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.6s infinite linear alternate;
}

.loading-text span:nth-child(5) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.8s infinite linear alternate;
}

.loading-text span:nth-child(6) {
  filter: blur(0px);
  animation: blur-text 1.5s 1s infinite linear alternate;
}

.loading-text span:nth-child(7) {
  filter: blur(0px);
  animation: blur-text 1.5s 1.2s infinite linear alternate;
}

@keyframes blur-text {
  0% {
    filter: blur(0px);
  }

  100% {
    filter: blur(4px);
  }
}
</style>
