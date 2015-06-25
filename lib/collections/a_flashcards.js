var FlashcardSchema = new SimpleSchema({
  front: {
    type: String,
    label: "Front of card",
    max: 300
  },
  back: {
    type: String,
    max: 300
  },
  responses: {
    type: Array,
    minCount: 3  
  }, 
  'responses.$': {
    type: Object
  },
  'responses.$.text': {
    type: String,
    max: 300
  },
  courseID: {
    type: String,
    label: "Course ID"
  },
  creator: {
    type: String,

    //Should be set to the logged in user's id
    autoValue: function() {
      if(this.isInsert) {
        return this.userId;
      } else if(this.isUpsert) {
        return {$setOnInsert: this.userId};
      } else {
        this.unset(); //Prevent any updates
      }
    }
  },
  rating: {
    type: Number,
    autoValue: function() {
      return 1;
    }
  }
});

Flashcards = new Meteor.Collection('flashcards');

Flashcards.attachSchema(FlashcardSchema);

