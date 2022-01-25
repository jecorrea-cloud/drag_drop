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
  console.log("drag start");
}

function dragEnd() {
  console.log("drag end");
}

function dragOver(e) {
  console.log("drag over");
}

function dragEnter(e) {
  console.log("drag enter");
}

function dragLeave() {
  console.log("drag leave");
}

function dragDrop() {
  console.log("drag drop");
}
