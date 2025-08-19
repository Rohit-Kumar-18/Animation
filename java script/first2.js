let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + "from apna college students";

let divs = document.querySelectorAll(".box");
for (let i = 0; i < divs.length; i++) {
  divs[i].innerText = "Box " + (i + 1);
}