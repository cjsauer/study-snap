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
  }
});
