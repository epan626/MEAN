function Vehicle (name, wheels, passengers, speed) {
    var self = this;
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    this.distance_traveled = 0;
  }
Vehicle.prototype.makeNoise = function () {
  console.log('beep beep')
};

Vehicle.prototype.updateDistanceTraveled = function(x){
  this.distance_traveled += this.speed;
}
Vehicle.prototype.move = function(){
  this.updateDistanceTraveled();
  Vehicle.prototype.makeNoise();
}
Vehicle.prototype.checkMiles = function(){
  console.log(this.distance_traveled +' miles traveled by '+ this.name)
}
Vehicle.prototype.VinGenerate = Math.floor(Math.random()*9999999 - 1000000)+1



var Bike = new Vehicle('Bike', 2, 1, 30);

Bike.makeNoise = function(){
  console.log('ring ring')
}
Bike.move()
Bike.move()
Bike.checkMiles()
console.log(Bike.VinGenerate)

var Sedan = new Vehicle('Honda', 4, 5, 100);
Sedan.makeNoise = function() {
  console.log('honk honk')
}

var Bus = new Vehicle('SchoolBus', 8, 3, 60);
Bus.pickup = function(x){
  Bus.passengers += x

}
Bus.pickup(3);
