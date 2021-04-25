<template>
  <seriesContent :main_list="data" :recommend_list="recommend"></seriesContent>
</template>

<script>
import { defineComponent } from "vue";
import seriesContent from "../SeriesContent.vue";

export default defineComponent({
  name: "cateHome",
  components: { seriesContent },
  data() {
    return {
      data: [],
      recommend: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get("/api/getHome")
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>