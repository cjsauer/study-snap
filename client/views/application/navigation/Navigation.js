Meteor.subscribe('courses');

Template.navigation.helpers({
  autocompleteSettings: function() {
    return {
      position: "bottom",
      limit: 5,
      rules: [
        {
          collection: Courses,
          field: "title",
          template: Template.courseResult,
          selector: function(match) {
            var regex = new RegExp(match, 'i');
            return {$or: [{'title': regex}, {'university': regex}]};
          }
        }
      ]
    };
  }
});

Template.navigation.events({
  'autocompleteselect input': function(event, template, doc) {
    event.currentTarget.value = "";
    Router.go('courses.show', {_id: doc._id});
  }
});
