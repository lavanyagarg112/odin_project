const container = document.querySelector("#container");

const para = document.createElement('p'); // red text that says Hey I'm red!
para.style.color = "red";

para.textContent = "Hey I am red!";

container.appendChild(para);
