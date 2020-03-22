$(document).ready(function() {
  console.log("on load function called!");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var perimeter = $("#profile");
    var perimeterPosition = perimeter.offset().top;

    if (scroll > perimeterPosition) {
      $("nav").removeClass("navHide");
    } else {
      $("nav").addClass("navHide");
    }
  });
//   $(".jumbo-text").addClass('jumbo-text-move')
$(".jumbo-text").animate({ bottom: '0px', fontSize: '85px'}, 350, 'swing', function() {
    $(".jumbo-text").animate({ bottom: '30px', fontSize: '85px'}, 150,'swing', function() {
        $(".jumbo-text").animate({ bottom: '-10px', fontSize: '85px'}, 400, function() {}); 

    }); 
}); 


});

$(".contact-link").mouseover(function() {
    $(".hand-wave").toggleClass("hand-wave-active");
 var wave = setInterval(handWave, 200);
 $(".contact-link").mouseleave(function() {
   clearInterval(wave);
 });
});


function handWave () {
    $(".hand-wave").toggleClass("hand-wave-active");
}

setInterval(function() {
  $("#chevron").toggleClass("chevJump");
}, 1000);

setInterval(function() {
  $(".cloud1").toggleClass("cloudWiggle1");
  $(".cloud2").toggleClass("cloudWiggle2");
}, 1000);

$(".burger").on("click", function() {
  $("#1").toggleClass("one");
  $("#2").toggleClass("two");
  $("#3").toggleClass("three");
  $(".menu").toggleClass("menu-hide");
});

$(".lower #project").on("click", function() {
  if ($(this).hasClass("homepage")) {
    $(this).toggleClass("cover");
    if ($(".homepage-description").children().length > 0) {
      $(".homepage-description").html("");
    } else {
      const description =
        "A home page web app with a dynamic background that offers a user access to a handful of widgets.";
      writeAppDescription(
        "Home Page",
        description,
        "https://jethan16.github.io/HomePage/",
        ".homepage-description"
      );
    }
  }

  if ($(this).hasClass("quiz")) {
    $(this).toggleClass("cover");
    if ($(".quiz-description").children().length > 0) {
      $(".quiz-description").html("");
    } else {
      const description = "A quiz that generates its questions dynamically.";
      writeAppDescription(
        "Quiz",
        description,
        "https://jethan16.github.io/CodeQuiz/",
        ".quiz-description"
      );
    }
  }
  if ($(this).hasClass("weather")) {
    $(this).toggleClass("cover");
    if ($(".weather-description").children().length > 0) {
      $(".weather-description").html("");
    } else {
      const description =
        "A weather dashboard that generates content dynamically. The app allows the user to search a city and see the current weather as well as a five day forecast.";
      writeAppDescription(
        "Weather Dashboard",
        description,
        "https://jethan16.github.io/WeatherDashboard/",
        ".weather-description"
      );
    }
  }
  if ($(this).hasClass("grindstone")) {
    $(this).toggleClass("cover");
    if ($(".grindstone-description").children().length > 0) {
      $(".grindstone-description").html("");
    } else {
      const description =
        "A quiz application that offers users the option of putting their knowledge to the test in HTML, CSS, or JavaScript.";
      writeAppDescription(
        "The Grindstone",
        description,
        "https://jethan16.github.io/WeatherDashboard/",
        ".grindstone-description"
      );
    }
  }
});

const writeAppDescription = (title, description, url, appendPosition) => {
  var link = $("<a>").text("check it out");
  link.attr("href", url);
  link.attr("target", "_blank");
  link.addClass("link-style");
  var summary = $("<p>").text(description);
  $(appendPosition)
    .append($("<h3>").text(title))
    .append(summary)
    .append(link);
};
