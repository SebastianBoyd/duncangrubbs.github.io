'use strict';

const $loading = document.getElementById('loading');
let date = new Date();
let startTime = (date.getFullYear() - 9) + '-' + date.getMonth() + '-' + date.getDay();
let endTime = date.getFullYear() + '-' + (date.getMonth()) + '-' + date.getDay();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
  .then(registration => {
    console.log('Servive Worked Registered');
  })
  .catch(e => {
    console.warn('Error', e);
  })
}

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let location = {lat: lat, long: long};
    getData(location);
  });

  function getData(location) {
    let url = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&maxradius=10&minmagnitude=3.5";
    let finalURL = `${url}&latitude=${location.lat}&longitude=${location.long}&starttime=${startTime}&endtime=${endTime}`;
    console.log(finalURL);

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

  function createMap(data, lat, long) {
    $loading.style.display = 'none';
    const $map = document.getElementById('map');

    let myLatLng = {lat: lat, lng: long};

    let map = new google.maps.Map($map, {
      zoom: 8,
      center: myLatLng
    });

    for (let i = 0; i < data.features.length; i++) {
      let coords = {lat: data.features[i].geometry.coordinates[1], lng: data.features[i].geometry.coordinates[0]};
      let date = timeConverter(data.features[i].properties.time);
      let status = data.features[i].properties.status;
      let infowindow = new google.maps.InfoWindow({
        content: `Date: ${date}<br>Status: ${status}`
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

function timeConverter(time){
  let a = new Date(time);
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let finalDate = month + ' ' + date + ', ' + year;
  return finalDate;
}
