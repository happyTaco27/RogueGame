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
  map();
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
