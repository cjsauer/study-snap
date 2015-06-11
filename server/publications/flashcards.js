
// All flashcards
Meteor.publish('flashcards', function() {
  return Flashcards.find();
});


// A single flashcard
Meteor.publish('flashcard', function(id) {
  return Flashcards.find(id);
});
