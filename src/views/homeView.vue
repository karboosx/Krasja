<template>
  <section class="main">
    <div class="main_c">
      <div class="main_content">
        <div class="main_title">
          GRUPA KRASJA
        </div>
        <aboutus></aboutus>
        <members></members>
        <endContent></endContent>
      </div>
    </div>
    <events></events>
  </section>
</template>

<script>
  import aboutus from '../components/AboutUs/aboutUs.vue'
  import members from '../components/Members/members.vue'
  import endContent from '../components/endContent/endContent.vue'
  import events from '../components/events/events.vue'

  export default {
    name: 'home',
    components: {
      aboutus,
      members,
      endContent,
      events
    }
  }
</script>

<style lang="scss">
  @improt '../../static/style/style.scss'
</style>
