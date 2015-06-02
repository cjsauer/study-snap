var FlashcardSchema = new SimpleSchema({
  question: {
    type: String,
    label: "Front",
    max: 500
  },
  answer: {
    type: Number
  },
  responses: {
    type: Object,
    minCount: 4
  },
  'responses.$': {
    type: String,
    max: 500
  },
  rating: {
    type: Number
  }
});

Flashcards = new Meteor.Collection('flashcards');

Flashcards.attachSchema(FlashcardSchema);
