const redBox = document.getElementById("red-box");
redBox.addEventListener("click", (event) => {
  console.log("You pressed the red box");
});

const greenBox = document.getElementById("green-box");
greenBox.addEventListener("click", (event) => {
  console.log("You pressed the green box");
  event.stopPropagation();
});

const blueBox = document.getElementById("blue-box");
blueBox.addEventListener("click", (event) => {
  console.log("You pressed the blue box");
  event.stopPropagation();
});
