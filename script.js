var apiKey="64126c4733c820feb7b19413d2391072"
$("#search").on ("click", function(){
    displayWeather()
})
function displayWeather(){

    var cityName=$("#cityName").val()
    $.ajax({
        url:"https://api.openweathermap.org/data/2.5/weather?q="+cityName +"&units=imperial&appid="+apiKey,
        method:"GET"
    })
    .then(function(results){
        console.log(results) 

        var currentDate=moment(results.dt,"X").format(" (L) ")

        var iconcode = results.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        var img= $("<img>").attr("src",iconUrl)

        var h1=$("<h1>").append( results.name, currentDate,img)
        $(".jumbotron").append(h1)

        var h1=$("<h1>").html("Temp: " + results.main.temp)
        $(".jumbotron").append(h1)

        var pHum=$("<p>").html("Humidity: " + results.main.humidity + "%")
        $(".jumbotron").append(pHum)

        var Ws=$("<p>").html("Windspeed: " + results.wind.speed)
        $(".jumbotron").append(Ws)
        
        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/uvi?lat="+results.coord.lat+"&lon="+results.coord.lon+"&appid="+apiKey
        }).then( function(uvIndex){
            console.log(uvIndex)
         
            var uv=$("<p>").html("uvIndex: " + uvIndex.value)
            $(".jumbotron").append(uv)
        })
    
    })

}    