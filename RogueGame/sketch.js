let characterXPos;
let characterYPos;
let map;
let interact;
let cols,rows,size,grid;


function setup() {
  createCanvas(windowWidth,windowHeight);
  map= new TheGrid();
}
class TheGrid {
  //making the map
  constructor() {
    this.cols=8;
    this.rows=8;
    if(width<height){
      this.size=width/rows;
    }
    else{
      this.size=height/cols;
    }
    this.grid;
    this.posX;
    this.posy;
  }
  emptyGrid(cols,rows){
    let mapGrid = [];
    for (let x=0; x<cols; x++) {
      mapGrid.push([]);
      for (let y=0; y<rows; y++) {
        mapGrid[x].push(0);
      }
    }
    return mapGrid;
  }
  display(){
    for (let x=0; x<cols; x++) {
      for (let y=0; y<rows; y++) {
        rect(x*size, y*size, size, size);
      }
    }
  }
}
function keyPressed(){
  //probably best if we do mouse click for movment
  // if (key === "w" || key === "W"){
  //   characterX += 5;
  // }
  // else if (key === "s" || key === "S"){
  //   characterX -= 5;
  // }
  // else if (key === "a" || key === "D"){
  //   characterY += 5;
  // }
  // else if (key === "d" || key === "D"){
  //   characterY -= 5;
  // }
  if (key === "m" || key === "M"){
    map = true;
  }
  else if (key === "f" || key === "F"){
    interact = true;
  }
}
// class Player {
//   constructor(x,y) {
//     this.x;
//     this.y;
//     this.pos;
//   }
//   // movePlayer()  {
//   //   if(mouseIsPressed){
//   //     let  = floor(mouseX / size);
//   //     let ycoord = floor(mouseY / size);
//   //
//   //     if (grid[xcoord][ycoord] === 1) {
//   //       grid[xcoord][ycoord] = 0;
//   //     }
//   //     else {
//   //       grid[xcoord][ycoord] = 1;
//   //     }
//   //   }
//   // }
//   displayPlayer()  {
//   }
// }
