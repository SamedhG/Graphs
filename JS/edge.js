
class Edge {

  constructor(to, weight) {
    this.to = to;
    this.weight = weight;
    this.bold = false;
  }

  toggleBold() {
    this.bold = !this.bold;
  }
}
/*
  // Draws this edge as a directed edges
  // drawDirected(PIXI.Graphics)-> void
  function drawDirected(graphics) {
    let deltaX = from.x - to.x;
    let deltaY = from.y - to.y;
    let hyp = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    // Using proportion to calculate the exact coordinate where the edge start
    // radius is a global variable
    let xOffset = (deltaX * radius / hyp);
    let yOffset = (deltaY * radius / hyp);
    let xFrom = from.x + xOffset;
    let xTo = to.x - xOffset;
    let yFrom = from.y + yOffset;
    let yTo = to.y - yOffset;

    graphics.lineStyle(3, 0x000000);
    graphics.moveTo(xFrom, yFrom);
    graphics.lineTo(xTo, yTo);

    let arrow = PIXI.Sprite.fromImage("pictures/arrowhead.png");
    arrow.anchor.set(0.5, 0.5);
    arrow.x = xTo;
    arrow.y = yTo;
    let angle = Math.asin(deltaY / hyp);
    arrow.rotation(angle);
  }

  // Draw this edge as an undirected edge
  // drawUndirected(PIXI.Graphics)-> void
  function drawUndirected(graphics) {
    let graphics = new PIXI.Graphics();
    let deltaX = from.x - to.x;
    let deltaY = from.y - to.y;
    let hyp = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    // Using proportion to calculate the exact coordinate where the edge start
    // radius is a global variable
    let xOffset = (deltaX * radius / hyp);
    let yOffset = (deltaY * radius / hyp);
    let xFrom = from.x + xOffset;
    let xTo = to.x - xOffset;
    let yFrom = from.y + yOffset;
    let yTo = to.y - yOffset;

    graphics.lineStyle(3, 0x000000);
    graphics.moveTo(xFrom, yFrom);
    graphics.lineTo(xTo, yTo);
  }
*/
