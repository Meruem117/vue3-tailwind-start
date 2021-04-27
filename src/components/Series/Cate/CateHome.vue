<template>
  <transition name="fade">
    <seriesLoading v-if="isLoading"></seriesLoading>
  </transition>
  <seriesContent :main_list="data" :recommend_list="recommend"></seriesContent>
</template>

<script>
import { defineComponent } from "vue";
import seriesContent from "../SeriesContent.vue";
import seriesLoading from "../SeriesLoading.vue";

export default defineComponent({
  name: "cateHome",
  components: { seriesContent, seriesLoading },
  data() {
    return {
      data: [],
      recommend: [],
      isLoading: true,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get("/api/getHome")
        .then((response) => {
          this.data = response.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>