const ProductActions = require('../actions/product-actions.js');
const Handler = require('../actions/product-actions.js');

class Api {
    updateProducts() {
        //here must be some get request from backend

        // here call to notify client
        var products = [
            {
                user: 'test',
                slug: "Les-Paul-electric-guitar",
                name: "Les Paul electric guitar",
                imageUrl: "img/guitar.jpg",
                stores: [
                  {
                    name: "Amazon",
                    latestPrice: { amount: 12.432, currency: 'USD' },
                    initialPrice: { amount: 14.123, currency: 'USD' },
                    priceChangePercentage: 90,
                    url: "http://localhost:3000/#/products",
                    priceChangeNumeric: -4
                  },
                  {
                    name: "Levis",
                    latestPrice: { amount: 13, currency: 'USD' },
                    initialPrice: { amount: 11, currency: 'USD' },
                    priceChangePercentage: 12,
                    url: "http://localhost:3000/#/products",
                    priceChangeNumeric: -4
                  },
                  {
                    name: "Backcountry",
                    latestPrice: { amount: 130.7, currency: 'USD' },
                    initialPrice: { amount: 130.7, currency: 'USD' },
                    priceChangePercentage: -5,
                    url: "http://localhost:3000/#/products",
                    priceChangeNumeric: -4
                  },
                  {
                    name: "REI",
                    latestPrice: { amount: 130.7, currency: 'USD' },
                    initialPrice: { amount: 14, currency: 'USD' },
                    priceChangePercentage: 13,
                    url: "http://localhost:3000/#/products",
                    priceChangeNumeric: -4
                  },
                  {
                    name: "CampSaver",
                    latestPrice: { amount: 100, currency: 'USD' },
                    initialPrice: { amount: 14, currency: 'USD' },
                    priceChangePercentage: 70,
                    url: "http://localhost:3000/#/products",
                    priceChangeNumeric: -4
                  },
                ]
              },
              
            ];
        return products;
    }
}

module.exports = new Api();