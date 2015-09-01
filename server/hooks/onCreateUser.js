Accounts.onCreateUser(function(options, user) {

  // We still want the default hook's 'profile' behavior.
  if (options.profile)
      user.profile = options.profile;

  //Add the user to the user role in the global group
  user.roles = {};
  user.roles[Roles.GLOBAL_GROUP] = ['user'];

  /*
  // The remaining code will attach multiple services to users
  // This may only work for google and facebook
  var service;
  if (user.services) {
    service = _.keys(user.services)[0];
  }

  // get name and email of user
  var email = user.services[service].email;
  var name = user.services[service].name;
  var oldUser;
  // potential flaw if a user uses different email addresses for his/her services
  if (email && name) {
    // find a user with matching name and email
    oldUser = Meteor.users.findOne({"emails.address": email, "profile.name": name});
  }

  if (oldUser) {
    if (!oldUser.services) {
      oldUser.services = {};
    }

    // replace the user with one that has the same userId but
    //  also has a new service attached to it
    if (service === "google" || service === "facebook") {
      oldUser.services[service] = user.services[service];
      Meteor.users.remove(oldUser._id);
      user = oldUser;
    }
  } else {    // if the user was not found, add a new user with that email and name
    if (service === "google" || service === "facebook") {
      if (user.services[service].email) {
        // add a new field to the user in the collection
        user.emails = [{address: user.services[service].email, verified: true}];
      } else {
        throw new Meteor.Error(500, service + "account has no email attached");
      }
      user.profile.name = user.services[service].name;
    }
  }
  */

  return user;
});
