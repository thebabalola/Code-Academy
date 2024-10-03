import React from 'react';

// ----- Returning Another Component ------
		// (As we’ve seen before, each React component is responsible for one piece of the interface)

		function PurchaseButton() {
			return <button onClick={()=>{alert("Purchase Complete")}}>Purchase</button>
		  }  /* components that return  JSX element */

		  function ItemBox() {
			return (
			  <div>
				<h1>50% Sale</h1>
				<h2>Item: Small Shirt</h2>
				<PurchaseButton />
			  </div>
			);
		  } /*However, you can have components interact with each other by passing information or even returning other components.*/


		  export default ItemBox;