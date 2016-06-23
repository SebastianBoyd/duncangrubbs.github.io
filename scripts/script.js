var $sideNav = document.querySelector('#nav');
var num = 0;
function drawer() {
  if (num%2 === 0) {
    nav.style.display = "flex";
  }else{
    nav.style.display = "none";
  }
  num++;
}
