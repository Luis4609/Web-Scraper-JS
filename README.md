# ScraperJs
## Requirements:
Have installed NodeJs in your machine, in this case we check that the application works with the version 14.15.3 and also with the LTS version of NodeJs 16.13.2.

## To start
Create a folder for your project, here you can take the two options that I describe to you later on:

### From zero:
```bash
npm init
npm install axios cheerio
```

### Cloning the repository:
```bash
git clone https://github.com/Luis4609/Web-Scraper-JS.git
npm install 
```

### Run NodeJs:
```bash
node scraper.js
```

In this project we use two NodeJs libraries to create the scraper. The first one is Axios, we this we can get all the HTML code from a website. We use this HTML with the second librarie, Cheerio, this one is a implementation of jQuery and now we can search for the element that we want. In this case, we search for the names of the differents products that we can see in the website. To get the result, we filter using the CSS class of the element that we identified as the name of the product and we save it in an array.
