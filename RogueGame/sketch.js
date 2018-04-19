let characterX;
let characterY;
let openMap;
let interact;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function keyPressed(){
  if (key === "w" || key === "W"){
    characterX += 5;
  }
  else if (key === "s" || key === "S"){
    characterX -= 5;
  }
  else if (key === "a" || key === "D"){
    characterY += 5;
  }
  else if (key === "d" || key === "D"){
    characterY -= 5;
  }
  else if (key === "m" || key === "M"){
    openMap = true;
  }
  else if (key === "f" || key === "F"){
    interact = true;
  }
}
