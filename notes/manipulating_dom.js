const container = document.querySelector('#container');

const content = document.createElement('p');

content.textContent = "Hey I'm red!"
content.style.color = 'red';

container.appendChild(content)

const moreContent = document.createElement('h3');

moreContent.textContent = "I'm a blue h3!";
moreContent.style.color = 'blue';

container.appendChild(moreContent);

const divContainer = document.createElement('div');

divContainer.setAttribute('style', 'background: pink; border: solid');

const title = document.createElement('h1');
title.textContent = "I'm in a div";

const divContent = document.createElement('p');
divContent.textContent = "ME TOO!";

divContainer.appendChild(title);
divContainer.appendChild(divContent);

container.appendChild(divContainer);
