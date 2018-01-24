<template>
  <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          
          <!--Site Content--> 
          <add-post />

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
  export default {
    components: {
      AddPost
    },
    data () {
      return {
        drawer: false,
        fixed: false,
        items: [
          { icon: 'home', title: 'Home' },
          { icon: 'add', title: 'Add Post' },
        ],
        title: 'VueBlog'
      }
    }
  }
</script>

<style>
  html { 
    overflow-y: auto 
  }
</style>

