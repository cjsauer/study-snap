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
Router.route('/courses/:_id', { name: 'courses.show' });
