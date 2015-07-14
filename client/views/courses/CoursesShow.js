Template.CoursesShow.helpers({
  amStudent: function() {
    var course = Courses.find().fetch()[0];
    return _.some(course.students, function(student) {
      return student.id === Meteor.userId();
    });
  }
});

Template.CoursesShow.events({
  'click #joinClassButton': function(event) {
    event.preventDefault();
    var routerParams = Router.current().params;
    var courseID = routerParams && routerParams._id;
    Meteor.call('joinCourse', courseID, function(err, result) {
      if(err) {
        console.error(err);
      }
    });
  }
});
