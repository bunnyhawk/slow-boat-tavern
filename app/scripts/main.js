var data = {
    "list": [{
        "brewery": "Cloudburst",
        "title": "Legend has it, IPA",
        "size": "16 oz",
        "price": "6"
    }, {
        "brewery": "Holy Mountain",
        "title": "Haxan, Imperial Stout",
        "size": "12 oz",
        "price": "6"
    }, {
        "brewery": "Jolly Pumpkin/Anchorage",
        "title": "Calabaza Boreal",
        "size": "8 oz",
        "price": "8"
    }, {
        "brewery": "Jester King",
        "title": "Noble King",
        "size": "8 oz",
        "price": "9"
    }, {
        "brewery": "Jester King",
        "title": "Kvass",
        "size": "8 oz",
        "price": "9"
    }, {
        "brewery": "Holy Mountain",
        "title": "Deadfall, Stock Ale",
        "size": "8 oz",
        "price": "6"
    }, {
        "brewery": "De Garde",
        "title": "Bu Weisse",
        "size": "12 oz",
        "price": "7"
    }, {
        "brewery": "Oud Beersel",
        "title": "Oud Lambic",
        "size": "8 oz",
        "price": "10"
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
        "brewery": "",
        "title": "",
        "size": "",
        "price": ""
    }, {
        "brewery": "",
        "title": "",
        "size": "",
        "price": ""
    }, {
        "brewery": "",
        "title": "",
        "size": "",
        "price": ""
    }]
};

var googleMap = function googleMap() {
  var myLatLng = { lat: 47.550987, lng: -122.277863 };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 13
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
};

//import { imageFeed } from './imageFeed/imageFeed.js';

var beerListItems = data.list.map(function (item) {
  var splitDecimal = item.price.split('.');
  var updatedPrice = splitDecimal.length > 1 ? splitDecimal[0] + '<sup>' + splitDecimal[1] + '</sup>' : item.price;

  return '<li class="beerlist_item">\n    <h3 class="beerlist_brewery">' + item.brewery + '</h3>\n    <span class="beerlist_title">' + item.title + '</span>\n    <span class="beerlist_size">' + item.size + '</span>\n    <span class="beerlist_price">' + updatedPrice + '</span>\n  </li>';
}).join('\n ');

var beerList = '<ul class="beerlist_list">' + beerListItems + '</ul>';

document.getElementById('list').innerHTML += beerList;
