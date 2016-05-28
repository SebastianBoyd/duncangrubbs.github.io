var totalHeight;

var circleDimOne = 100;
var circleDimTwo = 200;
var circleDimThree = 300;
var circleDimFour = 400;

var heightOne = 600;
var heightTwo = 600;
var heightThree = 600;
var heightFour = 600;

function addListeners() {
  var $circleOne = document.querySelector('.circle-one');
  var $blockOne = document.querySelector('.block-one');
  var $circleTwo = document.querySelector('.circle-two');
  var $blockTwo = document.querySelector('.block-two');
  var $circleThree = document.querySelector('.circle-three');
  var $blockThree = document.querySelector('.block-three');
  var $circleFour = document.querySelector('.circle-four');
  var $blockFour = document.querySelector('.block-four');
  if (window.addEventListener) {
    $circleOne.addEventListener('mouseover', circleOne, false);
    $circleTwo.addEventListener('mouseover', circleTwo, false);
    $circleThree.addEventListener('mouseover', circleThree, false);
    $circleFour.addEventListener('mouseover', circleFour, false);
  } else {
    console.log('RIP');
  }

  function circleOne() {
    heightOne = heightOne - 3;
    var temp = heightOne.toString();
    $blockOne.style.height = temp + 'px';
    circleDimOne = circleDimOne - 2;
    var temp1 = circleDimOne.toString();
    $circleOne.style.height = temp1 + 'px';
    $circleOne.style.width = temp1 + 'px';
  }

  function circleTwo() {
    heightTwo = heightTwo - 3;
    var temp = heightTwo.toString();
    $blockTwo.style.height = temp + 'px';
    circleDimTwo = circleDimTwo - 2;
    var temp1 = circleDimTwo.toString();
    $circleTwo.style.height = temp1 + 'px';
    $circleTwo.style.width = temp1 + 'px';
  }

  function circleThree() {
    heightThree = heightThree - 3;
    var temp = heightThree.toString();
    $blockThree.style.height = temp + 'px';
    circleDimThree = circleDimThree - 2;
    var temp1 = circleDimThree.toString();
    $circleThree.style.height = temp1 + 'px';
    $circleThree.style.width = temp1 + 'px';
  }

  function circleFour() {
    heightFour = heightFour - 3;
    var temp = heightFour.toString();
    $blockFour.style.height = temp + 'px';
    circleDimFour = circleDimFour - 2;
    var temp1 = circleDimFour.toString();
    $circleFour.style.height = temp1 + 'px';
    $circleFour.style.width = temp1 + 'px';
  }
}

window.onload = addListeners;
