setInterval (function(){
    $("#chevron").toggleClass("chevJump")
}, 1000)

$(".burger").on("click", function() {

    $("#1").toggleClass("top")
    $("#2").toggleClass("middle")
    $("#3").toggleClass("bottom")
    $(".menu").toggleClass("menu-hide")
    
})