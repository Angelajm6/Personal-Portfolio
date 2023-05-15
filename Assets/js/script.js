//----------My Intro-----------
// Wrap every letter in a span
var textWrapper = document.querySelector('.box-1 .title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='title'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.box-1 .title',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });