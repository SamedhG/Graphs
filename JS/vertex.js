class Vertex {

  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.edges = [];
    this.weight = 1;
    this.bold = false;
    this.tag = "";
  }

  function draw(graphics) {

  }

  // Adds the given edge to the list of edges of this Vertex
  // addEdge(Edge)-> void
  function addEdge(e) {
    this.edges.push(e);
  }
}
