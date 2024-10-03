import React from 'react';
import NavBar from './NavBar'; //imports NavBar from so as to be useable

function ProfilePage() {
  return (
    <div>
		<NavBar /> 
      <h1>All About Me!</h1>
      <p>I like movies and blah blah blah blah blah</p>
      <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
    </div>
  );
} //returns the NavBar function component

export default ProfilePage;
