const onlyQueen = new Queen(80, 7);
const worker1 = new Worker(68, 10);
const worker2 = new Worker(68, 10);
const worker3 = new Worker(68, 10);
const worker4 = new Worker(68, 10);
const worker5 = new Worker(68, 10);
const drone1 = new Drone(60, 12);
const drone2 = new Drone(60, 12);
const drone3 = new Drone(60, 12);
const drone4 = new Drone(60, 12);
const drone5 = new Drone(60, 12);
const drone6 = new Drone(60, 12);
const drone7 = new Drone(60, 12);
const drone8 = new Drone(60, 12);

const ships = [onlyQueen, worker1, worker2, worker3, worker4, worker5, drone1, drone2, drone3, drone4, drone5, drone6, drone7, drone8]


const drone1 = new Drone(58, 10);
const drone2 = new Drone(58, 10);
const drone3 = new Drone(58, 10);
const drone4 = new Drone(58, 10);
const droneArray = [drone1, drone2, drone3, drone4];

const ships = [...droneArray, ...workerArray, queen];

console.log("Drone 1: " + drone1.hitPoints);
console.log("Drone 2: " + drone2.hitPoints);
console.log("Drone 3: " + drone3.hitPoints);
console.log("Drone 4: " + drone4.hitPoints);
ships[Math.floor(Math.random() * droneArray.length)].takeHit();
console.log("Drone 1: " + drone1.hitPoints);
console.log("Drone 2: " + drone2.hitPoints);
console.log("Drone 3: " + drone3.hitPoints);
console.log("Drone 4: " + drone4.hitPoints);






//Pseudocode//

//create a button x
//button on click targets random divs in a document, based on their id

//create a Ship class (common traits: each have hitPoints, each can take damage, each die when hitpoint 0)
//Ship class has hitPoint variable
//create Queen, Drones, Worker subclass which inherit the ship class instances x

//Queen subclass has a hitPoint variable which has maximum of 80
//Queen subclass has damage() which deducts 7 from hitPoint
// if hitPoint == 0 then game over;

////Drone subclass has a hitPoint variable which has maximum of 60
//Drone subclass has damage() which deducts 12 from hitPoint
// if hitPoint == 0 then the element with the class is unreachable/loses the drone class;

//Worker subclass has a hitPoint variable which has maximum of 68
//Worker subclass has damage() which deducts 10 from hitpoint
// if hitpoint == 0 then the element loses the Worker class;

//Game over when all elements with queen, worker, drone classes = 0

class MainShip {
    constructor (hitPoints, damage) {
        this.hitPoints = hitPoints;
        this.damage = damage;
    }
 
    takeHit() {
        this.hitPoints -= this.damage;
        // console.log("You've been hit", this.hitPoints);
    }

}


class Queen extends MainShip {

}

class Drone extends MainShip {
}

class Worker extends MainShip {
}

// const testShip = new Ship(27, 10);
// testShip.takeHit();
// const elizabeth = new Queen(80, 7);
// elizabeth.takeHit();

const drone1 = new Drone(58, 10);
const drone2 = new Drone(58, 10);
const drone3 = new Drone(58, 10);
const drone4 = new Drone(58, 10);
const drone5 = new Drone(58, 10);
const drone6 = new Drone(58, 10);
const drone7 = new Drone(58, 10);
const drone8 = new Drone(58, 10);
const droneArray = [drone1, drone2, drone3, drone4, drone5, drone6, drone7, drone8];

const ships = [...droneArray, queen];

console.log("Drone 1: " + drone1.hitPoints);
console.log("Drone 2: " + drone2.hitPoints);
console.log("Drone 3: " + drone3.hitPoints);
console.log("Drone 4: " + drone4.hitPoints);
console.log("Drone 5: " + drone1.hitPoints);
console.log("Drone 6: " + drone2.hitPoints);
console.log("Drone 7: " + drone3.hitPoints);
console.log("Drone 8: " + drone4.hitPoints);
droneArray[Math.floor(Math.random() * droneArray.length)].takeHit();
// console.log("Drone 1: " + drone1.hitPoints);
// console.log("Drone 2: " + drone2.hitPoints);
// console.log("Drone 3: " + drone3.hitPoints);
// console.log("Drone 4: " + drone4.hitPoints);

console.log("Worker 1: " + worker1.hitPoints);
  console.log("Worker 2: " + worker2.hitPoints);
  console.log("Worker 3: " + worker3.hitPoints);
  console.log("Worker 4: " + worker4.hitPoints);
  console.log("Worker 5: " + worker5.hitPoints);
  console.log("Only Queen: " + onlyQueen.hitPoints);
  console.log("Drone 1: " + drone1.hitPoints);
  console.log("Drone 2: " + drone2.hitPoints);
  console.log("Drone 3: " + drone3.hitPoints);
  console.log("Drone 4: " + drone4.hitPoints);
  console.log("Drone 5: " + drone5.hitPoints);
  console.log("Drone 6: " + drone6.hitPoints);
  console.log("Drone 7: " + drone7.hitPoints);
  console.log("Drone 8: " + drone8.hitPoints);