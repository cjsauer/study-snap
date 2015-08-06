Meteor.methods({
  updateScore: function(courseId, pointsScored) {
    check(courseId, String);

    if(this.userId) {
      var course = Courses.find({_id: courseId});

      if(course) {
        var student = _.find(Courses.findOne({"_id": courseId}).students, function(student) {
          return student.id === Meteor.userId();
        });

        student.score = student.score + pointsScored;

        Courses.update(
          { "_id": courseId, "students.id": Meteor.userId() }, 
          { $set: { "students.$.score": student.score } }
          //{ "upsert": true }
        );
      } else {
        throw new Meteor.Error('course-not-found', 'That course does not exist');
      }
    } else {
      throw new Meteor.Error('not-authorized', 'You must be logged in to get a score');
    }
  }
});
