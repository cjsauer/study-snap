(function() {
  'use strict';

  module.exports = function () {

    var url = require('url');

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      this.browser.
        url(url.resolve(process.env.ROOT_URL, relativePath)).
        call(callback);
    });

    this.When(/^I fill in "([^"]*)" with "([^"]*)"$/, function (elementName, newValue, callback) {
      this.browser.
        setValue('[name="' + elementName + '"]', newValue).call(callback);
    });

    this.When(/^I submit "([^"]*)"$/, function (formSelector, callback) {
      this.browser.
        submitForm(formSelector).call(callback);
    });

  };
})();
