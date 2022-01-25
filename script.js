// Bring down the boxes

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

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
