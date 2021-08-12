import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

class Game {
  constructor() {
    console.log("Game Created");
  }

  start() {
    console.log("Game Started");
  }
}

const game = new Game();

game.start();

// Todos:
//  [x] Create Box Class
//  [x] Create Board Class
//  [ ] Create instance variable for both classes

// Code below here
class Box {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.value = value;
  }

  print() {
    let x = this.x,
      y = this.y,
      v = this.value;
    console.log(`x:${x} y:${y} v:${v}`);
  }
}

class Board {
  constructor() {
    console.log("Board Created");
    // @todo: create list here
    // @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#creating_a_two-dimensional_array
    this.data = [
      [0, 0, 0, 0], // 0 -> box
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
  }

  // @todo: create print method here
  print() {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data.length; j++) {
        // console.log(??)
      }
    }
  }
}

const box = new Box(1, 2, 3);
box.print();

const board = new Board();
