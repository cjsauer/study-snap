Flashcards.allow({
  insert: function(userId, doc) {
    return Roles.userIsInRole(userId, 'user');
  },

  update: function(userId, doc, fields, modifier) {
    return false;
  },

  remove: function(userId, doc) {
    return Roles.userIsInRole(userId, 'user') && (doc.creator === userId || Courses.findOne({"_id": doc.course}).creator === userId);
  }
});
