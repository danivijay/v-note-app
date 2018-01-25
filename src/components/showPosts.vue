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
        <h2>Heading</h2>
        <p>Para</p>
      </div>
      <v-divider></v-divider>
      <div class="pl-2 pr-2 pt-2 pb-2">
        <h2>Heading</h2>
        <p>Para</p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      blogs : {}
    }
  },
  async created() {
    try {
      const data = (await axios.get(`http://jsonplaceholder.typicode.com/posts`)).data
      this.blogs = data
      console.log(this.blogs)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style>

</style>
