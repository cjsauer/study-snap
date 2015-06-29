Template.FlashcardsList.helpers({
  flashcards: function(){
    return Flashcards.find().fetch();
  }
});
