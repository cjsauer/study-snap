Template.Flashcard.events({
  "click .flip": function(event, template){
    template.$('.front').toggleClass('hidden');
    template.$('.back').toggleClass('hidden');
  }
});

Template.Flashcard.helpers({
  indexIsZero: function() {
    return this.index == 0
  }
});

UI.registerHelper('addIndex', function (all) {
    return _.map(all, function(val, index) {
        return {index: index, value: val};
    });
});
