function cart() {
    var drop = document.getElementById("cartdropdown");
    drop.classList.toggle("show");
 }

 var margins = 0;
var imgContainer = document.querySelector(".image-slider");
 var leftBtn = document.getElementsByClassName("left-button")[0];
 var rightBtn = document.getElementsByClassName("right-button")[0];
 var imgSlides = document.querySelector(".images");

 leftBtn.addEventListener("click", function() {
        margins = margins + 1000;
         imgSlides.style.marginLeft += margins+"px";

 })

 rightBtn.addEventListener("click", function() {

        imgSlides.style.marginLeft += -margins+"px";
})