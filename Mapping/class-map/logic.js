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

  countries = ['USA', 'Canada', 'China', 'Mexico', 'UK', 'Australia', 'Nertherlands', 'Switzerland', 'France', 'Germany', 'Denmark', 'Belgim', 'South Korean', 'Norway', 'Taiwan', 'Slovenia', 'Australia', 'Ukraine', 'Spain', 'Holland', 'Japan'];





  // var legend = L.control({position: 'topright'});
  // const selectCountry = document.getElementById('selectCountry');
  // legend.onAdd = function () {
  //   var div = L.DomUtil.create('div', 'info legend');

  

  //   for (var i = 0; i < countries.length; i++){
  //     var country = countries[i];

  //     div.innerHTML = `<select><option>` + {country} + `</option></select>`;       
      
  //     div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;   
  //   }
   
  //   return div;
  // };
  // legend.addTo(myMap)
  

