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
      splitCell(i)
      rerender()
      break
    }
  }
}

function rerender() {
  background(51)

  for (var i = 0; i < cells.length; i++) {
    cells[i].render()
  }
}

function splitCell(index) {
  var baseLocation = cells[index].location.copy()
  var newDiameter = cells[index].diameter / 2
  var offset = cells[index].diameter / 4

  cells.splice(index, 1)

  var newLocations = []
  for (var i = 0; i < 4; i++){
    newLocations.push(baseLocation.copy())
  }

  // left up
  newLocations[0].x -= offset
  newLocations[0].y -= offset

  // right up
  newLocations[1].x += offset
  newLocations[1].y -= offset

  // right down
  newLocations[2].x += offset
  newLocations[2].y += offset

  // left down
  newLocations[3].x -= offset
  newLocations[3].y += offset

  for (var i = 0; i < newLocations.length; i++){
    cells.push(new Cell(newLocations[i], newDiameter))
  }
}
