// Flashcards for a specific course
Meteor.publish('flashcards', function(courseID) {
  return Flashcards.find({courseID: courseID});
});
