// for använder man när man vet hur många gånger loopen ska köra

// initiering; villkor; inkrementering
//for(var i = 0; i <= 6; i++) {
    // kör koden för varje iteration
//    console.log(i);

//}

//var str = "Hello World!"
//for(var i = 0; i < str.length; i++){
//    console.log(str[i]);


//}
//var myArr = ["html", "css", "javascript", 42, true];
//var len = myArr.length;
//for (var i = 0; i < len; i++) {
//    console.log(myArr[i]);
//}

for (var i = -10; i <= 19; i++) {
    console.log(i);
}
for (var i = 10; i <= 40; i += 2) {
    if(i % 2 === 0) {
        console.log(i);
    }
}
for (var i = 301; i <= 333; i += 2) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
for (var i = 5; i <= 50; i ++) {
    if (i % 3 == 0 && i % 5 == 0)  {
    console.log(i);
}
}








rows = 5;
cols = 5;
/*
for(var i = o; i < rows; i++){
    for (var ii = 0; ii < cols; ii++) {
        document.writeln()
    }
}
*/
/*
for (var multiplier = 0; multiplier <= 10; multiplier++){
    for(var i = 0; i <= 10; i++){
        var result = multiplier * i;
        document.writeln(multiplier + '*' + i + '=' + result + '<br/>');
    }
    document.writeln('<br/>');
}
*/
var choices = [ 'nudlar', 'pankaka', 'palt', 'tacos'];
for(var i = 0; i < choices.length; i++){
        document.writeln('my ' + '# ' + (i + 1) + ' choice is ' + choices[i]);
}


/*

*
**
***
****
*****
******

*/

