var $blockOne = document.querySelector('#block-one');

function addListeners () {
  if(window.addEventListener) {
    $blockOne.addEventListener('click', drop, false);
  } else {
    console.log('RIP');
  }

  function drop () {

  }

}

window.onload = addListeners;
