var colors = [];
var $adjective = document.querySelector('#adjective');
for(var i = 0; i < 3; i++){
  colors[i] = Math.floor(Math.random() * 255);
}
document.body.style.backgroundColor = 'rgb(' + colors[0] + ',' + colors[1] + ',' + colors[2] + ')';
var num = 0;
for(var k = 0; k < colors.length; k++){
  if(colors[k] > colors[num]){
    num = k;
  }
}
if(num == 0){
  if(colors[1] < colors[2]){
    $adjective.textContent = "mad.";
  }else{
    $adjective.textContent = "happy.";
    num = 4;
  }
}else if(num == 1) {
  if(colors[1] > (colors[0] + colors[2])){
    $adjective.textContent = "jealous.";
    num = 3;
  }else{
    $adjective.textContent = "neutral.";
  }
}else if(num == 2){
  $adjective.textContent = "sad.";
}
function linkClicked() {
  if(num == 0){
    window.open('http://www.apa.org/topics/anger/control.aspx', '_blank');
  }else if(num == 1) {
    window.open('https://reddit.com', '_blank');
  }else if(num == 2){
    window.open('https://therapists.psychologytoday.com/rms/prof_results.php?city=San+Anselmo&spec=293', '_blank');
  }else if(num == 3){
    window.open('http://www.pathwaytohappiness.com/relationship_jealousy.html', '_blank');
  }else if(num == 4){
    window.open('https://www.buzzfeed.com/mjs538/things-that-will-make-you-sad', '_blank');
  }
}
