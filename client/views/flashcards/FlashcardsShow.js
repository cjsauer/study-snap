if (Meteor.isClient) {
  Template.FlashcardsShow.helpers({
    flashcards: function(){
      return Flashcards.find().fetch();
    }
  });
}

