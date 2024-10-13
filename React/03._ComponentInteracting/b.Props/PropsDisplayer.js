import React from 'react'

// Information that gets passed from one component to another is known as Props 

// ----- Access a Component's props -----
    /**/


function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);
  return (
    <div>
      <h1>CHECK OUT MY PROPS OBJECT</h1>
      <h2></h2>
    </div>
  );
}

export default PropsDisplayer;