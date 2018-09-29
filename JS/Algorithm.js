class Algorithm {
  constructor(){
    if(this.constructor === Algorithm){
      throw new TypeError("Cant instantiate the abstract class");
    }
    if(this.hasNext === undefined){
      throw new TypeError("must implement hasNext");
    }
    if(this.step === undefined){
      throw new TypeError("must implement step");
    }
  }
}

class DFS extends Algorithm {
  constructor(g, startVertex,search) {
    super();
    this.graph = g;
    this.stack = [startVertex];
    this.visited = [];
    this.toSearch = search;
    this.found = false;
  }

  hasNext(){
    return !this.found && this.stack.length !== 0;
  }

  step(){
    let currVertex = this.stack.pop();
    this.visited.push(currVertex);
    currVertex.toggleBold();
    if(currVertex.id === this.toSearch){
      this.found = true;
      return true;
    }
    let vertices = currVertex.edges.map((e) => {return e.to;});
    for(let v of vertices){
      if(!this.visited.includes(v)){
        this.stack.push(v);
      }
    }
  }
}
