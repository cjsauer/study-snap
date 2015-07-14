// All courses
Meteor.publish('courses', function() {
  return Courses.find();
});


// A single course
Meteor.publish('course', function(id) {
  return Courses.find(id);
});

// The students of a course
Meteor.publish('courseStudents', function(id) {
  var course = Courses.find(id);
  var studentIDs = course && course.students;

  if(studentIDs) {
    return Meteor.users.find({_id: {$in: studentIDs} });
  } else {
    return [];
  }
});
