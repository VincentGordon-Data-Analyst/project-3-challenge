 
// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
  center: [37.8, -96],
  zoom: 4,
  // layers: [street]
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);


d3.json("./teslaMapData/Statecoords.json").then(function(data) {
  console.log(data);

  // Loop through each US state and create a marker
  for (var i = 0; i < data.length; i++) {
    var state = data[i];
    lat = state.latitude / 10000000;
    lon = state.longitude / 10000000;
    stateIds = state.state_id;

    var marker = L.marker([lat, lon]).bindPopup(`<h3>${state.state_name} </h3>`).addTo(myMap);
  }
 
  
  d3.json("./teslaMapData/casetable.json").then(function (data) {

    let deathArray = [];
    for (let i = 0; i < stateIds.length; i++) {
      let stateId = stateIds[i];

      var deathCount = 0;
      for (let j = 0; j < data.length; j++) {
        row = data[j];

        if(row.state_id == stateId){
          deathCount += row.deathtotal;
        }

      }
      deathArray.push(deathCount);
    }
    console.log(deathArray)


  });

});

