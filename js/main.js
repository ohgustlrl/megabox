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

const likeBtn1 = document.querySelector('.like_1');
const likeBtn2 = document.querySelector('.like_2');
const likeBtn3 = document.querySelector('.like_3');
const likeBtn4 = document.querySelector('.like_4');

likeBtn1.addEventListener("click", () => {
  const likeScore1 = document.querySelector('.result1');
  let number1 = parseInt(likeScore1.innerText);
  likeScore1.innerText = String(++number1);
})
likeBtn2.addEventListener("click", () => {
  const likeScore2 = document.querySelector('.result2');
  let number2 = parseInt(likeScore2.innerText);
  likeScore2.innerText = String(++number2);
})
likeBtn3.addEventListener("click", () => {
  const likeScore3 = document.querySelector('.result3');
  let number3 = parseInt(likeScore3.innerText);
  likeScore3.innerText = String(++number3);
})
likeBtn4.addEventListener("click", () => {
  const likeScore4 = document.querySelector('.result4');
  let number4 = parseInt(likeScore4.innerText);
  likeScore4.innerText = String(++number4);
})