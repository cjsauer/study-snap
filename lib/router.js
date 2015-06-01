/*
 * Configuration
 */
Router.configure({
  layoutTemplate: 'Layout'
});

/*
 * Home page
 */
Router.route('/', { name: 'home' });


/*
 * Courses
 */
Router.route('/courses/new', { name: 'courses.new' });
Router.route('/courses/:_id', {
  name: 'courses.show',
  subscriptions: function() {
    this.subscribe('course', this.params._id);
  },
  data: function() {
    return Courses.findOne({_id: this.params._id});
  }
});
