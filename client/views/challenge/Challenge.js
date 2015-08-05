Template.Challenge.helpers({
  cards: function() {
    return _.sample(Flashcards.find().fetch(), 5);
  }
});
Template.Challenge.events({
  "click #start-challenge": function(event, template){
    template.$('.challenge').toggleClass('hidden');
  }
});

Template.ChallengeQuestion.helpers({
  response: function() {
    return _.shuffle([this.response1, this.response2, this.response3, this.response4]);
  }
});
Template.ChallengeQuestion.events({
  "click .list-group-item": function(event, template){
    //template.$('.list-group-item').toggleClass('active');
    template.$('.list-group-item').not(event.target).removeClass('active');
    template.$(event.target).toggleClass('active');
  }
});
