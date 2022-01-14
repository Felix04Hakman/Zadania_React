class Auto {
  constructor(brand, maxSpeed) {
    this.brand = brand;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
  }

  speedUp(amount) {
    this.speed = Math.min(this.speed + amount, this.maxSpeed);
  }

  slowDown(amount) {
    this.speed = Math.max(this.speed - amount, 0);
  }
}

const bmw = new Auto("e56", "130");

console.log(bmw);

bmw.speedUp(30);
console.log(bmw);

bmw.slowDown(15);
console.log(bmw);

bmw.speedUp(1000);
console.log(bmw);

bmw.slowDown(1000);
console.log(bmw);
