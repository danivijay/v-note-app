export default {
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
  }
}