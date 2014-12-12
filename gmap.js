
// The following example creates a marker in Stockholm, Sweden
// using a DROP animation. Clicking on the marker will toggle
// the animation between a BOUNCE animation and no animation.
var stockholm = new google.maps.LatLng(25.001937, 121.512705);
var parliament = new google.maps.LatLng(25.001937, 121.512705);
var markers = [];
var map;
var list = [
    [25.003590, 121.513924],
    [24.999682, 121.506328],
    [25.004213, 121.517357],
    [25.004313, 121.527357],
    [25.005313, 121.510357],
    [25.004313, 121.518357],
    [25.005013, 121.513357],
    [24.997153, 121.511370]
];

function initialize() {
    var mapOptions = {
        zoom: 13,
        center: stockholm
    },
    marker, i, beach, myLatLng;

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    for (i=0; i < list.length; i++){
        beach = list[i];
        myLatLng = new google.maps.LatLng(beach[0], beach[1]);
        console.log(beach[0], beach[1]);
        marker = new google.maps.Marker({
            map:map,
            position: myLatLng
        });
        markers.push(marker);
    }
    var markerCluster = new MarkerClusterer(map, markers, {gridSize: 30});
    google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
