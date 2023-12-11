const ulelem = document.querySelector('ul');
const inputelem = document.querySelector('input');
const buttonelem = document.querySelector('button');

function buttonclick(){
    const val = inputelem.value;
    inputelem.value = "";

    const newlst = document.createElement('li');
    const newspan = document.createElement('span');
    const newbutton = document.createElement('button');

    newlst.appendChild(newspan);
    newlst.appendChild(newbutton);

    newspan.textContent = val;
    newbutton.textContent = 'Delete';

    ulelem.appendChild(newlst);

}

buttonelem.addEventListener('click', buttonclick);
inputelem.focus();