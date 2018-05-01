//this is for testing
let rows = 6;
let cols = 6;
let grid;
let cellSize;
let xcoord=[];
let ycoord=[];
let player;
let gridState;
function preload(){
  
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  cellSize = height / cols;
  gridState=1;
  //map is inverted
  grid=[
    [0,0,0,0,0,0],
    [0,1,1,1,1,0],
    [0,1,5,1,1,0],
    [2,3,1,1,1,0],
    [4,2,3,1,1,0],
    [4,4,2,0,0,0],
  ];
}
function draw() {
  background(255);
  displayGrid();

}
//Leave this, it's isnt working
// class Map {
//   constructor() {
//     this.rows=6;
//     this.cols=6;
//     this.grid;
//     this.cellSize;
//     this.playSize=width-500;
//   }
//   displayGrid(){
//     for (let x=0; x<cols; x++) {
//       for (let y=0; y<rows; y++) {
//         if (grid[x][y] === 0) {
//           fill(255);
//         }
//         else {
//           fill(0);
//         }
//         rect(x*cellSize, y*cellSize, cellSize, cellSize);
//       }
//     }
//   }
// }
function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      else if(grid[x][y] ===1) {
        fill(175);
      }
      else if (grid[x][y] === 2) {
        fill(255);
      }
      else if (grid[x][y] === 3) {
        fill(255);
      }
      else if (grid[x][y] === 4) {
        fill(255);
      }
      else if (grid[x][y]===5){
        player=true;
        fill(0,255,0);
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function mousePressed() {
//testing position
  xcoord = floor(mouseX / cellSize);
  ycoord = floor(mouseY / cellSize);
  let currentPos=[];
  let priorPos=[];
  //Prior player pos removal from grid
  for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
      if(grid[i][j]===5){
        grid[i][j]=1;
      }
    }
  }
  //changing players pos
  if (mouseIsPressed&&grid[xcoord][ycoord]===1){
    if(grid[xcoord][ycoord]!==5){
      print("x:",xcoord," y:",ycoord," and state: ",grid[xcoord][ycoord]);
      grid[xcoord][ycoord]=5;

    }
  }
}
//maybe???
// function moveCheck(){
//   for(let i=0;i<2;i++){
//     for(let j=0;j<2;j++){
//       if(grid[xcoord][ycoord]!==)
//     }
//   }
// }
