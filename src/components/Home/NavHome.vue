<template>
  <div class="header">
    <div class="dev">
      <a href="#">
        <img src="../../../static/logo.png" />
      </a>
    </div>
    <div class="search">
      <input
        type="text"
        placeholder="Search something..."
        name="search_content"
      />
    </div>
    <nav class="nav">
      <router-link to="/home"> Home </router-link>
      <router-link to="/home"> About </router-link>
      <router-link to="/series"> Series </router-link>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "navHome",
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

.dev {
  float: left;
  line-height: 40px;
  margin: 10px 10px 10px 25px;
}

.dev a img {
  width: 40px;
  height: 40px;
  /* border-radius: 50%; */
  overflow: hidden;
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
  margin: 15px;
}

.nav a {
  display: inline;
  margin-left: 10px;
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