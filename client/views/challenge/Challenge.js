Template.Challenge.helpers({
  cards: function() {
    return _.sample(Flashcards.find().fetch(), 5);
  }
});
Template.ChallengeQuestion.helpers({
});
