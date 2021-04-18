<template>
  <div class="header">
    <nav class="nav">
      <router-link to="/series/home"> 首页 </router-link>
      <router-link to="/series"> 犯罪 / 悬疑 </router-link>
      <router-link to="/series"> 魔幻 / 科幻 </router-link>
      <router-link to="/series"> 都市 / 情感 </router-link>
      <router-link to="/series"> 自然 / 历史 </router-link>
      <router-link to="/series"> 灵异 / 惊悚 </router-link>
      <router-link to="/series"> 动漫 / 卡通 </router-link>
    </nav>
    <div class="search">
      <input
        type="text"
        placeholder="Search something..."
        name="search_content"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "navSeries",
});
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: #2d333b;
}

.search {
  float: left;
  margin: 16px 5px 10px 15px;
}

.search input {
  height: 25px;
  width: 180px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 5px;
  color: #cdd9e5;
  background-color: #1e2228;
  transition: 0.3s all ease-in-out;
  transition-delay: 0.1s;
}

.search input:hover {
  border-color: #6c97f5;
}

.search input:focus {
  width: 240px;
  border: 1px solid #6c97f5;
}

.nav {
  float: left;
  line-height: 30px;
  margin: 15px 15px 15px 20%;
}

.nav a {
  display: inline;
  margin-left: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  color: #cdd9e5;
  font-weight: bold;
}

.nav a:hover {
  color: #cd9b9b;
}
</style>