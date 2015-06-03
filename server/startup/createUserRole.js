Meteor.startup(function() {

  //This must be created on startup so that we
  //  can use it in server/config/auth.js which
  //  needs to add this role to new users manually 
  //  upon creation. 
  if(Roles.getAllRoles().count() === 0) {
    Roles.createRole('user');
  }
});
