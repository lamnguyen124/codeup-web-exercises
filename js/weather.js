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

// var sanAntonio;
// var mapOptions = {
//     container: 'map',
//     style: 'mapbox://styles/mapbox/outdoors-v10',
//     zoom: 15,
//     center: [-98.489313, 29.426409]
// };
// var coordinates = document.getElementById('coordinates');
// var map = new mapboxgl.Map(mapOptions);
//
// var marker = new mapboxgl.Marker({
//     draggable: true
// })
//     .setLngLat([-98.489313, 29.426409])
//     .addTo(map);
//
// function onDragEnd() {
//     var lngLat = marker.getLngLat();
//     coordinates.style.display = 'block';
//     coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
// }
//
// marker.on('dragend', onDragEnd);

var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.489313, 29.426409],
    zoom: 8
});
map.on('load', function () {
    map.addSource('aerisweather-radar', {
        "type": 'raster',
        "tiles": [
            'https://maps1.aerisapi.com/[clientId]_[clientKey]/radar/{z}/{x}/{y}/current.png',
            'https://maps2.aerisapi.com/[clientId]_[clientKey]/radar/{z}/{x}/{y}/current.png',
            'https://maps3.aerisapi.com/[clientId]_[clientKey]/radar/{z}/{x}/{y}/current.png',
            'https://maps4.aerisapi.com/[clientId]_[clientKey]/radar/{z}/{x}/{y}/current.png'
        ],
        "tileSize": 256,
        "attribution": "<a href='https://www.aerisweather.com/'>AerisWeather</a>"
    });
    map.addLayer({
        "id": "radar-tiles",
        "type": "raster",
        "source": "aerisweather-radar",
        "minzoom": 0,
        "maxzoom":22
    });
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
    marker: false // Do not use the default marker style
});

map.addControl(geocoder);

// // After the map style has loaded on the page,
// // add a source layer and default styling for a single point
// map.on('load', function() {
//     map.addSource('single-point', {
//         type: 'geojson',
//         data: {
//             type: 'FeatureCollection',
//             features: []
//         }
//     });
//
//     map.addLayer({
//         id: 'point',
//         source: 'single-point',
//         type: 'circle',
//         paint: {
//             'circle-radius': 10,
//             'circle-color': '#448ee4'
//         }
//     });
//
//     // Listen for the `result` event from the Geocoder
//     // `result` event is triggered when a user makes a selection
//     //  Add a marker at the result's coordinates
//     geoccoder.on('result', function(e) {
//         map.getSource('single-point').setData(e.result.geometry);
//     });
// });












