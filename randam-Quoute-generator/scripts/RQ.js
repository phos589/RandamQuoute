import { quoutes } from "./quautes.js";

function pickQuoute(arr) {
    const newQuoute = Math.floor(Math.random() * arr.length);
    return arr[newQuoute];
  }

const text = document.querySelector('.text');
document.querySelector('.but').addEventListener('click', function() {
  const newQuoute = pickQuoute(quoutes);
  text.textContent = newQuoute;
});