function isEven(x) {
    if (x % 2 === 0){
        return true;
    } else{
        return false;
    }
}

console.log(isEven(10));
console.log(isEven(312));
console.log(isEven(523));

/*
write a function kebabToSnake() wich takes a single
kebab-cased string Argument and
returns the snake_cesed version
basically replace "-" with "_"
*/

function kebabToSnake(str) {
    var newStr = str.replace(/-/g, '_');
    return newStr;
}

console.log(kebabToSnake('this-is-a-kebab-ceased-string'));


/*
**************************************
JS Scope
**************************************
*/

function localScope() {
    var showScope = 32;
    console.log(showScope);
}

localScope();
console.log(showScope);

var showScope = "I'm a global variable";
console.log(showScope);

var showGlobalVar = 90; // Global variable
function globalScope() {
    showGlobalVar = 100;
    console.log(showGlobalVar);
}

console.log(showGlobalVar);
globalScope();
console.log(showGlobalVar);

function hi() {
    var name = 'Nicolai';
    console.log(name);
}

hi();

function bye() {
    console.log(name);
}

bye();

/* 
JS functions - Higher order functions
simple explanation: A function that can take another function as an argument
*/

function sing() {
    console.log('Im singing in the rain');
    console.log('Just singing in the rain');
    console.log('What a glorious feeling');
}

// Higher order function
setInterval(sing, 2000); //1
clearInterval(1);
setInterval(sing, 2000); //2
clearInterval(2);

var intervalExample = setInterval(sing, 2000);
clearInterval(intervalExample);

// Anonomous function
var anon = setInterval(function() {
    console.log("Im an anonomous function")
}, 1500);

clearInterval(anon);

function mytimer() {
    var d = new Date();
    var time = d.toLocaleTimeString();
    document.getElementById('timeOutput').innerHTML = time;
}

mytimer();

var myTime = setInterval(mytimer, 1000);

var stopBtn = document.getElementsByTagName('button')[0];
stopBtn.addEventListener('mouseenter', function(){
    clearInterval(myTime)
    alert('time has stopped')
});

stopBtn.addEventListener('mouseleave', function(){
    myTime = setInterval(mytimer, 1000)
    //alert('time has started again')
});

// calcute tip

// function calulateTip(total) {
//     var tipPercent = 0.15;
//     return total * tipPercent;
// }

// var billlTotal = prompt("quanto costa?");
// var billTip = calulateTip(billlTotal);
// var receipt = "Bill Total: " + billlTotal + " Tip: " + billTip;
// console.log(receipt);




function tellFortune(job, partner, children, location){
    var fortune = 'you will be a ' + job + ' married to ' + partner + ' with ' + children + ' kids and live in ' + location ;
    var printOut = document.getElementsByClassName('displayFortune')[0];
    printOut.innerHTML = fortune
}


var jobarr = ['buss driver','alchemist','teacher','chef'];
var partnerarr =['Jerremy','Mikel','Susan','Coco'];
var childrenarr =['1','2','3','4'];
var locationarr =['London','U.S.A','Japan','France'];

tellFortune("A","B","C","D");

/*
write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
and married to Z with N kids."
call that function 3 times with 3 diffrent values for the argument

bonus: create a button that calls this function
eatch time the button is clicked rantom values of 4 arguments will be printed out
Tip: store different values of each argument in arrays that when is called
random values
*/