AutoForm.hooks({
  'insertCourseForm': {
    onSuccess: function(formType, result) {
      Router.go('courses.show', {_id: result});
    }
  }
});
