<template>
  <transition name="fade">
    <loadSeries v-if="isLoading"></loadSeries>
    <seriesContent
      :main_list="data"
      :recommend_list="recommend"
      :isNull="isNull"
      v-else
    ></seriesContent>
  </transition>
</template>

<script>
import { defineComponent } from "vue";
import seriesContent from "../SeriesContent.vue";
import loadSeries from "../LoadSeries.vue";

export default defineComponent({
  name: "cateLife",
  components: { seriesContent, loadSeries },
  data() {
    return {
      data: [],
      recommend: [],
      isLoading: true,
      isNull: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get("/api/getLife")
        .then((response) => {
          this.data = response.data;
          this.isLoading = false;
          if (this.data.length == 0) {
            this.isNull = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      this.axios
        .get("/api/getLifeRec")
        .then((response) => {
          this.recommend = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>