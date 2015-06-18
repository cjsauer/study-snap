Flashcards.allow({
  insert: function(userId, doc) {
    return Roles.userIsInRole(userId, 'user');
  },

  update: function(userId, doc, fields, modifier) {
    return false;
  },

  remove: function(userId, doc) {
    return false;
  }
});
