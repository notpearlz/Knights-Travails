import Graph from "./modules/graph.js";

const board = new Graph();
board.printGraph();
console.log(
  "________________________________________________________________________________\n"
);
board.setRandomNode("x");
board.printGraph();
