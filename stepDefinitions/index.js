const { Given, Then } = require('cucumber');

Given('I am a customer on Homepage', function() {
    browser.url('https://www.booking.com/');
});

Then(/I type "(.+)" in search field/, function(str) {
    $('#ss').setValue(str);
});

Then('I click Submit button', function () {
    $('button[type="submit"]').click()
});
