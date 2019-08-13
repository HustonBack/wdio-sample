class SearchItem {
    constructor(element) {
        this.parent = element;
    }

    get hotelLink() {
        return this.parent.$('.hotel_name_link');
    }

    get hotelName() {
        return this.parent.$('.sr-hotel__name');
    }
}

module.exports = SearchItem;
