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
   let abc = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key
    
    abc = (codes[abc] === key) ? ++abc : 0
    
    if (abc === codes.length) {
      window.alert("Hurray!");
      abc = 0
    }
    
  });
}
