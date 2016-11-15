'use strict';

//declare constants
const $gradient = document.getElementById('gradient');
const $map = document.getElementById('map');
const $mag = document.getElementById('mag');
const $radius = document.getElementById('radius');
const $years = document.getElementById('years');
const $query = document.getElementById('query');
const currentDate = new Date();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
  .then(registration => {
    console.log('Service Worked Registered');
  })
  .catch(err => {
    console.warn('Error', err);
  })
}

$query.addEventListener('click', function() {
  query();
});

function query() {
  console.log('Query');
  let mag = $mag.value;
  let years = $years.value;
  let radius = $radius.value;
  //Check if browser supports geolocation, get location if it does
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      const startTime = (currentDate.getFullYear() - years) + '-' + currentDate.getMonth() + '-' + currentDate.getDay();
      const endTime = currentDate.getFullYear() + '-' + (currentDate.getMonth()) + '-' + currentDate.getDay();
      let url = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&";
      let finalURL = `${url}maxradius=${radius}&minmagnitude=${mag}&latitude=${lat}&longitude=${long}&starttime=${startTime}&endtime=${endTime}`;

      fetch(finalURL, { method: 'GET'})
        .then(resp => {
          resp.json().then(data => {
            let earthquakeData = data;
            createMap(earthquakeData, lat, long);
          })
        })
        .catch(err => {
          console.warn('Fetch error: ', err);
        })
    });
  } else {
    alert('Your browser does not support geolocation :(');
  }
}

//Create the map with the google maps api
function createMap(data, lat, long) {
  let myLatLng = {lat: lat, lng: long};

  let map = new google.maps.Map($map, {
    zoom: 8,
    center: myLatLng
  });

  let coords;
  let formattedDate;
  let status;

  for (let i = 0; i < data.features.length; i++) {
    coords = {lat: data.features[i].geometry.coordinates[1], lng: data.features[i].geometry.coordinates[0]};
    formattedDate = timeConverter(data.features[i].properties.time);
    status = data.features[i].properties.status;
    let infowindow = new google.maps.InfoWindow({
      content: `Date: ${formattedDate}<br>Status: ${status}`
    });
    let circle = new google.maps.Circle({
      strokeColor: '#F44336',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#F44336',
      fillOpacity: 0.35,
      map: map,
      center: coords,
      radius: data.features[i].properties.mag * 1000
    });
    circle.addListener('click', function() {
      infowindow.open(map, circle);
    });
  }
};

//Function to convert any js date into a well formatted one
function timeConverter(time) {
  let dateToConvert = new Date(time);
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = dateToConvert.getFullYear();
  let month = months[dateToConvert.getMonth()];
  let date = dateToConvert.getDate();
  let hour = dateToConvert.getHours();
  let min = dateToConvert.getMinutes();
  let sec = dateToConvert.getSeconds();
  return (month + ' ' + date + ', ' + year);
}
