/*
 * Course routes options
 */
CourseController = RouteController.extend({

});


/*
 * Course routes
 */
Router.route('/courses/new', { name: 'courses.new' });
Router.route('/courses/:_id', {
  name: 'courses.show',
  waitOn: function() {
    return [
      this.subscribe('course', this.params._id),
      this.subscribe('flashcards', this.params._id),
    ];
  },
  data: function() {
    return Courses.findOne({_id: this.params._id});
  }
});
