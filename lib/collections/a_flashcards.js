/*
var FlashcardSchema = new SimpleSchema({
  question: {
    type: String,
    label: "Front of card",
    max: 300
  },
  correct_response: {
    type: Number,
    label: "# of correct answer",
  },
  responses: {
    type: Object,
    minCount: 4
  }, 
  'responses.$.id': {
    type: Number,
  },
  'responses.$.text': {
    type: String,
    max: 300
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
    type: Number
  }
});
*/

var FlashcardSchema = new SimpleSchema({
  front: {
    type: String,
    label: "Front of card",
    max: 300
  },
  back: {
    type: String,
    label: "Back of card",
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

