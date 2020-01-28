var output = document.querySelector("body > p");
var person = ['Sid', 31, "EagleShieldBay"];

output.innerHTML = person[2]

var person = ['Sid', "EagleShieldBay", 31];

output.innerHTML = person[2]

var persona = {
    name: 'sid',
    age: 42,
    hometown: 'Heresneezedduck'
};

persona.hometown = 'Buy a Harbour'

output.innerHTML = persona.name + "He lives in" + persona.hometown;

var oddNums = {};
oddNums.number = 1;
oddNums.str = '';
oddNums.isOdd = true;

output.innerHTML = oddNums.number;

var dog = {
    name:'Doggo',
    breed: 'golden',
    age: 3,
    isFriendly: true
};

var cat = new Object();
cat.name = 'Smillla', cat.age = 3;
output.innerHTML = cat.name;

var junkobject = {
    name: 'junk',
    age: 33,
    collor: 'space gray',
    isEvil: false,
    friends:['ben', 'kaif', 'samy'],
    pets: {
        name: 'Charlie',
        species: 'pig',
        age: 9
    }
};

output.innerHTML = junkobject.pets.species;

var posts = [
    {
        author: 'Attwood',
        title:'HandMaidsTail',
        comments:[ 'a comment' ],
    }, 
    {
        author:'Jules Verne',
        title:'around the world under the Sea',
        comments:'a comment',
    }, 
    {
        author:'',
        title:'',
        comments:'a comment',
    }
];

output.innerHTML = 'author: ' + posts[1].author + 'comments: ' + posts[1].comments[0];