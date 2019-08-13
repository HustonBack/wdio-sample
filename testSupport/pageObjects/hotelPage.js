class HotelPage {
    get container() {
        return $('#hotelTmpl');
    }

    get noAvailabilityMessage() {
        return $('#no_availability_msg');
    }
}

module.exports = new HotelPage();
