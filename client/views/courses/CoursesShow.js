Template.CoursesShow.helpers({
  amStudent: function() {
    var course = Courses.find().fetch()[0];
    return _.some(course.students, function(student) {
      return student.id === Meteor.userId();
    });
  }
});

Template.CoursesShow.events({
  'click #joinCourseButton': function(event) {
    event.preventDefault();
    var routerParams = Router.current().params;
    var courseID = routerParams && routerParams._id;
    Meteor.call('joinCourse', courseID, function(err, result) {
      if(err) {
        console.error(err);
      }
    });
  },

  'click #leaveCourseButton': function(event) {
    event.preventDefault();

    if(confirm("Are you sure you want to leave this course?")) {
      var routerParams = Router.current().params;
      var courseID = routerParams && routerParams._id;
      Meteor.call('leaveCourse', courseID, function(err, result) {
        if(err) {
          console.error(err);
        }
      });
    }
  }
});
