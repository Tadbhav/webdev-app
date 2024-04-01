const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray =['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];
/* Declaring the alternative text for each image file */
const altText =['pic1','pic2','pic3','pic4','pic5'];
/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
