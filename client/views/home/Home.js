Template.Home.helpers({
  courses: function() {
    return Courses.find({"students.id": Meteor.userId()}).fetch();
  }
});
Template.MyCourse.helpers({
  challenges: function(courseId) {
    return _.map(Challenges.find({"challengee": Meteor.userId(), "course": courseId}).fetch(), function(challenge) { 
      var course = Courses.findOne({"_id": courseId});
      var challenger = _.find(course.students, function(student) { 
        return student.id === challenge.challenger;
      });

      return { "course": course.title, "student": challenger.name }; 
    });
  }
});
