Template.Leaderboard.helpers({
  students : function() {
    // We are subscribed to course in the route file

    // No need to do a fetch. The current course is stored in this

    //var course = Courses.find().fetch()[0];
    //console.log(this.students);
    return this.students.sort(function(a, b) {
      if(a.score < b.score) return 1;
      if(a.score > b.score) return -1;
      return 0;
    });
  }
});

Template.LeaderboardEntry.helpers({
  notMe: function(userId) {
    return userId !== Meteor.userId();
  },
  myId: function() {
    return Meteor.userId();
  },
  challengeWaiting: function(userId) {
    return Challenges.findOne({"course": Router.current().params._id, "challenger": userId, "challengee": Meteor.userId()});
  },
  ChallengeOrNotEnrolled: function(userId) {
    // check if a student is enrolled in the course
    var enrolled = _.find(Courses.findOne({"_id": Router.current().params._id}).students, function(student) { 
      return student.id === Meteor.userId();
    });
    
    // check if the student has already challenged this person
    var challenged = Challenges.findOne({"challenger": Meteor.userId(), "challengee": userId, "course": Router.current().params._id});
    return !enrolled || challenged;
  }
});
