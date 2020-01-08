// Rover Object Goes Here
// ======================
let travelLog = [];
let rover ={ direction: "N",
x: "0",
y: "0",};

// ======================

function turnLeft(rover){
console.log("turnLeft was called!");
switch(rover.direction){
  case "N":
    rover.direction = "W";
    console.log("Rover is now facing West");
    break;
  case "W":
    rover.direction = "S";
    console.log("Rover is now facing South");
    break;
  case "S":
  rover.direction = "E";
    console.log("Rover is now facing East");
    break;
  case "E":
  rover.direction = "N";
    console.log("Rover is now facing North");
    break;
  default: 
    console.log("That's not a direction")
}

}
//turnLeft(rover);

function turnRight(rover){
console.log("turnRight was called!");
switch(rover.direction){
  case "N":
    rover.direction = "E";
    console.log("Rover is now facing East");
    break;
  case "E":
    rover.direction = "S";
    console.log("Rover is now facing South");
    break;
  case "S":
  rover.direction = "W";
    console.log("Rover is now facing West");
    break;
  case "W":
  rover.direction = "N";
    console.log("Rover is now facing North");
    break;
  default: 
    console.log("That's not a direction");
    }
}


//turnRight(rover);
function moveForward(rover){
console.log("moveForward was called");
if (rover.x < 0 || rover.y < 0){rover.x = 0; rover.y = 0; console.log(`Start over, you fell off the board`);} 
else {
switch(rover.direction){
  case "W":
    rover.x--;
    let xYValue = console.log(rover.x + " , " + rover.y);
    break;
  case "N":
    rover.y--;
    console.log(rover.x + " , " + rover.y);
    let a = rover.x + " , " + rover.y;
    break;
  case "E":
    rover.x++;
    console.log(rover.x + " , " + rover.y);
    break;
   case "S":
    rover.y++;
  console.log(rover.x + " , " + rover.y);
    break;
  default: 
    console.log("You can't move that way");
      }
    } 
  } 

//moveForward(rover);

function commands(rover,string){
  for (let i = 0;i < string.length; i++){
let command = string[i];
switch (command) {
  case `f`: moveForward(rover);
  travelLog.push("(" + rover.x + "," + rover.y + ")")
    break; 
  case `r`:
    turnRight(rover);
    break; 
  case `l`:
    turnLeft(rover);
    break; 
  default: 
    console.log(`That's not a valid command. Try again.`)
    //break;
    }
  }
}
commands(rover, "rffrfflfrff");

console.log(travelLog);