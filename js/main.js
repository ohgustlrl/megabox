const sitemapEl = document.querySelector('header .menu > .item > .item__name');
const closedEl = document.querySelector('.closed');
const submenuEl = document.querySelector('.left-main-menu ul.menu li.item:nth-child(1) > .item__contents')

// 사이트맵 메뉴 열기
sitemapEl.addEventListener('click', toggleBtn);
function toggleBtn() {
  if(closedEl.style.display == 'none') {
    closedEl.style.display = 'block';
    submenuEl.style.display = 'block';
  } 
  else {
    closedEl.style.display = 'none';
    submenuEl.style.display = 'none';
  }
}
// 사이트맵 메뉴 닫기
closedEl.addEventListener('click', toggleReset);
function toggleReset() {
  if(closedEl.style.display == 'block') {
    closedEl.style.display = 'none';
    submenuEl.style.display = 'none'
  } 
  else {
    sitemapEl.style.display = 'block';
  }
}
