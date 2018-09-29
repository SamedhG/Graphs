class Vertex {

  constructor(x, y, id, weight) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.edges = [];
    this.weight = weight;
    this.bold = false;
    this.tag = "";
  }

  // Adds the given edge to the list of edges of this Vertex
  // addEdge(Edge)-> void
  addEdge(e) {
    this.edges.push(e);
  }

  // Set the tag of this vertex to the given tag
  // setTag(tag)-> void
  setTag(tag) {
    this.tag = tag;
  }

  // Bolds or unbolds this vertex
  // toggleBold()-> void
  toggleBold() {
    this.bold = !this.bold;
  }

  // Deletes this vertex and all the edges that goes to it from this graph
  // deleteEdges()-> void
  deleteEdges() {
    for (let e of this.edges) {
      let tempVertex = e.to;
      tempVertex.deleteEdge(this);
    }
  }

  // Deletes the edge from this vertex to the given vertex.
  deleteEdge(vertex) {
    let index = this.edges.findIndex((e) => {e.to == vertex;});
    this.edges.splice(index, 1);
  }

  getEdges() {
    return this.edges.map((e) => {return [this.id, e.to.id]});
  }
}
