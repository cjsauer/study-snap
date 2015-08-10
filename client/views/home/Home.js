Template.Home.helpers({
  courses: function() {
    return Courses.find({"students.id": Meteor.userId()}).fetch();
  }
});
Template.MyCourse.helpers({
  challenges: function(courseId) {
    return _.map(Challenges.find({"challengee": Meteor.userId()}).fetch(), function(challenge) { 
      var course = Courses.findOne({"_id": courseId});
      console.log(course);
      return {
        "course": course.title, 
        "student": _.find(course.students, function(student) { 
          return student.id === challenge.challenger
        }).name
      }; 
    });
  }
});
