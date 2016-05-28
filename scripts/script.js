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
    $circleOne.addEventListener('mouseover', shapesOne, false);
    $blockOne.addEventListener('mouseover', addOne, false);

    $circleTwo.addEventListener('mouseover', shapesTwo, false);
    $blockTwo.addEventListener('mouseover', addTwo, false);

    $circleThree.addEventListener('mouseover', shapesThree, false);
    $blockThree.addEventListener('mouseover', addThree, false);

    $circleFour.addEventListener('mouseover', shapesFour, false);
    $blockFour.addEventListener('mouseover', addFour, false);
  } else {
    console.log('RIP');
  }

  function shapesOne() {
    heightOne = heightOne - 3;
    var temp = heightOne.toString();
    $blockOne.style.height = temp + 'px';
    circleDimOne = circleDimOne - 2;
    var temp1 = circleDimOne.toString();
    $circleOne.style.height = temp1 + 'px';
    $circleOne.style.width = temp1 + 'px';
  }

  function shapesTwo() {
    heightTwo = heightTwo - 3;
    var temp = heightTwo.toString();
    $blockTwo.style.height = temp + 'px';
    circleDimTwo = circleDimTwo - 2;
    var temp1 = circleDimTwo.toString();
    $circleTwo.style.height = temp1 + 'px';
    $circleTwo.style.width = temp1 + 'px';
  }

  function shapesThree() {
    heightThree = heightThree - 3;
    var temp = heightThree.toString();
    $blockThree.style.height = temp + 'px';
    circleDimThree = circleDimThree - 2;
    var temp1 = circleDimThree.toString();
    $circleThree.style.height = temp1 + 'px';
    $circleThree.style.width = temp1 + 'px';
  }

  function shapesFour() {
    heightFour = heightFour - 3;
    var temp = heightFour.toString();
    $blockFour.style.height = temp + 'px';
    circleDimFour = circleDimFour - 2;
    var temp1 = circleDimFour.toString();
    $circleFour.style.height = temp1 + 'px';
    $circleFour.style.width = temp1 + 'px';
  }

  function addOne() {
    if(heightThree < 600) {
      heightOne = heightOne + 3;
      var temp = heightOne.toString();
      $blockOne.style.height = temp + 'px';
      circleDimOne = circleDimOne + 2;
      var temp1 = circleDimOne.toString();
      $circleOne.style.height = temp1 + 'px';
      $circleOne.style.width = temp1 + 'px';
    }
  }

  function addTwo() {
    if(heightFour < 600) {
      heightTwo = heightTwo + 3;
      var temp = heightTwo.toString();
      $blockTwo.style.height = temp + 'px';
      circleDimTwo = circleDimTwo + 2;
      var temp1 = circleDimTwo.toString();
      $circleTwo.style.height = temp1 + 'px';
      $circleTwo.style.width = temp1 + 'px';
    }
  }

  function addThree() {
    if(heightOne < 600) {
      heightThree = heightThree + 3;
      var temp = heightThree.toString();
      $blockThree.style.height = temp + 'px';
      circleDimThree = circleDimThree + 2;
      var temp1 = circleDimThree.toString();
      $circleThree.style.height = temp1 + 'px';
      $circleThree.style.width = temp1 + 'px';
    }
  }

  function addFour() {
    if(heightTwo < 600) {
      heightFour = heightFour + 3;
      var temp = heightFour.toString();
      $blockFour.style.height = temp + 'px';
      circleDimFour = circleDimFour + 2;
      var temp1 = circleDimFour.toString();
      $circleFour.style.height = temp1 + 'px';
      $circleFour.style.width = temp1 + 'px';
    }
  }
}

window.onload = addListeners;
