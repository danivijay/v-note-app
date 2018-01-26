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
      <template v-for="(blog, index) in filteredblogs">
        <router-link tag="div" :to="`/view/${index}`" class="pl-2 pr-2 pt-2 pb-2" :key="blog.title">
          <h2 v-rainbow>{{ blog.title | firstUpperCase }}</h2>
          <p>{{ blog.content }}</p>
        </router-link>
        <v-divider :key="blog.id"></v-divider>
      </template>
      <v-alert v-if="failed" class="ml-2 mr-2 mt-2 mb-2" color="error" icon="warning" value="true">
      Oops! Something went wrong
      </v-alert>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import searchMixin from '../mixins/searchMixin'

export default {
  data () {
    return {
      blogs : {},
      failed: false,
      search: ''
    }
  },
  async created() {
    try {
      this.blogs = (await axios.get(`https://vueblog-1822a.firebaseio.com/posts.json`)).data
      this.failed = false
      console.log(this.blogs)
    } catch (e) {
      console.log(e)
      this.failed = true
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
  },
  mixins: [searchMixin]
}
</script>

<style>

</style>
