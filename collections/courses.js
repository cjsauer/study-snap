Courses = new Meteor.Collection('courses');

Courses.initEasySearch(['university', 'title'], {
  'limit': 10,
  'use': 'mongo-db'
});
