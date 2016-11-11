const googleMap = (function () {
  const myLatLng = {lat: 47.550987, lng: -122.277863};
  const map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 13
  });

  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
});

export { googleMap };