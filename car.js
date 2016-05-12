// Create a car
var car = {make: "Honda", year: 2004, color: "red"};

car.make;

//create a function that makes a new car

function createCar(yea, mak, col) { //createCar function opening
  return { //return an object
    year: yea,
    make: mak,
    color: col,
    getCar: function() { //begin getCar function
      return this.year + " " + this.color + " " + this.make;
    } //end getCar function
  } //end object
} //end createCar function

car = createCar(2009, "lamborghini", "yellow");
car.getCar();


// Create function that returns valid maker of car
function validMake() { //start validMake
  var make = "Toyota";
  return { //return an object
    getMake: function() { return make; } //ends getMake
  }; //ends object returned
} //end validMake

//Put first two steps together

function createCar(yea, mak, col) { //createCar function opening
  return { //return an object
    year: yea,
    make: validMake().getMake(),
    color: col,
    getCar: function() { //begin getCar function
      return this.year + " " + this.color + " " + this.make;
    } //end getCar function
  } //end object
} //end createCar function

// Create function that returns valid maker of car
function validMake() { //start validMake
  var make = "Toyota";
  return { //return an object
    getMake: function() { return make; } //ends getMake
  }; //ends object returned
} //end validMake

var car = createCar(2009, "lamborghini", "yellow");
car.getCar();



//speed
function createCar(yea, mak, col) { //createCar function opening
  var speed = 0;
  return { //return an object
    year: yea,
    make: mak,
    color: col,
    getCar: function() { //begin getCar function
      return this.year + " " + this.color + " " + this.make;
    }, //end getCar function
    getSpeed: function() {
      return speed;
    },//end of speed function
    increaseSpeed: function() {
      return speed = speed + 10;
    },
    decreaseSpeed: function() {
      return speed = speed - 7;
    },
    accelerate: function() {
      while (speed <= 60) {
      speed = speed + 10;
      console.log(speed);
      }
      return speed;
    }
  } //end object
} //end createCar function

var car = createCar(2004, "Toyota", "Blue");

//speed Capped

function createCar(yea, mak, col) { //createCar function opening
  var speed = 0;
  return { //return an object
    year: yea,
    make: mak,
    color: col,
    getCar: function() { //begin getCar function
      return this.year + " " + this.color + " " + this.make;
    }, //end getCar function
    getSpeed: function() {
      return speed;
    },//end of speed function
    increaseSpeed: function() {
      return speed = speed + 10;
    },
    decreaseSpeed: function() {
      return speed = speed - 7;
    },
    accelerate: function() {
      while (speed <= 60) {
      speed = speed + 10;
      console.log(speed);
      }
      return speed;
    },
    stop: function() {
      while (speed > 0) {
      speed = speed - 1;
      console.log(speed);
      }
      return speed;
    }
  } //end object
} //end createCar function

var car = createCar(2004, "Toyota", "Blue");

//fixing bugs
function createCar(yea, mak, col) { //createCar function opening
  var speed = 0;
  return { //return an object
    year: yea,
    make: mak,
    color: col,
    getCar: function() { //begin getCar function
      return this.year + " " + this.color + " " + this.make;
    }, //end getCar function
    getSpeed: function() {
      return speed;
    },//end of speed function
    increaseSpeed: function() {
      if (speed > 75 && speed < 85) {
        speed = speed + 1;
      }
      if(speed <= 75) {
        speed = speed + 10;
      }
      if (speed === 85) {
        speed = 85;
      }
      return speed;
    },
    decreaseSpeed: function() {
      if(speed >= 7) {
        speed = speed - Math.floor(Math.random()*10+1);
        console.log(speed);
      }
      if(speed < 7 && speed >0) {
        speed = speed - 1;
      }
      if(speed === 0) {
        speed = 0;
      }
      return speed;
    },
    accelerate: function() {
      do {
        this.increaseSpeed();
      } while(speed<85);
      return speed;
    },
    stop: function() {
      do {
        this.decreaseSpeed();
      } while(speed > 0);
      return speed;
    }
  } //end object
} //end createCar function

var car = createCar(2004, "Toyota", "Blue");
