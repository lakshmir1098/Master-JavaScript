const Person = function (firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;

    // we always do this to reate a method
    // this is a bad approach,
    // as it will create a new copy of the function for each object
    // this.calcAge = function () {
    //     return 2025 - this.birthYear;
    // }
}

//instead do this for Prototypal inheritance

Person.prototype.calcAge = function () {
    return 2025 - this.birthYear;
}

const laks1 = new Person('Lakshmi', 'Ramachandran', 1998);
console.log(laks1, laks1.calcAge());
// Here, the laks object itself does not have the calcAge method,
// but it is inherited from the prototype object


// ##### Coding Challange #1 #########
const car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new car('BMW', 120);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

const mercedes = new car('Mercedes', 95);
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.brake();

console.log(bmw, mercedes);

//#################################################################

//ES6 Classes
class PersonCl {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    // thisis still inside prototype object
    calcAge() {
        console.log(2025 - this.birthYear);
    }
}

// this will also work
PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
}

const laks2 = new PersonCl('Lakshmi', 'Ramachandran', 1998);
console.log("laks2", laks2);
laks2.calcAge();
laks2.greet();

console.log(laks2.__proto__);
console.log(laks2.__proto__ === PersonCl.prototype);


// ##### Coding Challange #2 #########
class car1 {

    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    get speedUS() {
        return (this.speed / 1.6) + " mi/h";
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

console.log("Car1", car1.prototype);

const ford = new car1('Ford', 120);
ford.accelerate();
console.log("Speed in US", ford.speedUS);
ford.accelerate();
console.log("Speed in US", ford.speedUS);
ford.brake();
console.log("Speed in US", ford.speedUS);
ford.accelerate();
console.log("Speed in US", ford.speedUS);

//#################################################################

// Object.create() method
const PersonProto = {
    calcAge() {
        return 2025 - this.birthYear;
    },

    init(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
}

const laks3 = Object.create(PersonProto);
// laks3.firstName = 'Lakshmi';
// laks3.lastName = 'Ramachandran';
// laks3.birthYear = 1998;
laks3.init('Lakshmi', 'Ramachandran', 1998);
laks3.calcAge();

console.log(laks3.__proto__);

console.log("laks using object.create()", laks3, "age : ", laks3.calcAge());

// Inheritance between classes

class PersonClass {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    // thisis still inside prototype object
    calcAge() {
        console.log('My age is: ', 2025 - this.birthYear);
    }
}

class StudentClass extends PersonClass {
    constructor(firstName, lastName, birthYear, course) {
        // Always needs to happen first
        super(firstName, lastName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }
}

const martha = new StudentClass('Martha', 'Jones', 1998, 'Computer Science');
martha.introduce();
martha.calcAge();

console.log(martha instanceof StudentClass);
console.log(martha instanceof PersonClass);
console.dir(martha.__proto__);


// ##### Coding Challange #3 #########

class carclass {

    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

}

class ev extends carclass {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`Battery is charged to ${this.charge}%`);
    }


    accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    };

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };
}

const tesla = new ev('Tesla', 120, 23);

tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
console.log(tesla);