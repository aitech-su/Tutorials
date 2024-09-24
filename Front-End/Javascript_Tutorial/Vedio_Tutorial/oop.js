//object
const person1 = {
    name: "Spongebob",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log("Hi, I am Spongebob!"),
    sayBye: function(){console.log("Goodbye!")}
};
// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name
//        (doesn't work with arrow function)
const person2 = {
    name: "Spongebob",
    age: 30,
    isEmployed: true,
    sayHello: function(){ console.log(`Hi, I am ${this.name}!`)},
    sayBye: () => console.log("Goodbye!")
};
// constructor = special method for defining the
//               properties and methods of objects
function Car(brand,year,color){
    this.brand = brand, 
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.brand}`)}
}
const car1 = new Car("BMW","2024","red");
//class
class Car{
    constructor(brand,year,color){
        this.brand = brand; 
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`You drive the ${this.brand}`);
    }
    calculate_age(current_year){
        return (current_year - this.year);
    }
}
const car2 = new Car("BMW","2024","red");
car2.drive();
// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)
class MathUtil{
    static PI = 3.14;
    static getDiameter(radius){
        return radius * 2;
    }
}
class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(2));
const  user1 = new User("A");
console.log(user1.username);
console.log(user1.userCount); //undefined, userCount belongs to class, not object
console.log(User.userCount);
const  user2 = new User("B");
console.log(user2.username);
console.log(User.userCount);
// inheritance
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "rabbit";
}
class Fish extends Animal{
    name = "fish";
}
const fish = new Fish();
console.log(fish.alive);
fish.eat();
fish.sleep();
// super = keyword is used in classes to call the constructor or
//         access the properties and methods of a parent(superclass)
//         this = this object
//         super = the parent
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}
class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
// getter = special method that makes a property readable
// setter = special method that makes a property writable

// validate and modify a value when reading/writing a property
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    set radius(newRadius){
        if(newRadius > 0){
            this._radius = newRadius;
        }else{
            console.error("Radius must be a positive number");
        }
    }
    get radius(){
        return this._radius;
    }
}
const circle = new Circle(-100);
//nested objects = objects inside of other objects
const person3 = {
    name: "A",
    age: 10,
    hobbies: ["swimming","cooking"],
    address: {
        city: "Berlin",
        country: "Germany"
    }
}
console.log(person3.hobbies[0]);
console.log(person3.address.city);
for(const property in person3.address){
    console.log(person3.address[property]);
}
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(city,country){
        this.city = city;
        this.country = country;
    }
}
const person4 = new Person("A",30,"Berlin","Germany")

// sort = method used to sort elements of an array in place.
//         Sorts elements as strings in lexicographic order, not alphabetical
//         lexicographic = (alphabet + numbers + symbols) as strings
let nums3 = [3,4,2,1,6,8,5,7];
nums3.sort((a, b)=> a - b);




















































