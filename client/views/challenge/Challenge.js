Template.Challenge.helpers({
  cards: function() {
    return _.sample(Flashcards.find().fetch(), 5);
  }
});
Template.ChallengeQuestion.events({
  "click .list-group-item": function(event, template){
    //template.$('.list-group-item').toggleClass('active');
    template.$('.list-group-item').not(event.target).removeClass('active');
    template.$(event.target).toggleClass('active');
  }
});
Template.ChallengeQuestion.helpers({
  response: function() {
    return _.shuffle([this.response1, this.response2, this.response3, this.response4]);
  }
});
/*
var ul = document.querySelector('ul');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
*/
