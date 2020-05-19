function cart() {
    var drop = document.getElementById("cartdropdown");
    drop.classList.toggle("show");
 }

 var margins = 0;
var imgContainer = document.querySelector(".image-slider");
 var leftBtn = document.getElementsByClassName("left-button")[0];
 var rightBtn = document.getElementsByClassName("right-button")[0];
 var imgSlides = document.querySelector(".images");
 
 var marginPx = 0;

 leftBtn.addEventListener("click", function() {
        
        if(marginPx == 0) {
                marginPx = marginPx - 1000;
                imgSlides.style.marginLeft = marginPx + "px";
        }

        else if (marginPx == -1000) {
                marginPx = marginPx - 1000;
                imgSlides.style.marginLeft = marginPx + "px";
        }

        else if (marginPx == -2000) {
                marginPx = marginPx - 1000;
                imgSlides.style.marginLeft = marginPx + "px";
        }

        else if (marginPx == -3000) {
                marginPx = marginPx - 1000;
                imgSlides.style.marginLeft = marginPx + "px";
        }

        else if (marginPx == -4000) {
                marginPx = marginPx - 1000;
                imgSlides.style.marginLeft = marginPx + "px";
        } 
        
        else {
                marginPx = 0;
                imgSlides.style.marginLeft = marginPx + "px";
        }

 })

 rightBtn.addEventListener("click", function() {

        if(marginPx == 0) {
                marginPx = marginPx + 1000;
                imgSlides.style.marginRight = marginPx + "px";
        }

        else if (marginPx == 1000) {
                marginPx = marginPx + 1000;
                imgSlides.style.marginRight = marginPx + "px";
        }

        else if (marginPx == 2000) {
                marginPx = marginPx + 1000;
                imgSlides.style.marginRight = marginPx + "px";
        }

        else if (marginPx == 3000) {
                marginPx = marginPx + 1000;
                imgSlides.style.marginRight = marginPx + "px";
        }

        else if (marginPx == 4000) {
                marginPx = marginPx + 1000;
                imgSlides.style.marginRight = marginPx + "px";
        } 
        
        else {
                marginPx = 0;
                imgSlides.style.marginRight = marginPx + "px";
        }
})