const calendar = require('./calendar');

class HomePage {

    get searchField() {
        return $('#ss');
    }

    get datePicker() {
        return $('.xp__dates')
    }

    get submit() {
        return $('button[type="submit"]')
    }

    get calendar() {
        return calendar;
    }
}

module.exports = new HomePage();
