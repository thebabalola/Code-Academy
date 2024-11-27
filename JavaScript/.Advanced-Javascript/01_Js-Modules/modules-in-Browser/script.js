/* --- Understanding ES6 Export and Import */

// --- Imports ---
import {showHiddenImg, toggleHiddenElement} from './xsecret-messages.js';



// --- Exports ---

export const changeToFunkyBg = (imgElement) => {
	// logic omitted...  -This pattern exports the function directly
  }

 
const changeToFunkyColor = (domElement) => {
	const r = Math.random() * 255;
	const g = Math.random() * 255;
	const b = Math.random() * 255;
		  
	domElement.style.background = `rgb(${r}, ${g}, ${b})`;
  }


//OR
const toBeExported = {
	changeToFunkyBg,
	changeToFunkyColor
  }
  
export default toBeExported;
// export default changeToFunkyColor;	//	useful when export just one function
// export default {changeToFunkyColor, .....};	|	useful when you are exportiung more than one function