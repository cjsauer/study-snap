//Hook to make sure the user is logged in
Router.onBeforeAction(function() {
  if(!Roles.userIsInRole(Meteor.userId(), 'user')) {
    this.render('Login');
  } else {
    this.next();
  }
}, {
  except: ['home']
});
