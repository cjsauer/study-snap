// All courses
Meteor.publish('courses', function() {
  return Courses.find();
});


// A single course
Meteor.publish('course', function(id) {
  return Courses.find(id);
});
