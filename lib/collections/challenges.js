var ChallengeSchema = new SimpleSchema({
  challenger: {
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
  challengee: {
    type: String
  },
  course: {
    type: String
  }
});

Challenges = new Meteor.Collection('challenges');

Challenges.attachSchema(ChallengeSchema);
