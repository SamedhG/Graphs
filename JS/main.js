// Canvas
function start(){
  // Radius of the vertices
  const radius = 30;
  // width of the main grid
  let x = document.getElementById("picture").getBoundingClientRect().width;
  // height of the main grid
  let y = document.getElementById("picture").getBoundingClientRect().height;
  var app = new PIXI.Application(x, y);

  document.getElementById("picture").appendChild(app.view);

  var graphics = new PIXI.Graphics();

  graph.draw(graphics);


  app.stage.addChild(graphics);
}
