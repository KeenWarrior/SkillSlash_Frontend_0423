interface Car {
  start(): void;
  stop(): void;
}

class BMW implements Car {
  start(): void {
    console.log("BMW started");
  }
  stop(): void {
    console.log("BMW stopped");
  }
}

class Audi implements Car {
  start(): void {
    console.log("Audi started");
  }
  stop(): void {
    console.log("Audi stopped");
  }
}

class NitroAudi extends Audi {
  start(): void {
    console.log("Nitro Audi started");
  }
  stop(): void {
    console.log("Nitro Audi stopped");
  }
}

class Maruti implements Car {
  start(): void {
    console.log("Maruti started");
  }
  stop(): void {
    console.log("Maruti stopped");
  }
}

class CarFactory {
  public static getCar(type: string): Car {
    if (type === "Fast") {
      return new BMW();
    } else if (type === "Lux") {
      return new NitroAudi();
    } else if (type === "Cheap") {
      return new Maruti();
    }
    return new Maruti();
  }
}

class Race {
    private cars: Car[];
    
    constructor() {
        this.cars = [];
    }
    
    public addCar(car: Car): void {
        this.cars.push(car);
    }
    
    public startRace(): void {
        this.cars.forEach((car) => car.start());
    }
    
    public stopRace(): void {
        this.cars.forEach((car) => car.stop());
    }
}

const car: Car = CarFactory.getCar("Fast");



car.start();
car.stop();

