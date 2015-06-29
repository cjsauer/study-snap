// Set the flashcards courseID field before we insert the doc
AutoForm.hooks({
  'new-card': {
    before: {
      insert: function(doc) {
        var routerParams = Router.current().params;
        var courseID = routerParams && routerParams._id;

        if(courseID) {
          doc.courseID = Router.current().params._id;
          this.result(doc);
        } else {
          return false;
        }
      }
    }
  }
});
