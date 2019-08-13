const { Given, Then } = require('cucumber');
const { assert } = require('chai');
const moment = require('moment');

const { homePage, searchResultsPage, hotelPage } = require('../testSupport/pageObjects');

Given('I am a customer on Homepage', function() {
    browser.url('https://www.booking.com/');
});

Then(/I type "(.+)" in search field/, function(str) {
    homePage.searchField.setValue(str);
});

Then(/I set date in calendar/, function() {
    homePage.datePicker.click();
    const startMoment = moment(Date.now()).add(7, 'days');
    const dateStart = startMoment.format('YYYY-MM-DD');
    const dateEnd = startMoment.add(3, 'days').format('YYYY-MM-DD');
    homePage.calendar.getDayElementByDate(dateStart).click();
    homePage.calendar.getDayElementByDate(dateEnd).click()
});

Then('I click Submit button', function () {
    homePage.submit.click()
});

Then(/Search results description should contain text "(.+)"/, function(text) {
    const description = searchResultsPage.description.getText();
    assert.include(description, text)
});

Then(/I click on (\d+) item/, function (number) {
    const elem = searchResultsPage.getItemByIndex(number - 1);
    const hotelLink = elem.hotelLink;
    // Add hotel name to World
    this.hotelName = elem.hotelName.getText();
    hotelLink.click();
});

Then('I switch to selected hotel tab', function() {
    browser.switchWindow(new RegExp(this.hotelName));
});

Then('No availability message not displayed', function () {
    hotelPage.container.waitForDisplayed(10000);
    hotelPage.noAvailabilityMessage.waitForDisplayed(2000, true);
});
