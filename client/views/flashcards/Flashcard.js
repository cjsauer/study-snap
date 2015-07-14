Template.Flashcard.events({
  "click .flip": function(event, template){
    template.$('.front').toggleClass('hidden');
    template.$('.back').toggleClass('hidden');
  }
});
