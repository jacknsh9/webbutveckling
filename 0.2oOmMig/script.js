const text = "Hello user";
const target = document.getElementById("typewriter");
let index = 0;
const speed = 120; // how fast typy typy

function typeWriter() {
    if (index > text.length) {
        target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
   }
}

window.onload = typewriter;