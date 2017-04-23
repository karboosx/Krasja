<template>
  <section class="main">
    <div class="main_title">
      GRUPA KRASJA
    </div>
    <aboutus></aboutus>
    <members></members>
  </section>
</template>

<script>
  import aboutus from '../components/AboutUs/aboutUs.vue'
  import members from '../components/Members/members.vue'
  export default {
    name: 'home',
    components: {
      aboutus,
      members
    }
  }
</script>

<style lang="scss">
  @improt '../../static/style/style.scss'
</style>
