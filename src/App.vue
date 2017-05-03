<template>
  <div id="app" class="app">
    <header class="header">
      <nav class="header_navbar">
        <ul class="header_navbar_menu">
          <li class="header_navbar_menu_link"><a class="header_navbar_menu_link_href" href="#">Strona Główna</a></li>
          <li class="header_navbar_menu_link"><a class="header_navbar_menu_link_href" href="#">O nas</a></li>
          <li class="header_navbar_menu_link"><a class="header_navbar_menu_link_href" href="#">Nasza kompania</a></li>
          <li class="header_navbar_menu_link"><a class="header_navbar_menu_link_href" href="#">Larpy</a></li>
        </ul>
      </nav>
      <div class="header_title">
        <h1 class="header_title_name">KRASJA</h1>
        <hr class="header_title_line">
        <h2 class="header_title_slogan"> Daj się porwać w wir przygody!</h2>
      </div>
    </header>
    <home></home>
  </div>
</template>

<script>
  import home from './views/homeView.vue'

  export default {
    name: 'app',
    components: {
      home
    }
  }
</script>

<style lang="scss">
  @import "../static/style/style.scss";
</style>
