// A very simple program that picks a random color from a list.

function getRandomColor() {
    const colors = ["red", "green", "blue", "yellow", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  const randomColor = getRandomColor();
  console.log("The random color is: " + randomColor);