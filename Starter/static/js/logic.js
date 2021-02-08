// using mapbox 
//// need to create map object
// var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var myMap = L.map("map", {
    center: [
     38.09, -95.71],
    zoom: 2.5
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

 // all earthquake from past seven days
  // url for earthquak, week-
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
  //  mag values, scaling properly 
  function markerSize(mag){
    return mag * 2
  } 
  
// magnitude is proportial to size, as mag increases, size increases

  // adding colors - as earthequak depth increases, colors gets darker, going from light blue to eventually dark red
  // light blue #b5f4fa
  // a darker blue tint #90eff7
  // light orange #ffc577
  // darker organge tint #ffa329
  // darkest orange tint #ed8700
  // red #c60f00

function chooseColor(d) {
    switch (true) {
    case (d > 85):
      return "#c60f00";
    case (d > 75 ):
      return "#ed8700" ;
    case (d > 65):
        return "#ffa329";
    case (d > 55):
          return "#ffc577";
    case (d> 35):
            return "#90eff7"; 
    case (d < 15):
              return "#b5f4fa"; 
    //default:
       //  return "#b5f4fa";
    }
  }
  
   //Getting the GeoJSON data..
d3.json(url, function(myData) {
    //console.log(myData)
    // geoJSON 
  L.geoJson(myData, {
    // Style feature 
    style: function(feature) {
      return {
        radius: markerSize(feature.properties.mag),
        fillColor: chooseColor(feature.properties.mag),
        color: "white",
        fillOpacity: 0.6,
        weight: 1.3
      };
    },
    
    // Calling feature
    onEachFeature: function(feature, layer) {
      
      // pop-up w/ info
      layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" + "<p> Magnitude - " + feature.properties.mag + "</p>");
    }
  }).addTo(myMap);

//creating legend
  //var legend = L.control({ position: "bottomright" });
  //legend.onAdd = function() {
   // var div = L.DomUtil.create("div", "info legend"),
   
  //};
  //legend.addTo(myMap);
   
});



