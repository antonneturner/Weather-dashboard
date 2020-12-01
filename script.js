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

        var h1=$("<h1>").html("Temp:" + results.main.Temp)
        $(".jumbotron").append(h1)

        var pHum=$("<p>").html("Humidity:" + results.main.Humidity + "%")
        $(".jumbotron").append(h1,pHum)

        var Ws=$("<p>").html("windspeed" + results.main.windspeed)
        $(".jumbotron").append(h1,pHum,Ws)

    
    })

}