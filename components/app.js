import data from './beerlist.js';
import { googleMap } from './map/map.js';

var beerListItems = data.list.map((item) => {
  return `<li class="beerlist_item">
  <h3 class="beerlist_brewery">${item.brewery}</h3>
  <span class="beerlist_title">${item.title}</span>
  <span class="beerlist_size">${item.size}</span>
  <span class="beerlist_price">${item.price}</span>
</li>`}).join('\n ');

var beerList = `<ul class="beerlist_list">
  ${beerListItems}
</ul>`;

document.getElementById('list').innerHTML += beerList;

var runMap = () => { return googleMap; };
