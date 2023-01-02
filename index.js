const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") 
      moveDodgerLeft();

    if(e.key === "ArrowRight")
      moveDodgerRight();
});
function moveDodgerLeft() {
  const coordinate_px = dodger.style.left.replace("px", "");
  const coordinate = parseInt(coordinate_px, 10);

  if (coordinate > 0) {
    dodger.style.left = `${coordinate - 1}px`;
  }
}
function moveDodgerRight() {
  const frameWidth = dodger.parentElement.offsetWidth;
  const dodgerWidth = dodger.offsetWidth;
  const rightEdge = frameWidth - dodgerWidth;
  
  const coordinate_px = dodger.style.left.replace("px", "");
  const coordinate = parseInt(coordinate_px, 10);

  if (coordinate < rightEdge) {
    dodger.style.left = `${coordinate + 1}px`;
  }
}
