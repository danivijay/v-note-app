<template>
  <v-layout row wrap>
    <v-flex
      white
      elevation-2
      xs12
      sm10 
      offset-sm1
      >
      <template v-for="post in posts">
        <div class="pl-2 pr-2 pt-2 pb-2" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </div>
        <v-divider :key="post.id"></v-divider>
      </template>
      <v-alert v-if="failed" class="ml-2 mr-2 mt-2 mb-2" color="error" icon="warning" value="true">
      Oops! Something went wrong
      </v-alert>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts : {},
      failed: false
    }
  },
  async created() {
    try {
      this.posts = (await axios.get(`http://jsonplaceholder.typicode.com/posts`)).data
        .filter((post, index) => index < 10)
      this.failed = false
    } catch (e) {
      console.log(e)
      this.failed = true
    }
  }
}
</script>

<style>

</style>
