let cols, rows;
let w = 50;
let grid = [];
let current;
let stack = [];


function setup() {
  let canvas1 = createCanvas(600, 500);
  canvas1.position(0,0);
  cols = floor(width / w);
  rows = floor(height / w);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
        grid.push(cell);
    }
  }
    current = grid[0];
}

function draw() {
  background(154, 187, 192);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();
  // STEP 1
  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;

    // STEP 2
    stack.push(current);

    // STEP 3
    removeWalls(current, next);

    // STEP 4
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
  if (keyIsPressed === true) {
    keyPressed();
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    positionX = positionX - 1;
    fill(255, 255, 255);
    rect(positionX, positionY, w, w);
  } else if(keyCode === RIGHT_ARROW){
    positionX = positionX + 1;
    fill(255, 255, 255);
    rect(positionX, positionY, w, w);
  } else if(keyCode === UP_ARROW){
    positionY = positionY - 1
    fill(255, 255, 255);
    rect(positionX, positionY, w, w);
  } else if(keyCode === DOWN_ARROW){
    positionY = positionY + 1
    fill(255, 255, 255);
    rect(positionX, positionY, w, w);
  }
}



}
