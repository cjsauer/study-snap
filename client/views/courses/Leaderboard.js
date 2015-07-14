Template.Leaderboard.helpers({
  students : function() {
    // We are subscribed to courseStudents in the route file
    return Meteor.users.find().fetch();
  }
});
