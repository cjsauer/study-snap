Meteor.methods({
  updateScore: function(courseId, answers) {
    check(courseId, String);

    if(this.userId) {
      var course = Courses.find({_id: courseId});

      if(course) {
        // This variable only makes sense if there is one card per call.
        var correct = false;
        var student = _.find(Courses.findOne({"_id": courseId}).students, function(student) {
          return student.id === Meteor.userId();
        });

        // for each answer check that it is equal to the first response of each
        //  card and score appropriately
        _.each(_.keys(answers), function(card) {
          if (Flashcards.findOne({"_id": card}).response1 === answers[card]) {
            student.score = student.score + 3;
            correct = true;
          } else if (answers[card]) {
            student.score = student.score + 1;
          }
        });

        Courses.update(
          { "_id": courseId, "students.id": Meteor.userId() },
          { $set: { "students.$.score": student.score } }
        );
        return correct;
      } else {
        throw new Meteor.Error('course-not-found', 'That course does not exist');
      }
    } else {
      throw new Meteor.Error('not-authorized', 'You must be logged in to get a score');
    }
  },
  removeChallengee: function(userId, courseId) {
    check(courseId, String);

    if(this.userId) {
      var challenge = Challenges.findOne({"challengee": userId, "course": courseId});

      if(challenge) {
        Challenges.remove({"challengee": userId, "course": courseId});
      } else {
        throw new Meteor.Error('challenge-not-found', 'That challenge does not exist');
      }
    } else {
      throw new Meteor.Error('not-authorized', 'You must be logged in to remove a challenge');
    }
  }
});
