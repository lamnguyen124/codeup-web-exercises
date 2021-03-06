
// $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey +  "/29.4241,-98.4936").done(function(data) {
//     console.log(data);
//     var dateObject = new Date(data.currently.time * 1000);
//     console.log(dateObject);
// });



function updatePage() {
    var request= $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey +  "/29.4241,-98.4936");
    request.done(function(data) {
        console.log(data);
        var html = buildHTML(data.daily.data);
        $('#weather').html(html);}).fail(function(jqXhr, status, error) {
        console.log("Something went wrong");
        console.log(status);
    });
}

updatePage();

var icon;
function buildHTML(weathers) {
    console.log("in build function");
    console.log(weathers);
    function weatherIcons() {
        imageArray.forEach(function (ele) {
            if (weathers[0].icon === ele.icon) {
                icon = ele.src;
            } else if (weathers[1].icon === ele.icon) {
                icon = ele.src;
            } else if (weathers[2].icon === ele.icon) {
                icon = ele.src;
            }})
    }
    weatherIcons();
    var weathersHTML = "";
    weathersHTML += '<tr>' + '<td>' + weathers[0].apparentTemperatureMax + '<br>';
    weathersHTML +=  '<img src="'+icon+'" alt="">' + '<br>';
    weathersHTML +=  'Clouds:'+ ' ' + weathers[0].summary + '<br>';
    weathersHTML +=  'Humidity:' + ' '+  weathers[0].humidity + '<br>';
    weathersHTML +=  'Wind:' + ' '+ weathers[0].windSpeed + '<br>';
    weathersHTML +=  'Pressure:' + ' ' + weathers[0].pressure + '</td>';

    weathersHTML +=  '<td>' + weathers[1].apparentTemperatureMax + '<br>';
    weathersHTML +=  '<img src="'+icon+'" alt="">' + '<br>';
    weathersHTML +=  'Clouds:'+ ' ' + weathers[1].summary  + '<br>';
    weathersHTML +=  'Humidity:' +  weathers[1].humidity  + '<br>';
    weathersHTML +=  'Wind:'+ ' ' + weathers[1].windSpeed  + '<br>';
    weathersHTML +=  'Pressure:' + ' '+ weathers[1].pressure + '</td>';

    weathersHTML +=   '<td>' + weathers[2].apparentTemperatureMax + '<br>';
    weathersHTML +=   '<img src="'+icon+'" alt="">' + '<br>';
    weathersHTML +=   'Clouds:'+ ' '  + weathers[2].summary + '<br>';
    weathersHTML +=   'Humidity:' + ' '+ ' ' +  weathers[2].humidity + '<br>';
    weathersHTML +=   'Wind:' + ' ' + weathers[2].windSpeed + '<br>';
    weathersHTML +=   'Pressure:' + ' ' + weathers[2].pressure + '</td>' + '</tr>';
    return weathersHTML;
}


var imageArray = [
    {
        "src": "img/SVG/rain.svg",
        "icon": "rain"
    },
    {
        "src": "img/SVG/clear-night.svg",
        "icon": "clear-night"
    },
    {
        "src": "img/SVG/clear-day.svg",
        "icon": "clear-day"
    },
    {
        "src": "img/SVG/snow.svg",
        "icon": "snow"
    },
    {
        "src": "img/SVG/sleet.svg",
        "icon": "sleet"
    },
    {
        "src": "img/SVG/fog.svg",
        "icon": "fog"
    },
    {
        "src": "img/SVG/partly-cloud-day.svg",
        "icon": "partly-cloudy-day"

    },
    {
        "src": "img/SVG/clear-night.svg",
        "icon": "clear-night"
    },
    {
        "src": "img/SVG/partly-cloud-day.svg",
        "icon": "partly-cloudy-night"
    }
];
var accessToken = mapboxToken;
mapboxgl.accessToken = accessToken;

var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.489313, 29.426409],
    zoom: 8
});

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.489313, 29.426409])
    .addTo(map);

function onDragEnd() {
    var lngLat = marker.getLngLat();
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lngLat.lat +',' + lngLat.lng).done(function(data) {
        var html = buildHTML(data.daily.data);
        $('#weather').html(html);}).fail(function(jqXhr, status, error) {
        console.log("Something went wrong");
        console.log(status);
    });
}

marker.on('dragend', onDragEnd);

var geocoder = new MapboxGeocoder({ // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    // marker: false // Do not use the default marker style
});

geocoder.on('result', function(ev) {
    var geoLat = ev.result.geometry.coordinates[1];
    var geoLong = ev.result.geometry.coordinates[0];
    console.log(geoLat, geoLong);
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + geoLat +',' + geoLong).done(function(data) {
        var html = buildHTML(data.daily.data);
        $('#weather').html(html);}).fail(function(jqXhr, status, error) {
        console.log("Something went wrong");
        console.log(status);
    });
});
//     var marker = new mapboxgl.Marker() // Initialize a new marker
//         .setLngLat([geoLong, geoLat]) // Marker [lng, lat] coordinates
//         .addTo(map); // Add the marker to the map

map.addControl(geocoder);

