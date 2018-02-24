function initMap() {
  var country = countries[Math.floor(Math.random() * countries.length)];
  loadMap(country.lat, country.lon);
  function compareFunc(a,b) {
    return distance(country,a) - distance(country,b)
  }
  countries.sort(compareFunc);
  var answerDiv = document.getElementById("options");
  var buttons = [];
  for(var i = 0; i < 10; i++) {
    var button = document. createElement("button");
    button.innerHTML = countries[i].name;
    if(i==0)
      button.addEventListener ("click", function() {this.className = "win";});
    else
      button.addEventListener ("click", function() {this.className = "lose";});
    buttons.push(button);
  }
  shuffle(buttons);
  for(var i = 0; i < 10; i++)
  {
    answerDiv.appendChild(buttons[i]);
  }
  
}
function loadMap(lat, lon) {
  var country = {lat: lat, lng: lon};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: country,
    mapTypeControl: false
  });
  var marker = new google.maps.Marker({
    position: country,
    map: map
  });
  
  map.setOptions({styles: [
  {stylers: [{visibility: 'off'}]},
   {featureType: "landscape", elementType: "geometry", stylers: [{visibility: 'on'}]},
   {featureType: "water", elementType: "geometry", stylers: [{visibility: 'on'}]},
   {featureType: "administrative.country", elementType : "geometry", stylers: [{visibility: 'on'}]},
  ], panControl: false, zoomControl: false, fullscreenControl: false, streetViewControl:false});
}

function distance(rCountry,lCountry) {
  return Math.sqrt(Math.pow(rCountry.lat - lCountry.lat, 2) + Math.pow(rCountry.lon - lCountry.lon, 2));
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}