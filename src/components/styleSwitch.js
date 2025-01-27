import React from 'react';

// Get the current page path
const currentPath = window.location.pathname;


if (currentPath === '/home') 
{
  document.body.style.backgroundImage = 'url("home-background.jpg")';
  document.getElementById('icon').src = 'home-icon.png';
  
} 
else if (currentPath === '/about') 
{
  document.body.style.backgroundImage = 'url("about-background.jpg")';
  document.getElementById('icon').src = 'about-icon.png';

} else if (currentPath === '/contact') 
{
  document.body.style.backgroundImage = 'url("contact-background.jpg")';
  document.getElementById('icon').src = 'contact-icon.png';
}
