var person = {
  name: 'Eric',
  distance_traveled: 0,
  say_name: function say_name(){
    console.log(person['name'])},
  say_something: function say_something(str){
    console.log(person['name'] + ' says ' + str);
  },
  walk: function walk(){
    console.log(person['name'] + ' is walking');
    person['distance_traveled'] += 3;
  },
  run: function run(){
    console.log(person['name'] + ' is running');
    person['distance_traveled'] += 10;
  },
  crawl: function crawl(){
    console.log(person['name'] + ' is crawling');
    person['distance_traveled'] += 1;
  },
}

function people(name){
  people.name = 'eric';
  people.distance_traveled = 2;
}


var eric = new people('eric')
for(var x in people){
console.log(people.name)
}
