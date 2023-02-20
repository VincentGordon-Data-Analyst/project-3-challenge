// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
    center: [37.8, -96],
    zoom: 4
  });
  
  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(myMap);

  
  d3.json("/location.json").then(function(data) {
    console.log(data);

    var html = [];
    for (var i = 0; i < data.length; i++) {
        var state = data[i]

        html.push(`<option><select>` + state["location"] + `</select></option>`);
    }     
    
    document.getElementById("selectCountry").innerHTML = html.join("");
  });
