const SearchItem = require('./searchItem');

class SearchResultsPage {

    get description() {
        return $('#searchresultsTmpl h1');
    }

    getItemByIndex(index) {
        return new SearchItem($$('.sr_item')[index]);
    }
}

module.exports = new SearchResultsPage();
