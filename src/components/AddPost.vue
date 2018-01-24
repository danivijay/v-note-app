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
        v-model="valid" 
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
      </v-form>
      <v-devider></v-devider>
      <div class="pr-3 pl-3 pb-3 pt-3">
        <h5>Preview:</h5>
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.content }}</p>
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
        ]
      }
    }
  }
}
</script>

<style>

</style>
