let globalNum = 10;

function checkScope() {
  // let localNun = 10
  return globalNum;
}

console.log(checkScope());
// console.log(globalNum === localNun)

if (true) {
  let blockNum = 10;
}

console.log(typeof blockNum);

let score = 78;
if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 80 && score <= 89) {
  console.log("Grade: B");
} else if (score >= 70 && score <= 79) {
  console.log("Grade: C");
} else if (score >= 60 && score <= 69) {
  console.log("Grade: D");
} else if (score >= 0 && score <= 59) {
  console.log("Grade:F");
} else {
  console.log("Invalid Score");
}

let dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("The day is Sunday");
    break;
  case 2:
    console.log("The day is Monday");
    break;
  case 3:
    console.log("The day is Tuesday");
    break;
  case 4:
    console.log("The day is Wednesday");
    break;
  case 5:
    console.log("The day is Thursday");
    break;
  case 6:
    console.log("The day is Friday");
    break;
  case 7:
    console.log("The day is Saturday");
    break;

  default:
    console.log("Invalid day number. Please enter a number between 1 and 7.");
}

function numbers(a, b, c) {
  
  return a + b + c;
}

numbers(2,5,8)

function myName(string){
    
    return string
}

myName("Nikola Davkovski")

function twoNumbers(num1, num2) {
  if (num1 === num2) {
    console.log("These numbers are equal");
  } else {
    console.log("These numbers are not equal");
  }
}

twoNumbers(5, 5);

let age = 23;

if (age >= 18 && age < 21) {
  console.log("Mozes da glasas no ne i kupis alkohol");
} else if (age >= 18 && age >= 21) {
  console.log("Mozes da glasas i da kupis alkohol");
} else {
  console.log("Nemozes ni da glasas ni kupis alkohol");
}

function daysInMonth(month) {
  switch (month) {
    case "January":
      console.log("31 days");
      break;
    case "February":
      console.log("28 days");
      break;
    case "March":
      console.log("31 days");
      break;
    case "April":
      console.log("30 days");
      break;
    case "May":
      console.log("31 days");
      break;
    case "June":
      console.log("30 days");
      break;
    case "July":
      console.log("31 days");
      break;
    case "August":
      console.log("31 days");
      break;
    case "September":
      console.log("30 days");
      break;
    case "Octomber":
      console.log("31 days");
      break;
    case "November":
      console.log("30 days");
      break;
    case "December":
      console.log("31 days");
      break;

    default:
      console.log("Invalid input");
  }
}
daysInMonth("July");

let temperature = 26

if (temperature > 30){
    console.log("Надвор е жешко")
} else if (temperature > 20) {
    console.log("Надвор е топло")
} else if(temperature < 15) {
    console.log("Надвор е ладно")
} else if (temperature >= 15 && temperature <= 20){
    console.log("Надвор е умерено")
}

function fizzBuzz(number){
    if (number % 3 === 0 && number % 5 != 0) {
        console.log("Fizz")
    } else if(number % 5 === 0 && number % 3 != 0){
        console.log("Buzz")
    } else if(number % 3 === 0 && number % 5 === 0){
        console.log("FizzBuzz")
    } else {
        console.log(number)
    }
}

fizzBuzz(15)
