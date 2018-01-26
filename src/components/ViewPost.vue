<template>
  <v-layout row wrap>
    <v-flex
      white
      elevation-2
      xs12
      sm10 
      offset-sm1
      class="pl-2 pr-2 pt-2 pb-2"
      >
      <div class="pr-3 pl-3 pb-3 pt-3">
        <h2>{{ blog.title }}</h2>
        <p> {{ blog.level.text }}</p>
        <p>{{ blog.content }}</p>
        <v-chip v-for="category in blog.categories" :key="category"> {{ category }} </v-chip>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      id: this.$route.params.id,
      blog: {},
      failed: false
    }
  },
  async created () {
    console.log('hereee1')
    try {
      this.blog = (await axios.get(`https://vueblog-1822a.firebaseio.com/posts/${this.id}.json`)).data
      this.failed = false
      console.log(this.blog)
    } catch (e) {
      console.log(e)
      this.failed = true
    }
  }
}
</script>

<style>

</style>
