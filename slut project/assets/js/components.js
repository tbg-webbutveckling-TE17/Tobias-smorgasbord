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
        console.log(marginPx + "px");
 })

 rightBtn.addEventListener("click", function() {

        if(marginPx == 0) {
                marginPx = marginPx - 5000;
                imgSlides.style.marginLeft = marginPx + "px";
        }

        else if(marginPx == -5000) {
                marginPx = marginPx + 1000;
                imgSlides.style.marginLeft = marginPx + "px";
        }

        else if(marginPx == -4000) {
                marginPx = marginPx + 1000;
                imgSlides.style.marginLeft = marginPx + "px";
        }

        else if(marginPx == -3000) {
                marginPx = marginPx + 1000;
                imgSlides.style.marginLeft = marginPx + "px";
        }

        else if(marginPx == -2000) {
                marginPx = marginPx + 1000;
                imgSlides.style.marginLeft = marginPx + "px";
        } 
        
        else if(marginPx == -1000) {
                marginPx = marginPx + 1000;
                imgSlides.style.marginLeft = marginPx + "px";
        } 

        else {
                marginPx = 0;
                imgSlides.style.marginLeft = marginPx + "px";
        }
        console.log(imgSlides.style.marginLeft);
})


// hitta åt köpknappen via js
// klicka på köpknappen så körs en funktion
// Texten i en köpknapp ska kopieras upp till din kundvagn
// köpknappens innerHTML ska läggas in kundvagnens innerHTML
// kundvagnen.innerHTML = köpknapp.innerHTML;
 var Txt1 = document.getElementById("itemtext1");
 var Txt2 = document.getElementById("itemtext2");
 var Txt3 = document.getElementById("itemtext3");
 var Txt4 = document.getElementById("itemtext4");
 var Txt5 = document.getElementById("itemtext5");
 var Txt6 = document.getElementById("itemtext6");
 var Txt7 = document.getElementById("itemtext7");
 var Txt8 = document.getElementById("itemtext8");

 var cartP = document.getElementsByClassName("cart-products")[0];

 Txt1.addEventListener("click", function() {
        var para = document.createElement("a");
        var node = document.createTextNode("Corsair Carbide SPEC-Alpha");
        para.appendChild(node);
        cartP.appendChild(para);
})

Txt2.addEventListener("click", function() {
        var para = document.createElement("a");
        var node = document.createTextNode("ASUS 34inch LED ROG Swift PG348Q G-Sync Gamingskärm");
        para.appendChild(node);
        cartP.appendChild(para);
})

Txt3.addEventListener("click", function() {
        var para = document.createElement("a");
        var node = document.createTextNode("Palit GeForce GTX 1050 Ti StormX HDMI DP 4GB");
        para.appendChild(node);
        cartP.appendChild(para);
})

Txt4.addEventListener("click", function() {
        var para = document.createElement("a");
        var node = document.createTextNode("AMD Ryzen 3 2200G APU med Vega 8 grafik (box)");
        para.appendChild(node);
        cartP.appendChild(para);
})

Txt5.addEventListener("click", function() {
        var para = document.createElement("a");
        var node = document.createTextNode("HyperX FURY S Pro Gaming Mouse Pad (extra large)");
        para.appendChild(node);
        cartP.appendChild(para);
})

Txt6.addEventListener("click", function() {
        var para = document.createElement("a");
        var node = document.createTextNode("be quiet! System Power 8 500W PSU");
        para.appendChild(node);
        cartP.appendChild(para);
})

Txt7.addEventListener("click", function() {
        var para = document.createElement("a");
        var node = document.createTextNode("Logitech G602 Wireless Gaming Mouse");
        para.appendChild(node);
        cartP.appendChild(para);
})

Txt8.addEventListener("click", function() {
        var para = document.createElement("a");
        var node = document.createTextNode("Turtle Beach Headset 50P (Multiformat)");
        para.appendChild(node);
        cartP.appendChild(para);
})