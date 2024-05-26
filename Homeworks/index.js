// Задача 1

let = printFUnc = (seconds) => {
  let timer = seconds * 1000;

  if (typeof seconds != "number") {
    console.log("Please enter number");
  } else if (seconds > 9) {
    console.log("Please enter one digit number");
  } else {
    setTimeout(() => {
      console.log("Coding is not hard!");
    }, timer);
  }
};
printFUnc(3);

// Задача 2 ****
function myPromise(percentage) {
  return new Promise((resolve, reject) => {
    if (percentage > 60) {
      resolve("You passed the test");
    } else {
      reject("You failed the test");
    }
  });
}

myPromise(69)
  .then(function testPassed(result) {
    console.log(result);
  })
  .catch(function testFailed(fail) {
    console.log(fail);
  });

async function asyncFunc(percentage) {
  try {
    const user = await myPromise(percentage);
    console.log(user);
  } catch (error) {
    console.log("You failed the test");
  }
}

asyncFunc(67);

// Задача 3

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("This number is even");
    } else {
      reject("This number is odd");
    }
  });
}

checkNumber(6)
  .then(function handleSuccess(message) {
    console.log(message);
  })
  .catch(function handleError(error) {
    console.log(error);
  });

// Задача 4

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        age: 30,
        email: "john@example.com",
      });
    }, 2000);
  });
}

async function displayUserDetails() {
  try {
    const user = await fetchData();
    console.log(user);
  } catch (error) {
    console.log("Something went wrong!");
  }
}

displayUserDetails();

// Задача 5

// function countdown (seconds)  {
//     let counter = seconds

//     const interval = setInterval(() => {
//         console.log(counter);
//     counter--

//     if (counter === 0) {
//         clearInterval(interval)
//         console.log("Countdown completed")
//     }

// }, 1000)

// }

// countdown(7)
