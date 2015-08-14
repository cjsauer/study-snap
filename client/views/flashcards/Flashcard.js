Template.Flashcard.events({
  "click .flip": function(event, template){
    template.$('.front').toggleClass('hidden');
    template.$('.back').toggleClass('hidden');
  }
});

Template.Flashcard.helpers({
  beforeRemove: function(collection, id) {
    var doc = collection.findOne(id);
    if (confirm('Really delete "' + doc.front + '"?')) {
      this.remove();
    }
  }
});
