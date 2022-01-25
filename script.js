// Bring down the boxes

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Add the event for the filled box
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Add the events for the empty boxes
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  //   console.log("drag start");
  this.className += " hold";
  // To clear the box when it's grabbed
  setTimeout(() => {
    this.className = "invinsible";
  }, 0);
}

function dragEnd() {
  //   console.log("drag end");
  this.className = "fill";
}

function dragDrop() {
  //   console.log("drag drop");
  this.className = "empty";
  this.append(fill);
}

function dragOver(e) {
  //   console.log("drag over");
  e.preventDefault();
}

function dragEnter(e) {
  //   console.log("drag enter");
  e.preventDefault();
  // To make the hovered box darker
  this.className += " hovered";
}

function dragLeave() {
  //   console.log("drag leave");
  this.className = "empty";
}
