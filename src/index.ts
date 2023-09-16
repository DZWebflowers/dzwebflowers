import { initializeCardAnimation } from 'src/cards/Cards';
import { values } from 'src/Values';

const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = '../src/index.css';

document.head.appendChild(linkElement);

initializeCardAnimation();
values();
