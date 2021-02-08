// using mapbox 
//// need to create map object
// var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var myMap = L.map("map", {
    center: [
     38.09, -95.71],
    zoom: 9
  });

 //layer street 
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);


  // url for earthquak, week-
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
  // making marker for mag values, scaling properly 
  function markerSize(mag){
    return mag * 2
  }
  // colors function 
   // all earthquake from past seven days

// magnitude is proportial to size, as mag increases, size increases

  // adding colors - as earthequak depth increases, colors gets darker, going from light blue to eventually dark red
  // light blue #b5f4fa
  // a darker blue tint #90eff7
  // light orange #ffc577
  // darker organge tint #ffa329
  // darkest orange tint #ed8700
  // red #c60f00
  
  
  
   //Get GeoJSON data..
d3.json(url, function(myData) {
    console.log(myData)
   
});