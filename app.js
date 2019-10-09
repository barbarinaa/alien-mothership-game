//Pseudocode//

//create a button x
//button on click targets random element x

//create a Ship class (common traits: each have hitPoints, each can take damage, each die when hitpoint 0) x
//Ship class has hitPoint variable x
//create Queen, Drones, Worker subclass which inherit the ship class instances x

//Queen subclass has a hitPoint variable which has maximum of 80 x
//Queen subclass has damage() which deducts 7 from hitPoint x
// if hitPoint == 0 then game over; x

////Drone subclass has a hitPoint variable which has maximum of 60 x
//Drone subclass has damage() which deducts 12 from hitPoint x
// if hitPoint == 0 then the element with the class is unreachable/can't be hit; x

//Worker subclass has a hitPoint variable which has maximum of 68 x
//Worker subclass has damage() which deducts 10 from hitpoint x
// if hitPoint == 0 then the element with the class is unreachable/can't be hit; x

//Game over when all elements with queen, worker, drone classes = 0 / queen dead x

const showWinMessage = document.getElementById("message");

const shipDead = targetIndex => {
  let removeDeadShips = [...document.getElementsByClassName("space")];
  removeDeadShips[targetIndex].classList.remove("space");
  console.log("died");
};

class MainShip {
  constructor(hitPoints, damage) {
    this.hitPoints = hitPoints;
    this.damage = damage;
  }

  takeHit(targetIndex) {
    this.hitPoints -= this.damage;
    if (this.hitPoints <= 0) {
      this.hitPoints = 0;
      shipDead(targetIndex);
    }
  }
}

class Queen extends MainShip {
  hitPoints = 40;
  damage = 47;

  takeHit(targetIndex) {
    this.hitPoints -= this.damage;
    if (this.hitPoints <= 0) {
      this.everyoneDies();
    }
  }

  everyoneDies() {
    console.log("dead");
    showWinMessage.innerHTML = "The Master is dead! Earth is saved!";
    showWinMessage.id = "win";
  }
}

class Worker extends MainShip {
  hitPoints = 20;
  damage = 10;
}

class Drone extends MainShip {
  hitPoints = 20;
  damage = 12;
}

//// Creating objects

// const targets = [
//   {
//     name: "Queen",
//     number: 1
//   },
//   {
//     name: "Worker",
//     number: 5
//   },
//   {
//     name: "Drone",
//     number: 8
//   }
// ];

const ships = [];

const numQueens = 1;
const numWorkers = 5;
const numDrones = 8;

for (let i = 0; i <= numQueens; i++) {
  let onlyQueen = new Queen();
  ships.push(onlyQueen);
}

for (let i = 0; i <= numWorkers; i++) {
  let worker = new Worker();
  ships.push(worker);
}

for (let i = 0; i <= numDrones; i++) {
  let drone = new Drone();
  ships.push(drone);
}

// const onlyQueen = new Queen();
// const worker1 = new Worker();
// const worker2 = new Worker();
// const worker3 = new Worker();
// const worker4 = new Worker();
// const worker5 = new Worker();
// const drone1 = new Drone();
// const drone2 = new Drone();
// const drone3 = new Drone();
// const drone4 = new Drone();
// const drone5 = new Drone();
// const drone6 = new Drone();
// const drone7 = new Drone();
// const drone8 = new Drone();

// const ships = [
//   onlyQueen,
//   worker1,
//   worker2,
//   worker3,
//   worker4,
//   worker5,
//   drone1,
//   drone2,
//   drone3,
//   drone4,
//   drone5,
//   drone6,
//   drone7,
//   drone8
// ];

const button = document.getElementById("button");

const doDamage = () => {
  survivingShips = ships.filter(ship => {
    return ship.hitPoints > 0;
  });
  const targetIndex = Math.floor(Math.random() * survivingShips.length);
  survivingShips[targetIndex].takeHit(targetIndex);

  showHitPoint();
};
button.onclick = doDamage;

const showHitPoint = () => {
  document.getElementById("queen").innerHTML = `&#10084;${onlyQueen.hitPoints}`;
  document.getElementById("worker1").innerHTML = `&#10084;${worker1.hitPoints}`;
  document.getElementById("worker2").innerHTML = `&#10084;${worker2.hitPoints}`;
  document.getElementById("worker3").innerHTML = `&#10084;${worker3.hitPoints}`;
  document.getElementById("worker4").innerHTML = `&#10084;${worker4.hitPoints}`;
  document.getElementById("worker5").innerHTML = `&#10084;${worker5.hitPoints}`;
  document.getElementById("drone1").innerHTML = `&#10084;${drone1.hitPoints}`;
  document.getElementById("drone2").innerHTML = `&#10084;${drone2.hitPoints}`;
  document.getElementById("drone3").innerHTML = `&#10084;${drone3.hitPoints}`;
  document.getElementById("drone4").innerHTML = `&#10084;${drone4.hitPoints}`;
  document.getElementById("drone5").innerHTML = `&#10084;${drone5.hitPoints}`;
  document.getElementById("drone6").innerHTML = `&#10084;${drone6.hitPoints}`;
  document.getElementById("drone7").innerHTML = `&#10084;${drone7.hitPoints}`;
  document.getElementById("drone8").innerHTML = `&#10084;${drone8.hitPoints}`;
};

// const showHitPoint = () => {
// const hitArray = [...document.getElementsByClassName("test")];
// ships[i].innerHTML = `&#10084;${hitArray[i].hitPoints}`;
// for(element of array){} => `&#10084;${element.innerHTML.hitPoints}`);
// const showHitPoint = () => {
//   for (element of hitArray) {
//     element.innerHTML = `&#10084;${hitArray[element].hitPoints}`;
//     return element.innerHTML;
//   }
// };

showHitPoint();
