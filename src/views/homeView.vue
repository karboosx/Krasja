<template>
  <section class="main">
    <div class="main_container">
      <div class="main_content">
        <div class="main_content_title">
          GRUPA KRASJA
        </div>
        <aboutus></aboutus>
        <members></members>
        <endContent></endContent>
      </div>
    </div>
    <events></events>
    <endOfPage></endOfPage>
  </section>
</template>

<script>
  import aboutus from '../components/AboutUs/aboutUs.vue'
  import members from '../components/Members/members.vue'
  import endContent from '../components/endContent/endContent.vue'
  import events from '../components/events/events.vue'
  import endOfPage from '../components/endOfPage/endOfPage.vue'

  export default {
    name: 'home',
    components: {
      aboutus,
      members,
      endContent,
      events,
      endOfPage
    }
  }
</script>

<style lang="scss">
  @improt '../../static/style/style.scss'
</style>
