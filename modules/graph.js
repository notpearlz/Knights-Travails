import Node from "./node.js";

export default class Graph {
  //Adjacency Matrix Graph
  constructor() {
    this.graphRows = 8;
    this.graphCols = 8;

    this.graph = this.createGraph(this.graphRows, this.graphCols);
  }

  createGraph(rows, cols) {
    const newGraph = [];

    for (let i = 0; i <= rows; i++) {
        newGraph[i] = [];
      for (let j = 0; j <= cols; j++) {
        const newNode = new Node(j);
        newGraph[i][j] = newNode;
      }
    }
    console.log(newGraph);
    return newGraph;
  }

  printGraph(){
    
  }
}
