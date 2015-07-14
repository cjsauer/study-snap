Template.Leaderboard.helpers({
  students : function() {
    // We are subscribed to course in the route file
    var course = Courses.find().fetch()[0];
    return course.students.sort(function(a, b) {
      if(a.score < b.score) return 1;
      if(a.score > b.score) return -1;
      return 0;
    });
  }
});

Template.LeaderboardEntry.helpers({
  notMe: function(userId) {
    return userId !== Meteor.userId();
  }
});
