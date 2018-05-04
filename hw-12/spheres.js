function Sphere(x, y, r) {
  // contructor I used both your method and Shiffman's.
  this.x = x;
  this.y = y;
  this.r = r;
  // I still dig the random color deal.
  this.col = color(random(), random(0), random(255), 20);
    this.colOr = color(random(50), random(50), random(50), 15);
    this.coLor = color(random(255), random(255), random(255), 35);
    // You had a good method for moving things
    this.deltaX = random(-25, 25);
    this.deltaY = random(-25, 25 );

  this.colorShift = function() {
 this.col = this.colOr;
        // This is my collider, when they meet they bounce off eachother.
        this.x += random(17, -7);
        this.y += random(17, -7);
  }
  // The show function allowing the various shapes to be called later.
  this.show = function() {
    stroke(this.coLor);
    fill(this.col);
    // putting a few shapes together
      ellipse(this.x, this.y, this.r * 4);
      stroke(this.coLor);
      rect(this.x, this.y, random(13, 53), random(13, 53));
      rectMode(CENTER);
      stroke(this.coLor, 45);
      //Pink Floyding it with the funky triangle.
      triangle(this.x, this.y, width/2, height /2, width /2, height /2);
  }
 // True or False statement to check for collsion of objects.
  this.collision = function(alternate) {
    var d = dist(this.x, this.y, alternate.x, alternate.y);
    if (d < this.r + alternate.r) {
      return true;
    } else {
      return false;
    }
  }
  // setting it in motion.
  this.motion = function() {
    this.x += this.deltaX;
      this.y += this.deltaY;
  }



// setting the boundary edges.
  this.reversal = function() {
      if(this.x + this.r >= width || this.x - this.r <= 0) {
        // I want this to decay instead of be a constant
        this.deltaX *= -1.9;
      }
      if(this.y + this.r >= height || this.y - this.r <= 0) {
          this.deltaY *= -1.9;
     }
  }
}
