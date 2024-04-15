function Car(modeli, shpejtsi){
    this.modeli = modeli;
    this.shpejtsi = shpejtsi;
}

const BMW = new Car("BMW", 120);
console.log(BMW);

const Mercedes = new Car("Mercedes", 95);
console.log(Mercedes);

Car.prototype.accelerate = function(){
    console.log(10 + this.shpejtsi);
}

Car.prototype.brake = function(){
    console.log(5 - this.shpejtsi);
}

BMW.accelerate();
BMW.brake();

Mercedes.accelerate();
Mercedes.brake();