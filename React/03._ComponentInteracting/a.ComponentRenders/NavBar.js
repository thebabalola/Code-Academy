import React from 'react';

function NavBar() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
           &nbsp;{page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
}

export default NavBar;


/*
Generates: 
<a href="/home">&nbsp;home</a>
<a href="/blog">&nbsp;blog</a>
<a href="/pics">&nbsp;pics</a>
<a href="/bio">&nbsp;bio</a>
<a href="/art">&nbsp;art</a>
<a href="/shop">&nbsp;shop</a>
<a href="/about">&nbsp;about</a>
<a href="/contact">&nbsp;contact</a>
*/