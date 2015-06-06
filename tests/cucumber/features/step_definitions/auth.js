(function() {
  'use strict';

  module.exports = function () {

    this.Given(/^I am logged out$/, function (callback) {

      this.client.url(process.env.ROOT_URL).executeAsync(function(done) {
        Meteor.call('logout', function(err, res) {
          done(res);
        });
      }, function(err, res) {
        callback();
      });

    });

    this.Given(/^I am logged in$/, function (callback) {

      var login = function(done) {
        var fakeUser = {
          _id: "phony-user-id",
          username: "phony-user",
          emails: [ { address: "phony@example.com", verified: true } ],
          createdAt: Date.now(),
          profile: {
            name: "Phony User"
          },
          roles: {
            __global_roles__: ['user']
          }
        };
        Meteor.loginWithPhony(fakeUser, function(err,res) {
          done(res);
        });
      };

      this.browser.
        timeoutsAsyncScript(5000).
        executeAsync(login, function(err, res) {
          callback();
        });
    });
  };
})();
