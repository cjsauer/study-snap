Template.Leaderboard.helpers({
  students : function() {
    // We are subscribed to course in the route file
    var course = Courses.find().fetch()[0];
    return course.students;
  }
});
