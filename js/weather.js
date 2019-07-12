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

function buildHTML(weathers) {
    console.log("in build function");
    console.log(weathers);
    var weathersHTML = "";
    weathersHTML += '<tr>' + '<td>' + weathers[0].apparentTemperatureMax + '<br>';
    weathersHTML +=  weathers[0].icon + '<br>';
    weathersHTML +=  'Clouds:' + weathers[0].summary + '<br>';
    weathersHTML +=  'Humidity:' +  weathers[0].humidity + '<br>';
    weathersHTML +=  'Wind:' + weathers[0].windSpeed + '<br>';
    weathersHTML +=  'Pressure:' + weathers[0].pressure + '</td>';

    weathersHTML +=  '<td>' + weathers[1].apparentTemperatureMax + '<br>';
    weathersHTML +=  weathers[0].icon  + '<br>';
    weathersHTML +=  'Clouds:' + weathers[1].summary  + '<br>';
    weathersHTML +=  'Humidity:' +  weathers[1].humidity  + '<br>';
    weathersHTML +=  'Wind:' + weathers[1].windSpeed  + '<br>';
    weathersHTML +=  'Pressure:' + weathers[1].pressure + '</td>';

    weathersHTML +=   '<td>' + weathers[2].apparentTemperatureMax + '<br>';
    weathersHTML +=   weathers[0].icon + '<br>';
    weathersHTML +=   'Clouds:' + weathers[2].summary + '<br>';
    weathersHTML +=   'Humidity:' +  weathers[2].humidity + '<br>';
    weathersHTML +=   'Wind:' + weathers[2].windSpeed + '<br>';
    weathersHTML +=   'Pressure:' + weathers[2].pressure + '</td>' + '</tr>';
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

function weatherIcons() {
    var
        if (weather[0].icon === imageArray.icon);


}










