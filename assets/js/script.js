setInterval(function () {
    $("#chevron").toggleClass("chevJump")
}, 1000)

setInterval(function () {
    $(".cloud1").toggleClass("cloudWiggle1")
    $(".cloud2").toggleClass("cloudWiggle2")
}, 1000)

$(".burger").on("click", function () {

    $("#1").toggleClass("one")
    $("#2").toggleClass("two")
    $("#3").toggleClass("three")
    $(".menu").toggleClass("menu-hide")

})

$(".homepage").on("click", function () {

    if ($(".home-title").text(":empty")) {
        
        $(".home-title").text("Home Page")
        var description = $("<p>")
        description.text("A home page web app with a dynamic background that offers a user access to a handful of widgets including - a google search bar, the weather, and an agenda.")
        $(".home-description").append(description)
        var link = $("<a>").text("check it out")
        link.attr("href", "https://jethan16.github.io/HomePage/")
        link.attr("target", "_blank")
        link.addClass('link-style')
        $(".home-description").append(link)

    } else {
        $(".home-title").html("")
    }
    
    $(".homepage").toggleClass("cover")
})

$(".quiz").on("click", function () {

    if ($(".cover-title").text(":empty")) {
        
        $(".cover-title").text("Code Quiz")
        var description = $("<p>")
        description.text("A quiz that generates its questions dynamically.")
        $(".quiz-description").append(description)
        var link = $("<a>").text("check it out")
        link.attr("href", "https://jethan16.github.io/CodeQuiz/")
        link.attr("target", "_blank")
        link.addClass("link-style")
        $(".cover-description").append(link)

    } else {
        $(".cover-title").html("")
    }
    
    $(".quiz").toggleClass("cover")
})

$(".weather").on("click", function () {

    if ($(".weather-title").text(":empty")) {
        
        $(".weather-title").text("Weather Dashboard")
        var description = $("<p>")
        description.text("A weather dashboard that generates content dynamically. The app allows the user to search a city and see the current weather as well as a five day forecast.")
        $(".weather-description").append(description)
        var link = $("<a>").text("check it out")
        link.attr("href", "https://jethan16.github.io/WeatherDashboard/")
        link.attr("target", "_blank")
        link.addClass("link-style")
        $(".weather-description").append(link)

    } else {
        $(".weather-title").html("")
    }
    
    $(".weather").toggleClass("cover")
})

$(".btn1").on("click", function() {
    $(this).html("")
})