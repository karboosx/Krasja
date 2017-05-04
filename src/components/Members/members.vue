<template>
  <div class="members">
    <div class="members_image">
      <div class="members_image_content">
        <img class="members_image_content_img" :src=" dataMembers.img ">
        <div class="members_image_content_hr">
          <div class="members_image_content_hr_left"></div>
          <div class="members_image_content_hr_right"></div>
        </div>
        <p class="members_image_content_name">{{ dataMembers.nick }}</p>
      </div>
    </div>

    <div class="members_line">
      <div class="members_line_circle"></div>
      <div class="members_line_hr"></div>
    </div>

    <div class="members_description">
      <p class="members_description_title">NASZA KOMPANIA</p>

      <ul class="mmembers_description_list">
        <li class="">
          <a class="list list-axe list--img list_img-axe" v-on:click="write( 0 )"></a>
        </li>
        <li class="">
          <a class="list list-sword list--img list_img-sword"  v-on:click="write( 1 )"></a>
        </li>
        <li class="">
          <a class="list list-wand list--img list_img-wand"  v-on:click="write( 2 )"></a>
      </li>
        <li class="">
          <a class="list list-mace list--img list_img-mace"  v-on:click="write( 3 )"></a>
      </li>
        <li class="">
          <a class="list list-dagger list--img list_img-dagger"  v-on:click="write( 4 )"></a>
        <li class="">
          <a class="list list-shield list--img list_img-shield"  v-on:click="write( 5 )"></a>
        </li>
      </ul>
      <div class="members_description_name_person">
        <div class="members_description_name_person_hr"></div>
        <h2 class="members_description_name_person_title">
          {{ dataMembers.name }}
        </h2>
        <div class="members_description_name_person_hr"></div>
      </div>
      <p class="description">
        {{ dataMembers.description }}
        </p>
    </div>
  </div>
</template>

<script>
  import json from '../../../static/json/data.json'

  export default {
    data () {
      return {
        dataMembers: {
          name: json.members[0].name,
          description: json.members[0].description,
          nick: json.members[0].nick,
          img: json.members[0].img
        }
      }
    },
    methods: {
      write (arg) {
        this.dataMembers.name = json.members[arg].name
        this.dataMembers.description = json.members[arg].description
        this.dataMembers.nick = json.members[arg].nick
        this.dataMembers.img = json.members[arg].img
      }

    }
  }
</script>

<style lang="scss">
  @import 'members';
</style>
