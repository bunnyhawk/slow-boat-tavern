	var map,
		marker;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 47.550987, lng: -122.277863},
			zoom: 13
		});

		marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'Hello World!'
		});
	}
