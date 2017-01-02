var cells = []

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(51)

  cells.push(new Cell())
  cells[0].render()
}
