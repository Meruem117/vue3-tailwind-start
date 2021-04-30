<template>
  <transition name="fade">
    <seriesLoading v-if="isLoading"></seriesLoading>
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
import seriesLoading from "../SeriesLoading.vue";

export default defineComponent({
  name: "cateCrime",
  components: { seriesContent, seriesLoading },
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
        .get("/api/getCrime")
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
    },
  },
});
</script>