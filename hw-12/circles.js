function Circle(x, y, r) {
  //Constructor using Shiffman's method.
  this.x = x;
  this.y = y;
  this.r = r;
  // All the random colors
  this.col = color(random (0), (0), (255), 60);
    this.colOr = color(0);
    this.coLor = color(random(255), random(255), random(255));
    this.deltaX = random(-5, 500);
    this.deltaY = random(-5, 500 );
  //Changing colors if a collision occurs
  this.colorShift = function() {
 this.col = this.colOr;
        // Bouncing off eachother in a collision.
        // These guys are so small I haven't seen many collisions
        this.x += random(7, -7);
        this.y += random(7, -7);
  }


  // Show function shapes can be called later.
  this.show = function() {
     noStroke();
     fill(this.coLor, 80);
     ellipse(this.x, this.y, this.r);
     }
  // Same formula as in the spheres class.
  this.collision = function(alternate) {
    var d = dist(this.x, this.y, alternate.x, alternate.y);
    if (d < this.r + alternate.r) {
      return true;
    } else {
      return false;
    }
  }
  // Your motion method.
  this.motion = function() {
    this.x += this.deltaX;
      this.y += this.deltaY;
  }

  // Have you ever had a bouncin biscuit?
  this.reversal = function() {
      if(this.x + this.r >= width || this.x - this.r <= 0) {
        //let it have a constant this time, kind of resemble stars.
        this.deltaX *= -1;
      }
      if(this.y + this.r >= height || this.y - this.r <= 0) {
          this.deltaY *= -1;
      }
  }
}
