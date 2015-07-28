Template.CoursesShow.helpers({
  amStudent: function() {
    // Same error from issue #11. Current course is stored in this
    //var course = Courses.find().fetch()[0];
    console.log(this);
    return _.some(this.students, function(student) {
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
