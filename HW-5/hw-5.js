/*
HW-5; Objects and Classes

Instructions: Please create solutions to the following problems.
You can include all of your answers in this single document.

In order to test your HW, I will simply copy and paste the
entirety of this document into a web console and check that
the correct output occurs.

 */





/**************************************************/
// PROBLEM 1 - Classes - Vec()
//
// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
//
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.
//
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).


// Your code here.


class Vec {
	constructor(x,y){
	this.x = x;
	this.y = y;
	}

	plus(another){
	 return new Vec(this.x + another.x, this.y + another.y);
	}
    // Plus and minus restrictions given these restrictions and also the requirements of the question how could you come up with this another way?
	minus(another){
		return new Vec(this.x - another.x, this.y - another.y);
	}

	get length(){
		return Math.sqrt((this.x * this.x ) + (this.y * this. y));
    // the only way to return the desired results.
    // 3 * 3 + 4 * 4 = 25 no other way to write this given ridiculous restriveness of one having to use the plus and minus and two writing to produce the results without the ability to change.
    // this is why this book is not very good at all.  it says here is the answer but dont copy by the way you have to give the same function calls that I demand.
    // If just say if I did not have to give the same function calls and could be required to achieve the same results maybee just maybee I could write some unique code.

	}
}

// Function Calls - DO NOT ALTER
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5


/**************************************************/
// PROBLEM 2 - Groups
//
// The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can only be part of a set once—adding it again doesn’t have any effect.
//
// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (it if was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
//
// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
//
// Give the class a static from method that takes an iteratable object as argument and creates a group that contains all the values produced by iterating over it.

class Group {
  // Your code here.
    constructor() {
  	// defining unit as an empty array
    this.unit = [];
  }

   add(val) {
    if (this.unit.includes(!val)); {
     // if the array does not include a value push  value to it.
      this.unit.push(val);
    }
  }

  delete(val) {
    this.unit = this.unit.filter(n => n !== val);
    // filter the array n => n not exactly equal to value
    //
  }

  has(val) {
    return this.unit.includes(val);
    // thanks to this text for hamstringing me on the variables again.
    // includes is a prototype search element.
  }

  static from(entirety) {
  	// Static method separating this from the class as a utility function
    let group = new Group;
    for (let value of entirety) {
      group.add(value);
    }
    return group;
  }
}

// Function Calls - DO NOT ALTER
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


/**************************************************/
// PROBLEM 3 - Retry
//
// Say you have a function primitiveMultiply that, in 20 percent of cases, multiplies two numbers, and in the other 80 percent, raises an exception of type MultiplicatorUnitFailure. Write a function ( "reliableMultiply()" ) that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.
//
// Make sure you handle only the exceptions you are trying to handle.

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2)
    return a * b;
  else
    throw new MultiplicatorUnitFailure("Klunk");
}

function reliableMultiply(a, b) {
  // Your code here.
    for (;;) {
    // I could not find this to rewrite I am going to tell you I think it means
    // for all variables.
    try {
      return primitiveMultiply(a, b);
      // https://www.w3schools.com/js/js_errors.asp
    } catch (e ) {
      // e exception
      if (!(e instanceof MultiplicatorUnitFailure))
	  // instance of operator tests whether the prototype property of a constuctor appears anywhere in the prototype chain of an object.
        throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));





/**************************************************/
// SUBMISSION
//
// When you have finished with this weeks homework, please write a readme response to the week. You should then add this directory into your git repo, sync it, and provide a link to the repo directory (1 link only), to the HW-5 Submission Forum via Moodle.
/**************************************************/
