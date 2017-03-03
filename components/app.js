import data from './beerlist.js';
import { googleMap } from './map/map.js';
//import { imageFeed } from './imageFeed/imageFeed.js';

var beerListItems = data.list.map((item) => {
  var splitDecimal = item.price.split('.');
  var updatedPrice = splitDecimal.length > 1 ?
    `${splitDecimal[0]}<sup>${splitDecimal[1]}</sup>` : item.price;

  if (!item.brewery) {
    return;
  }
  return `<li class="beerlist_item">
      <h3 class="beerlist_brewery">${item.brewery}</h3>
      <span class="beerlist_title">${item.title}</span>
      <span class="beerlist_size">${item.size}</span>
      <span class="beerlist_price">${updatedPrice}</span>
    </li>`}).join('\n ');

var beerList = `<ul class="beerlist_list">${beerListItems}</ul>`;

document.getElementById('list').innerHTML += beerList;

(function (window, document, undefined) {
  window.runMap = googleMap();
});



