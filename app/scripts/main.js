(function () {
'use strict';

var data = {
    "list": [{
        "brewery": "Holy Mountain",
        "title": "Remnant, Hoppy Brett Saison",
        "size": "12 oz",
        "price": "6"
    }, {
        "brewery": "Holy Mountain",
        "title": "Somnium, Barrel Aged Saison",
        "size": "12 oz",
        "price": "6"
    }, {
        "brewery": "Cloudburst",
        "title": "Dry Hopped Pale Ale",
        "size": "Pint",
        "price": "6"
    }, {
        "brewery": "Mikkeller",
        "title": "Fresh Hop Black IPA",
        "size": "8 oz",
        "price": "7"
    }, {
        "brewery": "Cascade",
        "title": "Framblanc",
        "size": "8 oz",
        "price": "10"
    }, {
        "brewery": "E9",
        "title": "Pogo Stick IPA",
        "size": "16 oz",
        "price": "6"
    }, {
        "brewery": "Monkish Jolly Pumpkin'",
        "title": "Cucurbitophobia Saison",
        "size": "8 oz",
        "price": "8"
    }, {
        "brewery": "Alesmith",
        "title": "Kona Speedway Imperial Stout",
        "size": "8 oz",
        "price": "6"
    }, {
        "brewery": "Rainier",
        "title": "Lager",
        "size": "12 oz",
        "price": "2.50"
    }, {
        "brewery": "Chuckanut",
        "title": "Pilsner",
        "size": "16 oz",
        "price": "6"
    }, {
        "brewery": "Rodenbach",
        "title": "Grand Cru Sour Red",
        "size": "8 oz",
        "price": "9"
    }, {
        "brewery": "Dieu de Ciel",
        "title": "Rigor Mortis Abbey Ale",
        "size": "8 oz",
        "price": "7"
    }, {
        "brewery": "Omnipollo",
        "title": "Mango Lassi Gose",
        "size": "8 oz",
        "price": "9"
    }]
};

var beerListItems = data.list.map(function (item) {
  return '<li class="beerlist_item">\n  <h3 class="beerlist_brewery">' + item.brewery + '</h3>\n  <span class="beerlist_title">' + item.title + '</span>\n  <span class="beerlist_size">' + item.size + '</span>\n  <span class="beerlist_price">' + item.price + '</span>\n</li>';
}).join('\n ');

var beerList = '<ul class="beerlist_list">\n  ' + beerListItems + '\n</ul>';

document.getElementById('list').innerHTML += beerList;

}());
