Template.Flashcard.events({
  "click .flip": function(event, template){
    template.$('.front').toggleClass('hidden');
    template.$('.back').toggleClass('hidden');
  }
});

UI.registerHelper('addIndex', function (all) {
    return _.map(all, function(val, index) {
        return {index: index, value: val};
    });
});
