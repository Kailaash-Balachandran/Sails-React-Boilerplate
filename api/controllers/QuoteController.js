/**
 * QuoteController
 *
 * @description :: Server-side logic for managing quotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getQuote: function(req, res) {
        return res.view({ quote: quoter.getRandomOne() });
    }
};
