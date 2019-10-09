//alert("pop-up-ruta")

var myName = "Tobias"; // datatyp sring
var myAge = 19; // datatyp number
var isEvil = false; // datatyp boolean

// single line comment
/*
    *************
    block comment
    *************
*/

/*
    --------------- 
        if/else
    ---------------
*/

if(myAge < 18) {
    //alert("you can not take a drivers license");
} else {
    //alert("congratulations you are old enough to drive");
}

if(myName == "Tobias") {
   // alert("welcome, " + myName);
} else{
    //alert("you are not welcome here!");
}

// == equals to, === equal to and ame data type
if (myAge === "19") { 
    //alert("welcome");
} else {
    //alert("it's game over man, game over")
}

var hasWatched = false; // att to watchlist

if(isEvil == true) {
    //alert("you are evil");
} else{
    //alert("you are evil");
}

/* 
    ******************
       guessing app
    ******************
*/

var secretNumber = 7;
var userImput = Number(prompt("guess a number between 0 - 10"));

if(userImput === secretNumber){
    document.writeln("congratulations! you guessed the right number");
}

 else if(userImput === 6 || userImput === 8) {
    document.writeln("close but no cigar");
}

else if(userImput > secretNumber) {
    document.writeln("you are guessing higher then within given numbers");
}

else if(userImput < secretNumber) {
    document.writeln("you are guessing lower then within given numbers");
}

else{

}
// if userImput === 6 or 8 "det bränns"
//if userImput is less then secretNumber "du gissar för lågt"
//if userImput is higher then secretNumber "du gissar för högt"
