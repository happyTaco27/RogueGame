let player1, player2, player3, player4, player5, player6, player7, player8;
let characterXPos;
let characterYPos;
let interact;
let cols,rows,size,grid;
size=200;
let theMap=[
  [0,0,0,0,0,0],
  [0,1,1,1,1,0],
  [0,1,1,1,1,0],
  [2,3,1,1,1,0],
  [4,2,3,1,1,0],
  [4,4,2,0,0,0],
];

function preload(){
  player1 = loadImage("images/armor move-1.png");
  player2 = loadImage("images/armor move-2.png");
  player3 = loadImage("images/armor move-3.png");
  player4 = loadImage("images/armor move-4.png");
  player5 = loadImage("images/armor move-5.png");
  player6 = loadImage("images/armor move-6.png");
  player7 = loadImage("images/armor move-7.png");
  player8 = loadImage("images/armor move-8.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}
function map()  {
  for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
      if(theMap[i][j]===0){
        fill(0);
        rect(i*size,j*size,size,size);
      }
      else{
        fill(255);
        rect(i*size,j*size,size,size);
      }
    }
  }

}
function draw(){
  background(255);

  // map();
}
class TheGrid {
  //making the map
  constructor() {
    this.cols=6;
    this.rows=6;
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
      mapGrid.push([0]);
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
//movement -Michael
function playerSpriteAnimation(){
mo
}
