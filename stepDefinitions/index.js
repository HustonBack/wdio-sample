const { Given, Then } = require('cucumber');
const { assert } = require('chai');
const moment = require('moment');

Given('I am a customer on Homepage', function() {
    browser.url('https://www.booking.com/');
});

Then(/I type "(.+)" in search field/, function(str) {
    $('#ss').setValue(str);
    $('.xp__dates').click();
    const dateStart = moment(Date.now()).add(7, 'days').format('YYYY-MM-DD');
    const dateEnd = moment(Date.now()).add(10, 'days').format('YYYY-MM-DD');
    $(`td[data-date="${dateStart}"]`).click();
    $(`td[data-date="${dateEnd}"]`).click()
});

Then('I click Submit button', function () {
    $('button[type="submit"]').click()
});

Then(/Search results description should contain text "(.+)"/, function(text) {
    const description = $('#searchresultsTmpl h1').getText();
    assert.include(description, text)
});
Then('I click on 1 item', function () {
    const elem = $$('.sr_item .hotel_name_link')[0];
    this.title = elem.$('.sr-hotel__name').getText();
    elem.click();

});

Then('No availability message displayed', function () {
    browser.switchWindow(new RegExp(this.title));
    $('#hotelTmpl').waitForDisplayed(10000);
    $('#no_availability_msg').waitForDisplayed(2000, true);
});
