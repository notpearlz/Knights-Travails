import Node from "./node.js";
import Knight from "./knight.js";

export default class Graph {
  //Adjacency Matrix Graph
  constructor() {
    this.rows = 8;
    this.cols = 8;

    this.graph = this.createGraph(this.rows, this.cols);
    this.setRandomNode(new Knight());
    this.printGraph();
  }

  knightMoves(row, col, newRow, newCol) {}

  setRandomNode(newVal) {
    const randRow = Math.floor(Math.random() * this.rows);
    const randCol = Math.floor(Math.random() * this.cols);

    this.setNode(randRow, randCol, newVal);
  }
  setNode(row, col, newVal) {
    this.graph[row][col].val = newVal;
  }

  createGraph(rows, cols) {
    const newGraph = [];

    for (let i = 0; i < rows; i++) {
      newGraph[i] = [];
      for (let j = 0; j < cols; j++) {
        const newNode = new Node(i, j);
        newGraph[i][j] = newNode;
      }
    }
    return newGraph;
  }

  printGraph() {
    for (let i = 0; i < this.rows; i++) {
      var temp = "";
      for (let j = 0; j < this.cols; j++) {
        const node = this.graph[i][j].val;
        if (node == null) {
          temp += "[ ]";
        } else if (typeof node == "object") {
          if (node.name == "knight") {
            if (node.color == "white") {
              temp += `[♞]`;
            } else if (node.color == "black") {
              temp += `[♘]`;
            }
          }
        }
      }
      console.log(temp);
    }
  }
}
