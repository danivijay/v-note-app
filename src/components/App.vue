<template>
  <v-app>
    <v-toolbar fixed app>
      <router-link tag="v-toolbar-title" to="/" v-text="title"></router-link>
      <v-spacer></v-spacer>
      <v-btn to="/add" exact flat icon><v-icon>add</v-icon></v-btn>
      <v-btn to="/" exact flat icon><v-icon>home</v-icon></v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          
          <!--Site Content--> 
          <router-view></router-view>
          
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import AddPost from './AddPost.vue'
  import ShowPosts from './ShowPosts.vue'
  import ShowTitles from './ShowTitles.vue'
  export default {
    components: {
      AddPost,
      ShowPosts,
      ShowTitles
    },
    data () {
      return {
        items: [
          { icon: 'home', title: 'Home' },
          { icon: 'add', title: 'Add Post' },
        ],
        title: 'vueblog'
      }
    }
  }
</script>

<style>
  html { 
    overflow-y: auto 
  }
</style>

