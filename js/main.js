const { func } = require("assert-plus");

const sitemapEl = document.querySelector('header .menu > .item > .item__name');
const closedEl = document.querySelector('.closed');

sitemapEl.addEventListener('click', toggleBtn);

function toggleBtn() {
  if(closedEl.style.display == 'none') {
    closedEl.style.display = 'block';
  } 
  else {
    closedEl.style.display = 'none';
  }
};
