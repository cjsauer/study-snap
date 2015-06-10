Template.FlashcardsNew.events({
  "click .flip":function(event, template){
    //console.log(event);
    //console.log(template);
    template.$('.front').toggleClass('hidden');
    template.$('.back').toggleClass('hidden');
  }
});

