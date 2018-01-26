export default {
  computed: {
    filteredblogs: function () {
      if (this.search != '') {
        return this.blogs
          .filter( (blog) => { 
            return (blog.title.toLowerCase().match(this.search.toLowerCase()) || blog.content.toLowerCase().match(this.search.toLowerCase())) 
          }
          )
      }
      else {
        return this.blogs
      }
    }
  }
}