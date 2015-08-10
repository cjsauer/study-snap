Template.Home.helpers({
  challenges: function() {
    return _.map(Challenges.find({"challengee": Meteor.userId()}).fetch(), function(challenge) { 
      var course = Courses.findOne({"_id": challenge.course});
      return {
        "course": course.title, 
        "student": _.find(course.students, function(student) { 
          return student.id === challenge.challenger
        }).name
      }; 
    });
  }
});
