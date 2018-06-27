const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  window.addEventListener('keydown', () => alert("oi"));
  // alert("sadasd");
}

// Keep track of index outside of the event handler.
let index = 0;

function onKeyDownHandler(e) {
  alert("test");
  const key = e.key;
  console.log(key, index);
  console.log("CODE LENGTH: ", codes.length)
  if (key === codes[index]) {
    // index++;
    if (index++ === codes.length - 1) {
      console.log("I got the message");
      index = 0;
      alert("You did it!");
    }
  } else {
    index = 0;
  }
  e.preventDefault();
}

init();
