ChallengeController = RouteController.extend({

});

Router.route('/challenge/:course/:_id', {
  name: 'challenge',
  waitOn: function() {
    return this.subscribe('flashcards', this.params.course);
  }
});
