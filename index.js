/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
*Data types
*They can storage values. 
/*
*Numbers
*Numbers are place Values/digits.
*NUmbers start from 0.
*You can use Numbers to add, subtract, multiply, and divide.
//Example//
myVar = 9 + 10;

/*
*String
*They are characters surrounded in ("" or '').
*They have acces to individual characters with bracket notation.
*They can be combined with symbols like +.
//Example
myVar name = "KIllua Zoldyck";

/*
*Boolean
*It gives a true or false values.
*
var name = Killua;
name = Gon;
return false:
/
/*Array
*You start an array with brackets.
*It can contain any data type.
var myArray = ["Killua", "Luck", "Sasuke"];

/*
*Function
*You can use functions to send a message.
//Example
function favFood() {
  console.log("pizza");
}
/*
*undefined
* when a code is undefined it means that something doesn't have a value.
//Example
var d + 1;

/*
*NaN
*You receive NaN when your value isn't a number.
var pizza - 16; //receives not a number

/*
*Infinity and -infinity
*Infinity represents positive infinity. -Infinity represents negative infinity.
//Example
var hugeNum = 2.99999999999937437387e+911,
var hugeNum = 2.99999999999937437887e+912;
console.log(hugeNum)
console.log(hugeNum) //infinity

/*
*What is the difference between primitive/simple and complex data types?
*Primitive data types are the simple data types.
Simple data types are data types like strings, booleans, and objects.
Complex data types that are made of other data types.
//Example
var myArray = ["Killua", "Luck", "Sasuke"];

/*
*Operators
*They produce the value.
//Example
var = 9 + 10;
/*
*Assignment Operators
*They give values to the variable
//Example
var = Taco;

/*
*Arithmatic Operators
*They perform arithmatic on numbers.
//Example
var 3 * 11;

/*
*Comparison Operators
*It compares two operators.
//Example
function hugeNum(myVal){
  if (myVal ==99)
  return "Equal";
}

/*
*Logical Operators
*Shows the logic between two nnumbers.
//Example
if (num < 90) {
  if (num > 180) {
    return "yes";
  }
}
return "No";

/*
*String manipulation
*It controls the string.
//Example
var sen = 'Fornite died';
var  sen2 = sen.split('2 years ago);
console.log(sen2);

/*
*With operators(+)
*Adds statements
//Example
"It is Wensday and", + "It is 2:00 "
/*
*with string methods
*Split
*Splits a string object
//Example
var sen = 'Fornite died';
var  sen2 = sen.split('2 years ago);
console.log(sen2);
/*
*Control flow
*It shows yor statement/sentence
//Example
var favAnime = "Hunter x Hunter";

if( favAnime === "Huntet x Hunter" ) {
  console.log("Is the best")
}

/*
*if
*Using the keyword if to check for a specific condition.
//Example
var favAnime = "Hunter x Hunter";

if( favAnime === "Huntet x Hunter" ) {
  console.log("Is the best")
}

/*
*Else If
*Using the keyword else if to check for a specific condition.
//Example
else if (ieat === "pizza") {
console.log("i love pizza")
}
else {}

/*
*Else
*Using the keyword else to check for a specific condition.
//Example
else(favHobby === "Skateboarding") {
  console.log("I skate when I see my cousin")
}

/*
*loops
*repeats
//Example 
for (i = 0; i < 9; i++) {
  console.log("Is mayonnaise an instrument?");
}

/*
*While
*repeats if statement is true
//Example
var myArray = [];
var a = 21;
while(a > 0) {
    myArray.push(i);
  i--;
}

/*
*for
*It works if the statement is true
//Example
for (i = 0; i < 9; i++) {
  console.log("Is mayonnaise an instrument?");
}

*Be able to loop any number of times, forward counting up to some limit, backward counting down to 0

var myArray = [];
var a = 5;
while(a < 0) {
    myArray.push(a);
  a++;
}
var myArray = [];
var i = 10;
while(i > 0) {
myArray.push(i);
  i--
}

/*
*Functions
*They accept inputs and return new data.
//Example
function greet() {
  return "Good afternoon"
}
greet()
*The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by? parameters and return statement
*What’s the difference between a function’s parameters and arguments PASSED to a function?
*Parameters are place holders for arguments that are later passed or given at call time. 
*Arguments are values given at call time.
What’s the syntax for a NAMED function? 
*the object
How do we assign a function to a variable?
*function object()
Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
*Inputs are what types are being passed and outputs are whats returning.