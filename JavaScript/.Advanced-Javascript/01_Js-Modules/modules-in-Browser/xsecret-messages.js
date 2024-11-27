/* ES6 Import Syntax */
import { changeToFunkyBg, changeToFunkycolor } from "./script.js";
import importedResources from './module.js';	//imports default or all function stored in an object,  from another file

import { greet as greetEspanol } from './greetEsp.js';	//this helps differenciate two function of the same name, from one another
import { greet as greetEnglish } from './greetEng.js';





const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

const clickedBtn = document.querySelector('#secret-btn');
const imgElement = document.querySelector('#secret-img');

/* function for the img */
function showHiddenImg(paramImg) {
	if (paramImg.style.visibility === 'hidden'){
		paramImg.style.visibility = 'visible';
	}
	else {
		paramImg.style.visibility = 'hidden';
	}
}

clickedBtn.addEventListener('click', () => showHiddenImg(imgElement));

/* function for the txt */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});




/* ES6 Named Export Syntax */
export { showHiddenImg, toggleHiddenElement}; 

	/* -others- 
	const toBeExported = {
	changeToFunkyBg,
	changeToFunkyColor
  }
  
	export default toBeExported;  //combines all function into one file and export it

	export default changeToFunkyColor;	//	useful when export just one function

	export default {changeToFunkyColor, .....};	 // export multipree specific functions
	*/
