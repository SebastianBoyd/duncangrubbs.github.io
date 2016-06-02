var totalHeight;

var heightOne = Math.floor((Math.random() * 400) + 1);
var heightTwo = Math.floor((Math.random() * 400) + 1);
var heightThree = Math.floor((Math.random() * 400) + 1);
var heightFour = Math.floor((Math.random() * 400) + 1);

function addListeners() {
  var $blockOne = document.querySelector('.block-one');
  var $blockTwo = document.querySelector('.block-two');
  var $blockThree = document.querySelector('.block-three');
  var $blockFour = document.querySelector('.block-four');

  var $blockOneBottom = document.querySelector('.block-one--bottom');
  var $blockOneTop = document.querySelector('.block-one--top');

  var $blockTwoBottom = document.querySelector('.block-two--bottom');
  var $blockTwoTop = document.querySelector('.block-two--top');

  var $blockThreeBottom = document.querySelector('.block-three--bottom');
  var $blockThreeTop = document.querySelector('.block-three--top');

  var $blockFourBottom = document.querySelector('.block-four--bottom');
  var $blockFourTop = document.querySelector('.block-four--top');

  $blockOne.style.height = heightOne;
  $blockTwo.style.height = heightTwo;
  $blockThree.style.height = heightThree;
  $blockFour.style.height = heightFour;

  if (window.addEventListener) {
    $blockOneBottom.addEventListener('mouseover', subtractOne, false);
    $blockOneTop.addEventListener('mouseover', addOne, false);

    $blockTwoBottom.addEventListener('mouseover', subtractTwo, false);
    $blockTwoTop.addEventListener('mouseover', addTwo, false);

    $blockThreeBottom.addEventListener('mouseover', subtractThree, false);
    $blockThreeTop.addEventListener('mouseover', addThree, false);

    $blockFourBottom.addEventListener('mouseover', subtractFour, false);
    $blockFourTop.addEventListener('mouseover', addFour, false);
  } else {
    console.log('RIP');
  }

  function addOne() {
    heightOne = heightOne + 10;
    var temp = heightOne.toString();
    $blockOneTop.style.height = temp + 'px';
    $blockOneBottom.style.height = temp + 'px';
  }

  function addTwo() {
    heightTwo = heightTwo + 10;
    var temp = heightTwo.toString();
    $blockTwoTop.style.height = temp + 'px';
    $blockTwoBottom.style.height = temp + 'px';
  }

  function addThree() {
    heightThree = heightThree + 10;
    var temp = heightThree.toString();
    $blockThreeTop.style.height = temp + 'px';
    $blockThreeBottom.style.height = temp + 'px';
  }

  function addFour() {
    heightFour = heightFour + 10;
    var temp = heightFour.toString();
    $blockFourTop.style.height = temp + 'px';
    $blockFourBottom.style.height = temp + 'px';
  }

  function subtractOne() {
    heightOne = heightOne - 10;
    var temp = heightOne.toString();
    $blockOneTop.style.height = temp + 'px';
    $blockOneBottom.style.height = temp + 'px';
  }

  function subtractTwo() {
    heightTwo = heightTwo - 10;
    var temp = heightTwo.toString();
    $blockTwoTop.style.height = temp + 'px';
    $blockTwoBottom.style.height = temp + 'px';
  }

  function subtractThree() {
    heightThree = heightThree - 10;
    var temp = heightThree.toString();
    $blockThreeTop.style.height = temp + 'px';
    $blockThreeBottom.style.height = temp + 'px';
  }

  function subtractFour() {
    heightFour = heightFour - 10;
    var temp = heightFour.toString();
    $blockFourTop.style.height = temp + 'px';
    $blockFourBottom.style.height = temp + 'px';
  }

}

window.onload = addListeners;
