Meteor.methods({
  joinCourse: function(courseID) {
    check(courseID, String);

    if(this.userId) {
      var course = Courses.find({_id: courseID});

      if(course) {
        var user = Meteor.user();

        var objectToAdd = {
          id: this.userId,
          name: user.profile.name,
          score: 0
        };

        Courses.update({_id: courseID}, {$addToSet: {students: objectToAdd }});
      } else {
        throw new Meteor.Error('course-not-found', 'That course does not exist');
      }
    } else {
      throw new Meteor.Error('not-authorized', 'You must be logged in to join a course');
    }
  },

  leaveCourse: function(courseID) {
    check(courseID, String);

    if(this.userId) {
      var course = Courses.find({_id: courseID});

      if(course) {
        Courses.update({_id: courseID}, {$pull: {students: {id: this.userId}}});
        Challenges.remove({course: courseID, $or: [{'challenger': this.userId}, {'challengee': this.userId}]});
      } else {
        throw new Meteor.Error('course-not-found', 'That course does not exist');
      }
    } else {
      throw new Meteor.Error('not-authorized', 'You must be logged in to leave a course');
    }
  }
});
