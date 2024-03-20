let movementInterval;
let isMoving = false;
// Start and Stop Element Functions
function toggleStart() {
  const startElement = document.getElementById('start');
  const stopElement = document.getElementById('stop');
  const mymemeElement = document.querySelector('.img-mymeme');
//Image Displacement Script Structure
  if (startElement && stopElement && mymemeElement) {
    startElement.disabled = true;
    stopElement.disabled = false;
    toggleImageDisplay(mymemeElement, true);
    movementInterval = setInterval(() => moveImage(mymemeElement), 400);
    isMoving = true;
  } else {
    console.error("One or more elements not found!");
  }
}
//Stop Button Elements
function toggleStop() {
  const startElement = document.getElementById('start');
  const stopElement = document.getElementById('stop');
  const mymemeElement = document.querySelector('.img-mymeme');
// if else Elements to move Image and to report failure
  if (startElement && stopElement && mymemeElement) {
    startElement.disabled = false;
    stopElement.disabled = true;
    toggleImageDisplay(mymemeElement, false);
    clearInterval(movementInterval);
    isMoving = false;
  } else {
    console.error("One or more elements not found!");
  }
}
//Toggle Image Style Display for Meme Functionality
function toggleImageDisplay(imageElement, display) {
  imageElement.style.display = display ? 'block' : 'none';
}
//Meme Style Placement, Math, and Articulation 
function moveImage(mymeme) {
  let x = Math.random() * (window.innerWidth - mymeme.clientWidth);
  let y = Math.random() * (window.innerHeight - mymeme.clientHeight);
  mymeme.style.top = y + 'px';
  mymeme.style.left = x + 'px'; 
}