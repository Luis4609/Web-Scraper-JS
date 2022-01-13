const axios = require('axios');
const cheerio = require('cheerio');

const getProductsNames = async () => {
	try {
		const { data } = await axios.get(
			'https://douglas.es/c/perfumes/'
		);
		const $ = cheerio.load(data);
		const productsNames = [];

		$('div.rd__product-tile > a > span.rd__bb-productinfo__name').each((_idx, el) => {
			const productName = $(el).text()
			productsNames.push(productName)
		});

		return productsNames;
	} catch (error) {
		throw error;
	}
};

getProductsNames()
.then((productsName) => console.log(productsName));