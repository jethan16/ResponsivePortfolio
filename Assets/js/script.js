setInterval (function(){
    $("#chevron").toggleClass("chevJump")
}, 1000)

setInterval (function(){
    $(".cloud1").toggleClass("cloudWiggle1")
    $(".cloud2").toggleClass("cloudWiggle2")
}, 1000)

$(".burger").on("click", function() {

    $("#1").toggleClass("one")
    $("#2").toggleClass("two")
    $("#3").toggleClass("three")
    $(".menu").toggleClass("menu-hide")
    
})