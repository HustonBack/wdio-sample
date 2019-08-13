class Calendar {

    getDayElementByDate(date) {
        return $(`td[data-date="${date}"]`)
    }

}

module.exports = new Calendar();
