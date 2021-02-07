// using mapbox 
//// need to create map object
// var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var myMap = L.map("map", {
    center: [
     38.09, -95.71],
    zoom: 6
  });
  
  // layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
   }).addTo(myMap);
  
  
  // url for earthquak, week-
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
  // making marker for mag values, scaling properly 
  function markerSize(mag){
    return mag * 2
  }
  // colors
  
  
   //Get GeoJSON data..
  d3.json(url, function(myData) {
    console.log(myData)
   
  });