const container = document.querySelector('#container');

let p = document.createElement('p');

p.textContent = "Hey I'm Red!";
p.style.color = "red";

container.appendChild(p);

let h3 = document.createElement('h3');

h3.textContent = "Hey I'm a blue h3!";
h3.style.color = 'blue';

container.appendChild(h3);

let div = document.createElement('div');

div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

container.appendChild(div);

let h1 = document.createElement('h1');

h1.textContent = "I'm in a div!";

let divP = document.createElement('p');

divP.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(divP);






