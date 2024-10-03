import { toggleHiddenElement, changeToFunkyColor } from '../modules/function-dom.js'; //ES6 import statement
import domFunctions from '../modules/domFunctions.js'; //importing using default import from function-dom.js

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});