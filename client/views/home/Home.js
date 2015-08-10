Template.Home.helpers({
  courses: function() {
    return Courses.find({"students.id": Meteor.userId()}).fetch();
  }
});
Template.MyCourse.helpers({
  myScore: function() {
    if (Meteor.userId()) {
      return _.find(this.students, function(student) {
        return student.id === Meteor.userId();
      }).score;
    }
  },
  challenges: function(courseId) {
    return _.map(Challenges.find({"challengee": Meteor.userId(), "course": courseId}).fetch(), function(challenge) { 
      var course = Courses.findOne({"_id": courseId});
      var challenger = _.find(course.students, function(student) { 
        return student.id === challenge.challenger;
      });

      return {"student": challenger.name }; 
    });
  }
});
