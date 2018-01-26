import ShowPosts from './components/ShowPosts.vue'
import AddPost from './components/AddPost.vue'
import ViewPost from './components/ViewPost.vue'

export default [
  {path: '/', component: ShowPosts},
  {path: '/add', component: AddPost},
  {path: '/view/:id', component: ViewPost}
]