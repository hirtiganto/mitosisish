var cells = []

function setup() {
  createCanvas(windowWidth,windowHeight)

  cells.push(new Cell())
  rerender()
}

function mousePressed() {
  mousePosition = createVector(mouseX,mouseY)

  for (var i = 0; i < cells.length; i++) {
    if (p5.Vector.dist(cells[i].location, mousePosition) <= cells[i].diameter / 2) {
      console.log('pressed')
      //rerender()
    }
  }
}

function rerender() {
  background(51)

  for (var i = 0; i < cells.length; i++) {
    cells[i].render()
  }
}
