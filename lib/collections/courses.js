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
  students: {
    type: [Object], //list of user IDs
    defaultValue: []
  },
  "students.$.id": {
    type: String,
    unique: true
  },
  "students.$.name": {
    type: String
  },
  "students.$.score": {
    type: Number
  }
});

Courses = new Meteor.Collection('courses');

Courses.attachSchema(CourseSchema);
