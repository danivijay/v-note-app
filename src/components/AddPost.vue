<template>
  <v-layout row wrap>
    <v-flex
      white
      elevation-2
      xs12
      sm10 
      offset-sm1
      >
      <v-toolbar flat dense class="grey darken-4" dark>
        <v-toolbar-title>Add a new post</v-toolbar-title>
      </v-toolbar>
      <v-form 
        class="pr-3 pl-3"
        ref="form" 
        lazy-validation>
        <v-text-field
          label="Title"
          v-model.lazy="blog.title"
          :rules="blog.titleRules"
          required
        ></v-text-field>
        <v-text-field
          label="Content"
          v-model.lazy="blog.content"
          :rules="blog.contentRules"
          :counter="280"
          required
          multi-line
        ></v-text-field>
        <v-checkbox label="Web Development" v-model="blog.categories" value="Web Development"></v-checkbox>
        <v-checkbox label="Entreprenuership" v-model="blog.categories" value="Entreprenuership"></v-checkbox>
        <v-checkbox label="Productivity" v-model="blog.categories" value="Productivity"></v-checkbox>
        <v-select
          v-bind:items="blog.levelTypes"
          v-model="blog.level"
          label="Auther"
          single-line
          bottom
        ></v-select>
        <v-btn
          @click="submitPost"
        >
          Post now
        </v-btn>
      </v-form>
      <v-divider></v-divider>
      <div class="pr-3 pl-3 pb-3 pt-3">
        <h5>Preview:</h5>
        <h2>{{ blog.title }}</h2>
        <p> {{ blog.level.text }}</p>
        <p>{{ blog.content }}</p>
        <v-chip v-for="category in blog.categories" :key="category"> {{ category }} </v-chip>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        title: '',
        titleRules: [
          (v) => !!v || 'Title is required',
          (v) => v && v.length >= 3 || 'Title must be greater than 3 characters',
          (v) => v && v.length <= 20 || 'Title must be less than 20 characters'
        ],
        content: '',
        contentRules: [
          (v) => !!v || 'Content is required',
          (v) => v && v.length >= 3 || 'Content must be greater than 3 characters',
          (v) => v && v.length <= 280 || 'Content must be less than 280 characters'
        ],
        categories: [],
        levelTypes: [
          { text: 'Dani' },
          { text: 'UtmostDev' },
          { text: 'The Web Club' }
        ],
        level: ''
      }
    }
  },
  methods: {
    submitPost () {
      console.log(axios)
      this.axios.post(`http://jsonplaceholder.typicode.com/posts`, {
        userId: 1,
        title: blog.title,
        body: blog.content
      })
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>

</style>
