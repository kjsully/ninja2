//define class
class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    //methods
    sayName = () => {
        console.log(this.name);
    }
    showStats = () => {
        console.log(this.name, this.strength, this.speed, this.health)
    }
    drinkSake = () => {
        this.health += 10
        console.log(`${this.name}'s health is now ${this.health}`);
    }
}

const n1 = new Ninja("Bob", 100);
n1.sayName();
n1.showStats();
n1.drinkSake()