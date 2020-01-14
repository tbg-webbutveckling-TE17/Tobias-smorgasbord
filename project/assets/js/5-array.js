var printToSreen = document.getElementById('TestArray')



colors = ['red', 'green', 'blue'];

// describe the result string of an array
printToSreen.innerHTML = colors.join(' <br /> ');

//pop() - remove an item at the end of an array
colors.pop();
printToSreen.innerHTML = colors.join(' <br /> ');

//push() - add an item at the end of an array
colors.push('purple');
printToSreen.innerHTML = colors.join(' <br /> ');

//unshift() - adds an item at the start of an array
colors.unshift('yellow');
printToSreen.innerHTML = colors.join(' <br /> ');

// slice() - copy parts of an array
var colorgreen = colors.slice(1, 3);
printToSreen.innerHTML = colorGreen.join(' ');

var colorsCopy = colors.slice(colors);
printToSreen.innerHTML = colorGreen.join(' ');

//indexOf - find the index of an item of an array
printToSreen.innerHTML = colors.indexOf('green');
printToSreen.innerHTML = colors.indexOf('yellow');

var cars = ['Audi', 'volvo', 'kia', 'ferrari', 'ford mondeo', 'landa'];
for(var i = 0; i < cars.length; i++) {
    printToSreen.innerHTML += cars[i] + '<br />';
}

//reverse() - reverse the items in an array
printToSreen.innerHTML = cars.reverse();

var counties =[ 'sweden', 'denmark', 'norway', 'finnland' ];
counties.forEach(function(country) {
    printToSreen.innerHTML += country + ' ';
});

