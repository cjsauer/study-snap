var CourseSchema = new SimpleSchema({
  university: {
    type: String,
    label: "School",
    max: 300
  },
  title: {
    type: String,
    label: "Course name"
  },
  deck: {
    type: Number,
    label: "Deck ID",
    /*
    autoValue: function() {
      if (this.isInsert) {
        return new Number();
      } else {
        this.unset();
      }
    },*/
    index: true,
    unique: true
  }
});

Courses = new Meteor.Collection('courses');

Courses.attachSchema(CourseSchema);

Courses.initEasySearch(['university', 'title'], {
  'limit': 10,
  'use': 'mongo-db'
});
