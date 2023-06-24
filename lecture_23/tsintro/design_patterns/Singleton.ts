class Earth {

    private static instance: Earth;

    private population: number;

    private constructor(){
        this.population = 0;
    }

    static getInstance(): Earth {
        if (!Earth.instance) {
            Earth.instance = new Earth();
        }
        return Earth.instance;
    }

    increasePopulation(): void {
        this.population++;
    }

    decreasePopulation(): void {
        this.population--;
    }

    getPopulation(): number {
        return this.population;
    }
}

const earth1 = Earth.getInstance();

const earth2 = Earth.getInstance();

earth1.increasePopulation();
earth2.increasePopulation();

console.log(earth1.getPopulation()); 
console.log(earth2.getPopulation()); 

console.log(earth1 === earth2);