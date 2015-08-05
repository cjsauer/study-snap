AutoForm.hooks({
  'insertCourseForm': {
    onSuccess: function(formType, result) {
      Meteor.call('joinCourse', result, function(err, result) {
        if(err) {
          console.error(err);
        }
      });
      Router.go('courses.show', {_id: result});
    }
  }
});
