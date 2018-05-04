//Creating two seperate arrays.
var spheres= [];
var circles=[];
// Setup function, with background and frameRate for aesthetics.
function setup() {
    createCanvas(windowWidth, windowHeight);
    background('black');
    frameRate(25);
  //populating the arrays
  for (var i = 0; i < 22 ; i++) {
    spheres[i] = new Sphere(random(width), random(height), random(13, 23));
  }
 for (var i = 0; i < 30; i++) {
    circles[i] = new Circle(random(width), random(height), random(.2, 2));
 }
}
// Declaring the draw function.
function draw() {
  //Running the test on the array to weed out the usual suspect.
  for (var i = 0; i < spheres.length; i++) {
    spheres[i].show();
    spheres[i].motion();
    spheres[i].reversal();


    for (var j = 0; j < spheres.length; j++) {
      //Testing for collision of spheres.
      if (i != j && spheres[i].collision(spheres[j])) {
       spheres[i].colorShift();
       spheres[j].colorShift();


       }
    }
}

      for (var i = 0; i < circles.length; i++) {
    circles[i].show();
    circles[i].motion();
    circles[i].reversal();


    for (var j = 0; j < circles.length; j++) {
      if (i != j && circles[i].collision(circles[j])) {
       circles[i].colorShift();
       circles[j].colorShift();


      }
    }
  }
}

// My lazy reset button but it works this time pretty well.
function mousePressed() {
 background(random (255), (255), (255));
}

function mouseReleased() {
    background(0);

}
