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

Template.FlashcardNew.helpers({
  userEnrolled: function() {
    return _.find(Courses.findOne({"_id": Router.current().params._id}).students, function(student) { 
      return student.id === Meteor.userId();
    });
  }
});

Template.FlashcardNew.onRendered(function() {
  $("#cardform").flip({
    trigger: 'manual'
  });

  $(".flip, #flashcard-submit").click(function() {
    $("#cardform").flip('toggle');
  });
});
