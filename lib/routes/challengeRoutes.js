/*
 * Challenge route options
 */
ChallengeController = RouteController.extend({

});

/*
 * Challenge routes
 */
Router.route('/challenge/:course/:_id', {
  name: 'challenge',
  waitOn: function() {
    return [this.subscribe('flashcards', this.params.course), this.subscribe('flashcards', this.params.course)];
  }
});
