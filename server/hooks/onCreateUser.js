Accounts.onCreateUser(function(options, user) {

  // We still want the default hook's 'profile' behavior.
  if (options.profile)
      user.profile = options.profile;

  //Add the user to the user role in the global group
  user.roles = {};
  user.roles[Roles.GLOBAL_GROUP] = ['user'];

  var service = "";
  if (user.services) {
    service = _.keys(user.services)[0];
  }

  var email = user.services[service].email;
  var oldUser;
  if (email) {
    oldUser = Meteor.users.findOne({"emails.address": email});
  }

  if (oldUser) {
    if (!oldUser.services) {
      oldUser.services = {};
    }

    if (service === "google" || service === "facebook") {
      oldUser.services[service] = user.services[service];
      Meteor.users.remove(oldUser._id);
      user = oldUser;
    }
  } else {
    if (service === "google" || service === "facebook") {
      if (user.services[service].email) {
        user.emails = [{address: user.services[service].email, verified: true}];
      } else {
        throw new Meteor.Error(500, service + "account has no email attached");
      }
      user.profile.name = user.services[service].name;
    }
  }

  return user;
});
