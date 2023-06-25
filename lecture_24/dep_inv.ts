interface Engine {
  start(): void;
  stop(): void;
}

class BasicEngine implements Engine {
  cylinders: number;
  constructor(cylinders: number) {
    this.cylinders = cylinders;
  }
  start() {
    console.log("Engine started");
  }
  stop() {
    console.log("Engine stopped");
  }
}

class V8Engine implements Engine {
  cylinders: number;
  constructor() {
    this.cylinders = 8;
  }

  start() {
    console.log("V8 engine started");
  }

  stop() {
    console.log("V8 engine stopped");
  }
}

class Car {
  engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  start() {
    this.engine.start();
  }

  stop() {
    this.engine.stop();
  }

  upgradeEngine(engine: Engine) {
    this.engine = engine;
  }
}

const car = new Car(new BasicEngine(4));

car.start();

car.stop();

car.upgradeEngine(new V8Engine());

car.start();
car.stop();
