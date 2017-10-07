// In Webstorm I stuffed Leaflet_1.2.0 into the External Libraries area.

var mymap = L.map('divIdForMap', {
    zoomControl:false,
    attributionControl:false,
    preferCanvas: true});
mymap.setView([51.505, -0.09], 13);

var someLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    id: 'mapbox.streets'});
someLayer.addTo(mymap);
