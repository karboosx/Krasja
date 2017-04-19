<template>
  <div id="app" class="app">
    <header class="header">
      <nav class="header_navbar">
        <img class="header_navbar--logo" src="~@/assets/logo.png">
        <ul class="header_navbar--links">
          <li class="link"><a class="link--href" href="#">Strona Główna</a></li>
          <li class="link"><a class="link--href" href="#">O nas</a></li>
          <li class="link"><a class="link--href" href="#">Plany</a></li>
          <li class="link"><a class="link--href" href="#">Zborjownia</a></li>
          <li class="link"><a class="link--href" href="#">Galeria</a></li>
        </ul>
      </nav>
      <div class="header_title">
        <h1 class="header_title--name">KRASJA</h1>
        <hr class="header_title--line">
        <h2 class="header_title--slogan"> Daj się porwać w wir przygody!</h2>
      </div>
    </header>
    <home></home>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './views/homeView.vue'

  export default {
    name: 'app',
    components: {
      Home
    }
  }
</script>

<style lang="scss">
  @import "../static/style/style.scss";
</style>
