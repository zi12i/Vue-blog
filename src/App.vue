<template>
<div>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">JimmyLog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div class="mainPage">
    <router-link to="/">홈 페이지</router-link>
    <router-link to="/list">리스트페이지</router-link>
  <!-- <List :블로그글="블로그글"/> -->
    <router-view :블로그글="블로그글"></router-view>
  </div>

</div>
</template>

<script>
    // import List from '@/components/list.vue'
    import blog from '@/assets/blog.js'

    export default {
      name: 'App',
      data(){
        return{
          블로그글 : blog
        }
      },
      // components: {
      //   List: List,
      // }
    }
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mainPage{
  text-align: center;
}
</style>
