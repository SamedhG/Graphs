class graph {

  constructor(directed) {
    // list of vertices in this graph
    this.vertices = [];
    // list of edges in this graph
    this.edges = [];
    // is this graph directed?
    this.directed = directed;
    // id of the next vertex
    this.counter = 0;
  }

  // Takes a function (algorithm) and runs it on this graph
  // run()
  function run() {}

  // Draws the graph
  // draw -> void
  function draw(graphics) {
    for (let v of this.vertices) {
      v.draw(graphics);
    }
    if (this.directed) {
      for (let e of this.edges) {
        e.drawDirected(graphics);
      }
    }
    else {
      for (let e of this.edges) {
        e.drawUndirected(graphics);
      }
    }
  }

  // Add an Edge into this graph
  // addEdge(Vertex, Vertex)-> void
  function addEdge(from, to) {
    let e = new Edge(from, to);
    from.addEdge(e);
    if (!this.directed) {
      to.addEdge(e);
    }
    this.edges.push(e);
  }

  // Add a Vertex into this graph
  // addVertex(int, int)-> void
  function addVertex(x, y) {
    let v = new Vertex(x, y, this.counter);
    this.counter ++;
    this.vertices.push(v);
  }
}
