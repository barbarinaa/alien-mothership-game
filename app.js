//Pseudocode//

//create a button x
//button on click targets random element x

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

//Game over when all elements with queen, worker, drone classes = 0

class MainShip {
  constructor(hitPoints, damage) {
    this.hitPoints = hitPoints;
    this.damage = damage;
  }

  takeHit() {
    if (this.hitPoints >= this.damage) {
      this.hitPoints -= this.damage;
    } else {
      return (this.hitPoints = 0);
    }
  }
}

class Queen extends MainShip {
  hitPoints = 80;
  damage = 7;

  everyoneDies(){
          alert("Queen is DED all aliens DED everyone DED");
      }
}

class Worker extends MainShip {
  hitPoints = 68;
  damage = 10;
}

class Drone extends MainShip {
  hitPoints = 60;
  damage = 12;
}

const onlyQueen = new Queen();
const worker1 = new Worker();
const worker2 = new Worker();
const worker3 = new Worker();
const worker4 = new Worker();
const worker5 = new Worker();
const drone1 = new Drone();
const drone2 = new Drone();
const drone3 = new Drone();
const drone4 = new Drone();
const drone5 = new Drone();
const drone6 = new Drone();
const drone7 = new Drone();
const drone8 = new Drone();

const ships = [onlyQueen, worker1, worker2, worker3, worker4, worker5, drone1, drone2, drone3, drone4, drone5, drone6, drone7, drone8];

const button = document.getElementById("button");

const doDamage = () => {
  if (onlyQueen.hitPoints === 0) {
    return onlyQueen.everyoneDies();
  } else {
    survivingShips = ships.filter(ship => {
      return ship.hitPoints > 0;
    });
    survivingShips[Math.floor(Math.random() * survivingShips.length)].takeHit();
    showHitPoint();
  }
};
button.onclick = doDamage;

const showHitPoint = () => {
  document.getElementById("queen").innerHTML = `&#10084; ${onlyQueen.hitPoints}`;
  document.getElementById("worker1").innerHTML = `&#10084; ${worker1.hitPoints}`;
  document.getElementById("worker2").innerHTML = `&#10084; ${worker2.hitPoints}`;
  document.getElementById("worker3").innerHTML = `&#10084; ${worker3.hitPoints}`;
  document.getElementById("worker4").innerHTML = `&#10084; ${worker4.hitPoints}`;
  document.getElementById("worker5").innerHTML = `&#10084; ${worker5.hitPoints}`;
  document.getElementById("drone1").innerHTML = `&#10084; ${drone1.hitPoints}`;
  document.getElementById("drone2").innerHTML = `&#10084; ${drone2.hitPoints}`;
  document.getElementById("drone3").innerHTML = `&#10084; ${drone3.hitPoints}`;
  document.getElementById("drone4").innerHTML = `&#10084; ${drone4.hitPoints}`;
  document.getElementById("drone5").innerHTML = `&#10084; ${drone5.hitPoints}`;
  document.getElementById("drone6").innerHTML = `&#10084; ${drone6.hitPoints}`;
  document.getElementById("drone7").innerHTML = `&#10084; ${drone7.hitPoints}`;
  document.getElementById("drone8").innerHTML = `&#10084; ${drone8.hitPoints}`;
};

showHitPoint();
