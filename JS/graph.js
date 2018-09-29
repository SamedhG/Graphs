class Graph {

  constructor(directed) {
    // list of vertices in this graph
    this.vertices = [];
    // is this graph directed?
    this.directed = directed;
    // id of the next vertex
    this.counter = 0;
  }

  // Takes a function (algorithm) and runs it on this graph
  // run(Algorithm)-> void
  run(a) {
    while(a.hasNext()) {
      a.apply(this);
    }
  }

  // Takes a function (algorithm) and runs 1 step of it on this graph
  // step(Algorithm)-> void
  step(a) {
    a.apply(this);
  }

  // Add an Edge into this graph given the ids if the from and to vertices and the weight
  // Throws an exception if one or both given vertices are not existent
  // addEdge(int, int, int)-> void
  addEdge(from, to, w) {
    let vFrom = this.vertices.find(this.idComparator(from));
  	let vTo = this.vertices.find(this.idComparator(to));
    if (vFrom && vTo) {
      let e = new Edge(vTo, w);
      vFrom.addEdge(e);
      if (!this.directed) {
        let e2 = new Edge(vFrom, w);
        vTo.addEdge(e2);
      }
    }
    else {
      throw "Unable to add edge: one or more vertices are not existent";
    }
  }

  //Returns a function given a number which compares its argument to the given number
  //compare(number) -> [func1(number)-> boolean]
  idComparator(id) {
    let func1 = (v) => {
      return v.id === id;
    };
    return func1;
  }

  // Add a Vertex into this graph
  // addVertex(int, int)-> void
  addVertex(x, y, weight) {
    let v = new Vertex(x, y, this.counter, weight);
    this.counter ++;
    this.vertices.push(v);
  }

  // Delete a vertex from this graph given its id
  // deleteVertex(int)-> void
  deleteVertex(id) {
    let vertex = this.vertices.find(this.idComparator(id));
    let index = this.vertices.findIndex(this.idComparator(id));
    vertex.deleteEdges();
    this.vertices.splice(index, 1);
  }

  // Deletes an edge from this graph given its two vertex ids
  // deleteEdge(int, int)-> void
  deleteEdge(id1, id2) {
    let vertex1 = this.vertices.find(this.idComparator(id1));
    let vertex2 = this.vertices.find(this.idComparator(id2));
    vertex1.deleteEdge(vertex2);
    vertex2.deleteEdge(vertex1);
  }

  // Returns the current list of vertices in the form of [id, x, y]
  // getVertices() -> Array[Array[int, int, int]]
  getVertices() {
    function func(vertex) {
      return [vertex.id, vertex.x, vertex.y, vertex.weight, vertex.bold, vertex.tag];
    }
    return this.vertices.map(func);
  }

  // Returns the current list of edges in the form of [id1, 1d2]
  // getEdges()-> Array[Array[int, int]]
  getEdges() {
    let func1 = (acc, v) => {return acc.concat(v.getEdges())}
    return this.vertices.reduce(func1, []);
  }
}
