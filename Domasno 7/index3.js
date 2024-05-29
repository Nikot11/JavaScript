const firstLight = document.getElementsByClassName("light")[0];
const secondLight = document.getElementsByClassName("light")[1];
const thirdLight = document.getElementsByClassName("light")[2];

function changeLightColor(event) {
  if (event.key === "r") {
    firstLight.style.backgroundColor = "red";
  } else {
    firstLight.style.backgroundColor = "gray";
  }
  if (event.key === "o") {
    secondLight.style.backgroundColor = "orange";
  } else {
    secondLight.style.backgroundColor = "gray";
  }
  if (event.key === "g") {
    thirdLight.style.backgroundColor = "green";
  } else {
    thirdLight.style.backgroundColor = "gray";
  }
}

document.addEventListener("keydown", changeLightColor);
