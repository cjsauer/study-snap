// All flashcards
Meteor.publish('flashcards', function() {
  return Flashcards.find();
});
