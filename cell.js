function Cell(loc, d) {
  this.location = loc || createVector(width/2,height/2)
  this.diameter = d || height

  this.color = {
    r: random(50, 230),
    g: random(50, 230),
    b: random(50, 230),
    a: 255
  }

  this.render = function() {
    noStroke()
    fill (this.color.r, this.color.g, this.color.b, this.color.a)
    ellipse(this.location.x,this.location.y,this.diameter,this.diameter)
  }
}
