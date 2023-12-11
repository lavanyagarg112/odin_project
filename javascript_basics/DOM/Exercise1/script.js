const container = document.querySelector("#container");

const para = document.createElement('p'); // red text that says Hey I'm red!
para.style.color = "red";

para.textContent = "Hey I am red!";

container.appendChild(para);

const head3 = document.createElement('h3');
head3.style.color = "blue";
head3.textContent = "i am a blue h3!"
container.appendChild(head3);

const parentdiv = document.createElement('div');
parentdiv.style.cssText = "background: pink; border: black;";

const childhead = document.createElement('h1');
childhead.textContent = "Im in a div";

const childpara = document.createElement('p');
childpara.textContent = "ME TOO!";

parentdiv.appendChild(childhead);
parentdiv.appendChild(childpara);

container.appendChild(parentdiv);
