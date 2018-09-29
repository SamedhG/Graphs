class Controller {

  constructor() {}

  go(){
    let g = new Graph(false);
    g.addVertex(0,0,1);
    g.addVertex(1,1,3);
    g.addVertex(2,2,4);
    g.addVertex(3,1,5);
    g.addVertex(4,2,4);
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(2,3);
    g.addEdge(2,4);
    g.addEdge(1,3);
    let a = new DFS(g, g.vertices[0], 3);
    while(a.hasNext()){
      a.step();
    }
  }
}
