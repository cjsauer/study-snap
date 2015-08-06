AutoForm.hooks({
  'new-challenge': {
    before: {
      insert: function(doc) {
        var routerParams = Router.current().params;
        var course = routerParams && routerParams.course;
        var user = routerParams && routerParams._id;
        
        // Check that the challenge doesn't already exist
        var challengeExists = Challenges.find({
          challenger: Meteor.userId(), 
          course: routerParams.course, 
          challengee: routerParams._id
        }).fetch().length > 0;

        // if the user has been challenged and is 
        // removign the challenge from the collection after completing the challenge
        if (user === Meteor.userId()) {
          Meteor.call('removeChallengee', Meteor.userId(), Router.current().params.course, function(err, result) {
            if (err) {
              console.error(err);
            }
          });
          return Router.go('courses.show', {_id: Router.current().params.course});
        }

        if(course && user && !challengeExists) {
          doc.challengee = Router.current().params._id;
          doc.course = Router.current().params.course;
          this.result(doc);
        } else {
          // Instead of returning false navigate back to the course page
          return Router.go('courses.show', {_id: Router.current().params.course});
        }
      }
    },
    onSuccess: function(formType, result) {
      Router.go('courses.show', {_id: Router.current().params.course});
    }
  }
});

Template.Challenge.helpers({
  cards: function() {
    return _.sample(Flashcards.find().fetch(), 5);
  }
});
Template.Challenge.events({
  "click #start-challenge": function(event, template){
    template.$('.challenge').toggleClass('hidden');
  },
  "click #submit-challenge": function(event, template){
    // Score should be tallied and updated here!
    Meteor.call('updateScore', Router.current().params.course, 10, function(err, result) {
      if(err) {
        console.error(err);
      }
    });
  }
});

Template.ChallengeQuestion.helpers({
  response: function() {
    return _.shuffle([this.response1, this.response2, this.response3, this.response4]);
  }
});
Template.ChallengeQuestion.events({
  "click .list-group-item": function(event, template){
    //template.$('.list-group-item').toggleClass('active');
    template.$('.list-group-item').not(event.target).removeClass('active');
    template.$(event.target).toggleClass('active');
  }
});
