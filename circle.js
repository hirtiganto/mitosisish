function Circle(loc, d) {
  this.location = createCanvas(width / 2,height / 2) || loc
  this.diameter = height || d

  this.color = {
    r: random(50,225),
    g: random(50,225),
    b: random(50,225),
    a: 50
  }

  this.render = function () {
    noStroke()
    fill(this.color.r,this.color.g,this.color.b,this.color.a)
    ellipse(this.location.x,this.location.y,this.diameter,this.diameter)
  }
}
