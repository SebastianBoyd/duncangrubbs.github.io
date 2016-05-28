var totalHeight;

var circleDimOne = Math.floor((Math.random() * 400) + 1);
var circleDimTwo = Math.floor((Math.random() * 400) + 1);
var circleDimThree = Math.floor((Math.random() * 400) + 1);
var circleDimFour = Math.floor((Math.random() * 400) + 1);

var heightOne = Math.floor((Math.random() * 600) + 1);
var heightTwo = Math.floor((Math.random() * 600) + 1);
var heightThree = Math.floor((Math.random() * 600) + 1);
var heightFour = Math.floor((Math.random() * 600) + 1);

function addListeners() {
  var $circleOne = document.querySelector('.circle-one');
  var $blockOne = document.querySelector('.block-one');
  var $circleTwo = document.querySelector('.circle-two');
  var $blockTwo = document.querySelector('.block-two');
  var $circleThree = document.querySelector('.circle-three');
  var $blockThree = document.querySelector('.block-three');
  var $circleFour = document.querySelector('.circle-four');
  var $blockFour = document.querySelector('.block-four');
  $circleOne.style.height = circleDimOne;
  $circleTwo.style.height = circleDimTwo;
  $circleThree.style.height = circleDimThree;
  $circleFour.style.height = circleDimFour;
  $circleOne.style.width = circleDimOne;
  $circleTwo.style.width = circleDimTwo;
  $circleThree.style.width = circleDimThree;
  $circleFour.style.width = circleDimFour;

  $blockOne.style.height = heightOne;
  $blockTwo.style.height = heightTwo;
  $blockThree.style.height = heightThree;
  $blockFour.style.height = heightFour;
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
    heightOne = heightOne - 8;
    var temp = heightOne.toString();
    $blockOne.style.height = temp + 'px';
    circleDimOne = circleDimOne - 5;
    var temp1 = circleDimOne.toString();
    $circleOne.style.height = temp1 + 'px';
    $circleOne.style.width = temp1 + 'px';
  }

  function shapesTwo() {
    heightTwo = heightTwo - 8;
    var temp = heightTwo.toString();
    $blockTwo.style.height = temp + 'px';
    circleDimTwo = circleDimTwo - 5;
    var temp1 = circleDimTwo.toString();
    $circleTwo.style.height = temp1 + 'px';
    $circleTwo.style.width = temp1 + 'px';
  }

  function shapesThree() {
    heightThree = heightThree - 8;
    var temp = heightThree.toString();
    $blockThree.style.height = temp + 'px';
    circleDimThree = circleDimThree - 5;
    var temp1 = circleDimThree.toString();
    $circleThree.style.height = temp1 + 'px';
    $circleThree.style.width = temp1 + 'px';
  }

  function shapesFour() {
    heightFour = heightFour - 8;
    var temp = heightFour.toString();
    $blockFour.style.height = temp + 'px';
    circleDimFour = circleDimFour - 5;
    var temp1 = circleDimFour.toString();
    $circleFour.style.height = temp1 + 'px';
    $circleFour.style.width = temp1 + 'px';
  }

  function addOne() {
    if(heightThree < 300) {
      heightOne = heightOne + 8;
      var temp = heightOne.toString();
      $blockOne.style.height = temp + 'px';
      if (circleDimOne <= 300) {
        circleDimOne = circleDimOne + 5;
        var temp1 = circleDimOne.toString();
        $circleOne.style.height = temp1 + 'px';
        $circleOne.style.width = temp1 + 'px';
      }
    }
  }

  function addTwo() {
    if(heightFour < 188) {
      heightTwo = heightTwo + 8;
      var temp = heightTwo.toString();
      $blockTwo.style.height = temp + 'px';
      if (circleDimTwo <= 300) {
        circleDimTwo = circleDimTwo + 5;
        var temp1 = circleDimTwo.toString();
        $circleTwo.style.height = temp1 + 'px';
        $circleTwo.style.width = temp1 + 'px';
      }
    }
  }

  function addThree() {
    if(heightOne < 267) {
      heightThree = heightThree + 8;
      var temp = heightThree.toString();
      $blockThree.style.height = temp + 'px';
      if (circleDimThree <= 300) {
        circleDimThree = circleDimThree + 5;
        var temp1 = circleDimThree.toString();
        $circleThree.style.height = temp1 + 'px';
        $circleThree.style.width = temp1 + 'px';
      }
    }
  }

  function addFour() {
    if(heightTwo < 238) {
      heightFour = heightFour + 8;
      var temp = heightFour.toString();
      $blockFour.style.height = temp + 'px';
      if (circleDimFour <= 300) {
        circleDimFour = circleDimFour + 5;
        var temp1 = circleDimFour.toString();
        $circleFour.style.height = temp1 + 'px';
        $circleFour.style.width = temp1 + 'px';
      }
    }
  }
}

window.onload = addListeners;
