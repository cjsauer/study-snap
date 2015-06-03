var CourseSchema = new SimpleSchema({
  university: {
    type: String,
    label: "School",
    max: 100
  },
  title: {
    type: String,
    label: "Course name",
    max: 100
  },
  deck: {
    type: String,
    label: "Deck ID",
    //TODO: This should be set to a new Deck collection
    autoValue: function() {
      if (this.isInsert) {
        return new Mongo.ObjectID()._str;
      } else if(this.isUpsert) {
        return {$setOnInsert: new Mongo.ObjectID()._str};
      }else {
        this.unset(); //Prevent any updates
      }
    }
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
  }
});

Courses = new Meteor.Collection('courses');

Courses.attachSchema(CourseSchema);

Courses.initEasySearch(['university', 'title'], {
  'limit': 10,
  'use': 'mongo-db'
});
