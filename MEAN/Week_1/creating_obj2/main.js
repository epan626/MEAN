function Vehicle (name, wheels, passengers, speed) {
    var self = this;
    var distance_traveled = 0
    var updateDistanceTraveled = function(x){
      distance_traveled += speed;
    }
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed
    this.makeNoise = function(){
      console.log('beep beep')
    }
    this.move = function(){
      updateDistanceTraveled();
      this.makeNoise();
    }
    this.checkMiles = function(){
      console.log(distance_traveled +' miles traveled by '+ this.name)
    }
}


var Bike = new Vehicle('Bike', 2, 1, 20);

Bike.makeNoise = function(){
  console.log('ring ring')
}
Bike.move()
Bike.move()
Bike.checkMiles()

var Sedan = new Vehicle('Honda', 4, 5, 100);
Sedan.makeNoise = function() {
  console.log('honk honk')
}

var Bus = new Vehicle('SchoolBus', 8, 3, 60);
Bus.pickup = function(x){
  Bus.passengers += x

}
Bus.pickup(3);
