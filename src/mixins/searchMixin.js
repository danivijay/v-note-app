export default {
  computed: {
    filteredblogs: function () {
      if (this.search != '') {
        return this.blogs
          .filter( (blog) => 
            (blog.title.match(this.search) || blog.body.match(this.search)) 
          )}
      else {
        return this.blogs
      }
    }
  }
}