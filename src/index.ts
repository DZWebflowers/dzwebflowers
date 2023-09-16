import { initializeCardAnimation } from 'src/cards/Cards';

const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = '../src/index.css';

document.head.appendChild(linkElement);

initializeCardAnimation();
