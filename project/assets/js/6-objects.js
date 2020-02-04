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
output.innerHTML = "";
var posts = [
    {
        author: 'Attwood',
        title:'HandMaidsTail',
        comments:[ 'a comment 1' ],
    }, 
    {
        author:'Jules Verne',
        title:'around the world under the Sea',
        comments:[ 'a comment 2' ],
    }, 
    {
        author:'DR.zeuze',
        title:'cat in the hat',
        comments:[ 'a comment 3' ],
    }
];

posts.forEach(function(post) {
    output.innerHTML += 'author: ' + post.author + '<br/> title: ' + post.title + '<br/> comments: ' + post.comments + "<br/><br/>"; 
});

for (let index = 0; index < posts.length; index++) {
    output.innerHTML += '<br/> author: ' + posts[index].author + '<br/> comments: ' + posts[index].title + '<br/> title: ' + posts[index].comments + "<br/>";    
}