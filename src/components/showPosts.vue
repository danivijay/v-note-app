<template>
  <v-layout row wrap>
    <v-flex
      white
      elevation-2
      xs12
      sm10 
      offset-sm1
      >
      <div class="pl-2 pr-2 pt-2 pb-2">
        <v-text-field
          v-model="search"
          label="Search"
        ></v-text-field>
      </div>
      <v-divider></v-divider>
      <template v-for="post in filteredPosts">
        <div class="pl-2 pr-2 pt-2 pb-2" :key="post.title">
          <h2 v-rainbow>{{ post.title | firstUpperCase }}</h2>
          <p>{{ post.body | snippet }}</p>
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
      failed: false,
      search: ''
    }
  },
  async created() {
    try {
      this.posts = (await axios.get(`http://jsonplaceholder.typicode.com/posts`)).data
        .filter((post, index) => index < 10)
      this.failed = false
      console.log(this.posts)
    } catch (e) {
      console.log(e)
      this.failed = true
    }
  },
  computed: {
    filteredPosts: function () {
      if (this.search != '') {
        return this.posts
          .filter( (post) => 
            (post.title.match(this.search) || post.body.match(this.search)) 
          )}
      else {
        return this.posts
      }
    }
  },
  filters: {
    snippet (val) { 
      return val.slice(0, 150) + '...'
    }
  },
  directives: {
    rainbow: {
      bind (el, binding, vnode) {
        return el.style.color = '#' + Math.random().toString(10).slice(2,8)
      }
    }
  }
}
</script>

<style>

</style>
