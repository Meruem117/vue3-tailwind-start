<template>
  <transition name="fade">
    <seriesLoading v-if="isLoading"></seriesLoading>
    <seriesContent
      :main_list="data"
      :recommend_list="recommend"
      :isNull="isNull"
      v-else
    ></seriesContent>
    <!-- ref获取子组件数据 @getMore调用父组件函数 -->
    <!-- <seriesContent
      ref="content"
      :main_list="data"
      :recommend_list="recommend"
      @getMore="getMore"
      v-else
    ></seriesContent> -->
  </transition>
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
      isNull: false,
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
          if (this.data.length == 0) {
            this.isNull = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 父组件函数
    // getMore() {
    // 获取子组件数据
    //   let number = this.$refs.content.number;
    //   console.log(number);
    // },
  },
});
</script>