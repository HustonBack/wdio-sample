const { Given, Then } = require('cucumber');
const { assert } = require('chai');

Given('I am a customer on Homepage', function() {
    browser.url('https://www.booking.com/');
});

Then(/I type "(.+)" in search field/, function(str) {
    $('#ss').setValue(str);
});

Then('I click Submit button', function () {
    $('button[type="submit"]').click()
});

Then(/Search results description should contain text "(.+)"/, function(text) {
    const description = $('#searchresultsTmpl h1.sorth1').getText();
    assert.include(description, text)
});
