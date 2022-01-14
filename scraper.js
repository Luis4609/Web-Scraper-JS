const axios = require('axios');
const cheerio = require('cheerio');

const getProductNames = async() => {
    try {
        const { data } = await axios.get(
            'https://douglas.es/c/perfumes/'
        );
        const $ = cheerio.load(data);
        const productNames = [];

        $('div.rd__product-tile > a > span.rd__bb-productinfo__name').each((_idx, el) => {
            const productName = $(el).text()
            productNames.push(productName)
        });

        return productNames;
    } catch (error) {
        throw error;
    }
};

getProductNames()
    .then((productName) => console.log(productName));