'use strict';

//declare constants
const $loading = document.getElementById('loading');
const currentDate = new Date();
const startTime = (currentDate.getFullYear() - 9) + '-' + currentDate.getMonth() + '-' + currentDate.getDay();
const endTime = currentDate.getFullYear() + '-' + (currentDate.getMonth()) + '-' + currentDate.getDay();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
  .then(registration => {
    console.log('Servive Worked Registered');
  })
  .catch(err => {
    console.warn('Error', err);
  })
}

//Check if browser supports geolocation, get location if it does
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let location = {lat: lat, long: long};
    getData(location);
  });

  //Get earthquake data using fetch
  function getData(location) {
    let url = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&maxradius=10&minmagnitude=3.5";
    let finalURL = `${url}&latitude=${location.lat}&longitude=${location.long}&starttime=${startTime}&endtime=${endTime}`;

    fetch(finalURL, { method: 'GET'})
      .then(resp => {
        resp.json().then(data => {
          localStorage.setItem('data', JSON.stringify(data));
          let earthquakeData = data;
          createMap(earthquakeData, location.lat, location.long);
        })
      })
      .catch(err => {
        console.warn('Fetch error: ', err);
      })
  }

  //Create the map with the google maps api
  function createMap(data, lat, long) {
    $loading.style.display = 'none';
    const $map = document.getElementById('map');

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
        radius: data.features[i].properties.mag * 500
      });
      circle.addListener('click', function() {
        infowindow.open(map, circle);
      });
    }
  };
} else {
  alert('Your browser does not support geolocation :(');
}

//Function to convert any js date into a well formatted one
function timeConverter(time){
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
