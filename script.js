"use strict";
const notetxt = document.getElementById("note");
const addNoteButton = document.getElementById("btn");
const noteDiv = document.querySelector(".notes-div");
let noteNum = 0;

function createNote() {
  const notedata = notetxt.value;
  noteNum += 1;
  noteDiv.insertAdjacentHTML(
    "beforeend",
    " <div class= 'note-container'>     <h2 >Note <span class=notecount> </span></h2> <p class='my-note'> </p>  <button class = 'view-note'> View Detail </button>  </div>"
  );
  const notePara = document.querySelectorAll(".my-note");
  const notecount = document.querySelectorAll(".notecount");
  notePara.forEach((note) => {
    if (note.textContent == false) {
      note.insertAdjacentText("beforeend", notedata);
    }
  });
  notecount.forEach((count) => {
    if (count.textContent == false) {
      count.insertAdjacentText("beforeend", noteNum);
    }
  });
}

addNoteButton.addEventListener("click", () => {
  if (notetxt.value == false) {
    alert("Please insert the note");
  } else {
    createNote();
  }
});
noteDiv.addEventListener("click", (e) => {
  if (e.target.className === "view-note") {
    e.composedPath().forEach((ele) => {
      if (ele.className !== "note-container") {
      } else {
        ele.classList.add("check-note");
      }
    });
    // e.target.classList.add("check-note");
  }
});
