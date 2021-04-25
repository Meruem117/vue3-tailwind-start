<template>
  <p class="fixed top-1/2 text-gray-400">{{ cid }}</p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "cate",
  data() {
    return {
      cid: "",
    };
  },
  created() {
    let cid = this.$route.params;
    this.cid = cid;
    console.log(this.$route.params); //动态路由传值
  },
});
</script>

<style scoped>
</style>