// Outputting various data types to the console.log
// Numbers value

for(var num = 1; num < 5; num ++) {
  if(num > 2)
    break;
}
console.log(num);

// String Value


var a = "Hello";
var b = " World!!";
  console.log(a + b);

// Boolean Value

for(var num = 1; num > 100; num --) {
  if(num < 99)
    break;
}
  console.log(num == 1);

 //Pyramid  exercise utilizing while statement.


var line = "#";
  while(line.length < 11) {
    console.log(line);
      line += "#"
}



// FizzBuzz utulizing While statement

var num = 0;
while(num < 100) {
  num ++ ;
  var result = "";
    if (num % 3 == 0)
      result += "Fizz";
    if (num % 5 == 0)
      result += "Buzz";
 console.log(result || num);
}
