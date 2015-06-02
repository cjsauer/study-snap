Accounts.onCreateUser(function(options, user) {
  
  // We still want the default hook's 'profile' behavior.
  if (options.profile)
      user.profile = options.profile;

  //Add the user to the user role in the global group
  user.roles = {};
  user.roles[Roles.GLOBAL_GROUP] = ['user'];

  return user;
});
