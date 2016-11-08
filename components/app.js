import data from './beerlist.js';
import map from './map/map.js';

var beerList = `<ul>
  ${beerListItems}
</ul>`;

var beerListItem = `<li class="item">
  <h3 class="brewery">${item.brewery}</h3>
  <span class="title">${item.title}</span>
  <span class="size">${item.size}</span>
  <span class="price">${item.price}</span>
</li>`;

var beerListItems = data.list.map((item) => {
  return `<li class="item">
  <h3 class="brewery">${item.brewery}</h3>
  <span class="title">${item.title}</span>
  <span class="size">${item.size}</span>
  <span class="price">${item.price}</span>
</li>`}).join('\n ');

document.getElementById('list').innerHTML += beerListItems;