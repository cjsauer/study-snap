// All challenges
Meteor.publish('challenges', function() {
  return Challenges.find();
});


// A single course
Meteor.publish('challenge', function(id) {
  return Challenges.find(id);
});
