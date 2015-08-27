Template.Flashcard.onRendered(function() {
  $(".card").flip();
});

Template.Flashcard.helpers({
  beforeRemove: function() {
    return function(collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete "' + doc.front + '"?')) {
        this.remove();
      }
    };
  },
  courseOrCardOwner: function() {
    return this.creator === Meteor.userId() || Courses.findOne({"_id": this.courseID}).creator === Meteor.userId();
  }
});
